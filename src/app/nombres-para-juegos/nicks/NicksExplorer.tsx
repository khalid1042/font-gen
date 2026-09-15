'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { transformText } from '../../../utils/unicodeTransformer';
import styles from './page.module.css';

export interface NickItem {
  name: string;
  category: string;
  keywords: string[];
}

const FEATURED_NICKS: NickItem[] = [
  { name: '『Shadow』', category: 'Pro', keywords: ['shadow', 'sombra', 'pro'] },
  { name: '亗Blaze亗', category: 'Estilizados', keywords: ['blaze', 'fuego', 'simbolo'] },
  { name: '★Raptor★', category: 'Originales', keywords: ['raptor', 'original'] },
  { name: 'メGhostメ', category: 'Oscuros', keywords: ['ghost', 'fantasma', 'oscuro'] },
  { name: 'ZEN', category: 'Cortos', keywords: ['zen', 'corto'] },
  { name: 'VEX', category: 'Cortos', keywords: ['vex', 'corto'] },
  { name: 'NovaX', category: 'Originales', keywords: ['nova', 'original'] },
  { name: '✦Aura✦', category: 'Estilizados', keywords: ['aura', 'estilizado'] },
  { name: '乂Clutch乂', category: 'Pro', keywords: ['clutch', 'pro'] },
  { name: 'Rage', category: 'Simples', keywords: ['rage', 'simple'] },
  { name: '『Zero』', category: 'Pro', keywords: ['zero', 'pro'] },
  { name: 'KAI', category: 'Cortos', keywords: ['kai', 'corto'] },
];

const NICKS_DATASET: NickItem[] = [
  ...FEATURED_NICKS,
  // Cortos
  { name: 'NOX', category: 'Cortos', keywords: ['nox', 'corto'] },
  { name: 'AXE', category: 'Cortos', keywords: ['axe', 'corto'] },
  { name: 'REX', category: 'Cortos', keywords: ['rex', 'corto'] },
  { name: 'ZIN', category: 'Cortos', keywords: ['zin', 'corto'] },
  { name: 'NEO', category: 'Cortos', keywords: ['neo', 'corto'] },

  // Pro
  { name: 'AimPro', category: 'Pro', keywords: ['aim', 'pro'] },
  { name: 'Apex', category: 'Pro', keywords: ['apex', 'pro'] },
  { name: 'MVP_X', category: 'Pro', keywords: ['mvp', 'pro'] },
  { name: '『Prime』', category: 'Pro', keywords: ['prime', 'pro'] },

  // Originales
  { name: 'Vortexia', category: 'Originales', keywords: ['vortexia', 'original'] },
  { name: 'Kairo', category: 'Originales', keywords: ['kairo', 'original'] },
  { name: 'Riven', category: 'Originales', keywords: ['riven', 'original'] },
  { name: 'Zenix', category: 'Originales', keywords: ['zenix', 'original'] },

  // Oscuros
  { name: 'Grim', category: 'Oscuros', keywords: ['grim', 'oscuro'] },
  { name: 'DarkSoul', category: 'Oscuros', keywords: ['dark', 'soul', 'oscuro'] },
  { name: '☠Phantasm☠', category: 'Oscuros', keywords: ['phantasm', 'oscuro'] },
  { name: 'Void', category: 'Oscuros', keywords: ['void', 'oscuro'] },

  // Estilizados
  { name: '꧁Pulse꧂', category: 'Estilizados', keywords: ['pulse', 'simbolo'] },
  { name: '亗Vanguard亗', category: 'Estilizados', keywords: ['vanguard', 'simbolo'] },
  { name: '『Matrix』', category: 'Estilizados', keywords: ['matrix', 'simbolo'] },

  // Simples
  { name: 'Frost', category: 'Simples', keywords: ['frost', 'simple'] },
  { name: 'Solar', category: 'Simples', keywords: ['solar', 'simple'] },
  { name: 'Echo', category: 'Simples', keywords: ['echo', 'simple'] },
  { name: 'Byte', category: 'Simples', keywords: ['byte', 'simple'] },
];

const CATEGORY_FILTERS = [
  { id: 'all', label: 'Todos' },
  { id: 'favs', label: '♥ Favoritos' },
  { id: 'Cortos', label: 'Cortos' },
  { id: 'Pro', label: 'Pro' },
  { id: 'Originales', label: 'Originales' },
  { id: 'Oscuros', label: 'Oscuros' },
  { id: 'Estilizados', label: 'Estilizados' },
  { id: 'Simples', label: 'Simples' },
];

const RANDOM_NICK_PREFIXES = ['Shadow', 'Dark', 'Nova', 'Ghost', 'Cyber', 'Night', 'Storm', 'Royal', 'Alpha', 'Frost'];
const RANDOM_NICK_SUFFIXES = ['X', 'Pro', '7', '99', 'Z', 'Prime', 'Apex', 'Core'];

export default function NicksExplorer() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCat, setSelectedCat] = useState<string>('all');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // Local Storage State
  const [favorites, setFavorites] = useState<string[]>([]);
  const [recentNicks, setRecentNicks] = useState<string[]>([]);

  // Customizer State
  const [customInput, setCustomInput] = useState<string>('Shadow');
  const [randomGeneratedNick, setRandomGeneratedNick] = useState<string>('ShadowX');

  useEffect(() => {
    try {
      const savedFavs = localStorage.getItem('nicks_fav_list');
      if (savedFavs) setFavorites(JSON.parse(savedFavs));
      const savedRecents = localStorage.getItem('nicks_recent_list');
      if (savedRecents) setRecentNicks(JSON.parse(savedRecents));
    } catch {
      // Ignore
    }
  }, []);

  const handleCopy = (text: string, key: string) => {
    try {
      navigator.clipboard.writeText(text);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2000);

      setRecentNicks((prev) => {
        const updated = [text, ...prev.filter((n) => n !== text)].slice(0, 8);
        try {
          localStorage.setItem('nicks_recent_list', JSON.stringify(updated));
        } catch {
          // Ignore
        }
        return updated;
      });
    } catch {
      alert('Copia este nick manualmente: ' + text);
    }
  };

  const toggleFavorite = (nickText: string) => {
    setFavorites((prev) => {
      const isFav = prev.includes(nickText);
      const updated = isFav ? prev.filter((n) => n !== nickText) : [...prev, nickText];
      try {
        localStorage.setItem('nicks_fav_list', JSON.stringify(updated));
      } catch {
        // Ignore
      }
      return updated;
    });
  };

  const clearRecents = () => {
    setRecentNicks([]);
    try {
      localStorage.removeItem('nicks_recent_list');
    } catch {
      // Ignore
    }
  };

  const generateRandomNick = () => {
    const p = RANDOM_NICK_PREFIXES[Math.floor(Math.random() * RANDOM_NICK_PREFIXES.length)];
    const s = RANDOM_NICK_SUFFIXES[Math.floor(Math.random() * RANDOM_NICK_SUFFIXES.length)];
    setRandomGeneratedNick(`${p}${s}`);
  };

  // Filter Logic
  const normalizedSearch = searchTerm.toLowerCase().trim();

  const filteredNicks = NICKS_DATASET.filter((item) => {
    // Category Filter
    if (selectedCat === 'favs') {
      if (!favorites.includes(item.name)) return false;
    } else if (selectedCat !== 'all' && item.category !== selectedCat) {
      return false;
    }

    // Search Filter
    if (normalizedSearch) {
      const matchName = item.name.toLowerCase().includes(normalizedSearch);
      const matchCat = item.category.toLowerCase().includes(normalizedSearch);
      const matchKw = item.keywords.some((kw) => kw.includes(normalizedSearch));
      if (!matchName && !matchCat && !matchKw) return false;
    }

    return true;
  });

  const baseText = customInput.trim() || 'Shadow';

  return (
    <div className={styles.explorerContainer}>
      {/* Search & Main Filter Tool Card */}
      <div id="coleccion-nicks" className={styles.toolCard}>
        <div className={styles.toolHeader}>
          <h2 className={styles.toolTitle}>Buscador de Nicks para Juegos</h2>
          {searchTerm && (
            <button
              type="button"
              className={styles.clearBtn}
              onClick={() => setSearchTerm('')}
            >
              Limpiar búsqueda ✕
            </button>
          )}
        </div>

        {/* Live Search Input */}
        <div className={styles.searchGroup}>
          <label htmlFor="nicks-search-input" className={styles.searchLabel}>
            Buscar nicknames gamer:
          </label>
          <input
            id="nicks-search-input"
            type="text"
            className={styles.searchInput}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar nicks para juegos (ej. shadow, rage, zen, ghost, pro)..."
            aria-label="Buscar nicks para juegos por palabra clave"
          />
        </div>

        {/* Category Navigation Bar */}
        <div className={styles.categoryBar}>
          {CATEGORY_FILTERS.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`${styles.catTabBtn} ${selectedCat === cat.id ? styles.activeCatTab : ''}`}
              onClick={() => setSelectedCat(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Recently Copied Section */}
        {recentNicks.length > 0 && selectedCat === 'all' && !searchTerm && (
          <div className={styles.recentsBox}>
            <div className={styles.recentsHeader}>
              <span className={styles.recentsLabel}>Copiados recientemente:</span>
              <button type="button" className={styles.clearRecentsBtn} onClick={clearRecents}>
                Limpiar
              </button>
            </div>
            <div className={styles.recentsList}>
              {recentNicks.map((nick, idx) => {
                const key = `recent-nick-${idx}`;
                return (
                  <button
                    key={idx}
                    type="button"
                    className={`${styles.recentChip} ${copiedKey === key ? styles.copiedBtn : ''}`}
                    onClick={() => handleCopy(nick, key)}
                  >
                    {nick} {copiedKey === key ? '✓' : ''}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Nick Grid Results */}
        {filteredNicks.length === 0 ? (
          <div className={styles.noResultsBox}>
            <p className={styles.noResultsTitle}>No encontramos nicks con esa búsqueda.</p>
            <p className={styles.noResultsSub}>Intenta buscar términos como &quot;shadow&quot;, &quot;zen&quot; o &quot;ghost&quot;, o entra a nuestro generador principal de juegos.</p>
            <Link href="/nombres-para-juegos/" className={styles.ctaBtnInline}>
              Ir al generador principal →
            </Link>
          </div>
        ) : (
          <div className={styles.nameGrid}>
            {filteredNicks.map((item, idx) => {
              const key = `nick-item-${idx}`;
              const isFav = favorites.includes(item.name);
              return (
                <div key={idx} className={styles.nameCard}>
                  <div className={styles.nameCardTop}>
                    <span className={styles.nameCatBadge}>{item.category}</span>
                    <button
                      type="button"
                      className={`${styles.favToggleBtn} ${isFav ? styles.isFav : ''}`}
                      onClick={() => toggleFavorite(item.name)}
                      aria-label={`Guardar ${item.name} en favoritos`}
                    >
                      {isFav ? '♥' : '♡'}
                    </button>
                  </div>
                  <p className={styles.nameCardText}>{item.name}</p>
                  <div className={styles.nameCardActions}>
                    <button
                      type="button"
                      className={`${styles.copyBtn} ${copiedKey === key ? styles.copiedBtn : ''}`}
                      onClick={() => handleCopy(item.name, key)}
                      aria-label={`Copiar nick ${item.name}`}
                    >
                      {copiedKey === key ? '¡Copiado!' : 'Copiar'}
                    </button>
                    <Link
                      href="/nombres-para-juegos/"
                      className={styles.customizeLink}
                      title="Personalizar en el generador principal"
                    >
                      Personalizar ⚙️
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Featured Nicks Section */}
      <div className={styles.sectionBlock}>
        <h2 className={styles.subSectionTitle}>Nicks Gamer Destacados</h2>
        <p className={styles.subSectionDesc}>Selección de nicknames listos para copiar y usar en cualquier videojuego:</p>

        <div className={styles.featuredGrid}>
          {FEATURED_NICKS.slice(0, 8).map((item, idx) => {
            const key = `featured-nick-${idx}`;
            const isFav = favorites.includes(item.name);
            return (
              <div key={idx} className={styles.featuredCard}>
                <div className={styles.featuredTop}>
                  <span className={styles.featuredBadge}>Destacado</span>
                  <button
                    type="button"
                    className={`${styles.favToggleBtn} ${isFav ? styles.isFav : ''}`}
                    onClick={() => toggleFavorite(item.name)}
                  >
                    {isFav ? '♥' : '♡'}
                  </button>
                </div>
                <p className={styles.featuredText}>{item.name}</p>
                <button
                  type="button"
                  className={`${styles.copyBtn} ${copiedKey === key ? styles.copiedBtn : ''}`}
                  onClick={() => handleCopy(item.name, key)}
                >
                  {copiedKey === key ? '¡Copiado!' : 'Copiar'}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightweight Random Nick Generator */}
      <div className={styles.sectionBlock}>
        <div className={styles.randomBox}>
          <div className={styles.randomHeader}>
            <h2 className={styles.subSectionTitle}>Generar nick aleatorio</h2>
            <button
              type="button"
              className={styles.randomBtn}
              onClick={generateRandomNick}
            >
              🎲 Generar nick
            </button>
          </div>

          <div className={styles.randomOutputCard}>
            <span className={styles.randomOutputLabel}>Nick generado:</span>
            <p className={styles.randomOutputText}>{randomGeneratedNick}</p>
            <div className={styles.randomActionsRow}>
              <button
                type="button"
                className={`${styles.copyBtn} ${copiedKey === 'rand-nick-out' ? styles.copiedBtn : ''}`}
                onClick={() => handleCopy(randomGeneratedNick, 'rand-nick-out')}
                style={{ maxWidth: '200px' }}
              >
                {copiedKey === 'rand-nick-out' ? '¡Copiado!' : 'Copiar'}
              </button>
              <Link href="/nombres-para-juegos/" className={styles.customizeLinkInline}>
                Personalizar este nick →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Lightweight Customizer & Decorator */}
      <div className={styles.sectionBlock}>
        <h2 className={styles.subSectionTitle}>Personalizador Rápido de Nicks</h2>
        <p className={styles.subSectionDesc}>Escribe tu palabra clave y pruébala con alfabetos y marcos de símbolos:</p>

        <div className={styles.decoratorBox}>
          <div className={styles.decoratorInputGroup}>
            <label htmlFor="nick-customizer-input" className={styles.decoratorLabel}>
              Escribe un nick:
            </label>
            <input
              id="nick-customizer-input"
              type="text"
              className={styles.decoratorInput}
              value={customInput}
              onChange={(e) => setCustomInput(e.target.value)}
              placeholder="Escribe tu nickname..."
            />
          </div>

          <div className={styles.decoratorVariantsGrid}>
            {[
              transformText(baseText, 'boldFraktur'),
              transformText(baseText, 'bold'),
              transformText(baseText, 'doubleStruck'),
              `꧁ ${baseText} ꧂`,
              `『 ${baseText} 』`,
              `亗 ${baseText} 亗`,
              `乂 ${baseText} 乂`,
              `★ ${baseText} ★`,
            ].map((decResult, dIdx) => {
              const key = `dec-nick-${dIdx}`;
              return (
                <div key={dIdx} className={styles.decoratorVariantCard}>
                  <p className={styles.decoratorVariantText}>{decResult}</p>
                  <button
                    type="button"
                    className={`${styles.smallCopyBtn} ${copiedKey === key ? styles.copiedBtn : ''}`}
                    onClick={() => handleCopy(decResult, key)}
                  >
                    {copiedKey === key ? '¡Copiado!' : 'Copiar'}
                  </button>
                </div>
              );
            })}
          </div>

          <div className={styles.decoratorFooterRow}>
            <Link href="/nombres-para-juegos/" className={styles.moreGenLink}>
              Ver más opciones en el generador principal de juegos →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
