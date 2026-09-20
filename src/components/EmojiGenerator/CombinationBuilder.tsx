"use client";

import React, { useState } from 'react';
import styles from './EmojiGenerator.module.css';

interface CombinationBuilderProps {
  combination: string;
  onClear: () => void;
}

export default function CombinationBuilder({ combination, onClear }: CombinationBuilderProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!combination) return;
    try {
      await navigator.clipboard.writeText(combination);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy combination:', err);
    }
  };

  return (
    <div className={styles.combinationArea}>
      <div className={styles.combinationDisplay}>
        {combination ? (
          <span>{combination}</span>
        ) : (
          <span className={styles.combinationPlaceholder}>
            Selecciona emojis para crear una combinación
          </span>
        )}
      </div>
      
      <div className={styles.combinationActions}>
        <button 
          className={`${styles.btn} ${styles.btnSecondary}`} 
          onClick={onClear}
          disabled={!combination}
          aria-label="Limpiar combinación"
        >
          Limpiar
        </button>
        <button 
          className={`${styles.btn} ${styles.btnPrimary} ${!combination ? styles.btnDisabled : ''}`} 
          onClick={handleCopy}
          disabled={!combination}
          aria-label="Copiar combinación"
        >
          {copied ? 'Copiado ✓' : 'Copiar combinación'}
        </button>
      </div>
    </div>
  );
}
