'use client';

import { useState } from 'react';
import styles from './StyleCard.module.css';

interface StyleCardProps {
  name: string;
  transformedText: string;
}

export default function StyleCard({ name, transformedText }: StyleCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(transformedText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text', err);
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.name}>{name}</h3>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>{transformedText}</p>
      </div>
      <button 
        className={`${styles.copyButton} ${copied ? styles.copied : ''}`}
        onClick={handleCopy}
        aria-label={`Copiar estilo ${name}`}
      >
        {copied ? (
          <>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            ¡Copiado!
          </>
        ) : (
          <>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
            Copiar
          </>
        )}
      </button>
    </div>
  );
}
