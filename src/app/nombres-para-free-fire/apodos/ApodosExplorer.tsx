'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { stylesMap } from '../../../utils/unicodeTransformer';
import styles from './page.module.css';

export interface NicknameItem {
  name: string;
  category: string;
  keywords: string[];
}

const FEATURED_NICKNAMES: NicknameItem[] = [
  { name: '『Shadow』', category: 'Chidos', keywords: ['shadow', 'sombra', 'cool'] },
  { name: '亗DarkBoy亗', category: 'Oscuros', keywords: ['dark', 'boy', 'oscuro'] },
  { name: '★Ghost★', category: 'Originales', keywords: ['ghost', 'fantasma'] },
  { name: '乂King乂', category: 'Pro', keywords: ['king', 'rey', 'pro'] },
  { name: 'メWolfメ', category: 'Gamer', keywords: ['wolf', 'lobo', 'gamer'] },
  { name: '꧁CoolX꧂', category: 'Chidos', keywords: ['cool', 'chido'] },
  { name: '〆Raptor〆', category: 'Pro', keywords: ['raptor', 'pro'] },
  { name: '亗Vortex亗', category: 'Originales', keywords: ['vortex', 'original'] },
  { name: '☠Phantasm☠', category: 'Oscuros', keywords: ['phantasm', 'oscuro'] },
  { name: '★NovaPro★', category: 'Pro', keywords: ['nova', 'pro'] },
  { name: '『RoyalX』', category: 'Elegantes', keywords: ['royal', 'elegante'] },
  { name: 'ツLagMasterツ', category: 'Divertidos', keywords: ['lag', 'master', 'divertido'] },
];

const NICKNAME_DATASET: NicknameItem[] = [
  ...FEATURED_NICKNAMES,
  // Chidos
  { name: 'CoolX', category: 'Chidos', keywords: ['cool', 'chido'] },
  { name: 'ShadowX', category: 'Chidos', keywords: ['shadow', 'chido'] },
  { name: 'Kingツ', category: 'Chidos', keywords: ['king', 'chido'] },
  { name: 'GhostX', category: 'Chidos', keywords: ['ghost', 'chido'] },
  { name: '亗Blaze亗', category: 'Chidos', keywords: ['blaze', 'fuego', 'chido'] },

  // Originales
  { name: 'NovaX', category: 'Originales', keywords: ['nova', 'original'] },
  { name: 'Vortex', category: 'Originales', keywords: ['vortex', 'original'] },
  { name: 'Zenix', category: 'Originales', keywords: ['zenix', 'original'] },
  { name: 'Riven', category: 'Originales', keywords: ['riven', 'original'] },
  { name: 'Kairo', category: 'Originales', keywords: ['kairo', 'original'] },
  { name: '『Zephyr』', category: 'Originales', keywords: ['zephyr', 'original'] },

  // Pro
  { name: 'EliteX', category: 'Pro', keywords: ['elite', 'pro'] },
  { name: 'MVP_X', category: 'Pro', keywords: ['mvp', 'pro'] },
  { name: 'ClutchX', category: 'Pro', keywords: ['clutch', 'pro'] },
  { name: 'AimPro', category: 'Pro', keywords: ['aim', 'pro'] },
  { name: 'ZeroX', category: 'Pro', keywords: ['zero', 'pro'] },
  { name: '亗Apex亗', category: 'Pro', keywords: ['apex', 'pro'] },

  // Gamer
  { name: 'PixelX', category: 'Gamer', keywords: ['pixel', 'gamer'] },
  { name: 'GameLord', category: 'Gamer', keywords: ['game', 'lord', 'gamer'] },
  { name: 'CyberX', category: 'Gamer', keywords: ['cyber', 'gamer'] },
  { name: 'BossMode', category: 'Gamer', keywords: ['boss', 'mode', 'gamer'] },
  { name: 'XPulse', category: 'Gamer', keywords: ['pulse', 'gamer'] },

  // Divertidos
  { name: 'Noobito', category: 'Divertidos', keywords: ['noob', 'noobito', 'divertido'] },
  { name: 'PanConPing', category: 'Divertidos', keywords: ['ping', 'pan', 'divertido'] },
  { name: 'WifiWarrior', category: 'Divertidos', keywords: ['wifi', 'warrior', 'divertido'] },
  { name: 'BotConSuerte', category: 'Divertidos', keywords: ['bot', 'suerte', 'divertido'] },
  { name: 'ツMancoProツ', category: 'Divertidos', keywords: ['manco', 'pro', 'divertido'] },

  // Elegantes
  { name: 'Royal', category: 'Elegantes', keywords: ['royal', 'elegante'] },
  { name: 'NobleX', category: 'Elegantes', keywords: ['noble', 'elegante'] },
  { name: 'Velvet', category: 'Elegantes', keywords: ['velvet', 'elegante'] },
  { name: 'Prestige', category: 'Elegantes', keywords: ['prestige', 'elegante'] },
  { name: '『Aesthetic』', category: 'Elegantes', keywords: ['aesthetic', 'elegante'] },

  // Oscuros
  { name: 'DarkSoul', category: 'Oscuros', keywords: ['dark', 'soul', 'oscuro'] },
  { name: 'NightX', category: 'Oscuros', keywords: ['night', 'oscuro'] },
  { name: 'BlackGhost', category: 'Oscuros', keywords: ['black', 'ghost', 'oscuro'] },
  { name: 'Phantom', category: 'Oscuros', keywords: ['phantom', 'oscuro'] },
  { name: '☠Grim☠', category: 'Oscuros', keywords: ['grim', 'oscuro'] },

  // Insanos
  { name: '亗Demon亗', category: 'Insanos', keywords: ['demon', 'insano'] },
  { name: '꧁Rage꧂', category: 'Insanos', keywords: ['rage', 'insano'] },
  { name: '乂Savage乂', category: 'Insanos', keywords: ['savage', 'insano'] },
  { name: '〆NoMercy〆', category: 'Insanos', keywords: ['nomercy', 'insano'] },

  // Cortos
  { name: 'ZEN', category: 'Cortos', keywords: ['zen', 'corto'] },
  { name: 'VEX', category: 'Cortos', keywords: ['vex', 'corto'] },
  { name: 'NOX', category: 'Cortos', keywords: ['nox', 'corto'] },
  { name: 'REX', category: 'Cortos', keywords: ['rex', 'corto'] },
  { name: 'AXE', category: 'Cortos', keywords: ['axe', 'corto'] },
  { name: 'KAI', category: 'Cortos', keywords: ['kai', 'corto'] },

  // Para Chicos / Chicas
  { name: 'WolfBoy', category: 'Para Chicos', keywords: ['wolf', 'boy', 'chicos'] },
  { name: 'RaptorKing', category: 'Para Chicos', keywords: ['raptor', 'king', 'chicos'] },
  { name: 'QueenX', category: 'Para Chicas', keywords: ['queen', 'chicas'] },
  { name: 'LunaGirl', category: 'Para Chicas', keywords: ['luna', 'girl', 'chicas'] },
  { name: 'NovaRose', category: 'Para Chicas', keywords: ['nova', 'rose', 'chicas'] },
];

const CATEGORY_FILTERS = [
  { id: 'all', label: 'Todos' },
  { id: 'favs', label: '♥ Favoritos' },
  { id: 'Chidos', label: 'Chidos' },
  { id: 'Originales', label: 'Originales' },
  { id: 'Pro', label: 'Pro' },
  { id: 'Gamer', label: 'Gamer' },
  { id: 'Elegantes', label: 'Elegantes' },
  { id: 'Divertidos', label: 'Divertidos' },
  { id: 'Cortos', label: 'Cortos' },
  { id: 'Oscuros', label: 'Oscuros' },
  { id: 'Insanos', label: 'Insanos' },
  { id: 'Para Chicos', label: 'Para Chicos' },
  { id: 'Para Chicas', label: 'Para Chicas' },
];

const STYLE_FILTERS = [
  { id: 'all', label: 'Todos los estilos' },
  { id: 'simbolico', label: 'Simbólico (亗)' },
  { id: 'decorado', label: 'Decorado (『』)' },
  { id: 'gotico', label: 'Gótico (𝕾)' },
  { id: 'negrita', label: 'Negrita (𝐒)' },
  { id: 'cursiva', label: 'Cursiva (𝓢)' },
  { id: 'minimal', label: 'Minimal (ツ)' },
];

const DUO_NICKNAMES = [
  { p1: 'Shadow', p2: 'Ghost' },
  { p1: 'King', p2: 'Queen' },
  { p1: 'Dark', p2: 'Light' },
  { p1: 'Fire', p2: 'Ice' },
  { p1: 'Wolf', p2: 'Fox' },
  { p1: 'Storm', p2: 'Thunder' },
];

const SQUAD_NICKNAMES = [
  { squadName: 'Dark Force', members: ['Shadow', 'Ghost', 'Wolf', 'King'] },
  { squadName: 'Apex Gaming', members: ['Apex', 'Vortex', 'Pulse', 'Blaze'] },
  { squadName: 'Cyber Crew', members: ['Cyber', 'Pixel', 'Vector', 'Matrix'] },
];

const RANDOM_WORDS = ['Shadow', 'Ghost', 'Wolf', 'King', 'Nova', 'Dark', 'Fire', 'Storm', 'Cyber', 'Raptor', 'Phantom', 'Blaze'];
const RANDOM_SUFFIXES = ['X', 'FF', 'Pro', '7', '99', 'Z', 'XT'];

export default function ApodosExplorer() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCat, setSelectedCat] = useState<string>('all');
  const [selectedStyle, setSelectedStyle] = useState<string>('all');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // Favorites & Recents Local Storage
  const [favorites, setFavorites] = useState<string[]>([]);
  const [recentNames, setRecentNames] = useState<string[]>([]);

  // Interactive Features State
  const [customizerInput, setCustomizerInput] = useState<string>('Shadow');
  const [randomGeneratedApodo, setRandomGeneratedApodo] = useState<string>('ShadowPro');

  useEffect(() => {
    try {
      const savedFavs = localStorage.getItem('apodos_fav_names');
      if (savedFavs) setFavorites(JSON.parse(savedFavs));
      const savedRecents = localStorage.getItem('apodos_recent_names');
      if (savedRecents) setRecentNames(JSON.parse(savedRecents));
    } catch {
      // Ignore
    }
  }, []);

  const handleCopy = (nameText: string, key: string) => {
    try {
      navigator.clipboard.writeText(nameText);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2000);

      // Track recent name
      setRecentNames((prev) => {
        const updated = [nameText, ...prev.filter((n) => n !== nameText)].slice(0, 8);
        try {
          localStorage.setItem('apodos_recent_names', JSON.stringify(updated));
        } catch {
          // Ignore
        }
        return updated;
      });
    } catch {
      alert('Copia este apodo manualmente: ' + nameText);
    }
  };

  const toggleFavorite = (nameText: string) => {
    setFavorites((prev) => {
      const isFav = prev.includes(nameText);
      const updated = isFav ? prev.filter((n) => n !== nameText) : [...prev, nameText];
      try {
        localStorage.setItem('apodos_fav_names', JSON.stringify(updated));
      } catch {
        // Ignore
      }
      return updated;
    });
  };

  const clearRecents = () => {
    setRecentNames([]);
    try {
      localStorage.removeItem('apodos_recent_names');
    } catch {
      // Ignore
    }
  };

  const generateRandomApodo = () => {
    const w = RANDOM_WORDS[Math.floor(Math.random() * RANDOM_WORDS.length)];
    const s = RANDOM_SUFFIXES[Math.floor(Math.random() * RANDOM_SUFFIXES.length)];
    setRandomGeneratedApodo(`${w}${s}`);
  };

  // Filter Logic
  const normalizedSearch = searchTerm.toLowerCase().trim();

  const filteredNicknames = NICKNAME_DATASET.filter((item) => {
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

    // Style Filter
    if (selectedStyle !== 'all') {
      if (selectedStyle === 'simbolico' && !item.name.includes('亗') && !item.name.includes('乂')) return false;
      if (selectedStyle === 'decorado' && !item.name.includes('『') && !item.name.includes('꧁')) return false;
      if (selectedStyle === 'minimal' && !item.name.includes('ツ') && !item.name.endsWith('X')) return false;
    }

    return true;
  });

  return (
    <div className={styles.explorerContainer}>
      {/* Search & Main Filter Tool Card */}
      <div id="coleccion-apodos" className={styles.toolCard}>
        <div className={styles.toolHeader}>
          <h2 className={styles.toolTitle}>Buscador de Apodos para Free Fire</h2>
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
          <label htmlFor="apodos-search-input" className={styles.searchLabel}>
            Buscar apodos:
          </label>
          <input
            id="apodos-search-input"
            type="text"
            className={styles.searchInput}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar apodos para Free Fire (ej. shadow, king, ghost, pro)..."
            aria-label="Buscar apodos por palabra clave"
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

        {/* Style Filter Bar */}
        <div className={styles.styleFilterBar}>
          <span className={styles.styleFilterLabel}>Estilo visual:</span>
          {STYLE_FILTERS.map((st) => (
            <button
              key={st.id}
              type="button"
              className={`${styles.styleChip} ${selectedStyle === st.id ? styles.activeStyleChip : ''}`}
              onClick={() => setSelectedStyle(st.id)}
            >
              {st.label}
            </button>
          ))}
        </div>

        {/* Recently Copied Section */}
        {recentNames.length > 0 && selectedCat === 'all' && !searchTerm && (
          <div className={styles.recentsBox}>
            <div className={styles.recentsHeader}>
              <span className={styles.recentsLabel}>Apodos copiados recientemente:</span>
              <button type="button" className={styles.clearRecentsBtn} onClick={clearRecents}>
                Limpiar
              </button>
            </div>
            <div className={styles.recentsList}>
              {recentNames.map((name, idx) => {
                const key = `recent-apodo-${idx}`;
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

        {/* Nickname Grid Results */}
        {filteredNicknames.length === 0 ? (
          <div className={styles.noResultsBox}>
            <p className={styles.noResultsTitle}>No encontramos apodos con esa búsqueda.</p>
            <p className={styles.noResultsSub}>Intenta buscar términos como &quot;shadow&quot;, &quot;king&quot; o &quot;wolf&quot;, o genera un apodo personalizado en nuestro generador principal.</p>
            <Link href="/nombres-para-free-fire/" className={styles.ctaBtnInline}>
              Crear un apodo personalizado →
            </Link>
          </div>
        ) : (
          <div className={styles.nameGrid}>
            {filteredNicknames.map((item, idx) => {
              const key = `apodo-item-${idx}`;
              const isFav = favorites.includes(item.name);
              return (
                <div key={idx} className={styles.nameCard}>
                  <div className={styles.nameCardTop}>
                    <span className={styles.nameCatBadge}>{item.category}</span>
                    <button
                      type="button"
                      className={`${styles.favToggleBtn} ${isFav ? styles.isFav : ''}`}
                      onClick={() => toggleFavorite(item.name)}
                      aria-label={`Guardar apodo ${item.name} en favoritos`}
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
                      aria-label={`Copiar apodo ${item.name}`}
                    >
                      {copiedKey === key ? '¡Copiado!' : 'Copiar'}
                    </button>
                    <Link
                      href="/nombres-para-free-fire/"
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

      {/* Featured Nicknames Section */}
      <div className={styles.sectionBlock}>
        <h2 className={styles.subSectionTitle}>Apodos Destacados</h2>
        <p className={styles.subSectionDesc}>Selección de nicknames originales y populares para jugadores de Free Fire:</p>

        <div className={styles.featuredGrid}>
          {FEATURED_NICKNAMES.slice(0, 8).map((item, idx) => {
            const key = `featured-apodo-${idx}`;
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

      {/* Lightweight Random Nickname Generator */}
      <div className={styles.sectionBlock}>
        <div className={styles.randomBox}>
          <div className={styles.randomHeader}>
            <h2 className={styles.subSectionTitle}>Generar apodo aleatorio</h2>
            <button
              type="button"
              className={styles.randomBtn}
              onClick={generateRandomApodo}
            >
              🎲 Generar apodo
            </button>
          </div>

          <div className={styles.randomOutputCard}>
            <span className={styles.randomOutputLabel}>Apodo generado:</span>
            <p className={styles.randomOutputText}>{randomGeneratedApodo}</p>
            <div className={styles.randomActionsRow}>
              <button
                type="button"
                className={`${styles.copyBtn} ${copiedKey === 'rand-apodo-out' ? styles.copiedBtn : ''}`}
                onClick={() => handleCopy(randomGeneratedApodo, 'rand-apodo-out')}
                style={{ maxWidth: '200px' }}
              >
                {copiedKey === 'rand-apodo-out' ? '¡Copiado!' : 'Copiar'}
              </button>
              <Link href="/nombres-para-free-fire/" className={styles.customizeLinkInline}>
                Personalizar este apodo →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Lightweight Nickname Decorator */}
      <div className={styles.sectionBlock}>
        <h2 className={styles.subSectionTitle}>Decorador y Personalizador de Apodos</h2>
        <p className={styles.subSectionDesc}>Escribe tu apodo y aplícale plantillas de adornos y marcos:</p>

        <div className={styles.decoratorBox}>
          <div className={styles.decoratorInputGroup}>
            <label htmlFor="apodos-decorator-input" className={styles.decoratorLabel}>
              Escribe tu apodo:
            </label>
            <input
              id="apodos-decorator-input"
              type="text"
              className={styles.decoratorInput}
              value={customizerInput}
              onChange={(e) => setCustomizerInput(e.target.value)}
              placeholder="Escribe tu nickname..."
            />
          </div>

          <div className={styles.decoratorVariantsGrid}>
            {[
              `꧁ ${customizerInput.trim() || 'Shadow'} ꧂`,
              `『 ${customizerInput.trim() || 'Shadow'} 』`,
              `【 ${customizerInput.trim() || 'Shadow'} 】`,
              `乂 ${customizerInput.trim() || 'Shadow'} 乂`,
              `メ ${customizerInput.trim() || 'Shadow'} メ`,
              `★ ${customizerInput.trim() || 'Shadow'} ★`,
              `亗 ${customizerInput.trim() || 'Shadow'} 亗`,
              `〆 ${customizerInput.trim() || 'Shadow'} 〆`,
              `ツ ${customizerInput.trim() || 'Shadow'} ツ`,
            ].map((decResult, dIdx) => {
              const key = `dec-apodo-${dIdx}`;
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
            <Link href="/nombres-para-free-fire/" className={styles.moreGenLink}>
              Personalizar más en el generador principal →
            </Link>
          </div>
        </div>
      </div>

      {/* Duo & Squad Nicknames Section */}
      <div className={styles.sectionBlock}>
        <h2 className={styles.subSectionTitle}>Apodos para Dúo y Escuadra</h2>
        <p className={styles.subSectionDesc}>Nicknames combinados para parejas de juego y miembros de escuadra:</p>

        <div className={styles.duoSquadGrid}>
          {/* Duo Card */}
          <div className={styles.duoCard}>
            <h3 className={styles.duoCardTitle}>Apodos para Dúo</h3>
            <div className={styles.duoList}>
              {DUO_NICKNAMES.map((pair, pIdx) => {
                const duoStr = `${pair.p1} / ${pair.p2}`;
                const duoDecoratedStr = `亗${pair.p1}亗 / 亗${pair.p2}亗`;
                const key = `duo-apodo-${pIdx}`;
                return (
                  <div key={pIdx} className={styles.duoRow}>
                    <div>
                      <span className={styles.duoText}>{duoStr}</span>
                      <span className={styles.duoDecoratedSub}>{duoDecoratedStr}</span>
                    </div>
                    <button
                      type="button"
                      className={`${styles.smallCopyBtn} ${copiedKey === key ? styles.copiedBtn : ''}`}
                      onClick={() => handleCopy(duoDecoratedStr, key)}
                    >
                      {copiedKey === key ? '¡Copiado!' : 'Copiar ambos'}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Squad Card */}
          <div className={styles.squadCard}>
            <h3 className={styles.duoCardTitle}>Apodos para Escuadra</h3>
            <div className={styles.squadList}>
              {SQUAD_NICKNAMES.map((squad, sIdx) => {
                const key = `squad-apodo-${sIdx}`;
                const squadMembersFormatted = squad.members.map(m => `亗NX亗 ${m}`).join(' · ');
                return (
                  <div key={sIdx} className={styles.squadBlock}>
                    <span className={styles.squadNameTitle}>{squad.squadName}</span>
                    <p className={styles.squadMembersText}>{squadMembersFormatted}</p>
                    <button
                      type="button"
                      className={`${styles.smallCopyBtn} ${copiedKey === key ? styles.copiedBtn : ''}`}
                      onClick={() => handleCopy(squadMembersFormatted, key)}
                    >
                      {copiedKey === key ? '¡Copiado!' : 'Copiar conjunto'}
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
