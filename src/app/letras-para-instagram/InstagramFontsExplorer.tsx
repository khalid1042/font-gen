'use client';

import { useState } from 'react';
import Link from 'next/link';
import { stylesMap } from '../../utils/unicodeTransformer';
import styles from './page.module.css';

// Quick Instagram Example Chips
const INSTAGRAM_SAMPLES = [
  'Mi bio',
  'Mi nombre',
  'Mi mundo',
  'Buenos días',
  'Vive el momento',
  'Creador digital',
  'Sueña en grande'
];

// Instagram Use-Case Tabs
const INSTAGRAM_TABS = [
  { id: 'all', label: 'Todos' },
  { id: 'bio', label: 'Bio' },
  { id: 'nombre', label: 'Nombre' },
  { id: 'captions', label: 'Captions' },
  { id: 'comentarios', label: 'Comentarios' },
  { id: 'publicaciones', label: 'Publicaciones' },
  { id: 'historias', label: 'Historias' },
  { id: 'mensajes', label: 'Mensajes' },
  { id: 'username', label: 'Nombre de usuario' },
];

// Ready-to-copy Instagram Bio Examples
const BIO_TEMPLATES = [
  { label: 'Perfil Creativo', text: '✨ Creador digital ✨ | 📸 Fotografía | 📍 Madrid' },
  { label: 'Estilo Delicado', text: '♡ Vive, sueña, disfruta ♡ | 🌿 Mente positiva' },
  { label: 'Frase Inspiradora', text: '𝓢𝓸𝓷̃𝓪𝓻 𝓼𝓲𝓷 𝓵𝓲́𝓶𝓲𝓽𝓮𝓼 | 💫 Creando recuerdos' },
  { label: 'Viajes & Estilo', text: '✈️ Viajero empedernido | ☕ Café & Libros' },
  { label: 'Modo Vida', text: '𝒱𝒾𝓋𝒾ℯ𝓃𝒹ℴ ℯ𝓁 𝓂ℴ𝓂ℯ𝓃𝓉ℴ ☀️ | 🎨 Arte y diseño' },
  { label: 'Estilo Minimal', text: '✦ Simplicidad y elegancia ✦' }
];

// Ready-to-copy Instagram Name Examples
const NAME_SAMPLES = [
  { original: 'Carlos', bold: '𝐂𝐚𝐫𝐥𝐨𝐬', italic: '𝘊𝘢𝘳𝘭𝘰𝘴', script: '𝓒𝓪𝓻𝓵𝓸𝓼', fraktur: '𝔠𝔞𝔯𝔩𝔬𝔰' },
  { original: 'Sofia', bold: '𝐒𝐨𝐟𝐢𝐚', italic: '𝘚𝘰𝘧𝘪𝘢', script: '𝓢𝓸𝓯𝓲𝓪', fraktur: '𝔰𝔬𝔣𝔦𝔞' },
  { original: 'Alex', bold: '𝐀𝐥𝐞𝐱', italic: '𝘈𝘭𝘦𝘹', script: '𝓐𝓵𝓮𝔁', fraktur: '𝔞𝔩𝔢𝔡' },
  { original: 'Laura', bold: '𝐋𝐚𝐮𝐫𝐚', italic: '𝘓𝘢𝘶𝘳𝘢', script: '𝓛𝓪𝓾𝓻𝓪', fraktur: '𝔩𝔞𝔲𝔯𝔞' },
];

// Instagram Caption Examples by Category
const CAPTION_CATEGORIES = [
  {
    name: 'Motivación',
    items: [
      { text: '✨ 𝓢𝓲𝓮𝓶𝓹𝓻𝓮 𝓱𝓪𝓬𝓲𝓪 𝓪𝓭𝓮𝓵𝓪𝓷𝓽𝓮 ✨', label: 'Motivación 1' },
      { text: '💪 𝙽𝚞𝚗𝚌𝚊 𝚝𝚎 𝚛𝚒𝚗𝚍𝚊𝚜', label: 'Motivación 2' },
      { text: '🌟 𝒞𝓇ℯℯ ℯ𝓃 𝓉í 𝓈𝒾ℯ𝓂𝓅𝓇ℯ', label: 'Motivación 3' },
    ]
  },
  {
    name: 'Amor & Amistad',
    items: [
      { text: '💖 𝓛𝓪 𝓿𝓲𝓭𝓪 𝓮𝓼 𝓶𝓮𝓳𝓸𝓻 𝓬𝓸𝓷𝓽𝓲𝓰𝓸', label: 'Amor 1' },
      { text: '♡ 𝒞ℴ𝓁ℯ𝒸𝒸𝒾ℴ𝓃𝒶𝓃𝒹ℴ 𝓂ℴ𝓂ℯ𝓃𝓉ℴ𝓈 𝒿𝓊𝓃𝓉ℴ𝓈 ♡', label: 'Amor 2' },
      { text: '✨ 𝙼𝚒𝚜 𝚙𝚎𝚛𝚜𝚘𝚗𝚊𝚜 𝚏𝚊𝚟𝚘𝚛𝚒𝚝𝚊𝚜', label: 'Amistad' },
    ]
  },
  {
    name: 'Viajes & Lifestyle',
    items: [
      { text: '✈️ 𝓥𝓲𝓪𝓳𝓪𝓻 𝓮𝓼 𝓿𝓲𝓿𝓲𝓻 𝓭𝓸𝓼 𝓿𝓮𝓬𝓮𝓼', label: 'Viajes 1' },
      { text: '☕ 𝒟í𝒶𝓈 𝒹ℯ 𝒸𝒶𝒻é 𝓎 𝓈ℴ𝓁', label: 'Lifestyle' },
      { text: '🌊 𝙰𝚕𝚖𝚊 𝚕𝚒𝚋𝚛𝚎 𝚢 𝚖𝚊𝚛', label: 'Naturaleza' },
    ]
  }
];

// Instagram Comments Examples
const COMMENT_SAMPLES = [
  { text: '✨ Increíble ✨', label: 'Elogio brillante' },
  { text: 'Qué bonito 😍', label: 'Reacción dulce' },
  { text: '🔥🔥🔥', label: 'Fuego' },
  { text: '𝓜𝓾𝔂 𝓫𝓸𝓷𝓲𝓽𝓸', label: 'Cursiva elegante' },
  { text: '♡ Me encanta ♡', label: 'Corazón' },
  { text: '𝔉𝔞𝔫𝔱á𝔰𝔱𝔦𝔠𝔬 👌', label: 'Gótico' }
];

// Instagram Stories Overlay Examples
const STORY_SAMPLES = [
  { text: '☀️ 𝙱𝚞𝚎𝚗𝚘𝚜 𝚍í𝚊𝚜', label: 'Mañana' },
  { text: '🎉 ¡𝐹𝑒𝓁𝒾𝒸𝒾𝒹𝒶𝒹𝑒𝓈!', label: 'Cumpleaños' },
  { text: '✨ 𝒩𝓊ℯ𝓋ℴ 𝓅ℴ𝓈𝓉', label: 'Nuevo Post' },
  { text: '☕ 𝓒𝓸𝓯𝓯𝓮𝓮 𝓽𝓲𝓶𝓮', label: 'Café' },
  { text: '✈️ 𝓞𝓷 𝓽𝓱𝓮 𝓻𝓸𝓪𝓭', label: 'Viaje' },
  { text: '🌙 𝙱𝚞𝚎𝚗𝚊𝚜 𝚗𝚘𝚌𝚑𝚎𝚜', label: 'Noche' }
];

// Letter Explorer Samples for A, B, M, S
const LETTER_EXPLORER_ITEMS = [
  { char: 'A', variants: ['A', '𝐀', '𝐴', '𝓐', '𝔄', 'Ⓐ', 'Ａ'] },
  { char: 'B', variants: ['B', '𝐁', '𝐵', '𝓑', '𝔅', 'Ⓑ', 'Ｂ'] },
  { char: 'M', variants: ['M', '𝐌', '𝑀', '𝓜', '𝔐', 'Ⓜ', 'Ｍ'] },
  { char: 'S', variants: ['S', '𝐒', '𝑆', '𝓢', '𝔖', 'Ⓢ', 'Ｓ'] }
];

export default function InstagramFontsExplorer() {
  const [inputText, setInputText] = useState<string>('Mi mundo, mis reglas');
  const [activeTab, setActiveTab] = useState<string>('all');
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

  const currentText = inputText.trim();

  // Alphabets
  const scriptStyleObj = stylesMap.find(s => s.id === 'script') || stylesMap[3];
  const fullUpperScript = scriptStyleObj.transform('ABCDEFGHIJKLMNOPQRSTUVWXYZ').split('').join(' ');
  const fullLowerScript = scriptStyleObj.transform('abcdefghijklmnopqrstuvwxyz').split('').join(' ');
  const fullUpperStd = 'A B C D E F G H I J K L M N Ñ O P Q R S T U V W X Y Z';
  const fullLowerStd = 'a b c d e f g h i j k l m n ñ o p q r s t u v w x y z';

  return (
    <div className={styles.explorerContainer}>
      {/* Main Interactive Instagram Generator Card */}
      <div id="generador-instagram" className={styles.toolCard}>
        <div className={styles.toolHeader}>
          <h2 className={styles.toolTitle}>Generador de Letras para Instagram</h2>
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

        {/* Input Textarea */}
        <div className={styles.inputGroup}>
          <textarea
            className={styles.mainTextarea}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Escribe tu texto para Instagram..."
            rows={4}
            aria-label="Escribe tu texto para Instagram"
          />
        </div>

        {/* Quick Instagram Example Chips */}
        <div className={styles.samplesBox}>
          <span className={styles.samplesLabel}>Ejemplos rápidos para Instagram:</span>
          <div className={styles.samplesGrid}>
            {INSTAGRAM_SAMPLES.map((sample) => (
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

        {/* Instagram Use-Case Tabs */}
        <div className={styles.useCaseBar}>
          <span className={styles.useCaseLabel}>Uso en Instagram:</span>
          <div className={styles.useCasePills}>
            {INSTAGRAM_TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={`${styles.useCasePill} ${activeTab === tab.id ? styles.activePill : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Live Generated Results */}
        {currentText === '' ? (
          <div className={styles.emptyStateBox}>
            <p className={styles.emptyStateTitle}>Escribe algo arriba para tu perfil de Instagram</p>
            <p className={styles.emptyStateSub}>Introduce tu nombre, bio o publicación y verás múltiples fuentes para Instagram al instante.</p>
          </div>
        ) : (
          <div className={styles.resultsGrid}>
            {stylesMap.map((style) => {
              const convertedText = style.transform(currentText);
              const key = `gen-${style.id}`;
              return (
                <div key={style.id} className={styles.resultCard}>
                  <div className={styles.resultHeader}>
                    <span className={styles.styleBadge}>{style.name}</span>
                    <span className={styles.categoryTag}>{style.category}</span>
                  </div>
                  <div className={styles.resultContent}>
                    <p className={styles.resultText}>{convertedText}</p>
                  </div>
                  <button
                    type="button"
                    className={`${styles.copyBtn} ${copiedKey === key ? styles.copiedBtn : ''}`}
                    onClick={() => handleCopy(convertedText, key)}
                    aria-label={`Copiar estilo ${style.name}`}
                  >
                    {copiedKey === key ? '¡Copiado!' : 'Copiar'}
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Instagram Bio Generator Section */}
      <div id="estilos-populares" className={styles.sectionBlock}>
        <h2 className={styles.subSectionTitle}>Letras para la bio de Instagram</h2>
        <p className={styles.subSectionDesc}>Plantillas y diseños de texto ideales para destacar la biografía de tu perfil:</p>

        <div className={styles.bioGrid}>
          {BIO_TEMPLATES.map((item, idx) => {
            const key = `bio-template-${idx}`;
            return (
              <div key={idx} className={styles.bioCard}>
                <span className={styles.cardLabel}>{item.label}</span>
                <p className={styles.bioText}>{item.text}</p>
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

      {/* Instagram Name Generator Section */}
      <div className={styles.sectionBlock}>
        <h2 className={styles.subSectionTitle}>Letras para nombres de Instagram</h2>
        <p className={styles.subSectionDesc}>Personaliza el nombre visible (Display Name) de tu perfil en diferentes estilos Unicode:</p>

        <div className={styles.namesGrid}>
          {NAME_SAMPLES.map((nameItem, idx) => (
            <div key={idx} className={styles.nameCard}>
              <h3 className={styles.nameOriginal}>Nombre: {nameItem.original}</h3>
              <div className={styles.nameVariantsList}>
                <div className={styles.nameRow}>
                  <span className={styles.nameVariantText}>{nameItem.bold}</span>
                  <button
                    type="button"
                    className={`${styles.smallCopyBtn} ${copiedKey === `name-bold-${idx}` ? styles.copiedBtn : ''}`}
                    onClick={() => handleCopy(nameItem.bold, `name-bold-${idx}`)}
                  >
                    {copiedKey === `name-bold-${idx}` ? '¡Copiado!' : 'Copiar'}
                  </button>
                </div>

                <div className={styles.nameRow}>
                  <span className={styles.nameVariantText}>{nameItem.italic}</span>
                  <button
                    type="button"
                    className={`${styles.smallCopyBtn} ${copiedKey === `name-italic-${idx}` ? styles.copiedBtn : ''}`}
                    onClick={() => handleCopy(nameItem.italic, `name-italic-${idx}`)}
                  >
                    {copiedKey === `name-italic-${idx}` ? '¡Copiado!' : 'Copiar'}
                  </button>
                </div>

                <div className={styles.nameRow}>
                  <span className={styles.nameVariantText}>{nameItem.script}</span>
                  <button
                    type="button"
                    className={`${styles.smallCopyBtn} ${copiedKey === `name-script-${idx}` ? styles.copiedBtn : ''}`}
                    onClick={() => handleCopy(nameItem.script, `name-script-${idx}`)}
                  >
                    {copiedKey === `name-script-${idx}` ? '¡Copiado!' : 'Copiar'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Instagram Captions Section */}
      <div className={styles.sectionBlock}>
        <h2 className={styles.subSectionTitle}>Letras para captions de Instagram</h2>
        <p className={styles.subSectionDesc}>Frases con estilo para las descripciones de tus fotos y vídeos:</p>

        <div className={styles.captionsStack}>
          {CAPTION_CATEGORIES.map((cat, cIdx) => (
            <div key={cIdx} className={styles.captionCatBlock}>
              <h3 className={styles.catTitle}>Categoría: {cat.name}</h3>
              <div className={styles.captionsGrid}>
                {cat.items.map((item, iIdx) => {
                  const key = `caption-${cIdx}-${iIdx}`;
                  return (
                    <div key={iIdx} className={styles.captionCard}>
                      <span className={styles.cardLabel}>{item.label}</span>
                      <p className={styles.captionText}>{item.text}</p>
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

      {/* Instagram Comments & Stories Section */}
      <div className={styles.twoColumnGrid}>
        <div className={styles.sectionBlock}>
          <h2 className={styles.subSectionTitle}>Letras para comentarios</h2>
          <div className={styles.simpleList}>
            {COMMENT_SAMPLES.map((item, idx) => {
              const key = `comment-${idx}`;
              return (
                <div key={idx} className={styles.simpleItemCard}>
                  <p className={styles.simpleItemText}>{item.text}</p>
                  <button
                    type="button"
                    className={`${styles.smallCopyBtn} ${copiedKey === key ? styles.copiedBtn : ''}`}
                    onClick={() => handleCopy(item.text, key)}
                  >
                    {copiedKey === key ? '¡Copiado!' : 'Copiar'}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        <div className={styles.sectionBlock}>
          <h2 className={styles.subSectionTitle}>Letras para historias</h2>
          <div className={styles.simpleList}>
            {STORY_SAMPLES.map((item, idx) => {
              const key = `story-${idx}`;
              return (
                <div key={idx} className={styles.simpleItemCard}>
                  <p className={styles.simpleItemText}>{item.text}</p>
                  <button
                    type="button"
                    className={`${styles.smallCopyBtn} ${copiedKey === key ? styles.copiedBtn : ''}`}
                    onClick={() => handleCopy(item.text, key)}
                  >
                    {copiedKey === key ? '¡Copiado!' : 'Copiar'}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Special Instagram Letters Explorer */}
      <div className={styles.sectionBlock}>
        <h2 className={styles.subSectionTitle}>Letras especiales para Instagram</h2>
        <p className={styles.subSectionDesc}>Caracteres individuales de la A a la Z para copiar de forma directa:</p>

        <div className={styles.letterExplorerGrid}>
          {LETTER_EXPLORER_ITEMS.map((item, idx) => (
            <div key={idx} className={styles.letterExplorerCard}>
              <h3 className={styles.letterExplorerTitle}>Letra {item.char}</h3>
              <div className={styles.chipsRow}>
                {item.variants.map((v, vIdx) => {
                  const key = `inst-letter-${item.char}-${vIdx}`;
                  return (
                    <button
                      key={vIdx}
                      type="button"
                      className={`${styles.chipBtn} ${copiedKey === key ? styles.copiedChip : ''}`}
                      onClick={() => handleCopy(v, key)}
                    >
                      <span className={styles.chipChar}>{v}</span>
                      <small>{copiedKey === key ? '✓' : 'Copiar'}</small>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Instagram Alphabet Quick Copy */}
      <div className={styles.sectionBlock}>
        <h2 className={styles.subSectionTitle}>Alfabeto de letras para Instagram</h2>
        <div className={styles.alphabetGrid}>
          <div className={styles.alphabetCard}>
            <h3>Alfabeto Estándar (Mayúsculas)</h3>
            <p className={styles.alphabetText}>{fullUpperStd}</p>
            <button
              type="button"
              className={`${styles.copyBtn} ${copiedKey === 'inst-alpha-std-upper' ? styles.copiedBtn : ''}`}
              onClick={() => handleCopy(fullUpperStd, 'inst-alpha-std-upper')}
            >
              {copiedKey === 'inst-alpha-std-upper' ? '¡Copiado!' : 'Copiar'}
            </button>
          </div>

          <div className={styles.alphabetCard}>
            <h3>Alfabeto Estándar (Minúsculas)</h3>
            <p className={styles.alphabetText}>{fullLowerStd}</p>
            <button
              type="button"
              className={`${styles.copyBtn} ${copiedKey === 'inst-alpha-std-lower' ? styles.copiedBtn : ''}`}
              onClick={() => handleCopy(fullLowerStd, 'inst-alpha-std-lower')}
            >
              {copiedKey === 'inst-alpha-std-lower' ? '¡Copiado!' : 'Copiar'}
            </button>
          </div>

          <div className={styles.alphabetCard}>
            <h3>Alfabeto Cursivo (Mayúsculas)</h3>
            <p className={styles.alphabetText}>{fullUpperScript}</p>
            <button
              type="button"
              className={`${styles.copyBtn} ${copiedKey === 'inst-alpha-script-upper' ? styles.copiedBtn : ''}`}
              onClick={() => handleCopy(fullUpperScript, 'inst-alpha-script-upper')}
            >
              {copiedKey === 'inst-alpha-script-upper' ? '¡Copiado!' : 'Copiar'}
            </button>
          </div>

          <div className={styles.alphabetCard}>
            <h3>Alfabeto Cursivo (Minúsculas)</h3>
            <p className={styles.alphabetText}>{fullLowerScript}</p>
            <button
              type="button"
              className={`${styles.copyBtn} ${copiedKey === 'inst-alpha-script-lower' ? styles.copiedBtn : ''}`}
              onClick={() => handleCopy(fullLowerScript, 'inst-alpha-script-lower')}
            >
              {copiedKey === 'inst-alpha-script-lower' ? '¡Copiado!' : 'Copiar'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
