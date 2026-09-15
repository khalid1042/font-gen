'use client';

import { useState } from 'react';
import { stylesMap } from '../../../utils/unicodeTransformer';
import styles from './page.module.css';

const UPPERCASE_LETTERS = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
const LOWERCASE_LETTERS = Array.from('abcdefghijklmnopqrstuvwxyz');

const CURSIVE_STYLES = [
  { id: 'script', name: 'Cursiva Elegante' },
  { id: 'boldScript', name: 'Cursiva Negrita' },
  { id: 'italic', name: 'Cursiva Clásica' },
];

export default function AbecedarioExplorer() {
  const [selectedStyleId, setSelectedStyleId] = useState<string>('script');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [inputText, setInputText] = useState<string>('Amor');

  // Find current transformer
  const activeStyle = stylesMap.find(s => s.id === selectedStyleId) || stylesMap[3]; // fallback to script

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => {
      setCopiedKey(null);
    }, 2000);
  };

  const getTransformed = (char: string) => {
    return activeStyle.transform(char);
  };

  const fullUpperString = UPPERCASE_LETTERS.map(c => getTransformed(c)).join(' ');
  const fullLowerString = LOWERCASE_LETTERS.map(c => getTransformed(c)).join(' ');

  const scrollToLetter = (letter: string) => {
    const el = document.getElementById(`letter-${letter}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className={styles.explorerContainer}>
      {/* Quick Alphabet Nav */}
      <div className={styles.quickNavWrapper}>
        <span className={styles.quickNavLabel}>Ir a letra:</span>
        <div className={styles.quickNav}>
          {UPPERCASE_LETTERS.map(letter => (
            <button
              key={letter}
              type="button"
              className={styles.quickNavBtn}
              onClick={() => scrollToLetter(letter)}
              aria-label={`Ir a la letra ${letter}`}
            >
              {letter}
            </button>
          ))}
        </div>
      </div>

      {/* Style Selector */}
      <div className={styles.styleSelectorBox}>
        <span className={styles.styleSelectorLabel}>Estilo de abecedario:</span>
        <div className={styles.styleButtons}>
          {CURSIVE_STYLES.map(style => (
            <button
              key={style.id}
              type="button"
              className={`${styles.styleTabBtn} ${selectedStyleId === style.id ? styles.activeStyleTab : ''}`}
              onClick={() => setSelectedStyleId(style.id)}
            >
              {style.name}
            </button>
          ))}
        </div>
      </div>

      {/* Complete Alphabets Section */}
      <div className={styles.fullAlphabetsSection}>
        <div className={styles.fullAlphabetCard}>
          <h3>Abecedario Cursivo en Mayúsculas</h3>
          <p className={styles.fullAlphabetText}>{fullUpperString}</p>
          <button
            type="button"
            className={`${styles.copyBtn} ${copiedKey === 'full-upper' ? styles.copiedBtn : ''}`}
            onClick={() => handleCopy(fullUpperString, 'full-upper')}
          >
            {copiedKey === 'full-upper' ? '¡Copiado!' : 'Copiar abecedario'}
          </button>
        </div>

        <div className={styles.fullAlphabetCard}>
          <h3>Abecedario Cursivo en Minúsculas</h3>
          <p className={styles.fullAlphabetText}>{fullLowerString}</p>
          <button
            type="button"
            className={`${styles.copyBtn} ${copiedKey === 'full-lower' ? styles.copiedBtn : ''}`}
            onClick={() => handleCopy(fullLowerString, 'full-lower')}
          >
            {copiedKey === 'full-lower' ? '¡Copiado!' : 'Copiar abecedario'}
          </button>
        </div>
      </div>

      {/* Uppercase Cards Section */}
      <div className={styles.alphabetSection}>
        <h2 className={styles.subSectionTitle}>Abecedario Cursivo en Mayúsculas (A-Z)</h2>
        <div className={styles.letterGrid}>
          {UPPERCASE_LETTERS.map(letter => {
            const transformed = getTransformed(letter);
            const key = `upper-${letter}`;
            return (
              <div key={letter} id={`letter-${letter}`} className={styles.letterCard}>
                <span className={styles.baseLetter}>{letter}</span>
                <span className={styles.cursiveLetter}>{transformed}</span>
                <button
                  type="button"
                  className={`${styles.smallCopyBtn} ${copiedKey === key ? styles.copiedBtn : ''}`}
                  onClick={() => handleCopy(transformed, key)}
                  aria-label={`Copiar letra cursiva ${letter}`}
                >
                  {copiedKey === key ? '¡Copiado!' : 'Copiar'}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lowercase Cards Section */}
      <div className={styles.alphabetSection}>
        <h2 className={styles.subSectionTitle}>Abecedario Cursivo en Minúsculas (a-z)</h2>
        <div className={styles.letterGrid}>
          {LOWERCASE_LETTERS.map(letter => {
            const transformed = getTransformed(letter);
            const key = `lower-${letter}`;
            return (
              <div key={letter} className={styles.letterCard}>
                <span className={styles.baseLetter}>{letter}</span>
                <span className={styles.cursiveLetter}>{transformed}</span>
                <button
                  type="button"
                  className={`${styles.smallCopyBtn} ${copiedKey === key ? styles.copiedBtn : ''}`}
                  onClick={() => handleCopy(transformed, key)}
                  aria-label={`Copiar letra cursiva ${letter}`}
                >
                  {copiedKey === key ? '¡Copiado!' : 'Copiar'}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mini Word Generator Tool */}
      <div className={styles.miniGeneratorBox}>
        <h2 className={styles.miniGeneratorTitle}>Escribe una palabra en cursiva</h2>
        <p className={styles.miniGeneratorDesc}>Prueba cómo se ve cualquier palabra o nombre completo en abecedario cursivo:</p>
        <div className={styles.inputGroup}>
          <input
            type="text"
            className={styles.miniInput}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Escribe una palabra..."
            aria-label="Escribe una palabra para convertir a cursiva"
          />
        </div>

        <div className={styles.miniOutputGrid}>
          {CURSIVE_STYLES.map(style => {
            const styleObj = stylesMap.find(s => s.id === style.id);
            const result = styleObj ? styleObj.transform(inputText || 'Amor') : inputText;
            const key = `mini-${style.id}`;
            return (
              <div key={style.id} className={styles.miniOutputCard}>
                <span className={styles.miniStyleName}>{style.name}</span>
                <span className={styles.miniResultText}>{result}</span>
                <button
                  type="button"
                  className={`${styles.copyBtn} ${copiedKey === key ? styles.copiedBtn : ''}`}
                  onClick={() => handleCopy(result, key)}
                >
                  {copiedKey === key ? '¡Copiado!' : 'Copiar'}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
