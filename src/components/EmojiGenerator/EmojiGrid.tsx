"use client";

import React from 'react';
import { EmojiData } from '../../data/emojis';
import EmojiCard from './EmojiCard';
import styles from './EmojiGenerator.module.css';

interface EmojiGridProps {
  emojis: EmojiData[];
  onEmojiClick: (emoji: string) => void;
}

export default function EmojiGrid({ emojis, onEmojiClick }: EmojiGridProps) {
  if (emojis.length === 0) {
    return (
      <div className={styles.emptyState}>
        <span className={styles.emptyStateIcon}>🔍</span>
        <p>No encontramos emojis para tu búsqueda.</p>
        <p>Prueba con "amor", "fuego" o "estrella".</p>
      </div>
    );
  }

  return (
    <div className={styles.emojiGrid}>
      {emojis.map((item, index) => (
        <EmojiCard 
          key={`${item.emoji}-${index}`}
          emoji={item.emoji}
          name={item.name}
          onClick={onEmojiClick}
        />
      ))}
    </div>
  );
}
