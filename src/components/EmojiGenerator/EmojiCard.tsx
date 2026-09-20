"use client";

import React, { useState } from 'react';
import styles from './EmojiGenerator.module.css';

interface EmojiCardProps {
  emoji: string;
  name: string;
  onClick?: (emoji: string) => void;
}

export default function EmojiCard({ emoji, name, onClick }: EmojiCardProps) {
  const [copied, setCopied] = useState(false);

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(emoji);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
      
      if (onClick) {
        onClick(emoji);
      }
    } catch (err) {
      console.error('Failed to copy emoji:', err);
    }
  };

  return (
    <button 
      className={styles.emojiCard} 
      onClick={handleClick}
      aria-label={`Copiar emoji ${name}`}
      title={name}
    >
      <span className={styles.emojiChar} aria-hidden="true">{emoji}</span>
      <span className={styles.emojiName}>{name}</span>
      
      {copied && (
        <div className={styles.copiedOverlay}>
          Copiado ✓
        </div>
      )}
    </button>
  );
}
