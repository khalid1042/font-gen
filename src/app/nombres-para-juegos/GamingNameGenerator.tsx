'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { transformText, stylesMap } from '../../utils/unicodeTransformer';
import styles from './page.module.css';

export interface GamingNameItem {
  name: string;
  category: string;
  keywords: string[];
}

const FEATURED_GAMING_NAMES: GamingNameItem[] = [
  { name: '亗Shadow亗', category: 'Gamer', keywords: ['shadow', 'sombra', 'gamer'] },
  { name: '꧁༺NightWolf༻꧂', category: 'Oscuros', keywords: ['night', 'wolf', 'oscuridad'] },
  { name: '『DarkSoul』', category: 'Oscuros', keywords: ['dark', 'soul', 'alma'] },
  { name: '乂Ghost乂', category: 'Pro', keywords: ['ghost', 'fantasma', 'pro'] },
  { name: 'NovaX', category: 'Cool', keywords: ['nova', 'cool', 'original'] },
  { name: '★Vortex★', category: 'Original', keywords: ['vortex', 'original'] },
  { name: 'メCyberKingメ', category: 'Competitive', keywords: ['cyber', 'king', 'competitivo'] },
  { name: '✦AestheticPro✦', category: 'Aesthetic', keywords: ['aesthetic', 'pro'] },
  { name: '『IronWarrior』', category: 'Warrior', keywords: ['iron', 'warrior', 'guerrero'] },
  { name: 'ツLagMasterツ', category: 'Funny', keywords: ['lag', 'master', 'divertido'] },
  { name: '亗ApexPrime亗', category: 'Powerful', keywords: ['apex', 'prime', 'poderoso'] },
  { name: 'ZEN', category: 'Short', keywords: ['zen', 'corto'] },
];

const GAMING_NAME_DATASET: GamingNameItem[] = [
  ...FEATURED_GAMING_NAMES,
  // Gamer
  { name: 'PixelHero', category: 'Gamer', keywords: ['pixel', 'hero', 'gamer'] },
  { name: 'GameChanger', category: 'Gamer', keywords: ['game', 'changer', 'gamer'] },
  { name: 'ConsoleKing', category: 'Gamer', keywords: ['console', 'king', 'gamer'] },
  { name: '亗ByteLord亗', category: 'Gamer', keywords: ['byte', 'lord', 'gamer'] },

  // Pro
  { name: 'EliteAim', category: 'Pro', keywords: ['elite', 'aim', 'pro'] },
  { name: 'ClutchGod', category: 'Pro', keywords: ['clutch', 'god', 'pro'] },
  { name: 'MVP_X', category: 'Pro', keywords: ['mvp', 'pro'] },
  { name: '乂ZeroDelay乂', category: 'Pro', keywords: ['zero', 'delay', 'pro'] },

  // Cool
  { name: 'BlazeX', category: 'Cool', keywords: ['blaze', 'cool'] },
  { name: 'FrostByte', category: 'Cool', keywords: ['frost', 'byte', 'cool'] },
  { name: 'NeonRider', category: 'Cool', keywords: ['neon', 'rider', 'cool'] },
  { name: '『StormRider』', category: 'Cool', keywords: ['storm', 'rider', 'cool'] },

  // Original
  { name: 'Zenix', category: 'Original', keywords: ['zenix', 'original'] },
  { name: 'Kairo', category: 'Original', keywords: ['kairo', 'original'] },
  { name: 'Vortexia', category: 'Original', keywords: ['vortexia', 'original'] },
  { name: '✦LunarPulse✦', category: 'Original', keywords: ['lunar', 'pulse', 'original'] },

  // Dark
  { name: 'PhantomReaper', category: 'Dark', keywords: ['phantom', 'reaper', 'oscuro'] },
  { name: 'BlackVoid', category: 'Dark', keywords: ['black', 'void', 'oscuro'] },
  { name: '☠GrimShade☠', category: 'Dark', keywords: ['grim', 'shade', 'oscuro'] },

  // Warrior
  { name: 'WarLord', category: 'Warrior', keywords: ['warlord', 'guerrero'] },
  { name: 'SamuraiX', category: 'Warrior', keywords: ['samurai', 'guerrero'] },
  { name: 'ShadowKnight', category: 'Warrior', keywords: ['knight', 'caballero'] },

  // Funny
  { name: 'NoobMaster', category: 'Funny', keywords: ['noob', 'master', 'divertido'] },
  { name: 'PanConPing', category: 'Funny', keywords: ['pan', 'ping', 'divertido'] },
  { name: 'BotConSuerte', category: 'Funny', keywords: ['bot', 'suerte', 'divertido'] },

  // Stylish
  { name: 'RoyalVelvet', category: 'Stylish', keywords: ['royal', 'velvet', 'elegante'] },
  { name: 'PrestigeX', category: 'Stylish', keywords: ['prestige', 'elegante'] },

  // Short
  { name: 'VEX', category: 'Short', keywords: ['vex', 'corto'] },
  { name: 'NOX', category: 'Short', keywords: ['nox', 'corto'] },
  { name: 'AXE', category: 'Short', keywords: ['axe', 'corto'] },
  { name: 'KAI', category: 'Short', keywords: ['kai', 'corto'] },
];

const CATEGORY_FILTERS = [
  { id: 'all', label: 'Todos' },
  { id: 'favs', label: '♥ Favoritos' },
  { id: 'Gamer', label: 'Gamer' },
  { id: 'Pro', label: 'Pro' },
  { id: 'Cool', label: 'Cool / Chidos' },
  { id: 'Original', label: 'Originales' },
  { id: 'Dark', label: 'Oscuros' },
  { id: 'Warrior', label: 'Guerreros' },
  { id: 'Funny', label: 'Divertidos' },
  { id: 'Stylish', label: 'Elegantes' },
  { id: 'Aesthetic', label: 'Aesthetic' },
  { id: 'Competitive', label: 'Competitivos' },
  { id: 'Short', label: 'Cortos' },
];

const STYLE_OPTIONS = [
  { id: 'bold', label: 'Negrita' },
  { id: 'italic', label: 'Cursiva' },
  { id: 'boldItalic', label: 'Negrita Cursiva' },
  { id: 'script', label: 'Manuscrita' },
  { id: 'boldFraktur', label: 'Gótica Bold' },
  { id: 'doubleStruck', label: 'Doble Trazo' },
  { id: 'monospace', label: 'Monoespaciado' },
  { id: 'smallCaps', label: 'Mayúsculas Pequeñas' },
  { id: 'circled', label: 'Circulado' },
  { id: 'bubble', label: 'Burbuja' },
];

const DUO_GAMING_NAMES = [
  { p1: 'Shadow', p2: 'Nova' },
  { p1: 'Dark', p2: 'Light' },
  { p1: 'Fire', p2: 'Ice' },
  { p1: 'King', p2: 'Queen' },
  { p1: 'Ghost', p2: 'Hunter' },
];

const SQUAD_GAMING_NAMES = [
  { squadName: 'Shadow Squad', members: ['Shadow', 'Ghost', 'Reaper', 'Knight'] },
  { squadName: 'Nova Team', members: ['Nova', 'Vortex', 'Pulse', 'Blaze'] },
  { squadName: 'Dark Force', members: ['Dark', 'Night', 'Black', 'Void'] },
  { squadName: 'Elite Crew', members: ['Elite', 'Apex', 'Clutch', 'Prime'] },
];

const GAME_CARDS = [
  { name: 'Free Fire', icon: '🔥', url: '/nombres-para-free-fire/', isInternal: true },
  { name: 'Fortnite', icon: '⚡', url: '#', isInternal: false },
  { name: 'PUBG Mobile', icon: '🎯', url: '#', isInternal: false },
  { name: 'Roblox', icon: '🧱', url: '#', isInternal: false },
  { name: 'Minecraft', icon: '⛏️', url: '#', isInternal: false },
  { name: 'Call of Duty', icon: '💥', url: '#', isInternal: false },
  { name: 'Valorant', icon: '🏹', url: '#', isInternal: false },
  { name: 'League of Legends', icon: '⚔️', url: '#', isInternal: false },
  { name: 'Otros Juegos', icon: '🎮', url: '#', isInternal: false },
];

const RANDOM_FIRST_WORDS = ['Shadow', 'Dark', 'Nova', 'Ghost', 'Cyber', 'Night', 'Storm', 'Royal', 'Alpha', 'Titan', 'Lunar', 'Venom', 'Frost', 'Fire', 'Zero'];
const RANDOM_SECOND_WORDS = ['Wolf', 'Hunter', 'Force', 'King', 'Warrior', 'Legend', 'Rider', 'Knight', 'Ghost', 'Titan', 'Master', 'X'];

export default function GamingNameGenerator() {
  // Mode selection: 'personalizar' | 'aleatorio'
  const [activeMode, setActiveMode] = useState<'personalizar' | 'aleatorio'>('personalizar');

  // Input & Customization State
  const [customInput, setCustomInput] = useState<string>('Shadow');
  const [selectedStyleKey, setSelectedStyleKey] = useState<string>('boldFraktur');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // Search & Filter State
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCat, setSelectedCat] = useState<string>('all');

  // Favorites & Recents Local Storage
  const [favorites, setFavorites] = useState<string[]>([]);
  const [recentNames, setRecentNames] = useState<string[]>([]);

  // Random Generator Output
  const [randomIdea, setRandomIdea] = useState<string>('Shadow Wolf');

  useEffect(() => {
    try {
      const savedFavs = localStorage.getItem('gaming_fav_names');
      if (savedFavs) setFavorites(JSON.parse(savedFavs));
      const savedRecents = localStorage.getItem('gaming_recent_names');
      if (savedRecents) setRecentNames(JSON.parse(savedRecents));
    } catch {
      // Ignore
    }
  }, []);

  const handleCopy = (text: string, key: string) => {
    try {
      navigator.clipboard.writeText(text);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2000);

      // Save to recent
      setRecentNames((prev) => {
        const updated = [text, ...prev.filter((n) => n !== text)].slice(0, 8);
        try {
          localStorage.setItem('gaming_recent_names', JSON.stringify(updated));
        } catch {
          // Ignore
        }
        return updated;
      });
    } catch {
      alert('Copia este nombre manualmente: ' + text);
    }
  };

  const toggleFavorite = (nameText: string) => {
    setFavorites((prev) => {
      const isFav = prev.includes(nameText);
      const updated = isFav ? prev.filter((n) => n !== nameText) : [...prev, nameText];
      try {
        localStorage.setItem('gaming_fav_names', JSON.stringify(updated));
      } catch {
        // Ignore
      }
      return updated;
    });
  };

  const clearRecents = () => {
    setRecentNames([]);
    try {
      localStorage.removeItem('gaming_recent_names');
    } catch {
      // Ignore
    }
  };

  const generateRandomName = () => {
    const w1 = RANDOM_FIRST_WORDS[Math.floor(Math.random() * RANDOM_FIRST_WORDS.length)];
    const w2 = RANDOM_SECOND_WORDS[Math.floor(Math.random() * RANDOM_SECOND_WORDS.length)];
    setRandomIdea(`${w1} ${w2}`);
  };

  // Filter Logic
  const normalizedSearch = searchTerm.toLowerCase().trim();

  const filteredNames = GAMING_NAME_DATASET.filter((item) => {
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

  const baseInputText = customInput.trim() || 'Shadow';
  const transformedInputText = transformText(baseInputText, selectedStyleKey);

  return (
    <div className={styles.explorerContainer}>
      {/* Main Interactive Generator Component */}
      <div id="generador-principal" className={styles.toolCard}>
        <div className={styles.modeToggleRow}>
          <button
            type="button"
            className={`${styles.modeBtn} ${activeMode === 'personalizar' ? styles.activeModeBtn : ''}`}
            onClick={() => setActiveMode('personalizar')}
          >
            ✏️ Modo 1 — Personalizar
          </button>
          <button
            type="button"
            className={`${styles.modeBtn} ${activeMode === 'aleatorio' ? styles.activeModeBtn : ''}`}
            onClick={() => setActiveMode('aleatorio')}
          >
            🎲 Modo 2 — Generar Aleatoriamente
          </button>
        </div>

        {activeMode === 'personalizar' ? (
          <div className={styles.personalizeSection}>
            <div className={styles.inputGroupBlock}>
              <label htmlFor="gaming-custom-input" className={styles.inputLabel}>
                Escribe tu nombre:
              </label>
              <input
                id="gaming-custom-input"
                type="text"
                className={styles.mainInput}
                value={customInput}
                onChange={(e) => setCustomInput(e.target.value)}
                placeholder="Escribe un nombre, palabra o nickname..."
              />
            </div>

            {/* Style Selector Chips */}
            <div className={styles.styleSelectorBox}>
              <span className={styles.selectorLabel}>Elige un estilo Unicode:</span>
              <div className={styles.styleChipsGrid}>
                {STYLE_OPTIONS.map((st) => (
                  <button
                    key={st.id}
                    type="button"
                    className={`${styles.styleChip} ${selectedStyleKey === st.id ? styles.activeStyleChip : ''}`}
                    onClick={() => setSelectedStyleKey(st.id)}
                  >
                    {st.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Live Stylized Preview Box */}
            <div className={styles.previewBox}>
              <span className={styles.previewLabel}>Resultado en estilo seleccionado:</span>
              <p className={styles.previewText}>{transformedInputText}</p>
              <button
                type="button"
                className={`${styles.copyBtn} ${copiedKey === 'custom-main' ? styles.copiedBtn : ''}`}
                onClick={() => handleCopy(transformedInputText, 'custom-main')}
                aria-label="Copiar texto transformado"
              >
                {copiedKey === 'custom-main' ? '¡Copiado!' : 'Copiar'}
              </button>
            </div>

            {/* Symbol Decorator Variants Grid */}
            <div className={styles.decoratorBlock}>
              <h3 className={styles.decoratorTitle}>Adornos y marcos con símbolos</h3>
              <div className={styles.decoratorVariantsGrid}>
                {[
                  `꧁ ${baseInputText} ꧂`,
                  `亗 ${baseInputText} 亗`,
                  `『 ${baseInputText} 』`,
                  `乂 ${baseInputText} 乂`,
                  `★ ${baseInputText} ★`,
                  `✦ ${baseInputText} ✦`,
                  `メ ${baseInputText} メ`,
                  `☠ ${baseInputText} ☠`,
                ].map((decResult, dIdx) => {
                  const key = `dec-gaming-${dIdx}`;
                  return (
                    <div key={dIdx} className={styles.decoratorCard}>
                      <p className={styles.decoratorCardText}>{decResult}</p>
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
            </div>
          </div>
        ) : (
          <div className={styles.randomSection}>
            <div className={styles.randomHeader}>
              <div>
                <h3 className={styles.decoratorTitle}>Generador aleatorio de ideas para juegos</h3>
                <p className={styles.subSectionDesc}>Combina palabras clave para descubrir nuevas ideas de nombres gamer:</p>
              </div>
              <button
                type="button"
                className={styles.randomGenerateBtn}
                onClick={generateRandomName}
              >
                🎲 Generar una idea de nombre
              </button>
            </div>

            <div className={styles.randomOutputCard}>
              <span className={styles.randomOutputLabel}>Idea sugerida:</span>
              <p className={styles.randomOutputText}>{randomIdea}</p>
              <div className={styles.randomActionsRow}>
                <button
                  type="button"
                  className={`${styles.copyBtn} ${copiedKey === 'rand-main' ? styles.copiedBtn : ''}`}
                  onClick={() => handleCopy(randomIdea, 'rand-main')}
                  style={{ maxWidth: '220px' }}
                >
                  {copiedKey === 'rand-main' ? '¡Copiado!' : 'Copiar nombre'}
                </button>
                <button
                  type="button"
                  className={styles.secondaryActionBtn}
                  onClick={() => {
                    setCustomInput(randomIdea);
                    setActiveMode('personalizar');
                  }}
                >
                  Personalizar esta idea ⚙️
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Client-Side Search & Ready-to-Copy Library */}
      <div className={styles.toolCard}>
        <div className={styles.toolHeader}>
          <h2 className={styles.toolTitle}>Nombres para Juegos para Copiar</h2>
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

        {/* Search Input */}
        <div className={styles.searchGroup}>
          <label htmlFor="gaming-search-input" className={styles.searchLabel}>
            Buscar nombres para juegos:
          </label>
          <input
            id="gaming-search-input"
            type="text"
            className={styles.searchInput}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar nombres para juegos (ej. shadow, wolf, dark, pro, short)..."
            aria-label="Buscar nombres para juegos por palabra clave"
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
        {recentNames.length > 0 && selectedCat === 'all' && !searchTerm && (
          <div className={styles.recentsBox}>
            <div className={styles.recentsHeader}>
              <span className={styles.recentsLabel}>Copiados recientemente:</span>
              <button type="button" className={styles.clearRecentsBtn} onClick={clearRecents}>
                Limpiar
              </button>
            </div>
            <div className={styles.recentsList}>
              {recentNames.map((name, idx) => {
                const key = `recent-gaming-${idx}`;
                return (
                  <button
                    key={idx}
                    type="button"
                    className={`${styles.recentChip} ${copiedKey === key ? styles.copiedBtn : ''}`}
                    onClick={() => handleCopy(name, key)}
                  >
                    {name} {copiedKey === key ? '✓' : ''}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Name Grid Results */}
        {filteredNames.length === 0 ? (
          <div className={styles.noResultsBox}>
            <p className={styles.noResultsTitle}>No encontramos nombres con esa búsqueda.</p>
            <p className={styles.noResultsSub}>Intenta buscar términos como &quot;shadow&quot;, &quot;dark&quot; o &quot;king&quot;, o genera un nombre en nuestro generador personalizado.</p>
          </div>
        ) : (
          <div className={styles.nameGrid}>
            {filteredNames.map((item, idx) => {
              const key = `gaming-item-${idx}`;
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
                      aria-label={`Copiar nombre ${item.name}`}
                    >
                      {copiedKey === key ? '¡Copiado!' : 'Copiar'}
                    </button>
                    <button
                      type="button"
                      className={styles.customizeLinkBtn}
                      onClick={() => {
                        setCustomInput(item.name);
                        setActiveMode('personalizar');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                    >
                      Personalizar ⚙️
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Game Context Section */}
      <div className={styles.sectionBlock}>
        <h2 className={styles.subSectionTitle}>Nombres para diferentes juegos</h2>
        <p className={styles.subSectionDesc}>Explora sugerencias e ideas de nombres para tus videojuegos favoritos:</p>

        <div className={styles.gameCardsGrid}>
          {GAME_CARDS.map((game, gIdx) => (
            <div key={gIdx} className={styles.gameCard}>
              <span className={styles.gameIcon}>{game.icon}</span>
              <h3 className={styles.gameTitle}>{game.name}</h3>
              <p className={styles.gameDesc}>
                Crea una idea de nombre y comprueba las reglas de nombres de tu juego antes de usarla.
              </p>
              {game.isInternal ? (
                <Link href={game.url} className={styles.gameCardLink}>
                  Ver nombres para {game.name} →
                </Link>
              ) : (
                <a href="#generador-principal" className={styles.gameCardLink}>
                  Generar nombre →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Duos & Squads Section */}
      <div className={styles.sectionBlock}>
        <h2 className={styles.subSectionTitle}>Nombres para Dúos y Escuadras</h2>
        <p className={styles.subSectionDesc}>Combinaciones de nombres para jugar en pareja o en equipo:</p>

        <div className={styles.duoSquadGrid}>
          {/* Duos */}
          <div className={styles.duoCard}>
            <h3 className={styles.duoCardTitle}>Nombres para Dúos</h3>
            <div className={styles.duoList}>
              {DUO_GAMING_NAMES.map((pair, pIdx) => {
                const duoStr = `${pair.p1} & ${pair.p2}`;
                const key = `gaming-duo-${pIdx}`;
                return (
                  <div key={pIdx} className={styles.duoRow}>
                    <span className={styles.duoText}>{duoStr}</span>
                    <button
                      type="button"
                      className={`${styles.smallCopyBtn} ${copiedKey === key ? styles.copiedBtn : ''}`}
                      onClick={() => handleCopy(duoStr, key)}
                    >
                      {copiedKey === key ? '¡Copiado!' : 'Copiar dúo'}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Squads */}
          <div className={styles.squadCard}>
            <h3 className={styles.duoCardTitle}>Nombres para Escuadras</h3>
            <div className={styles.squadList}>
              {SQUAD_GAMING_NAMES.map((sq, sIdx) => {
                const squadFormatted = `${sq.squadName}: ${sq.members.join(' · ')}`;
                const key = `gaming-squad-${sIdx}`;
                return (
                  <div key={sIdx} className={styles.squadBlock}>
                    <span className={styles.squadNameTitle}>{sq.squadName}</span>
                    <p className={styles.squadMembersText}>{sq.members.join(' · ')}</p>
                    <button
                      type="button"
                      className={`${styles.smallCopyBtn} ${copiedKey === key ? styles.copiedBtn : ''}`}
                      onClick={() => handleCopy(squadFormatted, key)}
                    >
                      {copiedKey === key ? '¡Copiado!' : 'Copiar equipo'}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
