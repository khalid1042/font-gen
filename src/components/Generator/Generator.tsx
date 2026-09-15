'use client';

import { useState } from 'react';
import { stylesMap } from '../../utils/unicodeTransformer';
import StyleCard from '../StyleCard/StyleCard';
import styles from './Generator.module.css';

interface GeneratorProps {
  filterCategory?: string;
}

export default function Generator({ filterCategory }: GeneratorProps) {
  const [inputText, setInputText] = useState('Letras Cursivas');

  const displayedStyles = filterCategory 
    ? stylesMap.filter(style => style.category === filterCategory)
    : stylesMap;

  return (
    <div className={styles.generatorContainer}>
      <div className={styles.inputWrapper}>
        <label htmlFor="text-input" className="visually-hidden">
          Escribe tu texto aquí
        </label>
        <input
          id="text-input"
          type="text"
          className={styles.input}
          placeholder="Escribe tu texto aquí..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          autoComplete="off"
        />
        {inputText && (
          <button 
            className={styles.clearBtn}
            onClick={() => setInputText('')}
            aria-label="Borrar texto"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        )}
      </div>

      <div className={styles.resultsGrid}>
        {displayedStyles.map((style) => (
          <StyleCard
            key={style.id}
            name={style.name}
            transformedText={style.transform(inputText || 'Escribe tu texto')}
          />
        ))}
      </div>
    </div>
  );
}
