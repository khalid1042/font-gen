"use client";

import React, { useState, useMemo, useEffect } from 'react';
import { emojis, EmojiData } from '../../data/emojis';
import { emojiCategories, platformCategoryPriorities } from '../../data/emojiCategories';
import EmojiGrid from './EmojiGrid';
import CombinationBuilder from './CombinationBuilder';
import styles from './EmojiGenerator.module.css';

interface EmojiGeneratorProps {
  platform?: string;
}

export default function EmojiGenerator({ platform }: EmojiGeneratorProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [combination, setCombination] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Determine the order of categories based on platform
  const categoriesToDisplay = useMemo(() => {
    let sortedCategories: string[] = [...emojiCategories];
    
    if (platform && platformCategoryPriorities[platform]) {
      const priorityCats = platformCategoryPriorities[platform];
      // Put priority categories first, then the rest
      const others = sortedCategories.filter(cat => !priorityCats.includes(cat));
      sortedCategories = [...priorityCats, ...others];
    }
    
    return ['Todos', ...sortedCategories];
  }, [platform]);

  // Filter emojis based on search and category
  const filteredEmojis = useMemo(() => {
    return emojis.filter((item: EmojiData) => {
      const matchesCategory = selectedCategory === 'Todos' || item.category === selectedCategory;
      
      const searchLower = searchTerm.toLowerCase().trim();
      const matchesSearch = searchLower === '' || 
        item.name.toLowerCase().includes(searchLower) ||
        item.keywords.some(kw => kw.toLowerCase().includes(searchLower));
        
      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  const handleEmojiClick = (emoji: string) => {
    setCombination(prev => prev + emoji);
  };

  const handleClearCombination = () => {
    setCombination('');
  };

  // Prevent hydration mismatch for anything relying on localStorage (if added later) or platform specifics
  if (!mounted) return null;

  return (
    <div className={styles.container}>
      <div className={styles.searchContainer}>
        <span className={styles.searchIcon} aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </span>
        <input 
          type="text"
          className={styles.searchInput}
          placeholder="Buscar emojis (ej. amor, fuego, estrella)..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label="Buscar emojis"
        />
      </div>

      <div className={styles.categoriesWrapper}>
        {categoriesToDisplay.map(category => (
          <button
            key={category}
            className={`${styles.categoryBtn} ${selectedCategory === category ? styles.active : ''}`}
            onClick={() => {
              setSelectedCategory(category);
              setSearchTerm(''); // Clear search when changing category for better UX
            }}
          >
            {category}
          </button>
        ))}
      </div>

      <CombinationBuilder 
        combination={combination} 
        onClear={handleClearCombination} 
      />

      <EmojiGrid 
        emojis={filteredEmojis} 
        onEmojiClick={handleEmojiClick} 
      />
    </div>
  );
}
