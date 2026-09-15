'use client';

import { useState } from 'react';
import Link from 'next/link';
import { stylesMap } from '../../../utils/unicodeTransformer';
import styles from './page.module.css';

// Filter or define cursive/script styles specifically
const CURSIVE_STYLES = [
  {
    id: 'script-bold',
    name: 'Cursiva Elegante (Bold Script)',
    category: 'Elegante',
    transform: (text: string) => stylesMap.find(s => s.id === 'boldScript')?.transform(text) || text,
  },
  {
    id: 'script-regular',
    name: 'Cursiva Clásica (Script)',
    category: 'Clásica',
    transform: (text: string) => stylesMap.find(s => s.id === 'script')?.transform(text) || text,
  },
  {
    id: 'italic-bold',
    name: 'Cursiva Negrita (Bold Italic)',
    category: 'Negrita',
    transform: (text: string) => stylesMap.find(s => s.id === 'boldItalic')?.transform(text) || text,
  },
  {
    id: 'italic-regular',
    name: 'Cursiva Delicada (Italic)',
    category: 'Delicada',
    transform: (text: string) => stylesMap.find(s => s.id === 'italic')?.transform(text) || text,
  },
  {
    id: 'script-decorated',
    name: 'Cursiva Decorativa',
    category: 'Decorativa',
    transform: (text: string) => {
      const scriptText = stylesMap.find(s => s.id === 'boldScript')?.transform(text) || text;
      return `✨ ${scriptText} ✨`;
    },
  },
  {
    id: 'script-modern',
    name: 'Cursiva Moderna',
    category: 'Moderna',
    transform: (text: string) => {
      const scriptText = stylesMap.find(s => s.id === 'script')?.transform(text) || text;
      return `♡ ${scriptText} ♡`;
    },
  }
];

// Instagram Use-Case Quick Presets
const USE_CASE_PRESETS = [
  { label: 'Bio', text: '✨ Viviendo mi mejor vida' },
  { label: 'Nombre', text: 'Sofia' },
  { label: 'Caption', text: 'Un día a la vez ✨' },
  { label: 'Comentario', text: 'Qué bonito ♡' },
  { label: 'Perfil', text: 'Creador • Viajero • Fotógrafo' },
];

// Symbol Decorator Templates
const DECORATOR_TEMPLATES = [
  { label: '♡ Corazones ♡', prefix: '♡ ', suffix: ' ♡' },
  { label: '✦ Destellos ✦', prefix: '✦ ', suffix: ' ✦' },
  { label: '★ Estrellas ★', prefix: '★ ', suffix: ' ★' },
  { label: '୨୧ Lazo ୨୧', prefix: '୨୧ ', suffix: ' ୨୧' },
  { label: '『 Caja 』', prefix: '『 ', suffix: ' 』' },
  { label: '꧁ Adorno ꧂', prefix: '꧁ ', suffix: ' ꧂' },
  { label: '• Punto •', prefix: '• ', suffix: ' •' },
];

// Ready-to-copy Cursive Phrases by Category
const CURSIVE_PHRASES = [
  {
    category: 'Frases Bonitas & Aesthetic',
    items: [
      { text: '✨ 𝓢𝓾𝓮ñ𝓪 𝓼𝓲𝓷 𝓶𝓲𝓮𝓭𝓸, 𝓿𝓲𝓿𝓮 𝓼𝓲𝓷 𝓵í𝓶𝓲𝓽𝓮𝓼', label: 'Bonita 1' },
      { text: '♡ 𝒞𝓇ℯ𝒶𝓃𝒹ℴ 𝓂ℴ𝓂ℯ𝓃𝓉ℴ𝓈 𝒾𝓃ℴ𝓁𝓋𝒾𝒹𝒶𝒷𝓁ℯ𝓈', label: 'Aesthetic 1' },
      { text: '✦ 𝙻𝚊 𝚟𝚒𝚍𝚊 𝚎𝚜 𝚑𝚘𝚢', label: 'Minimal' },
    ]
  },
  {
    category: 'Frases Motivacionales & Cortas',
    items: [
      { text: '💪 𝓗𝓪𝔃 𝔮𝓾𝓮 𝓸𝓬𝓾𝓻𝓻𝓪', label: 'Motivación 1' },
      { text: '☀️ ℬ𝓊ℯ𝓃𝒶𝓈 𝓋𝒾𝒷𝓇𝒶𝓈 𝓈𝒾ℯ𝓂𝓅𝓇ℯ', label: 'Positiva' },
      { text: '✨ 𝓤𝓷 𝓭í𝓪 𝓪 𝓵𝓪 𝓿𝓮𝔃', label: 'Corta' },
    ]
  },
  {
    category: 'Frases de Amor & Captions',
    items: [
      { text: '♡ 𝓔𝓻𝓮𝓼 𝓶𝓲 𝓵𝓾𝓰𝓪𝓻 𝓯𝓪𝓿𝓸𝓻𝓲𝓽𝓸', label: 'Amor 1' },
      { text: '❣ 𝒥𝓊𝓃𝓉ℴ𝓈 ℯ𝓈 𝓂𝒾 𝓁𝓊ℊ𝒶𝓇 𝓅𝓇ℯ𝒻ℯ𝓇𝒾𝒹ℴ', label: 'Amor 2' },
      { text: '📸 ℛℯ𝒸𝓊ℯ𝓇𝒹ℴ𝓈 𝓆𝓊ℯ 𝓆𝓊ℯ𝒹𝒶𝓃', label: 'Caption' },
    ]
  }
];

// Alphabet Quick Preview Data
const ALPHABET_UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const ALPHABET_LOWER = 'abcdefghijklmnopqrstuvwxyz';

export default function CursiveInstagramExplorer() {
  const [inputText, setInputText] = useState<string>('Viviendo mi mejor vida ✨');
  const [decoratorInput, setDecoratorInput] = useState<string>('Sofia');
  const [selectedDecoratorIdx, setSelectedDecoratorIdx] = useState<number>(0);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const scriptTransformer = stylesMap.find(s => s.id === 'boldScript')?.transform || ((t: string) => t);
  const classicScriptTransformer = stylesMap.find(s => s.id === 'script')?.transform || ((t: string) => t);

  const handleCopy = (text: string, key: string) => {
    try {
      navigator.clipboard.writeText(text);
      setCopiedKey(key);
      setTimeout(() => {
        setCopiedKey(null);
      }, 2000);
    } catch {
      alert('Copia este texto manualmente: ' + text);
    }
  };

  const clearInput = () => {
    setInputText('');
  };

  const currentText = inputText.trim();
  const comparisonText = currentText || 'Mi mundo';

  return (
    <div className={styles.explorerContainer}>
      {/* Main Interactive Cursive Tool */}
      <div id="generador-cursivo-ig" className={styles.toolCard}>
        <div className={styles.toolHeader}>
          <h2 className={styles.toolTitle}>Generador de Letras Cursivas para Instagram</h2>
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

        {/* Input Textarea & Meta Row */}
        <div className={styles.inputGroup}>
          <label htmlFor="cursive-input-textarea" className={styles.inputLabel}>
            Escribe tu texto:
          </label>
          <textarea
            id="cursive-input-textarea"
            className={styles.mainTextarea}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Escribe tu texto para Instagram..."
            rows={3}
            maxLength={180}
            aria-label="Escribe tu texto para Instagram"
          />
          <div className={styles.inputMetaRow}>
            <span className={styles.charCounter}>{inputText.length} / 180 caracteres</span>
            <div className={styles.presetChips}>
              <span className={styles.presetLabel}>Cargar ejemplo en el generador:</span>
              {USE_CASE_PRESETS.map((preset, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={styles.presetChip}
                  onClick={() => setInputText(preset.text)}
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Cursive Live Output Grid */}
        {currentText === '' ? (
          <div className={styles.emptyStateBox}>
            <p className={styles.emptyStateTitle}>Escribe tu frase o selecciona un ejemplo de la lista</p>
            <p className={styles.emptyStateSub}>Visualiza tu texto transformado en tiempo real a cursivas elegantes, manuscritas y delicadas.</p>
          </div>
        ) : (
          <div id="estilos-cursivos-ig" className={styles.resultsGrid}>
            {CURSIVE_STYLES.map((style) => {
              const convertedText = style.transform(currentText);
              const key = `cursive-gen-${style.id}`;
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
                    aria-label={`Copiar texto en estilo ${style.name}`}
                  >
                    {copiedKey === key ? '¡Copiado!' : 'Copiar'}
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Cursive + Symbol Decorator Tool */}
      <div className={styles.sectionBlock}>
        <h2 className={styles.subSectionTitle}>Decora tu texto cursivo con símbolos</h2>
        <p className={styles.subSectionDesc}>Convierte tu texto a letra cursiva y añade marcos estéticos en un solo paso:</p>

        <div className={styles.decoratorBox}>
          <div className={styles.decoratorInputsGrid}>
            <div className={styles.decoratorInputGroup}>
              <label htmlFor="cursive-decorator-input" className={styles.decoratorLabel}>
                Escribe tu texto:
              </label>
              <input
                id="cursive-decorator-input"
                type="text"
                className={styles.decoratorInput}
                value={decoratorInput}
                onChange={(e) => setDecoratorInput(e.target.value)}
                placeholder="Escribe un nombre o frase..."
                aria-label="Texto para decorar en cursiva"
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

          {/* Decorator Output */}
          {(() => {
            const tmpl = DECORATOR_TEMPLATES[selectedDecoratorIdx];
            const cursiveConverted = scriptTransformer(decoratorInput.trim() || 'Sofia');
            const decoratedResult = `${tmpl.prefix}${cursiveConverted}${tmpl.suffix}`;
            const key = `cursive-decorator-result`;
            return (
              <div className={styles.decoratorOutputCard}>
                <span className={styles.decoratorOutputLabel}>Resultado cursivo decorado:</span>
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

      {/* Cursive Style Comparison Section */}
      <div className={styles.sectionBlock}>
        <h2 className={styles.subSectionTitle}>Compara las letras cursivas</h2>
        <p className={styles.subSectionDesc}>Compara la misma frase o palabra en diferentes variantes caligráficas:</p>

        <div className={styles.comparisonGrid}>
          {CURSIVE_STYLES.map((style) => {
            const convertedPreview = style.transform(comparisonText);
            const key = `comp-cursive-${style.id}`;
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

      {/* Ready-to-copy Cursive Phrases */}
      <div className={styles.sectionBlock}>
        <h2 className={styles.subSectionTitle}>Frases cursivas para Instagram</h2>
        <p className={styles.subSectionDesc}>Colección de expresiones célebres y descripciones formateadas en cursiva:</p>

        <div className={styles.ideasStack}>
          {CURSIVE_PHRASES.map((group, gIdx) => (
            <div key={gIdx} className={styles.ideaGroupBlock}>
              <h3 className={styles.ideaCatTitle}>{group.category}</h3>
              <div className={styles.ideasGrid}>
                {group.items.map((item, iIdx) => {
                  const key = `phrase-${gIdx}-${iIdx}`;
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

      {/* Compact Cursive Alphabet Section */}
      <div className={styles.sectionBlock}>
        <div className={styles.alphabetHeaderRow}>
          <h2 className={styles.subSectionTitle}>Abecedario cursivo para Instagram</h2>
          <Link href="/letras-cursivas/abecedario-cursivo/" className={styles.alphabetLink}>
            Ver abecedario completo →
          </Link>
        </div>
        <p className={styles.subSectionDesc}>Explora y copia letras cursivas de la A a la Z en mayúsculas y minúsculas:</p>

        <div className={styles.alphabetBox}>
          <div className={styles.alphabetGroupBlock}>
            <div className={styles.alphabetGroupTitleRow}>
              <span className={styles.alphabetCatLabel}>Mayúsculas Cursivas (A-Z)</span>
              <button
                type="button"
                className={`${styles.smallCopyBtn} ${copiedKey === 'alpha-upper-all' ? styles.copiedBtn : ''}`}
                onClick={() => handleCopy(scriptTransformer(ALPHABET_UPPER), 'alpha-upper-all')}
                style={{ maxWidth: '200px' }}
              >
                {copiedKey === 'alpha-upper-all' ? '¡Copiado!' : 'Copiar A-Z mayúsculas'}
              </button>
            </div>
            <div className={styles.letterGrid}>
              {Array.from(ALPHABET_UPPER).map((char, idx) => {
                const converted = scriptTransformer(char);
                const key = `alpha-upper-${idx}`;
                return (
                  <button
                    key={idx}
                    type="button"
                    className={`${styles.letterChip} ${copiedKey === key ? styles.copiedBtn : ''}`}
                    onClick={() => handleCopy(converted, key)}
                    title={`Copiar letra ${char}`}
                  >
                    <span className={styles.origLetter}>{char}</span>
                    <span className={styles.transLetter}>{converted}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className={styles.alphabetGroupBlock} style={{ marginTop: '1.5rem' }}>
            <div className={styles.alphabetGroupTitleRow}>
              <span className={styles.alphabetCatLabel}>Minúsculas Cursivas (a-z)</span>
              <button
                type="button"
                className={`${styles.smallCopyBtn} ${copiedKey === 'alpha-lower-all' ? styles.copiedBtn : ''}`}
                onClick={() => handleCopy(classicScriptTransformer(ALPHABET_LOWER), 'alpha-lower-all')}
                style={{ maxWidth: '200px' }}
              >
                {copiedKey === 'alpha-lower-all' ? '¡Copiado!' : 'Copiar a-z minúsculas'}
              </button>
            </div>
            <div className={styles.letterGrid}>
              {Array.from(ALPHABET_LOWER).map((char, idx) => {
                const converted = classicScriptTransformer(char);
                const key = `alpha-lower-${idx}`;
                return (
                  <button
                    key={idx}
                    type="button"
                    className={`${styles.letterChip} ${copiedKey === key ? styles.copiedBtn : ''}`}
                    onClick={() => handleCopy(converted, key)}
                    title={`Copiar letra ${char}`}
                  >
                    <span className={styles.origLetter}>{char}</span>
                    <span className={styles.transLetter}>{converted}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
