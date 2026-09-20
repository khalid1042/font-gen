'use client';

import React, { useState, useMemo } from 'react';
import styles from './TextStyleGenerator.module.css';
import { textStyles } from '../../utils/textStyles';

export default function TextStyleGenerator() {
  const [inputText, setInputText] = useState('Letras Bonitas');
  const [selectedStyleId, setSelectedStyleId] = useState('twitter');
  const [copied, setCopied] = useState(false);

  // Get the currently selected style
  const selectedStyle = useMemo(() => {
    return textStyles.find((s) => s.id === selectedStyleId) || textStyles[0];
  }, [selectedStyleId]);

  // Compute the transformed text
  const transformedText = useMemo(() => {
    if (!inputText) return '';
    return selectedStyle.transform(inputText);
  }, [inputText, selectedStyle]);

  const handleCopy = () => {
    if (!transformedText) return;
    navigator.clipboard.writeText(transformedText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className={styles.container}>
      {/* Text Input Section */}
      <div className={styles.inputContainer}>
        <label htmlFor="style-text-input" className={styles.inputLabel}>
          Enter your text
        </label>
        <textarea
          id="style-text-input"
          className={styles.textInput}
          placeholder="Write something here..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          autoComplete="off"
        />
      </div>

      {/* Styles Selection Section */}
      <div className={styles.selectorContainer}>
        <div className={styles.inputLabel}>Styles</div>
        <div className={styles.scroller} role="tablist" aria-label="Text styles">
          {textStyles.map((style) => (
            <button
              key={style.id}
              role="tab"
              aria-selected={selectedStyleId === style.id}
              aria-controls="text-preview-panel"
              id={`style-tab-${style.id}`}
              className={`${styles.styleButton} ${selectedStyleId === style.id ? styles.active : ''}`}
              onClick={() => setSelectedStyleId(style.id)}
              aria-label={`Apply ${style.name} text style`}
            >
              {style.name} {selectedStyleId === style.id && '✓'}
            </button>
          ))}
        </div>
      </div>

      {/* Text Preview Section */}
      <div className={styles.previewContainer}>
        <div className={styles.inputLabel}>Preview</div>
        <div 
          id="text-preview-panel"
          role="tabpanel"
          aria-labelledby={`style-tab-${selectedStyleId}`}
          className={styles.previewBox}
        >
          {transformedText ? (
            <span>{transformedText}</span>
          ) : (
            <span className={styles.emptyText}>Your transformed text appears here</span>
          )}
        </div>
      </div>

      {/* Copy Action */}
      <button 
        className={`${styles.copyButton} ${copied ? styles.copied : ''}`} 
        onClick={handleCopy}
        disabled={!transformedText}
        aria-live="polite"
      >
        {copied ? '✓ Copied' : 'Copy Text'}
      </button>
    </div>
  );
}
