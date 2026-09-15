'use client';

import { useState } from 'react';
import Link from 'next/link';
import { stylesMap } from '../../../utils/unicodeTransformer';
import styles from './page.module.css';

// Preset Bio Templates by Category
const BIO_TEMPLATES = [
  {
    category: 'Personal',
    items: [
      '✨ Viviendo a mi manera',
      '🌸 Creando momentos felices',
      '☀️ Disfrutando cada día',
    ]
  },
  {
    category: 'Professional',
    items: [
      '💻 Desarrollador web | Creador digital',
      '📈 Marketing y estrategia',
      '🎨 Diseñador | Creatividad sin límites',
    ]
  },
  {
    category: 'Travel',
    items: [
      '✈️ Viajando por el mundo',
      '🌍 Coleccionando lugares y recuerdos',
      '📍 Siempre buscando un nuevo destino',
    ]
  },
  {
    category: 'Fitness',
    items: [
      '💪 Entrena. Crece. Repite.',
      '🏋️ Fitness | Disciplina | Progreso',
    ]
  },
  {
    category: 'Photography',
    items: [
      '📸 Capturando momentos',
      '🌅 Fotografía y aventuras',
    ]
  },
  {
    category: 'Creator',
    items: [
      '🎬 Creador de contenido',
      '✨ Creando algo nuevo cada día',
    ]
  },
  {
    category: 'Aesthetic',
    items: [
      '☾ Dreamer • Creator • Explorer',
      '♡ Simplemente siendo yo',
      '✦ Sueña • Crea • Vive',
    ]
  }
];

// Bio Symbol Collections
const BIO_SYMBOLS = [
  { category: 'Corazones', symbols: '♡ ♥ ღ ❥ ❣ 💓 💖 💗' },
  { category: 'Estrellas', symbols: '★ ☆ ✦ ✧ ✨ 🌟 💫 ⭐️' },
  { category: 'Separadores', symbols: '• ─── ✦ ─── •   |   ·   •   °   ~' },
  { category: 'Flechas', symbols: '→ ➜ ➤ ⇢ ➯ ➔ ➲' },
  { category: 'Minimal', symbols: '· | • ° ✦ ✧ ❖ ◇' },
  { category: 'Decorativos', symbols: '୨୧ ♡ ༄ ❀ ✿ ❃ ❁ ❊' },
];

// Ready-to-copy Bio Ideas by Category
const BIO_IDEAS = [
  {
    category: 'Bios Cortas & Elegantes',
    items: [
      { text: '✨ 𝓢𝓲𝓮𝓶𝓹𝓻𝓮 𝓼é 𝓽ú 𝓶𝓲𝓼𝓶𝓸', label: 'Elegante 1' },
      { text: '♡ 𝒱𝒾𝓋𝒾ℯ𝓃𝒹ℴ ℯ𝓁 𝓅𝓇ℯ𝓈ℯ𝓃𝓉ℯ', label: 'Elegante 2' },
      { text: '✦ 𝕊𝕚𝕞𝕡𝕝𝕚𝕔𝕚𝕕𝕒𝕕 𝕪 𝕒𝕣𝕥𝕖', label: 'Moderno' },
    ]
  },
  {
    category: 'Bios Aesthetic & Creadores',
    items: [
      { text: '☾ 𝙳𝚛𝚎𝚊𝚖𝚎𝚛 • 𝙲𝚛𝚎𝚊𝚝𝚘𝚛 • 𝙴𝚡𝚙𝚕𝚘𝚛𝚎𝚛', label: 'Aesthetic 1' },
      { text: '📸 𝒞𝒶𝓅𝓉𝓊𝓇𝒶𝓃𝒹ℴ 𝒽𝒾𝓈𝓉ℴ𝓇𝒾𝒶𝓈 𝓋𝒾𝓋𝒶𝓈', label: 'Fotografía' },
      { text: '🎨 𝓒𝓻𝓮𝓪𝓷𝓭𝓸 𝓬𝓸𝓷𝓽𝓮𝓷𝓲𝓭𝓸 𝓬𝓪𝓭𝓪 𝓭í𝓪', label: 'Creador' },
    ]
  },
  {
    category: 'Bios para Chicos & Chicas',
    items: [
      { text: '⚡ 𝚅𝚒𝚟𝚒𝚎𝚗𝚍𝚘 𝚜𝚒𝚗 𝚕í𝚖𝚒𝚝𝚎𝚜', label: 'Chicos 1' },
      { text: '🌸 𝓕𝓵𝓸𝓻𝓮𝓬𝓲𝓮𝓷𝓭𝓸 𝓪 𝓶𝓲 𝓻𝓲𝓽𝓶𝓸', label: 'Chicas 1' },
      { text: '🌿 𝒜𝓁𝓂𝒶 𝓁𝒾𝒷𝓇ℯ 𝓎 𝓂ℯ𝓃𝓉ℯ 𝓅ℴ𝓈𝒾𝓉𝒾𝓋𝒶', label: 'Lifestyle' },
    ]
  },
  {
    category: 'Bios de Viajes & Fitness',
    items: [
      { text: '✈️ 𝓥𝓲𝓪𝓳𝓪𝓻 𝓮𝓼 𝓿𝓲𝓿𝓲𝓻 𝓭𝓸𝓼 𝓿𝓮𝓬𝓮𝓼', label: 'Viajes' },
      { text: '💪 𝙴𝚗𝚝𝚛𝚎𝚗𝚊. 𝙲𝚛𝚎𝚌𝚎. 𝚁𝚎𝚙𝚒𝚝𝚎.', label: 'Fitness' },
      { text: '🌍 𝒞ℴ𝓁ℯ𝒸𝒸𝒾ℴ𝓃𝒶𝓃𝒹ℴ 𝓁𝓊ℊ𝒶𝓇ℯ𝓈', label: 'Aventura' },
    ]
  }
];

export default function BioFontsExplorer() {
  const [inputText, setInputText] = useState<string>('✨ Amante de los viajes y la fotografía 📸');
  const [nameText, setNameText] = useState<string>('Khalid');
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

  const loadTemplate = (templateText: string) => {
    setInputText(templateText);
  };

  const currentText = inputText.trim();
  const currentName = nameText.trim() || 'Khalid';

  // Preview bio phrase for style comparison section
  const previewPhrase = 'Viviendo mi mejor vida ✨';

  return (
    <div className={styles.explorerContainer}>
      {/* Main Interactive Bio Generator */}
      <div id="herramienta-bio" className={styles.toolCard}>
        <div className={styles.toolHeader}>
          <h2 className={styles.toolTitle}>Generador de Letras para Bio de Instagram</h2>
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

        {/* Input Textarea with Character Counter */}
        <div className={styles.inputGroup}>
          <textarea
            className={styles.mainTextarea}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Escribe tu nombre, frase o descripción para tu bio..."
            rows={4}
            maxLength={200}
            aria-label="Escribe tu texto para la bio"
          />
          <div className={styles.charCounter}>
            <span>{inputText.length} / 150 caracteres (límite habitual en bio)</span>
          </div>
        </div>

        {/* Clickable Preset Templates Bar */}
        <div className={styles.templatesBox}>
          <span className={styles.templatesLabel}>Plantillas para tu bio (haz clic para usar):</span>
          <div className={styles.templatesGrid}>
            {BIO_TEMPLATES.map((cat, idx) => (
              <div key={idx} className={styles.templateGroup}>
                <span className={styles.templateCatTitle}>{cat.category}:</span>
                <div className={styles.templateChipsList}>
                  {cat.items.map((item, iIdx) => (
                    <button
                      key={iIdx}
                      type="button"
                      className={styles.templateChip}
                      onClick={() => loadTemplate(item)}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Live Generated Results */}
        {currentText === '' ? (
          <div className={styles.emptyStateBox}>
            <p className={styles.emptyStateTitle}>Escribe algo arriba o selecciona una plantilla</p>
            <p className={styles.emptyStateSub}>Introduce tu descripción de perfil para ver cómo luce en más de 10 estilos tipográficos Unicode.</p>
          </div>
        ) : (
          <div className={styles.resultsGrid}>
            {stylesMap.map((style) => {
              const convertedText = style.transform(currentText);
              const key = `gen-bio-${style.id}`;
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
                    aria-label={`Copiar bio en estilo ${style.name}`}
                  >
                    {copiedKey === key ? '¡Copiado!' : 'Copiar'}
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Bio Name Generator Mini-Tool */}
      <div className={styles.sectionBlock}>
        <h2 className={styles.subSectionTitle}>Nombres bonitos para tu bio</h2>
        <p className={styles.subSectionDesc}>Convierte tu nombre o apodo en diferentes estilos elegantes y decorativos:</p>

        <div className={styles.nameToolBox}>
          <input
            type="text"
            className={styles.nameInput}
            value={nameText}
            onChange={(e) => setNameText(e.target.value)}
            placeholder="Escribe tu nombre..."
            aria-label="Escribe tu nombre para la bio"
          />

          <div className={styles.nameResultsGrid}>
            {stylesMap.slice(0, 7).map((style) => {
              const transformedName = style.transform(currentName);
              const key = `name-${style.id}`;
              return (
                <div key={style.id} className={styles.nameCard}>
                  <span className={styles.nameStyleLabel}>{style.name}</span>
                  <p className={styles.nameResultText}>{transformedName}</p>
                  <button
                    type="button"
                    className={`${styles.smallCopyBtn} ${copiedKey === key ? styles.copiedBtn : ''}`}
                    onClick={() => handleCopy(transformedName, key)}
                  >
                    {copiedKey === key ? '¡Copiado!' : 'Copiar'}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bio Symbols Copy Section */}
      <div className={styles.sectionBlock}>
        <h2 className={styles.subSectionTitle}>Símbolos para la bio</h2>
        <p className={styles.subSectionDesc}>Símbolos, estrellas y separadores listos para copiar y pegar en tu perfil de Instagram:</p>

        <div className={styles.symbolsGrid}>
          {BIO_SYMBOLS.map((group, idx) => {
            const key = `symbol-group-${idx}`;
            return (
              <div key={idx} className={styles.symbolCard}>
                <h3 className={styles.symbolCategoryTitle}>{group.category}</h3>
                <p className={styles.symbolText}>{group.symbols}</p>
                <button
                  type="button"
                  className={`${styles.copyBtn} ${copiedKey === key ? styles.copiedBtn : ''}`}
                  onClick={() => handleCopy(group.symbols, key)}
                >
                  {copiedKey === key ? '¡Copiado!' : 'Copiar'}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bio Style Preview Comparison Grid */}
      <div className={styles.sectionBlock}>
        <h2 className={styles.subSectionTitle}>Prueba tu bio en diferentes estilos</h2>
        <p className={styles.subSectionDesc}>Compara el aspecto de una frase tipo bio en distintos estilos Unicode:</p>

        <div className={styles.comparisonGrid}>
          {stylesMap.slice(0, 6).map((style) => {
            const convertedPreview = style.transform(previewPhrase);
            const key = `preview-${style.id}`;
            return (
              <div key={style.id} className={styles.comparisonCard}>
                <span className={styles.compStyleBadge}>{style.name}</span>
                <p className={styles.compPreviewText}>{convertedPreview}</p>
                <button
                  type="button"
                  className={`${styles.smallCopyBtn} ${copiedKey === key ? styles.copiedBtn : ''}`}
                  onClick={() => handleCopy(convertedPreview, key)}
                >
                  {copiedKey === key ? '¡Copiado!' : 'Copiar'}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Ready-to-copy Bio Ideas */}
      <div id="ideas-bio" className={styles.sectionBlock}>
        <h2 className={styles.subSectionTitle}>Ideas de bio para Instagram</h2>
        <p className={styles.subSectionDesc}>Selección de frases y descripciones organizadas para copiar al instante:</p>

        <div className={styles.ideasStack}>
          {BIO_IDEAS.map((group, gIdx) => (
            <div key={gIdx} className={styles.ideaGroupBlock}>
              <h3 className={styles.ideaCatTitle}>{group.category}</h3>
              <div className={styles.ideasGrid}>
                {group.items.map((item, iIdx) => {
                  const key = `idea-${gIdx}-${iIdx}`;
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
