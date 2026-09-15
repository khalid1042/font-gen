'use client';

import { useState, useEffect } from 'react';
import styles from './page.module.css';

// Symbol Categories Data Structure
export interface SymbolItem {
  symbol: string;
  name: string;
  keywords: string[];
}

export interface SymbolCategory {
  id: string;
  title: string;
  icon: string;
  items: SymbolItem[];
}

const SYMBOL_CATEGORIES: SymbolCategory[] = [
  {
    id: 'corazones',
    title: '❤️ Corazones',
    icon: '❤️',
    items: [
      { symbol: '♡', name: 'Corazón delineado', keywords: ['corazon', 'amor', 'love', 'aesthetic', 'heart'] },
      { symbol: '♥', name: 'Corazón sólido', keywords: ['corazon', 'amor', 'love', 'heart', 'solido'] },
      { symbol: '❤', name: 'Corazón clásico', keywords: ['corazon', 'amor', 'love', 'heart'] },
      { symbol: 'ღ', name: 'Corazón curvo', keywords: ['corazon', 'curvo', 'amor', 'elegante'] },
      { symbol: '❥', name: 'Corazón con cola', keywords: ['corazon', 'amor', 'elegante', 'flecha'] },
      { symbol: '❣', name: 'Corazón exclamación', keywords: ['corazon', 'exclamacion', 'amor'] },
      { symbol: '💗', name: 'Corazón creciente', keywords: ['corazon', 'rosado', 'amor'] },
      { symbol: '💖', name: 'Corazón brillante', keywords: ['corazon', 'brillo', 'estrellas'] },
      { symbol: '💘', name: 'Corazón flechado', keywords: ['corazon', 'flecha', 'cupido'] },
      { symbol: '💓', name: 'Corazón latiendo', keywords: ['corazon', 'latido', 'amor'] },
      { symbol: '💞', name: 'Corazones giratorios', keywords: ['corazon', 'pareja', 'giratorio'] },
    ]
  },
  {
    id: 'estrellas',
    title: '⭐ Estrellas',
    icon: '⭐',
    items: [
      { symbol: '★', name: 'Estrella sólida', keywords: ['estrella', 'star', 'solida', 'brillo'] },
      { symbol: '☆', name: 'Estrella delineada', keywords: ['estrella', 'star', 'delineada', 'minimal'] },
      { symbol: '✦', name: 'Destello de cuatro puntos', keywords: ['estrella', 'brillo', 'destello', 'sparkle', 'aesthetic'] },
      { symbol: '✧', name: 'Destello delineado', keywords: ['estrella', 'brillo', 'destello', 'sparkle'] },
      { symbol: '✨', name: 'Destellos dorados', keywords: ['estrella', 'brillo', 'destellos', 'magia'] },
      { symbol: '✩', name: 'Estrella de cinco puntas', keywords: ['estrella', 'star', 'magia'] },
      { symbol: '✪', name: 'Estrella en círculo', keywords: ['estrella', 'circulo', 'emblema'] },
      { symbol: '✫', name: 'Estrella abierta', keywords: ['estrella', 'abierta', 'star'] },
      { symbol: '✬', name: 'Estrella sombreada', keywords: ['estrella', 'sombra'] },
      { symbol: '🌟', name: 'Estrella brillante', keywords: ['estrella', 'brillante', 'sol'] },
    ]
  },
  {
    id: 'flechas',
    title: '➜ Flechas',
    icon: '➜',
    items: [
      { symbol: '→', name: 'Flecha derecha simple', keywords: ['flecha', 'derecha', 'arrow', 'link'] },
      { symbol: '←', name: 'Flecha izquierda simple', keywords: ['flecha', 'izquierda', 'atras'] },
      { symbol: '↑', name: 'Flecha arriba', keywords: ['flecha', 'arriba', 'top'] },
      { symbol: '↓', name: 'Flecha abajo', keywords: ['flecha', 'abajo', 'link', 'bio'] },
      { symbol: '➜', name: 'Flecha curva sólida', keywords: ['flecha', 'curva', 'direccion'] },
      { symbol: '➤', name: 'Flecha punta gruesa', keywords: ['flecha', 'punta', 'destacado'] },
      { symbol: '➝', name: 'Flecha directa', keywords: ['flecha', 'apuntar'] },
      { symbol: '➞', name: 'Flecha ancha', keywords: ['flecha', 'ancha'] },
      { symbol: '⇢', name: 'Flecha punteada', keywords: ['flecha', 'puntos', 'punteada'] },
      { symbol: '↠', name: 'Flecha doble punta', keywords: ['flecha', 'doble'] },
    ]
  },
  {
    id: 'flores',
    title: '🌸 Flores',
    icon: '🌸',
    items: [
      { symbol: '❀', name: 'Flor delineada', keywords: ['flor', 'flower', 'planta', 'nature', 'aesthetic'] },
      { symbol: '✿', name: 'Flor sólida', keywords: ['flor', 'flower', 'solida', 'naturaleza'] },
      { symbol: '❁', name: 'Flor circular', keywords: ['flor', 'flower', 'circulo'] },
      { symbol: '✾', name: 'Flor silvestre', keywords: ['flor', 'campo'] },
      { symbol: '❃', name: 'Flor ornamental', keywords: ['flor', 'adorno', 'decoracion'] },
      { symbol: '⚘', name: 'Flor con tallo', keywords: ['flor', 'tallo', 'rosa'] },
      { symbol: '🌸', name: 'Flor de cerezo', keywords: ['flor', 'sakura', 'rosa', 'japones'] },
      { symbol: '🌺', name: 'Flor de hibisco', keywords: ['flor', 'tropical', 'roja'] },
    ]
  },
  {
    id: 'decorativos',
    title: '✦ Decorativos',
    icon: '✦',
    items: [
      { symbol: '୨୧', name: 'Lazo aesthetic', keywords: ['lazo', 'moño', 'coquette', 'aesthetic', 'ribbon'] },
      { symbol: '꧁ ꧂', name: 'Marco barroco', keywords: ['marco', 'barroco', 'adorno', 'decoracion'] },
      { symbol: '『 』', name: 'Corchetes japoneses', keywords: ['marco', 'caja', 'japones', 'brackets'] },
      { symbol: '【 】', name: 'Corchetes negros', keywords: ['marco', 'caja', 'titulo'] },
      { symbol: '༺ ༻', name: 'Alas tribales', keywords: ['alas', 'marco', 'tribal', 'adorno'] },
      { symbol: '•', name: 'Punto medio', keywords: ['punto', 'dot', 'separador', 'minimal'] },
      { symbol: '❖', name: 'Diamante flor', keywords: ['diamante', 'rombo', 'decoracion'] },
      { symbol: '◇', name: 'Rombo delineado', keywords: ['rombo', 'diamante', 'minimal'] },
      { symbol: '◈', name: 'Rombo con punto', keywords: ['rombo', 'centro'] },
    ]
  },
  {
    id: 'luna',
    title: '☾ Luna y cielo',
    icon: '☾',
    items: [
      { symbol: '☾', name: 'Luna creciente', keywords: ['luna', 'moon', 'cielo', 'noche', 'aesthetic'] },
      { symbol: '☽', name: 'Luna menguante', keywords: ['luna', 'moon', 'noche'] },
      { symbol: '☀', name: 'Sol radiante', keywords: ['sol', 'sun', 'dia', 'luz'] },
      { symbol: '☼', name: 'Sol delineado', keywords: ['sol', 'sun', 'verano'] },
      { symbol: '☁', name: 'Nube suave', keywords: ['nube', 'cloud', 'cielo'] },
      { symbol: '☄', name: 'Cometa fugaz', keywords: ['cometa', 'estrella', 'cielo'] },
      { symbol: '⋆', name: 'Estrella pequeña', keywords: ['estrella', 'cielo', 'polvo'] },
      { symbol: '🌌', name: 'Vía láctea', keywords: ['galaxia', 'espacio'] },
    ]
  },
  {
    id: 'marcas',
    title: '✓ Check y marcas',
    icon: '✓',
    items: [
      { symbol: '✓', name: 'Check listo', keywords: ['check', 'visto', 'correcto', 'ok', 'marcado'] },
      { symbol: '✔', name: 'Check grueso', keywords: ['check', 'visto', 'oficial'] },
      { symbol: '☑', name: 'Check en caja', keywords: ['check', 'caja', 'lista'] },
      { symbol: '✗', name: 'Cruz de cancelación', keywords: ['cruz', 'cancelar', 'error', 'x'] },
      { symbol: '✘', name: 'Cruz gruesa', keywords: ['cruz', 'x', 'cancelar'] },
      { symbol: '☒', name: 'Cruz en caja', keywords: ['cruz', 'caja'] },
      { symbol: '＋', name: 'Signo más', keywords: ['mas', 'suma', 'agregar'] },
      { symbol: '−', name: 'Signo menos', keywords: ['menos', 'resta'] },
    ]
  },
  {
    id: 'amor',
    title: '♡ Amor y romance',
    icon: '♡',
    items: [
      { symbol: '∞', name: 'Infinito', keywords: ['infinito', 'eternidad', 'amor', 'siempre'] },
      { symbol: '💋', name: 'Beso de labial', keywords: ['beso', 'labios', 'romance'] },
      { symbol: '💌', name: 'Carta de amor', keywords: ['carta', 'mensaje', 'sobre', 'amor'] },
      { symbol: '🌹', name: 'Rosa roja', keywords: ['rosa', 'flor', 'amor', 'romance'] },
      { symbol: '💍', name: 'Anillo de compromiso', keywords: ['anillo', 'boda', 'pareja'] },
      { symbol: '🕊️', name: 'Paloma de la paz', keywords: ['paloma', 'paz', 'amor'] },
    ]
  },
  {
    id: 'musica',
    title: '🎵 Música',
    icon: '🎵',
    items: [
      { symbol: '♪', name: 'Corchea', keywords: ['musica', 'nota', 'cancion', 'sonido'] },
      { symbol: '♫', name: 'Corcheas unidas', keywords: ['musica', 'notas', 'melodia'] },
      { symbol: '♬', name: 'Semicorcheas', keywords: ['musica', 'ritmo'] },
      { symbol: '♩', name: 'Negra musical', keywords: ['musica', 'nota'] },
      { symbol: '♭', name: 'Bemol', keywords: ['musica', 'tono'] },
      { symbol: '♯', name: 'Sostenido', keywords: ['musica', 'sharp', 'hashtag'] },
    ]
  },
  {
    id: 'energia',
    title: '⚡ Energía',
    icon: '⚡',
    items: [
      { symbol: '⚡', name: 'Rayo de energía', keywords: ['rayo', 'energia', 'fuerza', 'trueno', 'lightning'] },
      { symbol: '🔥', name: 'Fuego ardiente', keywords: ['fuego', 'fire', 'tendencia', 'hot'] },
      { symbol: '💥', name: 'Explosión', keywords: ['boom', 'explocion', 'fuerza'] },
      { symbol: '👑', name: 'Corona real', keywords: ['corona', 'king', 'queen', 'rey', 'reina'] },
      { symbol: '💎', name: 'Gema brillante', keywords: ['diamante', 'lujo', 'gema', 'brillo'] },
    ]
  },
  {
    id: 'especiales',
    title: '☯ Especiales',
    icon: '☯',
    items: [
      { symbol: '☯', name: 'Yin Yang', keywords: ['yinyang', 'equilibrio', 'armonia'] },
      { symbol: '☸', name: 'Rueda del dharma', keywords: ['espiritual', 'simbolo'] },
      { symbol: '☣', name: 'Riesgo biológico', keywords: ['biohazard', 'simbolo', 'gamer'] },
      { symbol: '☢', name: 'Radiactivo', keywords: ['radiactivo', 'peligro'] },
      { symbol: '♨', name: 'Termas / Aguas termales', keywords: ['caliente', 'vapor'] },
      { symbol: '⚓', name: 'Ancla marina', keywords: ['ancla', 'mar', 'barco', 'navegacion'] },
      { symbol: '✈️', name: 'Avión de viaje', keywords: ['avion', 'viaje', 'travel', 'volar'] },
    ]
  }
];

// Symbol Combinations Preset Collection
const SYMBOL_COMBINATIONS = [
  { label: 'Minimalista', text: '• ─── •' },
  { label: 'Elegante', text: '✦ ─── ✦' },
  { label: 'Amor & Cursiva', text: '♡ ── ♡' },
  { label: 'Coquette / Ribbon', text: '୨୧ ─── ୨୧' },
  { label: 'Barroco', text: '꧁ ✦ ꧂' },
  { label: 'Estrella fugaz', text: '★彡' },
  { label: 'Puntos simples', text: '• • •' },
  { label: 'Flor oriental', text: '❀ ─── ❀' },
];

// Custom Symbol Decorator Templates
const DECORATOR_TEMPLATES = [
  { prefix: '♡ ', suffix: ' ♡', label: '♡ Corazones ♡' },
  { prefix: '★ ', suffix: ' ★', label: '★ Estrellas ★' },
  { prefix: '✦ ', suffix: ' ✦', label: '✦ Destellos ✦' },
  { prefix: '୨୧ ', suffix: ' ୨୧', label: '୨୧ Lazo ୨୧' },
  { prefix: '『 ', suffix: ' 』', label: '『 Caja 』' },
  { prefix: '【 ', suffix: ' 】', label: '【 Marco 】' },
  { prefix: '꧁ ', suffix: ' ꧂', label: '꧁ Adorno ꧂' },
  { prefix: '• ', suffix: ' •', label: '• Punto •' },
  { prefix: '— ', suffix: ' —', label: '— Guion —' },
];

export default function InstagramSymbolsExplorer() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  
  // Custom Decorator state
  const [decoratorText, setDecoratorText] = useState<string>('Hola Instagram');
  const [selectedDecoratorIdx, setSelectedDecoratorIdx] = useState<number>(0);

  // Favorites & Recently Copied State (Local Storage)
  const [favorites, setFavorites] = useState<string[]>([]);
  const [recentSymbols, setRecentSymbols] = useState<string[]>([]);

  // Load favorites & recents on client mount
  useEffect(() => {
    try {
      const savedFavs = localStorage.getItem('ig_symbols_favs');
      if (savedFavs) setFavorites(JSON.parse(savedFavs));

      const savedRecents = localStorage.getItem('ig_symbols_recents');
      if (savedRecents) setRecentSymbols(JSON.parse(savedRecents));
    } catch {
      // Ignore localStorage read errors
    }
  }, []);

  // Copy handler
  const handleCopy = (textToCopy: string, key: string, singleSymbol?: string) => {
    try {
      navigator.clipboard.writeText(textToCopy);
      setCopiedKey(key);
      setTimeout(() => {
        setCopiedKey(null);
      }, 2000);

      // Save to recent symbols if single symbol
      if (singleSymbol) {
        setRecentSymbols((prev) => {
          const updated = [singleSymbol, ...prev.filter((s) => s !== singleSymbol)].slice(0, 10);
          try {
            localStorage.setItem('ig_symbols_recents', JSON.stringify(updated));
          } catch {
            // Ignore write errors
          }
          return updated;
        });
      }
    } catch {
      // Fallback feedback if clipboard fails
      alert('Por favor copia este texto manualmente: ' + textToCopy);
    }
  };

  // Toggle Favorite Symbol
  const toggleFavorite = (symbol: string) => {
    setFavorites((prev) => {
      const isFav = prev.includes(symbol);
      const updated = isFav ? prev.filter((s) => s !== symbol) : [...prev, symbol];
      try {
        localStorage.setItem('ig_symbols_favs', JSON.stringify(updated));
      } catch {
        // Ignore write errors
      }
      return updated;
    });
  };

  // Filter Categories & Items based on Search & Category Selection
  const normalizedSearch = searchTerm.toLowerCase().trim();

  const filteredCategories = SYMBOL_CATEGORIES.map((cat) => {
    if (selectedCategory !== 'all' && cat.id !== selectedCategory) {
      return null;
    }

    if (!normalizedSearch) {
      return cat;
    }

    const matchingItems = cat.items.filter(
      (item) =>
        item.symbol.includes(normalizedSearch) ||
        item.name.toLowerCase().includes(normalizedSearch) ||
        item.keywords.some((kw) => kw.includes(normalizedSearch))
    );

    if (matchingItems.length === 0) return null;

    return {
      ...cat,
      items: matchingItems,
    };
  }).filter(Boolean) as SymbolCategory[];

  return (
    <div className={styles.explorerContainer}>
      {/* Explorer Main Card */}
      <div id="explorador-simbolos" className={styles.toolCard}>
        <div className={styles.toolHeader}>
          <h2 className={styles.toolTitle}>Explorador de Símbolos para Instagram</h2>
          {searchTerm && (
            <button
              type="button"
              className={styles.clearBtn}
              onClick={() => setSearchTerm('')}
              aria-label="Limpiar búsqueda"
            >
              Limpiar búsqueda ✕
            </button>
          )}
        </div>

        {/* Live Search Input Field */}
        <div className={styles.searchGroup}>
          <label htmlFor="symbol-search-input" className={styles.searchLabel}>
            Buscar símbolos:
          </label>
          <input
            id="symbol-search-input"
            type="text"
            className={styles.searchInput}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Busca un símbolo (ej. corazón, estrella, flecha, flor)..."
            aria-label="Buscar símbolos por nombre o palabra clave"
          />
        </div>

        {/* Category Navigation Bar */}
        <div id="categorias-simbolos" className={styles.categoryBar}>
          <button
            type="button"
            className={`${styles.catTabBtn} ${selectedCategory === 'all' ? styles.activeCatTab : ''}`}
            onClick={() => setSelectedCategory('all')}
          >
            Todos
          </button>
          {SYMBOL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`${styles.catTabBtn} ${selectedCategory === cat.id ? styles.activeCatTab : ''}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Local Storage Favorites Display Section (if any) */}
        {favorites.length > 0 && selectedCategory === 'all' && !searchTerm && (
          <div className={styles.favoritesSection}>
            <div className={styles.favHeader}>
              <h3 className={styles.favTitle}>Mis Favoritos ({favorites.length})</h3>
            </div>
            <div className={styles.symbolGrid}>
              {favorites.map((sym, idx) => {
                const key = `fav-${idx}`;
                return (
                  <div key={idx} className={styles.symbolCard}>
                    <button
                      type="button"
                      className={styles.favToggleBtn}
                      onClick={() => toggleFavorite(sym)}
                      title="Quitar de favoritos"
                      aria-label={`Quitar ${sym} de favoritos`}
                    >
                      ★
                    </button>
                    <span className={styles.symbolGraphic}>{sym}</span>
                    <button
                      type="button"
                      className={`${styles.smallCopyBtn} ${copiedKey === key ? styles.copiedBtn : ''}`}
                      onClick={() => handleCopy(sym, key, sym)}
                    >
                      {copiedKey === key ? '¡Copiado!' : 'Copiar'}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Recently Copied Section */}
        {recentSymbols.length > 0 && selectedCategory === 'all' && !searchTerm && (
          <div className={styles.recentsBox}>
            <span className={styles.recentsLabel}>Copiados recientemente:</span>
            <div className={styles.recentsList}>
              {recentSymbols.map((sym, idx) => {
                const key = `recent-${idx}`;
                return (
                  <button
                    key={idx}
                    type="button"
                    className={`${styles.recentChip} ${copiedKey === key ? styles.copiedBtn : ''}`}
                    onClick={() => handleCopy(sym, key)}
                    title={`Copiar ${sym}`}
                  >
                    {sym} {copiedKey === key ? '✓' : ''}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Rendered Categories and Symbol Grids */}
        {filteredCategories.length === 0 ? (
          <div className={styles.noResultsBox}>
            <p className={styles.noResultsTitle}>No encontramos símbolos para esa búsqueda</p>
            <p className={styles.noResultsSub}>Intenta con términos más generales como &quot;corazon&quot;, &quot;estrella&quot;, &quot;flecha&quot; o &quot;separador&quot;.</p>
            <button
              type="button"
              className={styles.resetSearchBtn}
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
            >
              Ver todos los símbolos
            </button>
          </div>
        ) : (
          <div className={styles.categoriesStack}>
            {filteredCategories.map((cat) => {
              const allCategorySymbolsStr = cat.items.map((item) => item.symbol).join(' ');
              const copyAllKey = `cat-all-${cat.id}`;
              return (
                <div key={cat.id} className={styles.categoryBlock}>
                  <div className={styles.categoryHeaderRow}>
                    <h3 className={styles.categoryTitle}>{cat.title}</h3>
                    <button
                      type="button"
                      className={`${styles.copyAllBtn} ${copiedKey === copyAllKey ? styles.copiedBtn : ''}`}
                      onClick={() => handleCopy(allCategorySymbolsStr, copyAllKey)}
                      aria-label={`Copiar todos los símbolos de ${cat.title}`}
                    >
                      {copiedKey === copyAllKey ? '¡Copiados!' : 'Copiar todos'}
                    </button>
                  </div>

                  <div className={styles.symbolGrid}>
                    {cat.items.map((item, iIdx) => {
                      const cardKey = `sym-${cat.id}-${iIdx}`;
                      const isFav = favorites.includes(item.symbol);
                      return (
                        <div key={iIdx} className={styles.symbolCard}>
                          <button
                            type="button"
                            className={`${styles.favToggleBtn} ${isFav ? styles.isFav : ''}`}
                            onClick={() => toggleFavorite(item.symbol)}
                            title={isFav ? 'Quitar de favoritos' : 'Guardar en favoritos'}
                            aria-label={`Guardar ${item.name} en favoritos`}
                          >
                            {isFav ? '★' : '☆'}
                          </button>
                          <span className={styles.symbolGraphic}>{item.symbol}</span>
                          <span className={styles.symbolName}>{item.name}</span>
                          <button
                            type="button"
                            className={`${styles.smallCopyBtn} ${copiedKey === cardKey ? styles.copiedBtn : ''}`}
                            onClick={() => handleCopy(item.symbol, cardKey, item.symbol)}
                            aria-label={`Copiar símbolo ${item.name}`}
                          >
                            {copiedKey === cardKey ? '¡Copiado!' : 'Copiar'}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Symbol Combinations Section */}
      <div className={styles.sectionBlock}>
        <h2 className={styles.subSectionTitle}>Combinaciones de símbolos para Instagram</h2>
        <p className={styles.subSectionDesc}>Combinaciones listas para copiar y usar como separadores o marcos visuales:</p>

        <div className={styles.combinationsGrid}>
          {SYMBOL_COMBINATIONS.map((combo, idx) => {
            const key = `combo-${idx}`;
            return (
              <div key={idx} className={styles.combinationCard}>
                <span className={styles.comboLabel}>{combo.label}</span>
                <p className={styles.comboText}>{combo.text}</p>
                <button
                  type="button"
                  className={`${styles.copyBtn} ${copiedKey === key ? styles.copiedBtn : ''}`}
                  onClick={() => handleCopy(combo.text, key)}
                  aria-label={`Copiar combinación ${combo.label}`}
                >
                  {copiedKey === key ? '¡Copiado!' : 'Copiar'}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Custom Symbol Decorator Tool */}
      <div className={styles.sectionBlock}>
        <h2 className={styles.subSectionTitle}>Decora tu propio texto con símbolos</h2>
        <p className={styles.subSectionDesc}>Escribe cualquier frase o nombre y añade adornos Unicode de forma instantánea:</p>

        <div className={styles.decoratorBox}>
          <div className={styles.decoratorInputsGrid}>
            <div className={styles.decoratorInputGroup}>
              <label htmlFor="custom-decorator-input" className={styles.decoratorLabel}>
                Escribe tu texto:
              </label>
              <input
                id="custom-decorator-input"
                type="text"
                className={styles.decoratorInput}
                value={decoratorText}
                onChange={(e) => setDecoratorText(e.target.value)}
                placeholder="Escribe una frase o nombre..."
                aria-label="Escribe tu texto para decorar con símbolos"
              />
            </div>

            <div className={styles.decoratorSelectGroup}>
              <span className={styles.decoratorLabel}>Elige un adorno:</span>
              <div className={styles.decoratorChipsGrid}>
                {DECORATOR_TEMPLATES.map((tmpl, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`${styles.decoratorChip} ${selectedDecoratorIdx === idx ? styles.activeDecoratorChip : ''}`}
                    onClick={() => setSelectedDecoratorIdx(idx)}
                  >
                    {tmpl.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Decorator Result Box */}
          {(() => {
            const tmpl = DECORATOR_TEMPLATES[selectedDecoratorIdx];
            const decoratedResult = `${tmpl.prefix}${decoratorText.trim() || 'Tu texto'}${tmpl.suffix}`;
            const key = `custom-decorator-result`;
            return (
              <div className={styles.decoratorOutputCard}>
                <span className={styles.decoratorOutputLabel}>Texto decorado:</span>
                <p className={styles.decoratorOutputText}>{decoratedResult}</p>
                <button
                  type="button"
                  className={`${styles.copyBtn} ${copiedKey === key ? styles.copiedBtn : ''}`}
                  onClick={() => handleCopy(decoratedResult, key)}
                >
                  {copiedKey === key ? '¡Copiado!' : 'Copiar texto decorado'}
                </button>
              </div>
            );
          })()}
        </div>
      </div>
    </div>
  );
}
