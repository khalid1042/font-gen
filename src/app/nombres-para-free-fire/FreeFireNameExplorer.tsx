'use client';

import { useState, useEffect } from 'react';
import { stylesMap } from '../../utils/unicodeTransformer';
import styles from './page.module.css';

// Random Name Generation Dataset
const POWER_WORDS = [
  'Shadow', 'Ghost', 'Dark', 'Nova', 'Royal', 'King', 'Queen', 'Storm', 
  'Blaze', 'Wolf', 'Hunter', 'Phantom', 'Titan', 'Venom', 'Knight', 'Viper', 
  'Raptor', 'Nexus', 'Apex', 'Vortex', 'Slayer', 'Falcon', 'Hydra', 'Savage'
];

const STYLE_DECORATORS = [
  { prefix: '亗', suffix: '亗' },
  { prefix: '乂', suffix: '乂' },
  { prefix: '〆', suffix: '〆' },
  { prefix: 'メ', suffix: 'メ' },
  { prefix: '★', suffix: '★' },
  { prefix: '✦', suffix: '✦' },
  { prefix: '『', suffix: '』' },
  { prefix: '꧁ ', suffix: ' ꧂' },
  { prefix: '• ', suffix: ' •' },
];

const GENERATOR_CATEGORIES = [
  { id: 'pro', label: '🔥 Pro' },
  { id: 'royal', label: '👑 Royal' },
  { id: 'energy', label: '⚡ Energy' },
  { id: 'dark', label: '☠ Dark' },
  { id: 'aggressive', label: '😈 Aggressive' },
  { id: 'funny', label: '😂 Funny' },
  { id: 'stylish', label: '✨ Stylish' },
  { id: 'minimal', label: '🎯 Minimal' },
  { id: 'warrior', label: '🐺 Warrior' },
];

// Gaming Symbols Dataset
const GAMING_SYMBOLS = [
  {
    category: '👑 Coronas',
    symbols: ['♛', '♕', '👑', '♔', '⚜'],
  },
  {
    category: '⭐ Estrellas & Brillo',
    symbols: ['★', '☆', '✦', '✧', '✩', '✪', '✫', '✨', '🌟'],
  },
  {
    category: '➜ Flechas & Guías',
    symbols: ['➤', '➜', '➳', '➸', '➔', '➯', '➲'],
  },
  {
    category: '✝ Cruces & Símbolos',
    symbols: ['✝', '✞', '✟', '☦', '☩', '☯', '☸'],
  },
  {
    category: '🎮 Decorativos Gamer (FF)',
    symbols: ['乂', 'メ', '么', '〆', '亗', 'ツ', '『', '』', '꧁', '꧂'],
  },
  {
    category: '♡ Corazones',
    symbols: ['♡', '♥', '❥', 'ღ', '❣', '💓'],
  },
  {
    category: '◆ Formas Geométricas',
    symbols: ['◆', '◇', '■', '□', '●', '○', '▲', '▼', '❖', '◈'],
  },
];

// Duo Name Pairs Dataset
const DUO_PAIRS = [
  { p1: 'Moon', p2: 'Star', symbol: '♡' },
  { p1: 'Shadow', p2: 'Light', symbol: '×' },
  { p1: 'King', p2: 'Queen', symbol: '♛' },
  { p1: 'Fire', p2: 'Ice', symbol: '×' },
  { p1: 'Alpha', p2: 'Omega', symbol: '⚡' },
  { p1: 'Angel', p2: 'Demon', symbol: '✦' },
];

// Ready-to-copy Free Fire Names Data
const READY_NAMES = [
  {
    category: 'Nombres Pro para Free Fire',
    items: [
      { text: '亗Shadow亗', label: 'Pro 1' },
      { text: '乂DarkX乂', label: 'Pro 2' },
      { text: 'メNovaメ', label: 'Pro 3' },
      { text: '〆Raptor〆', label: 'Pro 4' },
      { text: '★Viper★', label: 'Pro 5' },
    ]
  },
  {
    category: 'Nombres Chidos & Creativos',
    items: [
      { text: '✦ 𝙽 𝚘 𝚟 𝚊 ✦', label: 'Aesthetic' },
      { text: '• S L A Y E R •', label: 'Minimal' },
      { text: '꧁ 𝒱ℯ𝓃ℴ𝓂 ꧂', label: 'Elegante' },
      { text: '⚡ ℱℛ𝒪𝒮𝒯 ⚡', label: 'Gamer' },
    ]
  },
  {
    category: 'Nombres para Chicas',
    items: [
      { text: '♡Luna♡', label: 'Chica 1' },
      { text: '✦Sofia✦', label: 'Chica 2' },
      { text: '亗Queen亗', label: 'Chica 3' },
      { text: '★Nova★', label: 'Chica 4' },
    ]
  },
  {
    category: 'Nombres para Chicos',
    items: [
      { text: '亗Rex亗', label: 'Chico 1' },
      { text: '乂Leo乂', label: 'Chico 2' },
      { text: '★Hunter★', label: 'Chico 3' },
      { text: '〆Alex〆', label: 'Chico 4' },
    ]
  }
];

export default function FreeFireNameExplorer() {
  // Mode 1: Custom Name State
  const [customName, setCustomName] = useState<string>('Khalid');

  // Mode 2: Random Generator State
  const [selectedGenCategory, setSelectedGenCategory] = useState<string>('pro');
  const [generatedRandomNames, setGeneratedRandomNames] = useState<string[]>([]);

  // Mode 3: Custom Decorator State
  const [decoratorInput, setDecoratorInput] = useState<string>('Shadow');
  const [decoratorTmplIdx, setDecoratorTmplIdx] = useState<number>(0);

  // Mode 4: Squad Generator State
  const [squadPrefix, setSquadPrefix] = useState<string>('亗NX亗');

  // Favorites & Recents State
  const [favorites, setFavorites] = useState<string[]>([]);
  const [recentNames, setRecentNames] = useState<string[]>([]);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // Load localStorage on client mount
  useEffect(() => {
    try {
      const favs = localStorage.getItem('ff_fav_names');
      if (favs) setFavorites(JSON.parse(favs));
      const recs = localStorage.getItem('ff_recent_names');
      if (recs) setRecentNames(JSON.parse(recs));
    } catch {
      // Ignore write errors
    }
    // Generate initial random names
    generateRandomBatch('pro');
  }, []);

  // Helper to generate random names based on category
  const generateRandomBatch = (category: string) => {
    const results: string[] = [];
    for (let i = 0; i < 6; i++) {
      const w1 = POWER_WORDS[Math.floor(Math.random() * POWER_WORDS.length)];
      const w2 = POWER_WORDS[Math.floor(Math.random() * POWER_WORDS.length)];
      const dec = STYLE_DECORATORS[Math.floor(Math.random() * STYLE_DECORATORS.length)];
      
      let base = `${w1}${w2 !== w1 ? w2 : 'X'}`;
      if (category === 'minimal') base = w1;
      if (category === 'funny') base = `Noob${w1}`;
      if (category === 'dark') base = `Dark${w1}`;

      const decorated = `${dec.prefix}${base}${dec.suffix}`;
      if (!results.includes(decorated)) {
        results.push(decorated);
      }
    }
    setGeneratedRandomNames(results);
  };

  const handleGenCategoryChange = (catId: string) => {
    setSelectedGenCategory(catId);
    generateRandomBatch(catId);
  };

  // Copy handler
  const handleCopy = (text: string, key: string) => {
    try {
      navigator.clipboard.writeText(text);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2000);

      // Add to recent names
      setRecentNames((prev) => {
        const updated = [text, ...prev.filter((n) => n !== text)].slice(0, 8);
        try {
          localStorage.setItem('ff_recent_names', JSON.stringify(updated));
        } catch {
          // Ignore
        }
        return updated;
      });
    } catch {
      alert('Copia este texto manualmente: ' + text);
    }
  };

  // Toggle Favorite
  const toggleFavorite = (name: string) => {
    setFavorites((prev) => {
      const isFav = prev.includes(name);
      const updated = isFav ? prev.filter((n) => n !== name) : [...prev, name];
      try {
        localStorage.setItem('ff_fav_names', JSON.stringify(updated));
      } catch {
        // Ignore
      }
      return updated;
    });
  };

  const currentCustom = customName.trim() || 'Khalid';
  const isTooLong = currentCustom.length > 12;

  return (
    <div className={styles.explorerContainer}>
      {/* Main Custom Name Generator */}
      <div id="generador-ff" className={styles.toolCard}>
        <div className={styles.toolHeader}>
          <h2 className={styles.toolTitle}>Generador de Nombres para Free Fire</h2>
          {customName && (
            <button
              type="button"
              className={styles.clearBtn}
              onClick={() => setCustomName('')}
            >
              Limpiar ✕
            </button>
          )}
        </div>

        {/* Input Field & Meta Information */}
        <div className={styles.inputGroup}>
          <label htmlFor="ff-custom-input" className={styles.inputLabel}>
            Escribe tu nombre o nickname:
          </label>
          <input
            id="ff-custom-input"
            type="text"
            className={styles.mainInput}
            value={customName}
            onChange={(e) => setCustomName(e.target.value)}
            placeholder="Escribe un nombre o nickname..."
            maxLength={40}
            aria-label="Escribe tu nombre para Free Fire"
          />
          <div className={styles.inputMetaRow}>
            <span className={styles.charCounter}>
              Caracteres: {customName.length}
            </span>
            {isTooLong && (
              <span className={styles.warningTag}>
                ⚠️ Este nombre puede ser largo para algunos campos del juego.
              </span>
            )}
          </div>
        </div>

        {/* Custom Styles Output Grid */}
        {customName === '' ? (
          <div className={styles.emptyStateBox}>
            <p className={styles.emptyStateTitle}>Escribe tu nombre arriba</p>
            <p className={styles.emptyStateSub}>Visualiza cómo luce tu nickname en múltiples alfabetos Unicode y estilos gamer.</p>
          </div>
        ) : (
          <div className={styles.resultsGrid}>
            {stylesMap.map((style) => {
              const transformed = style.transform(currentCustom);
              const decoratedName = `亗${transformed}亗`;
              const key = `custom-ff-${style.id}`;
              const isFav = favorites.includes(decoratedName);
              return (
                <div key={style.id} className={styles.resultCard}>
                  <div className={styles.resultHeader}>
                    <span className={styles.styleBadge}>{style.name}</span>
                    <button
                      type="button"
                      className={`${styles.favToggleBtn} ${isFav ? styles.isFav : ''}`}
                      onClick={() => toggleFavorite(decoratedName)}
                      aria-label={`Guardar ${decoratedName} en favoritos`}
                    >
                      {isFav ? '★' : '☆'}
                    </button>
                  </div>
                  <div className={styles.resultContent}>
                    <p className={styles.resultText}>{decoratedName}</p>
                  </div>
                  <button
                    type="button"
                    className={`${styles.copyBtn} ${copiedKey === key ? styles.copiedBtn : ''}`}
                    onClick={() => handleCopy(decoratedName, key)}
                  >
                    {copiedKey === key ? '¡Copiado!' : 'Copiar'}
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Random Name Generator Section */}
      <div id="nombres-aleatorios-ff" className={styles.sectionBlock}>
        <div className={styles.randomHeaderRow}>
          <div>
            <h2 className={styles.subSectionTitle}>Generar nombres aleatorios</h2>
            <p className={styles.subSectionDesc}>Elige un estilo y genera combinaciones gamer instantáneas:</p>
          </div>
          <button
            type="button"
            className={styles.generateBtn}
            onClick={() => generateRandomBatch(selectedGenCategory)}
          >
            🔄 Generar otros nombres
          </button>
        </div>

        {/* Category Selector Tabs */}
        <div className={styles.categoryTabs}>
          {GENERATOR_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`${styles.tabBtn} ${selectedGenCategory === cat.id ? styles.activeTab : ''}`}
              onClick={() => handleGenCategoryChange(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Random Results Grid */}
        <div className={styles.randomGrid}>
          {generatedRandomNames.map((name, idx) => {
            const key = `rand-ff-${idx}`;
            const isFav = favorites.includes(name);
            return (
              <div key={idx} className={styles.randomCard}>
                <div className={styles.randomCardTop}>
                  <p className={styles.randomNameText}>{name}</p>
                  <button
                    type="button"
                    className={`${styles.favToggleBtn} ${isFav ? styles.isFav : ''}`}
                    onClick={() => toggleFavorite(name)}
                    aria-label={`Guardar en favoritos`}
                  >
                    {isFav ? '★' : '☆'}
                  </button>
                </div>
                <button
                  type="button"
                  className={`${styles.copyBtn} ${copiedKey === key ? styles.copiedBtn : ''}`}
                  onClick={() => handleCopy(name, key)}
                >
                  {copiedKey === key ? '¡Copiado!' : 'Copiar'}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Dedicated Name Decorator */}
      <div className={styles.sectionBlock}>
        <h2 className={styles.subSectionTitle}>Decorador de Nombres</h2>
        <p className={styles.subSectionDesc}>Añade marcos gamer y símbolos de Free Fire alrededor de tu nombre:</p>

        <div className={styles.decoratorBox}>
          <div className={styles.decoratorInputsGrid}>
            <div className={styles.decoratorInputGroup}>
              <label htmlFor="ff-decorator-name" className={styles.decoratorLabel}>
                Tu nombre:
              </label>
              <input
                id="ff-decorator-name"
                type="text"
                className={styles.decoratorInput}
                value={decoratorInput}
                onChange={(e) => setDecoratorInput(e.target.value)}
                placeholder="Escribe un nombre..."
              />
            </div>
            <div className={styles.decoratorSelectGroup}>
              <span className={styles.decoratorLabel}>Elige un estilo de adorno:</span>
              <div className={styles.decoratorChipsGrid}>
                {STYLE_DECORATORS.map((dec, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`${styles.decoratorChip} ${decoratorTmplIdx === idx ? styles.activeDecoratorChip : ''}`}
                    onClick={() => setDecoratorTmplIdx(idx)}
                  >
                    {dec.prefix} Nombre {dec.suffix}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Decorator Output */}
          {(() => {
            const dec = STYLE_DECORATORS[decoratorTmplIdx];
            const decoratedResult = `${dec.prefix}${decoratorInput.trim() || 'Shadow'}${dec.suffix}`;
            const key = 'dec-output-combined';
            return (
              <div className={styles.decoratorOutputCard}>
                <span className={styles.decoratorOutputLabel}>Resultado decorado:</span>
                <p className={styles.decoratorOutputText}>{decoratedResult}</p>
                <button
                  type="button"
                  className={`${styles.copyBtn} ${copiedKey === key ? styles.copiedBtn : ''}`}
                  onClick={() => handleCopy(decoratedResult, key)}
                >
                  {copiedKey === key ? '¡Copiado!' : 'Copiar nombre decorado'}
                </button>
              </div>
            );
          })()}
        </div>
      </div>

      {/* Duo & Squad Name Generators */}
      <div className={styles.sectionBlock}>
        <h2 className={styles.subSectionTitle}>Nombres para Dúos y Escuadras</h2>
        <p className={styles.subSectionDesc}>Genera nombres coordinados para jugar en pareja o con tu equipo de clan:</p>

        <div className={styles.duoSquadGrid}>
          {/* Duo Card */}
          <div className={styles.duoCard}>
            <h3 className={styles.duoCardTitle}>Nombres para Dúos</h3>
            <div className={styles.duoList}>
              {DUO_PAIRS.map((pair, pIdx) => {
                const duoStr = `${pair.p1} ${pair.symbol} ${pair.p2}`;
                const key = `duo-${pIdx}`;
                return (
                  <div key={pIdx} className={styles.duoRow}>
                    <span className={styles.duoText}>{duoStr}</span>
                    <button
                      type="button"
                      className={`${styles.smallCopyBtn} ${copiedKey === key ? styles.copiedBtn : ''}`}
                      onClick={() => handleCopy(duoStr, key)}
                    >
                      {copiedKey === key ? '¡Copiado!' : 'Copiar pareja'}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Squad Card */}
          <div className={styles.squadCard}>
            <h3 className={styles.duoCardTitle}>Nombres para Escuadras</h3>
            <div className={styles.squadPrefixInputGroup}>
              <label htmlFor="squad-prefix-input" className={styles.squadLabel}>
                Prefijo del Clan / Escuadra:
              </label>
              <input
                id="squad-prefix-input"
                type="text"
                className={styles.squadInput}
                value={squadPrefix}
                onChange={(e) => setSquadPrefix(e.target.value)}
                placeholder="Ej. 亗NX亗"
              />
            </div>
            <div className={styles.squadList}>
              {['Alex', 'Shadow', 'Nova', 'Viper'].map((member, mIdx) => {
                const squadMemberName = `${squadPrefix.trim()} ${member}`;
                const key = `squad-${mIdx}`;
                return (
                  <div key={mIdx} className={styles.duoRow}>
                    <span className={styles.duoText}>{squadMemberName}</span>
                    <button
                      type="button"
                      className={`${styles.smallCopyBtn} ${copiedKey === key ? styles.copiedBtn : ''}`}
                      onClick={() => handleCopy(squadMemberName, key)}
                    >
                      {copiedKey === key ? '¡Copiado!' : 'Copiar'}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Gaming Symbols Library */}
      <div className={styles.sectionBlock}>
        <h2 className={styles.subSectionTitle}>Símbolos para nombres de Free Fire</h2>
        <p className={styles.subSectionDesc}>Símbolos especiales listos para copiar e incorporar en tu nickname:</p>

        <div className={styles.symbolsStack}>
          {GAMING_SYMBOLS.map((group, idx) => {
            const allSymbolsStr = group.symbols.join(' ');
            const groupKey = `sym-group-all-${idx}`;
            return (
              <div key={idx} className={styles.symbolGroupCard}>
                <div className={styles.symbolGroupHeader}>
                  <h3 className={styles.symbolGroupTitle}>{group.category}</h3>
                  <button
                    type="button"
                    className={`${styles.smallCopyBtn} ${copiedKey === groupKey ? styles.copiedBtn : ''}`}
                    onClick={() => handleCopy(allSymbolsStr, groupKey)}
                    style={{ maxWidth: '140px' }}
                  >
                    {copiedKey === groupKey ? '¡Copiados!' : 'Copiar todos'}
                  </button>
                </div>
                <div className={styles.symbolsChipRow}>
                  {group.symbols.map((sym, sIdx) => {
                    const key = `sym-${idx}-${sIdx}`;
                    return (
                      <button
                        key={sIdx}
                        type="button"
                        className={`${styles.symbolBtn} ${copiedKey === key ? styles.copiedBtn : ''}`}
                        onClick={() => handleCopy(sym, key)}
                        title={`Copiar ${sym}`}
                        aria-label={`Copiar símbolo ${sym}`}
                      >
                        {sym} {copiedKey === key ? '✓' : ''}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Favorites & Recently Copied Storage Section */}
      {(favorites.length > 0 || recentNames.length > 0) && (
        <div className={styles.sectionBlock}>
          {favorites.length > 0 && (
            <div className={styles.favBox}>
              <h3 className={styles.favBoxTitle}>Mis nombres favoritos ({favorites.length})</h3>
              <div className={styles.favList}>
                {favorites.map((fav, idx) => {
                  const key = `fav-name-${idx}`;
                  return (
                    <div key={idx} className={styles.favChip}>
                      <span>{fav}</span>
                      <button
                        type="button"
                        className={styles.favCopyBtn}
                        onClick={() => handleCopy(fav, key)}
                      >
                        {copiedKey === key ? '✓' : 'Copiar'}
                      </button>
                      <button
                        type="button"
                        className={styles.favRemoveBtn}
                        onClick={() => toggleFavorite(fav)}
                        title="Quitar"
                      >
                        ✕
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Ready-to-copy Names Collections */}
      <div className={styles.sectionBlock}>
        <h2 className={styles.subSectionTitle}>Nombres para Free Fire para copiar y pegar</h2>
        <p className={styles.subSectionDesc}>Selección de nicknames organizados por categoría:</p>

        <div className={styles.ideasStack}>
          {READY_NAMES.map((group, gIdx) => (
            <div key={gIdx} className={styles.ideaGroupBlock}>
              <h3 className={styles.ideaCatTitle}>{group.category}</h3>
              <div className={styles.ideasGrid}>
                {group.items.map((item, iIdx) => {
                  const key = `ready-${gIdx}-${iIdx}`;
                  return (
                    <div key={iIdx} className={styles.ideaCard}>
                      <span className={styles.ideaLabel}>{item.label}</span>
                      <p className={styles.ideaText}>{item.text}</p>
                      <button
                        type="button"
                        className={`${styles.copyBtn} ${copiedKey === key ? styles.copiedBtn : ''}`}
                        onClick={() => handleCopy(item.text, key)}
                      >
                        {copiedKey === key ? '¡Copiado!' : 'Copiar'}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
