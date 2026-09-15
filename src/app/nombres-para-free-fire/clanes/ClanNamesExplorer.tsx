'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export interface ClanItem {
  name: string;
  tag: string;
  category: string;
  keywords: string[];
}

const FEATURED_CLAN_NAMES: ClanItem[] = [
  { name: 'Nova Force', tag: 'NFX', category: 'Competitivos', keywords: ['nova', 'force', 'pro', 'clan'] },
  { name: 'Shadow Legion', tag: 'SLG', category: 'Oscuros', keywords: ['shadow', 'legion', 'oscuro'] },
  { name: 'Dark Wolves', tag: 'DWX', category: 'Oscuros', keywords: ['dark', 'wolves', 'lobo'] },
  { name: 'Elite Rage', tag: 'ERG', category: 'Pro', keywords: ['elite', 'rage', 'furia'] },
  { name: 'Night Kings', tag: 'NKG', category: 'Poderosos', keywords: ['night', 'kings', 'rey'] },
  { name: 'Ghost Army', tag: 'GAR', category: 'Guerreros', keywords: ['ghost', 'army', 'fantasma'] },
  { name: 'Savage Squad', tag: 'SSQ', category: 'Competitivos', keywords: ['savage', 'squad', 'salvaje'] },
  { name: 'Cyber Titans', tag: 'CBT', category: 'Originales', keywords: ['cyber', 'titans', 'titan'] },
  { name: 'Apex Gaming', tag: 'APX', category: 'Pro', keywords: ['apex', 'gaming', 'esports'] },
  { name: 'Vortex Order', tag: 'VTX', category: 'Originales', keywords: ['vortex', 'order', 'original'] },
  { name: 'Royal Warriors', tag: 'RWR', category: 'Elegantes', keywords: ['royal', 'warriors', 'elegante'] },
  { name: 'Lag Legends', tag: 'LGL', category: 'Divertidos', keywords: ['lag', 'legends', 'divertido'] },
];

const CLAN_DATASET: ClanItem[] = [
  ...FEATURED_CLAN_NAMES,
  // Pro
  { name: 'Prime Legion', tag: 'PRM', category: 'Pro', keywords: ['prime', 'legion', 'pro'] },
  { name: 'Victory Squad', tag: 'VSQ', category: 'Pro', keywords: ['victory', 'squad', 'pro'] },
  { name: 'Titan Esports', tag: 'TTE', category: 'Pro', keywords: ['titan', 'esports', 'pro'] },
  { name: 'Clutch Team', tag: 'CLT', category: 'Pro', keywords: ['clutch', 'team', 'pro'] },
  
  // Competitivos
  { name: 'Alpha Force', tag: 'AFX', category: 'Competitivos', keywords: ['alpha', 'force', 'competitivo'] },
  { name: 'Overlord Clan', tag: 'OVC', category: 'Competitivos', keywords: ['overlord', 'clan', 'competitivo'] },
  { name: 'Matrix Gaming', tag: 'MTX', category: 'Competitivos', keywords: ['matrix', 'gaming', 'competitivo'] },
  { name: 'Supreme Crew', tag: 'SPC', category: 'Competitivos', keywords: ['supreme', 'crew', 'competitivo'] },

  // Chidos
  { name: 'Nova Crew', tag: 'NVC', category: 'Chidos', keywords: ['nova', 'crew', 'chido'] },
  { name: 'Fire Nation', tag: 'FNT', category: 'Chidos', keywords: ['fire', 'nation', 'fuego'] },
  { name: 'Urban Kings', tag: 'UBK', category: 'Chidos', keywords: ['urban', 'kings', 'chido'] },
  { name: 'Galaxy Force', tag: 'GXF', category: 'Chidos', keywords: ['galaxy', 'force', 'chido'] },

  // Originales
  { name: 'Zero Gravity', tag: 'ZGV', category: 'Originales', keywords: ['zero', 'gravity', 'original'] },
  { name: 'Pixel Raiders', tag: 'PXR', category: 'Originales', keywords: ['pixel', 'raiders', 'original'] },
  { name: 'Neon Wolves', tag: 'NWX', category: 'Originales', keywords: ['neon', 'wolves', 'original'] },
  { name: 'Lunar Force', tag: 'LNF', category: 'Originales', keywords: ['lunar', 'force', 'original'] },
  { name: 'Echo Storm', tag: 'EST', category: 'Originales', keywords: ['echo', 'storm', 'original'] },

  // Poderosos
  { name: 'Iron Legion', tag: 'ILG', category: 'Poderosos', keywords: ['iron', 'legion', 'poderoso'] },
  { name: 'Titan Force', tag: 'TFC', category: 'Poderosos', keywords: ['titan', 'force', 'poderoso'] },
  { name: 'Dragon Guard', tag: 'DGG', category: 'Poderosos', keywords: ['dragon', 'guard', 'poderoso'] },
  { name: 'Vanguard Elite', tag: 'VGE', category: 'Poderosos', keywords: ['vanguard', 'elite', 'poderoso'] },

  // Oscuros
  { name: 'Black Wolves', tag: 'BWX', category: 'Oscuros', keywords: ['black', 'wolves', 'oscuro'] },
  { name: 'Night Raiders', tag: 'NRD', category: 'Oscuros', keywords: ['night', 'raiders', 'oscuro'] },
  { name: 'Shadow Order', tag: 'SOD', category: 'Oscuros', keywords: ['shadow', 'order', 'oscuro'] },
  { name: 'Phantom Force', tag: 'PTF', category: 'Oscuros', keywords: ['phantom', 'force', 'oscuro'] },
  { name: 'Grim Alliance', tag: 'GMA', category: 'Oscuros', keywords: ['grim', 'alliance', 'oscuro'] },

  // Guerreros
  { name: 'War Titans', tag: 'WTT', category: 'Guerreros', keywords: ['war', 'titans', 'guerrero'] },
  { name: 'Iron Warriors', tag: 'IWR', category: 'Guerreros', keywords: ['iron', 'warriors', 'guerrero'] },
  { name: 'Shadow Knights', tag: 'SKN', category: 'Guerreros', keywords: ['knights', 'guerrero'] },
  { name: 'Battle Lords', tag: 'BLD', category: 'Guerreros', keywords: ['battle', 'lords', 'guerrero'] },

  // Elegantes
  { name: 'Royal Elite', tag: 'RLE', category: 'Elegantes', keywords: ['royal', 'elite', 'elegante'] },
  { name: 'Noble Force', tag: 'NBF', category: 'Elegantes', keywords: ['noble', 'force', 'elegante'] },
  { name: 'Prestige Crew', tag: 'PGC', category: 'Elegantes', keywords: ['prestige', 'crew', 'elegante'] },
  { name: 'Imperial Clan', tag: 'IPC', category: 'Elegantes', keywords: ['imperial', 'clan', 'elegante'] },
  { name: 'Velvet Legion', tag: 'VVL', category: 'Elegantes', keywords: ['velvet', 'legion', 'elegante'] },

  // Divertidos
  { name: 'Noob Nation', tag: 'NBN', category: 'Divertidos', keywords: ['noob', 'nation', 'divertido'] },
  { name: 'Ping Masters', tag: 'PMS', category: 'Divertidos', keywords: ['ping', 'masters', 'divertido'] },
  { name: 'Bot Hunters', tag: 'BTH', category: 'Divertidos', keywords: ['bot', 'hunters', 'divertido'] },
  { name: 'WiFi Warriors', tag: 'WFW', category: 'Divertidos', keywords: ['wifi', 'warriors', 'divertido'] },

  // Cortos
  { name: 'VEX', tag: 'VEX', category: 'Cortos', keywords: ['vex', 'corto'] },
  { name: 'NFX', tag: 'NFX', category: 'Cortos', keywords: ['nfx', 'corto'] },
  { name: 'ZEN', tag: 'ZEN', category: 'Cortos', keywords: ['zen', 'corto'] },
  { name: 'NOVA', tag: 'NVA', category: 'Cortos', keywords: ['nova', 'corto'] },
  { name: 'AXIS', tag: 'AXS', category: 'Cortos', keywords: ['axis', 'corto'] },
  { name: 'RAGE', tag: 'RAG', category: 'Cortos', keywords: ['rage', 'corto'] },
];

const CLAN_CATEGORY_FILTERS = [
  { id: 'all', label: 'Todos' },
  { id: 'favs', label: '♥ Favoritos' },
  { id: 'Pro', label: 'Pro' },
  { id: 'Competitivos', label: 'Competitivos' },
  { id: 'Originales', label: 'Originales' },
  { id: 'Chidos', label: 'Chidos' },
  { id: 'Poderosos', label: 'Poderosos' },
  { id: 'Oscuros', label: 'Oscuros' },
  { id: 'Guerreros', label: 'Guerreros' },
  { id: 'Elegantes', label: 'Elegantes' },
  { id: 'Divertidos', label: 'Divertidos' },
  { id: 'Cortos', label: 'Cortos' },
];

const STYLE_FILTERS = [
  { id: 'all', label: 'Todos los estilos' },
  { id: 'simbolico', label: 'Simbólico (亗)' },
  { id: 'decorado', label: 'Decorado (『』)' },
  { id: 'gotico', label: 'Gótico (𝕹)' },
  { id: 'negrita', label: 'Negrita (𝐍)' },
  { id: 'cursiva', label: 'Cursiva (𝓝)' },
  { id: 'minimal', label: 'Minimal (Texto Plano)' },
];

const RANDOM_CLAN_WORDS1 = ['Shadow', 'Nova', 'Dark', 'Elite', 'Royal', 'Ghost', 'Titan', 'Cyber', 'Lunar', 'Alpha', 'Night', 'Storm', 'Vortex', 'Apex', 'Iron'];
const RANDOM_CLAN_WORDS2 = ['Force', 'Legion', 'Wolves', 'Warriors', 'Squad', 'Crew', 'Titans', 'Raiders', 'Kings', 'Order', 'Alliance', 'Guard', 'Vanguard'];

export default function ClanNamesExplorer() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCat, setSelectedCat] = useState<string>('all');
  const [selectedStyle, setSelectedStyle] = useState<string>('all');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // Favorites & Recents Local Storage
  const [favorites, setFavorites] = useState<string[]>([]);
  const [recentClans, setRecentClans] = useState<string[]>([]);

  // Interactive Tools State
  const [randomGeneratedClan, setRandomGeneratedClan] = useState<{ name: string; tag: string }>({
    name: 'Shadow Legion',
    tag: 'SLG',
  });

  // Clan Tag Generator Input
  const [tagInput, setTagInput] = useState<string>('Nova Force');

  // Clan Prefix Generator Input
  const [prefixInput, setPrefixInput] = useState<string>('NFX');

  // Team Member Name Builder Input
  const [teamPrefix, setTeamPrefix] = useState<string>('亗NFX亗');
  const [player1, setPlayer1] = useState<string>('Shadow');
  const [player2, setPlayer2] = useState<string>('Ghost');
  const [player3, setPlayer3] = useState<string>('Wolf');
  const [player4, setPlayer4] = useState<string>('Nova');

  // Decorator Input
  const [decoratorInput, setDecoratorInput] = useState<string>('Nova Force');

  useEffect(() => {
    try {
      const savedFavs = localStorage.getItem('clan_fav_names');
      if (savedFavs) setFavorites(JSON.parse(savedFavs));
      const savedRecents = localStorage.getItem('clan_recent_names');
      if (savedRecents) setRecentClans(JSON.parse(savedRecents));
    } catch {
      // Ignore
    }
  }, []);

  const handleCopy = (text: string, key: string) => {
    try {
      navigator.clipboard.writeText(text);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2000);

      // Track recents
      setRecentClans((prev) => {
        const updated = [text, ...prev.filter((c) => c !== text)].slice(0, 8);
        try {
          localStorage.setItem('clan_recent_names', JSON.stringify(updated));
        } catch {
          // Ignore
        }
        return updated;
      });
    } catch {
      alert('Copia este texto manualmente: ' + text);
    }
  };

  const toggleFavorite = (clanName: string) => {
    setFavorites((prev) => {
      const isFav = prev.includes(clanName);
      const updated = isFav ? prev.filter((c) => c !== clanName) : [...prev, clanName];
      try {
        localStorage.setItem('clan_fav_names', JSON.stringify(updated));
      } catch {
        // Ignore
      }
      return updated;
    });
  };

  const clearRecents = () => {
    setRecentClans([]);
    try {
      localStorage.removeItem('clan_recent_names');
    } catch {
      // Ignore
    }
  };

  const generateRandomClan = () => {
    const w1 = RANDOM_CLAN_WORDS1[Math.floor(Math.random() * RANDOM_CLAN_WORDS1.length)];
    const w2 = RANDOM_CLAN_WORDS2[Math.floor(Math.random() * RANDOM_CLAN_WORDS2.length)];
    const tag = `${w1.charAt(0)}${w2.charAt(0)}X`.toUpperCase();
    setRandomGeneratedClan({ name: `${w1} ${w2}`, tag });
  };

  // Helper to compute tags for tag generator
  const computeClanTags = (inputStr: string) => {
    const cleaned = inputStr.trim();
    if (!cleaned) return ['NFX', 'NOVA', 'NF', 'NFC', 'NVF'];
    const parts = cleaned.split(/\s+/);

    if (parts.length >= 2) {
      const w1 = parts[0];
      const w2 = parts[1];
      const tag1 = (w1.charAt(0) + w2.charAt(0) + 'X').toUpperCase();
      const tag2 = w1.toUpperCase();
      const tag3 = (w1.charAt(0) + w2.charAt(0)).toUpperCase();
      const tag4 = (w1.charAt(0) + w2.charAt(0) + (parts[2] ? parts[2].charAt(0) : 'C')).toUpperCase();
      const tag5 = (w1.slice(0, 2) + w2.charAt(0)).toUpperCase();
      return Array.from(new Set([tag1, tag2, tag3, tag4, tag5]));
    } else {
      const word = parts[0];
      const tag1 = word.toUpperCase();
      const tag2 = (word.slice(0, 3) + 'X').toUpperCase();
      const tag3 = (word.slice(0, 2) + 'FX').toUpperCase();
      const tag4 = (word.charAt(0) + 'CLAN').toUpperCase();
      return Array.from(new Set([tag1, tag2, tag3, tag4]));
    }
  };

  // Team Member Formatted Output
  const formattedTeamMembers = [player1, player2, player3, player4]
    .map((p) => p.trim())
    .filter(Boolean)
    .map((p) => `${teamPrefix.trim()} ${p}`);

  const formattedTeamString = formattedTeamMembers.join(' · ');

  // Filter Logic
  const normalizedSearch = searchTerm.toLowerCase().trim();

  const filteredClans = CLAN_DATASET.filter((item) => {
    // Category Filter
    if (selectedCat === 'favs') {
      if (!favorites.includes(item.name)) return false;
    } else if (selectedCat !== 'all' && item.category !== selectedCat) {
      return false;
    }

    // Search Filter
    if (normalizedSearch) {
      const matchName = item.name.toLowerCase().includes(normalizedSearch);
      const matchTag = item.tag.toLowerCase().includes(normalizedSearch);
      const matchCat = item.category.toLowerCase().includes(normalizedSearch);
      const matchKw = item.keywords.some((kw) => kw.includes(normalizedSearch));
      if (!matchName && !matchTag && !matchCat && !matchKw) return false;
    }

    // Style Filter
    if (selectedStyle !== 'all') {
      if (selectedStyle === 'simbolico' && !item.name.includes('亗')) return false;
      if (selectedStyle === 'decorado' && !item.name.includes('『')) return false;
    }

    return true;
  });

  return (
    <div className={styles.explorerContainer}>
      {/* Search & Category Filter Card */}
      <div id="coleccion-clanes" className={styles.toolCard}>
        <div className={styles.toolHeader}>
          <h2 className={styles.toolTitle}>Buscador de Nombres para Clanes</h2>
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
          <label htmlFor="clan-search-input" className={styles.searchLabel}>
            Buscar nombres para clanes:
          </label>
          <input
            id="clan-search-input"
            type="text"
            className={styles.searchInput}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar nombres de clanes o tags (ej. nova, dark, elite, legion)..."
            aria-label="Buscar nombres para clanes de Free Fire"
          />
        </div>

        {/* Category Navigation Bar */}
        <div className={styles.categoryBar}>
          {CLAN_CATEGORY_FILTERS.map((cat) => (
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
        {recentClans.length > 0 && selectedCat === 'all' && !searchTerm && (
          <div className={styles.recentsBox}>
            <div className={styles.recentsHeader}>
              <span className={styles.recentsLabel}>Clanes copiados recientemente:</span>
              <button type="button" className={styles.clearRecentsBtn} onClick={clearRecents}>
                Limpiar
              </button>
            </div>
            <div className={styles.recentsList}>
              {recentClans.map((clan, idx) => {
                const key = `recent-clan-${idx}`;
                return (
                  <button
                    key={idx}
                    type="button"
                    className={`${styles.recentChip} ${copiedKey === key ? styles.copiedBtn : ''}`}
                    onClick={() => handleCopy(clan, key)}
                  >
                    {clan} {copiedKey === key ? '✓' : ''}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Clan Grid Results */}
        {filteredClans.length === 0 ? (
          <div className={styles.noResultsBox}>
            <p className={styles.noResultsTitle}>No encontramos nombres con esa búsqueda.</p>
            <p className={styles.noResultsSub}>Intenta buscar términos como &quot;legion&quot;, &quot;wolves&quot; o &quot;force&quot;, o genera un nombre personalizado en nuestro generador principal.</p>
            <Link href="/nombres-para-free-fire/" className={styles.ctaBtnInline}>
              Crear un nombre personalizado →
            </Link>
          </div>
        ) : (
          <div className={styles.nameGrid}>
            {filteredClans.map((item, idx) => {
              const key = `clan-item-${idx}`;
              const isFav = favorites.includes(item.name);
              return (
                <div key={idx} className={styles.nameCard}>
                  <div className={styles.nameCardTop}>
                    <span className={styles.nameCatBadge}>{item.category}</span>
                    <span className={styles.clanTagBadge}>Tag: {item.tag}</span>
                    <button
                      type="button"
                      className={`${styles.favToggleBtn} ${isFav ? styles.isFav : ''}`}
                      onClick={() => toggleFavorite(item.name)}
                      aria-label={`Guardar clan ${item.name} en favoritos`}
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
                      aria-label={`Copiar nombre del clan ${item.name}`}
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

      {/* Featured Clan Names Section */}
      <div className={styles.sectionBlock}>
        <h2 className={styles.subSectionTitle}>Nombres de Clanes Destacados</h2>
        <p className={styles.subSectionDesc}>Ideas de nombres y tags competitivos para escuadras de Free Fire:</p>

        <div className={styles.featuredGrid}>
          {FEATURED_CLAN_NAMES.slice(0, 8).map((item, idx) => {
            const key = `featured-clan-${idx}`;
            const isFav = favorites.includes(item.name);
            return (
              <div key={idx} className={styles.featuredCard}>
                <div className={styles.featuredTop}>
                  <span className={styles.featuredBadge}>Tag: {item.tag}</span>
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

      {/* Lightweight Random Clan Generator */}
      <div className={styles.sectionBlock}>
        <div className={styles.randomBox}>
          <div className={styles.randomHeader}>
            <h2 className={styles.subSectionTitle}>Generar nombre de clan aleatorio</h2>
            <button
              type="button"
              className={styles.randomBtn}
              onClick={generateRandomClan}
            >
              🎲 Generar nombre de clan
            </button>
          </div>

          <div className={styles.randomOutputCard}>
            <span className={styles.randomOutputLabel}>Clan sugerido:</span>
            <p className={styles.randomOutputText}>{randomGeneratedClan.name}</p>
            <span className={styles.randomOutputSubTag}>Tag del clan: {randomGeneratedClan.tag}</span>
            <div className={styles.randomActionsRow}>
              <button
                type="button"
                className={`${styles.copyBtn} ${copiedKey === 'rand-clan-out' ? styles.copiedBtn : ''}`}
                onClick={() => handleCopy(randomGeneratedClan.name, 'rand-clan-out')}
                style={{ maxWidth: '200px' }}
              >
                {copiedKey === 'rand-clan-out' ? '¡Copiado!' : 'Copiar nombre'}
              </button>
              <Link href="/nombres-para-free-fire/" className={styles.customizeLinkInline}>
                Personalizar este clan →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Clan Tag Generator */}
      <div className={styles.sectionBlock}>
        <div className={styles.toolSubCard}>
          <h2 className={styles.subSectionTitle}>Generador de Clan Tags</h2>
          <p className={styles.subSectionDesc}>Ingresa el nombre de tu clan y genera abreviaturas y tags sugeridos:</p>

          <div className={styles.inputGroupBlock}>
            <label htmlFor="clan-tag-input" className={styles.inputLabel}>
              Nombre del clan:
            </label>
            <input
              id="clan-tag-input"
              type="text"
              className={styles.textInput}
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              placeholder="Ej. Nova Force, Shadow Legion..."
            />
          </div>

          <div className={styles.tagsGrid}>
            {computeClanTags(tagInput).map((computedTag, tIdx) => {
              const key = `tag-out-${tIdx}`;
              return (
                <div key={tIdx} className={styles.tagChipCard}>
                  <span className={styles.tagChipLabel}>Tag:</span>
                  <span className={styles.tagChipText}>{computedTag}</span>
                  <button
                    type="button"
                    className={`${styles.smallCopyBtn} ${copiedKey === key ? styles.copiedBtn : ''}`}
                    onClick={() => handleCopy(computedTag, key)}
                  >
                    {copiedKey === key ? '¡Copiado!' : 'Copiar tag'}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Clan Prefix Generator */}
      <div className={styles.sectionBlock}>
        <div className={styles.toolSubCard}>
          <h2 className={styles.subSectionTitle}>Generador de Prefijos de Clan</h2>
          <p className={styles.subSectionDesc}>Diseña un prefijo con marcos ornamentales para usar antes del nombre de los miembros:</p>

          <div className={styles.inputGroupBlock}>
            <label htmlFor="clan-prefix-input" className={styles.inputLabel}>
              Texto o Tag del prefijo:
            </label>
            <input
              id="clan-prefix-input"
              type="text"
              className={styles.textInput}
              value={prefixInput}
              onChange={(e) => setPrefixInput(e.target.value)}
              placeholder="Ej. NFX, SHADOW..."
            />
          </div>

          <div className={styles.prefixGrid}>
            {[
              `亗${prefixInput.trim() || 'NFX'}亗`,
              `『${prefixInput.trim() || 'NFX'}』`,
              `乂${prefixInput.trim() || 'NFX'}乂`,
              `メ${prefixInput.trim() || 'NFX'}メ`,
              `★${prefixInput.trim() || 'NFX'}★`,
              `〆${prefixInput.trim() || 'NFX'}〆`,
            ].map((pref, pIdx) => {
              const key = `prefix-out-${pIdx}`;
              return (
                <div key={pIdx} className={styles.prefixCard}>
                  <span className={styles.prefixText}>{pref}</span>
                  <button
                    type="button"
                    className={`${styles.smallCopyBtn} ${copiedKey === key ? styles.copiedBtn : ''}`}
                    onClick={() => handleCopy(pref, key)}
                  >
                    {copiedKey === key ? '¡Copiado!' : 'Copiar prefijo'}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Team Member Name Builder */}
      <div className={styles.sectionBlock}>
        <div className={styles.toolSubCard}>
          <h2 className={styles.subSectionTitle}>Creador de Identidad de Escuadra</h2>
          <p className={styles.subSectionDesc}>Genera nombres coordinados para todos los miembros de tu escuadra con un mismo prefijo:</p>

          <div className={styles.teamBuilderForm}>
            <div className={styles.inputGroupBlock}>
              <label htmlFor="team-prefix-input" className={styles.inputLabel}>
                Prefijo del clan:
              </label>
              <input
                id="team-prefix-input"
                type="text"
                className={styles.textInput}
                value={teamPrefix}
                onChange={(e) => setTeamPrefix(e.target.value)}
                placeholder="Ej. 亗NFX亗"
              />
            </div>

            <div className={styles.membersInputsGrid}>
              <div className={styles.inputGroupBlock}>
                <label htmlFor="player-1" className={styles.inputLabel}>Jugador 1:</label>
                <input
                  id="player-1"
                  type="text"
                  className={styles.textInput}
                  value={player1}
                  onChange={(e) => setPlayer1(e.target.value)}
                />
              </div>
              <div className={styles.inputGroupBlock}>
                <label htmlFor="player-2" className={styles.inputLabel}>Jugador 2:</label>
                <input
                  id="player-2"
                  type="text"
                  className={styles.textInput}
                  value={player2}
                  onChange={(e) => setPlayer2(e.target.value)}
                />
              </div>
              <div className={styles.inputGroupBlock}>
                <label htmlFor="player-3" className={styles.inputLabel}>Jugador 3:</label>
                <input
                  id="player-3"
                  type="text"
                  className={styles.textInput}
                  value={player3}
                  onChange={(e) => setPlayer3(e.target.value)}
                />
              </div>
              <div className={styles.inputGroupBlock}>
                <label htmlFor="player-4" className={styles.inputLabel}>Jugador 4:</label>
                <input
                  id="player-4"
                  type="text"
                  className={styles.textInput}
                  value={player4}
                  onChange={(e) => setPlayer4(e.target.value)}
                />
              </div>
            </div>

            {/* Team Output Block */}
            <div className={styles.teamOutputCard}>
              <div className={styles.teamOutputHeader}>
                <span className={styles.teamOutputTitle}>Lista coordinada de la escuadra:</span>
                <button
                  type="button"
                  className={`${styles.copyAllBtn} ${copiedKey === 'team-all' ? styles.copiedBtn : ''}`}
                  onClick={() => handleCopy(formattedTeamString, 'team-all')}
                  aria-label="Copiar todos los nombres de la escuadra"
                >
                  {copiedKey === 'team-all' ? '¡Todos copiados!' : 'Copiar todos'}
                </button>
              </div>

              <div className={styles.teamMembersList}>
                {formattedTeamMembers.map((memberFull, mIdx) => {
                  const key = `team-member-${mIdx}`;
                  return (
                    <div key={mIdx} className={styles.teamMemberRow}>
                      <span className={styles.memberText}>{memberFull}</span>
                      <button
                        type="button"
                        className={`${styles.smallCopyBtn} ${copiedKey === key ? styles.copiedBtn : ''}`}
                        onClick={() => handleCopy(memberFull, key)}
                        aria-label={`Copiar nombre ${memberFull}`}
                      >
                        {copiedKey === key ? '¡Copiado!' : 'Copiar nombre'}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Clan Name Decorator */}
      <div className={styles.sectionBlock}>
        <h2 className={styles.subSectionTitle}>Decorador de Nombres de Clan</h2>
        <p className={styles.subSectionDesc}>Aplica marcos ornamentales a tu clan:</p>

        <div className={styles.decoratorBox}>
          <div className={styles.decoratorInputGroup}>
            <label htmlFor="clan-decorator-input" className={styles.decoratorLabel}>
              Escribe el nombre del clan:
            </label>
            <input
              id="clan-decorator-input"
              type="text"
              className={styles.decoratorInput}
              value={decoratorInput}
              onChange={(e) => setDecoratorInput(e.target.value)}
              placeholder="Ej. Nova Force..."
            />
          </div>

          <div className={styles.decoratorVariantsGrid}>
            {[
              `꧁${decoratorInput.trim() || 'Nova Force'}꧂`,
              `『${decoratorInput.trim() || 'Nova Force'}』`,
              `【${decoratorInput.trim() || 'Nova Force'}】`,
              `乂${decoratorInput.trim() || 'Nova Force'}乂`,
              `亗${decoratorInput.trim() || 'Nova Force'}亗`,
              `★${decoratorInput.trim() || 'Nova Force'}★`,
              `〆${decoratorInput.trim() || 'Nova Force'}〆`,
            ].map((decResult, dIdx) => {
              const key = `dec-clan-${dIdx}`;
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
              Personalizar con fuentes avanzadas en el generador principal →
            </Link>
          </div>
        </div>
      </div>

      {/* Complete Branding Combination Examples */}
      <div className={styles.sectionBlock}>
        <h2 className={styles.subSectionTitle}>Ejemplo de Combinación e Identidad Completa</h2>
        <p className={styles.subSectionDesc}>Así se estructura una identidad de clan consistente y profesional:</p>

        <div className={styles.brandingExampleBox}>
          <div className={styles.brandingCol}>
            <span className={styles.brandingLabel}>Clan Name:</span>
            <span className={styles.brandingValue}>Nova Force</span>
          </div>
          <div className={styles.brandingCol}>
            <span className={styles.brandingLabel}>Clan Tag:</span>
            <span className={styles.brandingValue}>NFX</span>
          </div>
          <div className={styles.brandingCol}>
            <span className={styles.brandingLabel}>Prefijo de Miembros:</span>
            <span className={styles.brandingValue}>亗NFX亗</span>
          </div>
          <div className={styles.brandingMembersCol}>
            <span className={styles.brandingLabel}>Integrantes de la Escuadra:</span>
            <ul className={styles.brandingList}>
              <li>亗NFX亗 Shadow</li>
              <li>亗NFX亗 Ghost</li>
              <li>亗NFX亗 Wolf</li>
              <li>亗NFX亗 Nova</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
