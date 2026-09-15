'use client';

import { useState } from 'react';
import Link from 'next/link';
import { stylesMap } from '../../../utils/unicodeTransformer';
import styles from './page.module.css';

// Quick sample buttons
const SAMPLE_BUTTONS = [
  'Hola mundo',
  'Mi nombre',
  'Buenos días',
  'Te quiero',
  'Mi perfil',
  'Bienvenido',
  'Gracias'
];

// Style Categories
const CATEGORY_TABS = [
  { id: 'Todas', label: 'Todas' },
  { id: 'Letras Elegantes', label: 'Elegantes' },
  { id: 'Letras Cursivas', label: 'Cursivas' },
  { id: 'Letras Negritas', label: 'Negritas' },
  { id: 'Modernas', label: 'Modernas' },
  { id: 'Letras Decorativas', label: 'Decorativas' },
  { id: 'Divertidas', label: 'Divertidas' },
  { id: 'Letras Especiales', label: 'Especiales' },
];

// Ready-Made Styled Text Templates
const READY_MADE_STYLES = [
  {
    category: 'Instagram',
    id: 'instagram',
    items: [
      { text: '✨ 𝓜𝓲 𝓶𝓾𝓷𝓭𝓸, 𝓶𝓲𝓼 𝓻𝓮𝓰𝓵𝓪𝓼 ✨', label: 'Bio / Perfil' },
      { text: '♡ 𝒱𝒾𝓋ℯ 𝒸𝒶𝒹𝒶 𝓂ℴ𝓂ℯ𝓃𝓉ℴ ♡', label: 'Caption' },
      { text: '★ 𝕊𝕚𝕖𝕞𝕡𝕣𝕖 𝕙𝕒𝕔𝕚𝕒 𝕒𝕕𝕖𝕝𝕒𝕟𝕥𝕖 ★', label: 'Frase' },
      { text: '𝓕𝓸𝓽𝓸𝓰𝓻𝓪𝓯í𝓪 | 𝓥𝓲𝓪𝓳𝓮𝓼 ✈️', label: 'Descripción' },
    ]
  },
  {
    category: 'WhatsApp',
    id: 'whatsapp',
    items: [
      { text: '☀️ 𝙱𝚞𝚎𝚗𝚘𝚜 𝚍í𝚊𝚜 𝚊 𝚝𝚘𝚍𝚘𝚜', label: 'Estado' },
      { text: '✨ 𝒬𝓊ℯ 𝓉ℯ𝓃ℊ𝒶𝓈 𝓊𝓃 𝒻ℯ𝓁𝒾𝓏 𝒹í𝒶', label: 'Mensaje' },
      { text: '☕ 𝙽𝚘𝚜 𝚟𝚎𝚖𝚘𝚜 𝚙𝚛𝚘𝚗𝚝𝚘', label: 'Saludo' },
      { text: '💖 𝓖𝓻𝓪𝓬𝓲𝓪𝓼 𝓹𝓸𝓻 𝓽𝓸𝓭𝓸', label: 'Agradecimiento' },
    ]
  },
  {
    category: 'TikTok',
    id: 'tiktok',
    items: [
      { text: '🎬 𝙲𝚛𝚎𝚊𝚍𝚘𝚛 𝚍𝚎 𝚌𝚘𝚗𝚝𝚎𝚗𝚒𝚍𝚘', label: 'Bio TikTok' },
      { text: '⚡ 𝓝𝓾𝓮𝓿𝓸 𝓿í𝓭𝓮𝓸 𝓬𝓪𝓭𝒶 𝓭í𝒶', label: 'Anuncio' },
      { text: '🎵 𝓜ú𝓼𝓲𝓬𝓪, 𝓫𝓪𝓲𝓵𝓮 𝔂 𝓻𝓲𝓼𝓪𝓼', label: 'Perfil' },
      { text: '✨ 𝓢í𝓰𝓾𝓮𝓶𝓮 𝓹𝓪𝓻𝓪 𝓶á𝓼', label: 'CTA' },
    ]
  },
  {
    category: 'Nombres Decorativos',
    id: 'nombres',
    items: [
      { text: '★ 𝓐𝓵𝓮𝔁 ★', label: 'Nombre con Estrellas' },
      { text: '꧁ 𝒮ℴ𝒻í𝒶 ꧂', label: 'Nombre Ornamentado' },
      { text: '⚡ 𝙲𝚊𝚛𝚕𝚘𝚜 ⚡', label: 'Nombre Rayo' },
      { text: '✿ 𝓛𝓪𝓾𝓻𝓪 ✿', label: 'Nombre Floral' },
    ]
  },
  {
    category: 'Frases Cortas',
    id: 'frases',
    items: [
      { text: '𝓛𝓪 𝓿𝓲𝓭𝓪 𝓮𝓼 𝓫𝓮𝓵𝓵𝓪 ✨', label: 'Frase' },
      { text: '𝙽𝚞𝚗𝚌𝚊 𝚝𝚎 𝚛𝚒𝚗𝚍𝚊𝚜 💪', label: 'Motivación' },
      { text: '𝒞𝓇ℯℯ ℯ𝓃 𝓉í 𝓈𝒾ℯ𝓂𝓅𝓇ℯ 🌟', label: 'Confianza' },
      { text: '𝙿𝚊𝚜𝚘 𝚊 𝚙𝚊𝚜𝚘 🐾', label: 'Progreso' },
    ]
  }
];

// Styled Letter Explorer Examples for Letter "A" and "S"
const LETTER_EXPLORER_SAMPLES = [
  { char: 'A', variants: ['A', '𝐀', '𝐴', '𝓐', '𝔄', 'Ⓐ', 'Ａ'] },
  { char: 'E', variants: ['E', '𝐄', '𝐸', '𝓔', '𝔈', 'Ⓔ', 'Ｅ'] },
  { char: 'S', variants: ['S', '𝐒', '𝑆', '𝓢', '𝔖', 'Ⓢ', 'Ｓ'] },
  { char: 'M', variants: ['M', '𝐌', '𝑀', '𝓜', '𝔐', 'Ⓜ', 'Ｍ'] }
];

export default function StyledTextExplorer() {
  const [inputText, setInputText] = useState<string>('Hola mundo');
  const [activeCategory, setActiveCategory] = useState<string>('Todas');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => {
      setCopiedKey(null);
    }, 2000);
  };

  const clearInput = () => {
    setInputText('');
  };

  const applySample = (sampleText: string) => {
    setInputText(sampleText);
  };

  // Filter styles based on category
  const getFilteredStyles = () => {
    if (activeCategory === 'Todas') return stylesMap;
    if (activeCategory === 'Modernas') return stylesMap.filter(s => s.id === 'monospace' || s.id === 'doubleStruck' || s.id === 'smallCaps');
    if (activeCategory === 'Divertidas') return stylesMap.filter(s => s.id === 'circled' || s.id === 'bubble');
    return stylesMap.filter(s => s.category === activeCategory);
  };

  const currentFilteredStyles = getFilteredStyles();
  const currentText = inputText.trim();

  // Full alphabet strings
  const scriptStyleObj = stylesMap.find(s => s.id === 'script') || stylesMap[3];
  const fullUpperScript = scriptStyleObj.transform('ABCDEFGHIJKLMNOPQRSTUVWXYZ').split('').join(' ');
  const fullLowerScript = scriptStyleObj.transform('abcdefghijklmnopqrstuvwxyz').split('').join(' ');
  const fullUpperStd = 'A B C D E F G H I J K L M N Ñ O P Q R S T U V W X Y Z';
  const fullLowerStd = 'a b c d e f g h i j k l m n ñ o p q r s t u v w x y z';

  return (
    <div className={styles.explorerContainer}>
      {/* Main Interactive Styled Text Tool Card */}
      <div id="herramienta-estilos" className={styles.toolCard}>
        <div className={styles.toolHeader}>
          <h2 className={styles.toolTitle}>Generador de Texto con Estilos</h2>
          {inputText && (
            <button
              type="button"
              className={styles.clearBtn}
              onClick={clearInput}
              aria-label="Limpiar texto"
            >
              Limpiar ✕
            </button>
          )}
        </div>

        {/* Text Input Area */}
        <div className={styles.inputGroup}>
          <textarea
            className={styles.mainTextarea}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Escribe o pega tu texto aquí..."
            rows={4}
            aria-label="Escribe o pega tu texto para estilizar"
          />
        </div>

        {/* Quick Example Buttons */}
        <div className={styles.samplesBox}>
          <span className={styles.samplesLabel}>Prueba un texto rápido:</span>
          <div className={styles.samplesGrid}>
            {SAMPLE_BUTTONS.map((sample) => (
              <button
                key={sample}
                type="button"
                className={styles.sampleChip}
                onClick={() => applySample(sample)}
              >
                {sample}
              </button>
            ))}
          </div>
        </div>

        {/* Category Filters */}
        <div className={styles.categoryBar}>
          <span className={styles.categoryLabel}>Explorar por estilo:</span>
          <div className={styles.categoryPills}>
            {CATEGORY_TABS.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`${styles.categoryPill} ${activeCategory === cat.id ? styles.activePill : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Live Generated Results */}
        {currentText === '' ? (
          <div className={styles.emptyStateBox}>
            <p className={styles.emptyStateTitle}>Escribe algo arriba para comenzar a estilizar</p>
            <p className={styles.emptyStateSub}>Introduce una palabra, frase o nombre y verás múltiples estilos generados al instante.</p>
          </div>
        ) : (
          <div className={styles.resultsGrid}>
            {currentFilteredStyles.map((style) => {
              const convertedText = style.transform(currentText);
              const key = `gen-${style.id}`;
              return (
                <div key={style.id} className={styles.resultCard}>
                  <div className={styles.resultHeader}>
                    <span className={styles.styleBadge}>{style.name}</span>
                    <span className={styles.categoryBadge}>{style.category}</span>
                  </div>
                  <div className={styles.resultContent}>
                    <p className={styles.resultText}>{convertedText}</p>
                  </div>
                  <button
                    type="button"
                    className={`${styles.copyBtn} ${copiedKey === key ? styles.copiedBtn : ''}`}
                    onClick={() => handleCopy(convertedText, key)}
                    aria-label={`Copiar texto con estilo ${style.name}`}
                  >
                    {copiedKey === key ? '¡Copiado!' : 'Copiar'}
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Style Comparison Section */}
      <div className={styles.comparisonSection}>
        <h2 className={styles.subSectionTitle}>Compara diferentes estilos de texto</h2>
        <p className={styles.subSectionDesc}>Compara cómo se visualiza el mismo texto en los principales estilos Unicode disponibles:</p>

        <div className={styles.comparisonGrid}>
          {stylesMap.slice(0, 9).map((style, idx) => {
            const sampleWord = currentText || 'Hola';
            const transformed = style.transform(sampleWord);
            const key = `comp-${style.id}`;
            return (
              <div key={idx} className={styles.comparisonCard}>
                <div className={styles.compHeader}>
                  <span className={styles.compStyleName}>{style.name}</span>
                </div>
                <div className={styles.compBody}>
                  <span className={styles.compOriginalLabel}>Original: {sampleWord}</span>
                  <p className={styles.compTransformedText}>{transformed}</p>
                </div>
                <button
                  type="button"
                  className={`${styles.smallCopyBtn} ${copiedKey === key ? styles.copiedBtn : ''}`}
                  onClick={() => handleCopy(transformed, key)}
                >
                  {copiedKey === key ? '¡Copiado!' : 'Copiar'}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Ready-Made Styled Text Section */}
      <div className={styles.readyMadeSection}>
        <h2 className={styles.subSectionTitle}>Textos con estilos para copiar</h2>
        <p className={styles.subSectionDesc}>Selección de frases y textos estilizados prediseñados listos para usar en tus redes sociales:</p>

        <div className={styles.readyCategoriesGrid}>
          {READY_MADE_STYLES.map((cat) => (
            <div key={cat.id} className={styles.readyBlock}>
              <h3 className={styles.readyBlockTitle}>{cat.category}</h3>
              <div className={styles.readyItemsGrid}>
                {cat.items.map((item, idx) => {
                  const key = `ready-${cat.id}-${idx}`;
                  return (
                    <div key={idx} className={styles.readyCard}>
                      <span className={styles.readyLabel}>{item.label}</span>
                      <p className={styles.readyText}>{item.text}</p>
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

      {/* Styled Letter Explorer Section */}
      <div className={styles.letterExplorerSection}>
        <h2 className={styles.subSectionTitle}>Letras con estilos</h2>
        <p className={styles.subSectionDesc}>Explora cómo cambian las letras individuales en sus distintas formas gráficas Unicode:</p>

        <div className={styles.letterExplorerGrid}>
          {LETTER_EXPLORER_SAMPLES.map((sample, idx) => (
            <div key={idx} className={styles.letterCard}>
              <h3 className={styles.letterCardHeader}>Letra {sample.char}</h3>
              <div className={styles.variantChipsList}>
                {sample.variants.map((variant, vIdx) => {
                  const key = `letter-${sample.char}-${vIdx}`;
                  return (
                    <button
                      key={vIdx}
                      type="button"
                      className={`${styles.variantChip} ${copiedKey === key ? styles.copiedChip : ''}`}
                      onClick={() => handleCopy(variant, key)}
                      aria-label={`Copiar letra ${variant}`}
                    >
                      <span>{variant}</span>
                      <small>{copiedKey === key ? '✓' : 'Copiar'}</small>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Alphabet Compact Copy Section */}
      <div className={styles.alphabetCompactSection}>
        <h2 className={styles.subSectionTitle}>Alfabeto en diferentes estilos</h2>
        <div className={styles.alphabetCardsGrid}>
          <div className={styles.alphabetCard}>
            <h3>Alfabeto Estándar (Mayúsculas)</h3>
            <p className={styles.alphabetText}>{fullUpperStd}</p>
            <button
              type="button"
              className={`${styles.copyBtn} ${copiedKey === 'alpha-upper-std' ? styles.copiedBtn : ''}`}
              onClick={() => handleCopy(fullUpperStd, 'alpha-upper-std')}
            >
              {copiedKey === 'alpha-upper-std' ? '¡Copiado!' : 'Copiar'}
            </button>
          </div>

          <div className={styles.alphabetCard}>
            <h3>Alfabeto Estándar (Minúsculas)</h3>
            <p className={styles.alphabetText}>{fullLowerStd}</p>
            <button
              type="button"
              className={`${styles.copyBtn} ${copiedKey === 'alpha-lower-std' ? styles.copiedBtn : ''}`}
              onClick={() => handleCopy(fullLowerStd, 'alpha-lower-std')}
            >
              {copiedKey === 'alpha-lower-std' ? '¡Copiado!' : 'Copiar'}
            </button>
          </div>

          <div className={styles.alphabetCard}>
            <h3>Alfabeto Cursivo (Mayúsculas)</h3>
            <p className={styles.alphabetText}>{fullUpperScript}</p>
            <button
              type="button"
              className={`${styles.copyBtn} ${copiedKey === 'alpha-upper-script' ? styles.copiedBtn : ''}`}
              onClick={() => handleCopy(fullUpperScript, 'alpha-upper-script')}
            >
              {copiedKey === 'alpha-upper-script' ? '¡Copiado!' : 'Copiar'}
            </button>
          </div>

          <div className={styles.alphabetCard}>
            <h3>Alfabeto Cursivo (Minúsculas)</h3>
            <p className={styles.alphabetText}>{fullLowerScript}</p>
            <button
              type="button"
              className={`${styles.copyBtn} ${copiedKey === 'alpha-lower-script' ? styles.copiedBtn : ''}`}
              onClick={() => handleCopy(fullLowerScript, 'alpha-lower-script')}
            >
              {copiedKey === 'alpha-lower-script' ? '¡Copiado!' : 'Copiar'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
