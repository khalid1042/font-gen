'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { stylesMap } from '../../../utils/unicodeTransformer';
import styles from './page.module.css';

// Dataset for Insane Free Fire Names
export interface InsaneNameItem {
  name: string;
  category: string;
  keywords: string[];
  styleType?: string;
}

const FEATURED_INSANE_NAMES: InsaneNameItem[] = [
  { name: '꧁༺NoMercy༻꧂', category: 'Insanos', keywords: ['nomercy', 'sin piedad', 'featured'] },
  { name: '亗Demon亗', category: 'Demoníacos', keywords: ['demon', 'demonio', 'pro'] },
  { name: '꧁༒☬Rage☬༒꧂', category: 'Agresivos', keywords: ['rage', 'rabia', 'furia'] },
  { name: '『Savage』', category: 'Salvajes', keywords: ['savage', 'salvaje'] },
  { name: '乂Destroyer乂', category: 'Agresivos', keywords: ['destroyer', 'destructor'] },
  { name: '〆Reaper〆', category: 'Oscuros', keywords: ['reaper', 'muerte', 'oscuridad'] },
  { name: 'メVenomメ', category: 'Extremos', keywords: ['venom', 'veneno'] },
  { name: '☠DarkKing☠', category: 'Oscuros', keywords: ['dark', 'king', 'rey'] },
  { name: '꧁༺WarLord༻꧂', category: 'Guerreros', keywords: ['warlord', 'guerrero'] },
  { name: '亗MadGhost亗', category: 'Intimidantes', keywords: ['ghost', 'fantasma', 'mad'] },
  { name: '乂Chaos乂', category: 'Extremos', keywords: ['chaos', 'caos'] },
  { name: '★Ruthless★', category: 'Dominantes', keywords: ['ruthless', 'spiedad'] },
];

const INSANE_NAME_DATASET: InsaneNameItem[] = [
  ...FEATURED_INSANE_NAMES,
  // Salvajes
  { name: 'SavageX', category: 'Salvajes', keywords: ['savage', 'salvaje'] },
  { name: 'WildKing', category: 'Salvajes', keywords: ['wild', 'salvaje', 'king'] },
  { name: 'MadWolf', category: 'Salvajes', keywords: ['mad', 'wolf', 'lobo'] },
  { name: '亗WildBeast亗', category: 'Salvajes', keywords: ['beast', 'bestia'] },
  // Agresivos
  { name: 'FuryX', category: 'Agresivos', keywords: ['fury', 'furia'] },
  { name: 'WarX', category: 'Agresivos', keywords: ['war', 'guerra'] },
  { name: '乂Vortex乂', category: 'Agresivos', keywords: ['vortex', 'destruccion'] },
  { name: '『Blitz』', category: 'Agresivos', keywords: ['blitz', 'ataque'] },
  // Intimidantes
  { name: 'FearKing', category: 'Intimidantes', keywords: ['fear', 'miedo', 'king'] },
  { name: 'DarkBoss', category: 'Intimidantes', keywords: ['dark', 'boss', 'jefe'] },
  { name: 'FinalBoss', category: 'Intimidantes', keywords: ['final', 'boss', 'intimidante'] },
  { name: '亗Overlord亗', category: 'Intimidantes', keywords: ['overlord', 'dominante'] },
  // Oscuros
  { name: 'DarkSoul', category: 'Oscuros', keywords: ['dark', 'soul', 'alma'] },
  { name: 'BlackGhost', category: 'Oscuros', keywords: ['black', 'ghost', 'fantasma'] },
  { name: 'NightReaper', category: 'Oscuros', keywords: ['night', 'reaper', 'noche'] },
  { name: '☠ShadowX☠', category: 'Oscuros', keywords: ['shadow', 'sombra'] },
  // Demoníacos
  { name: 'DemonX', category: 'Demoníacos', keywords: ['demon', 'demonio'] },
  { name: 'HellShade', category: 'Demoníacos', keywords: ['hell', 'inferno'] },
  { name: 'DarkDemon', category: 'Demoníacos', keywords: ['dark', 'demon'] },
  { name: 'InfernoX', category: 'Demoníacos', keywords: ['inferno', 'fuego'] },
  // Guerreros
  { name: 'SamuraiX', category: 'Guerreros', keywords: ['samurai', 'guerrero'] },
  { name: 'ShadowKnight', category: 'Guerreros', keywords: ['knight', 'caballero'] },
  { name: 'IronWarrior', category: 'Guerreros', keywords: ['iron', 'warrior'] },
  { name: '亗Titan亗', category: 'Guerreros', keywords: ['titan', 'fuerza'] },
  // Cortos
  { name: 'RAGE', category: 'Cortos', keywords: ['rage', 'corto'] },
  { name: 'VOID', category: 'Cortos', keywords: ['void', 'vacio', 'corto'] },
  { name: 'VEX', category: 'Cortos', keywords: ['vex', 'corto'] },
  { name: 'XENO', category: 'Cortos', keywords: ['xeno', 'corto'] },
  { name: 'FURY', category: 'Cortos', keywords: ['fury', 'corto'] },
  { name: 'NOX', category: 'Cortos', keywords: ['nox', 'corto'] },
];

const CATEGORY_FILTERS = [
  { id: 'all', label: 'Todos' },
  { id: 'favs', label: '♥ Favoritos' },
  { id: 'Insanos', label: 'Insanos' },
  { id: 'Salvajes', label: 'Salvajes' },
  { id: 'Agresivos', label: 'Agresivos' },
  { id: 'Intimidantes', label: 'Intimidantes' },
  { id: 'Oscuros', label: 'Oscuros' },
  { id: 'Demoníacos', label: 'Demoníacos' },
  { id: 'Guerreros', label: 'Guerreros' },
  { id: 'Cortos', label: 'Cortos' },
];

const STYLE_FILTERS = [
  { id: 'all', label: 'Todos los estilos' },
  { id: 'simbolico', label: 'Simbólico (亗)' },
  { id: 'decorado', label: 'Decorado (『』)' },
  { id: 'gotico', label: 'Gótico (𝕯)' },
  { id: 'negrita', label: 'Negrita (𝐃)' },
  { id: 'cursiva', label: 'Cursiva (𝓓)' },
  { id: 'minimal', label: 'Minimal (DΞMON)' },
];

// Duo Insane Names Dataset
const INSANE_DUOS = [
  { p1: 'Shadow亗', p2: 'Ghost亗' },
  { p1: 'DarkX', p2: 'NightX' },
  { p1: 'Rage', p2: 'Fury' },
  { p1: 'Demon', p2: 'Angel' },
  { p1: 'Venom', p2: 'Toxic' },
];

// Squad Insane Names Dataset
const INSANE_SQUADS = [
  { squadName: 'Dark Force', members: ['Dark', 'Shadow', 'Reaper', 'Ghost'] },
  { squadName: 'Savage Squad', members: ['Savage', 'Rage', 'Fury', 'Beast'] },
  { squadName: 'Chaos Crew', members: ['Chaos', 'Vortex', 'Blitz', 'Titan'] },
];

// Random Insane Generator Words
const RANDOM_PREFIXES = ['Dark', 'Mad', 'Shadow', 'Toxic', 'Night', 'Black', 'Savage', 'Crazy', 'Ghost', 'Infernal', 'Vicious'];
const RANDOM_SUFFIXES = ['King', 'X', 'Wolf', 'Lord', 'Boss', 'Reaper', 'Knight', 'Fury', 'Viper', 'Slayer', 'Beast'];

export default function InsaneNamesExplorer() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCat, setSelectedCat] = useState<string>('all');
  const [selectedStyle, setSelectedStyle] = useState<string>('all');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // Favorites & Recents Local Storage
  const [favorites, setFavorites] = useState<string[]>([]);
  const [recentNames, setRecentNames] = useState<string[]>([]);

  // Lightweight Decorator State
  const [decoratorInput, setDecoratorInput] = useState<string>('Shadow');
  const [randomGeneratedName, setRandomGeneratedName] = useState<string>('DarkReaper');

  useEffect(() => {
    try {
      const savedFavs = localStorage.getItem('insane_fav_names');
      if (savedFavs) setFavorites(JSON.parse(savedFavs));
      const savedRecents = localStorage.getItem('insane_recent_names');
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
          localStorage.setItem('insane_recent_names', JSON.stringify(updated));
        } catch {
          // Ignore
        }
        return updated;
      });
    } catch {
      alert('Copia este texto manualmente: ' + nameText);
    }
  };

  const toggleFavorite = (nameText: string) => {
    setFavorites((prev) => {
      const isFav = prev.includes(nameText);
      const updated = isFav ? prev.filter((n) => n !== nameText) : [...prev, nameText];
      try {
        localStorage.setItem('insane_fav_names', JSON.stringify(updated));
      } catch {
        // Ignore
      }
      return updated;
    });
  };

  const clearRecents = () => {
    setRecentNames([]);
    try {
      localStorage.removeItem('insane_recent_names');
    } catch {
      // Ignore
    }
  };

  const generateRandomInsane = () => {
    const p = RANDOM_PREFIXES[Math.floor(Math.random() * RANDOM_PREFIXES.length)];
    const s = RANDOM_SUFFIXES[Math.floor(Math.random() * RANDOM_SUFFIXES.length)];
    setRandomGeneratedName(`亗${p}${s}亗`);
  };

  // Filter Logic
  const normalizedSearch = searchTerm.toLowerCase().trim();

  const filteredNames = INSANE_NAME_DATASET.filter((item) => {
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
    }

    return true;
  });

  return (
    <div className={styles.explorerContainer}>
      {/* Search & Main Filter Tool Card */}
      <div id="coleccion-insana" className={styles.toolCard}>
        <div className={styles.toolHeader}>
          <h2 className={styles.toolTitle}>Buscador de Nombres Insanos</h2>
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
          <label htmlFor="insane-search-input" className={styles.searchLabel}>
            Buscar nombres insanos:
          </label>
          <input
            id="insane-search-input"
            type="text"
            className={styles.searchInput}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar nombres insanos (ej. demon, rage, savage, dark)..."
            aria-label="Buscar nombres insanos por palabra clave"
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
              <span className={styles.recentsLabel}>Copiados recientemente:</span>
              <button type="button" className={styles.clearRecentsBtn} onClick={clearRecents}>
                Limpiar
              </button>
            </div>
            <div className={styles.recentsList}>
              {recentNames.map((name, idx) => {
                const key = `recent-insane-${idx}`;
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
            <p className={styles.noResultsSub}>Intenta buscar términos como &quot;demon&quot;, &quot;rage&quot; o &quot;dark&quot;, o genera un nombre personalizado en nuestro generador principal.</p>
            <Link href="/nombres-para-free-fire/" className={styles.ctaBtnInline}>
              Crear un nombre personalizado →
            </Link>
          </div>
        ) : (
          <div className={styles.nameGrid}>
            {filteredNames.map((item, idx) => {
              const key = `insane-item-${idx}`;
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
                      aria-label={`Copiar nombre insano ${item.name}`}
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

      {/* Featured Insane Names Section */}
      <div className={styles.sectionBlock}>
        <h2 className={styles.subSectionTitle}>Nombres Insanos Destacados</h2>
        <p className={styles.subSectionDesc}>Selección de apodos visualmente intimidantes e insanos para Free Fire:</p>

        <div className={styles.featuredGrid}>
          {FEATURED_INSANE_NAMES.slice(0, 8).map((item, idx) => {
            const key = `featured-${idx}`;
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

      {/* Lightweight Insane Random Generator */}
      <div className={styles.sectionBlock}>
        <div className={styles.randomBox}>
          <div className={styles.randomHeader}>
            <h2 className={styles.subSectionTitle}>Generar nombre insano aleatorio</h2>
            <button
              type="button"
              className={styles.randomBtn}
              onClick={generateRandomInsane}
            >
              🎲 Generar nombre insano
            </button>
          </div>

          <div className={styles.randomOutputCard}>
            <span className={styles.randomOutputLabel}>Resultado aleatorio:</span>
            <p className={styles.randomOutputText}>{randomGeneratedName}</p>
            <div className={styles.randomActionsRow}>
              <button
                type="button"
                className={`${styles.copyBtn} ${copiedKey === 'rand-insane-out' ? styles.copiedBtn : ''}`}
                onClick={() => handleCopy(randomGeneratedName, 'rand-insane-out')}
                style={{ maxWidth: '200px' }}
              >
                {copiedKey === 'rand-insane-out' ? '¡Copiado!' : 'Copiar'}
              </button>
              <Link href="/nombres-para-free-fire/" className={styles.customizeLinkInline}>
                Personalizar este nombre →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Lightweight Name Decorator */}
      <div className={styles.sectionBlock}>
        <h2 className={styles.subSectionTitle}>Decorador Insano Rápido</h2>
        <p className={styles.subSectionDesc}>Escribe un apodo y aplícale marcos ornamentados insanos:</p>

        <div className={styles.decoratorBox}>
          <div className={styles.decoratorInputGroup}>
            <label htmlFor="insane-decorator-input" className={styles.decoratorLabel}>
              Escribe un nombre:
            </label>
            <input
              id="insane-decorator-input"
              type="text"
              className={styles.decoratorInput}
              value={decoratorInput}
              onChange={(e) => setDecoratorInput(e.target.value)}
              placeholder="Escribe un apodo..."
            />
          </div>

          <div className={styles.decoratorVariantsGrid}>
            {[
              `亗${decoratorInput.trim() || 'Shadow'}亗`,
              `『${decoratorInput.trim() || 'Shadow'}』`,
              `꧁${decoratorInput.trim() || 'Shadow'}꧂`,
              `乂${decoratorInput.trim() || 'Shadow'}乂`,
              `メ${decoratorInput.trim() || 'Shadow'}メ`,
              `〆${decoratorInput.trim() || 'Shadow'}〆`,
              `★${decoratorInput.trim() || 'Shadow'}★`,
              `☠${decoratorInput.trim() || 'Shadow'}☠`,
            ].map((decResult, dIdx) => {
              const key = `dec-insane-${dIdx}`;
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
              Crear más estilos en el generador avanzado →
            </Link>
          </div>
        </div>
      </div>

      {/* Duo & Squad Insane Section */}
      <div className={styles.sectionBlock}>
        <h2 className={styles.subSectionTitle}>Nombres Insanos para Dúo y Escuadra</h2>
        <p className={styles.subSectionDesc}>Opciones coordinadas para parejas de juego y clanes competitivos:</p>

        <div className={styles.duoSquadGrid}>
          {/* Duo Card */}
          <div className={styles.duoCard}>
            <h3 className={styles.duoCardTitle}>Nombres Insanos para Dúo</h3>
            <div className={styles.duoList}>
              {INSANE_DUOS.map((pair, pIdx) => {
                const duoStr = `${pair.p1} / ${pair.p2}`;
                const key = `insane-duo-${pIdx}`;
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
            <h3 className={styles.duoCardTitle}>Nombres Insanos para Escuadra</h3>
            <div className={styles.squadList}>
              {INSANE_SQUADS.map((squad, sIdx) => {
                const key = `insane-squad-${sIdx}`;
                const membersStr = squad.members.map(m => `亗NX亗 ${m}`).join(' · ');
                return (
                  <div key={sIdx} className={styles.squadBlock}>
                    <span className={styles.squadNameTitle}>{squad.squadName}</span>
                    <p className={styles.squadMembersText}>{membersStr}</p>
                    <button
                      type="button"
                      className={`${styles.smallCopyBtn} ${copiedKey === key ? styles.copiedBtn : ''}`}
                      onClick={() => handleCopy(membersStr, key)}
                    >
                      {copiedKey === key ? '¡Copiado!' : 'Copiar escuadra'}
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
