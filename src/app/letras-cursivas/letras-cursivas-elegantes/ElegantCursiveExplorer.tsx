'use client';

import { useState } from 'react';
import Link from 'next/link';
import { stylesMap } from '../../../utils/unicodeTransformer';
import styles from './page.module.css';

// Filter elegant cursive styles from stylesMap
const ELEGANT_STYLES = stylesMap.filter(s => s.category === 'Letras Cursivas');

// Ready-made elegant phrases
const ELEGANT_PHRASES = [
  {
    category: 'Frases Elegantes',
    id: 'frases-elegantes',
    items: [
      { text: '𝓥𝓲𝓿𝓮 𝓬𝓸𝓷 𝓮𝓵𝓮𝓰𝓪𝓷𝓬𝓲𝓪 ✨', label: 'Vive con elegancia' },
      { text: '𝓢𝓲𝓰𝓾𝓮 𝓽𝓾 𝓹𝓻𝓸𝓹𝓲𝓸 𝓬𝓪𝓶𝓲𝓷𝓸', label: 'Sigue tu propio camino' },
      { text: '𝓛𝓪 𝓮𝓵𝓮𝓰𝓪𝓷𝓬𝓲𝓪 𝓮𝓼𝓽á 𝓮𝓷 𝓵𝓸 𝓼𝓲𝓶𝓹𝓵𝓮', label: 'La elegancia está en lo simple' },
      { text: '𝒞𝓇ℯℯ ℯ𝓃 𝓉í 𝓈𝒾ℯ𝓂𝓅𝓇ℯ', label: 'Cree en tí siempre' },
    ]
  },
  {
    category: 'Para Instagram',
    id: 'para-instagram',
    items: [
      { text: '𝓜𝓲 𝓮𝓼𝓽𝓲𝓵𝓸, 𝓶𝓲𝓼 𝓻𝓮𝓰𝓵𝓪𝓼', label: 'Mi estilo, mis reglas' },
      { text: '𝓥𝓲𝓿𝓲𝓻, 𝓼𝓸ñ𝓪𝓻, 𝓬𝓻𝓮𝓪𝓻 🌿', label: 'Vivir, soñar, crear' },
      { text: 'ℰ𝓁ℯℊ𝒶𝓃𝒸𝒾𝒶 𝓎 𝓈𝒾𝓂𝓅𝓁𝒾𝒸𝒾𝒹𝒶𝒹 ✨', label: 'Elegancia y simplicidad' },
      { text: '𝒞𝒶𝓅𝓉𝓊𝓇𝒶𝓃𝒹ℴ 𝓂ℴ𝓂ℯ𝓃𝓉ℴ𝓈 📸', label: 'Capturando momentos' },
    ]
  },
  {
    category: 'Para Bios',
    id: 'para-bios',
    items: [
      { text: '𝓢𝓸ñ𝓪𝓭𝓸𝓻 ✨ | 𝓥𝓲𝓪𝓳𝓮𝓻𝓸 🌎', label: 'Soñador | Viajero' },
      { text: '𝒜𝓇𝓉ℯ & 𝒟𝒾𝓈ℯñℴ ✨', label: 'Arte & Diseño' },
      { text: '𝒞𝓇ℯ𝒶𝒹ℴ𝓇 𝒹ℯ 𝒸ℴ𝓃𝓉ℯ𝓃𝒾𝒹ℴ 📷', label: 'Creador de contenido' },
      { text: 'ℳℯ𝓃𝓉ℯ 𝓅ℴ𝓈𝒾𝓉𝒾𝓋𝒶, 𝓋𝒾𝒹𝒶 𝓅ℴ𝓈𝒾𝓉𝒾𝓋𝒶 🌿', label: 'Mente positiva' },
    ]
  }
];

// Elegant names examples
const ELEGANT_NAMES = [
  { original: 'Alejandro', elegantScript: '𝒜𝓁ℯ𝒿𝒶𝓃𝒹𝓇ℴ', elegantBold: '𝓐𝓵𝓮𝓳𝓪𝓷𝓭𝓻𝓸' },
  { original: 'Sofía', elegantScript: '𝒮ℴ𝒻í𝒶', elegantBold: '𝓢𝓸𝓯í𝓪' },
  { original: 'Isabella', elegantScript: 'ℐ𝓈𝒶𝒷ℯ𝓁𝓁𝒶', elegantBold: '𝓘𝓼𝓪𝓫𝓮𝓵𝓵𝓪' },
  { original: 'Daniel', elegantScript: '𝒟𝒶𝓃𝒾ℯ𝓁', elegantBold: '𝓓𝓪𝓷𝓲𝓮𝓵' },
  { original: 'Valentina', elegantScript: '𝒱𝒶𝓁ℯ𝓃𝓉𝒾𝓃𝒶', elegantBold: '𝓥𝓪𝓵𝓮𝓷𝓽𝓲𝓷𝓪' },
  { original: 'Santiago', elegantScript: '𝒮𝒶𝓃𝓉𝒾𝒶ℊℴ', elegantBold: '𝓢𝓪𝓷𝓽𝓲𝓪𝓰𝓸' },
  { original: 'Camila', elegantScript: '𝒞𝒶𝓂𝒾𝓁𝒶', elegantBold: '𝓒𝓪𝓶𝓲𝓵𝓪' },
  { original: 'Mateo', elegantScript: 'ℳ𝒶𝓉ℯℴ', elegantBold: '𝓜𝓪𝓽𝓮𝓸' },
];

export default function ElegantCursiveExplorer() {
  const [inputText, setInputText] = useState<string>('Mi mundo, mis reglas');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => {
      setCopiedKey(null);
    }, 2000);
  };

  return (
    <div className={styles.explorerContainer}>
      {/* Main Interactive Elegant Generator */}
      <div className={styles.generatorBox}>
        <h2 className={styles.generatorTitle}>Generador de Letras Cursivas Elegantes</h2>
        <p className={styles.generatorDesc}>Escribe tu frase o nombre para transformarlo al instante en estilos cursivos elegantes:</p>

        <div className={styles.inputWrapper}>
          <input
            type="text"
            className={styles.mainInput}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Escribe tu texto aquí..."
            aria-label="Escribe tu texto para convertir en letras cursivas elegantes"
          />
        </div>

        <div className={styles.resultsGrid}>
          {ELEGANT_STYLES.map((style) => {
            const resultText = style.transform(inputText || 'Mi mundo, mis reglas');
            const key = `gen-${style.id}`;
            return (
              <div key={style.id} className={styles.resultCard}>
                <div className={styles.resultHeader}>
                  <span className={styles.styleBadge}>{style.name}</span>
                </div>
                <div className={styles.resultContent}>
                  <p className={styles.resultText}>{resultText}</p>
                </div>
                <button
                  type="button"
                  className={`${styles.copyBtn} ${copiedKey === key ? styles.copiedBtn : ''}`}
                  onClick={() => handleCopy(resultText, key)}
                  aria-label={`Copiar ${style.name}`}
                >
                  {copiedKey === key ? '¡Copiado!' : 'Copiar'}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Internal Navigation Banner */}
      <div className={styles.navigationBanner}>
        <div className={styles.bannerText}>
          <h3>¿Buscas el abecedario cursivo completo o más ejemplos?</h3>
          <p>Explora nuestras herramientas adicionales dentro del silo de Letras Cursivas.</p>
        </div>
        <div className={styles.bannerActions}>
          <Link href="/letras-cursivas/abecedario-cursivo/" className={styles.bannerBtn}>
            Abecedario Cursivo A-Z →
          </Link>
          <Link href="/letras-cursivas/letras-cursivas-para-copiar-y-pegar/" className={styles.secondaryBannerBtn}>
            Ver Textos Listos para Copiar →
          </Link>
        </div>
      </div>

      {/* Ready-Made Elegant Text Section */}
      <div className={styles.readyMadeSection}>
        <h2 className={styles.subSectionTitle}>Letras Cursivas Elegantes para Copiar</h2>
        <p className={styles.subSectionDesc}>Explora y copia directamente estas frases cursivas elegantes prediseñadas:</p>

        <div className={styles.categoriesGrid}>
          {ELEGANT_PHRASES.map((group) => (
            <div key={group.id} className={styles.phraseCategoryBlock}>
              <h3 className={styles.categoryTitle}>{group.category}</h3>
              <div className={styles.phraseList}>
                {group.items.map((item, idx) => {
                  const key = `phrase-${group.id}-${idx}`;
                  return (
                    <div key={idx} className={styles.phraseCard}>
                      <span className={styles.phraseLabel}>{item.label}</span>
                      <p className={styles.phraseText}>{item.text}</p>
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

      {/* Elegant Names Section */}
      <div className={styles.namesSection}>
        <h2 className={styles.subSectionTitle}>Nombres en Letras Cursivas Elegantes</h2>
        <p className={styles.subSectionDesc}>Ejemplos de nombres propios convertidos a tipografía cursiva elegante en Unicode:</p>

        <div className={styles.namesGrid}>
          {ELEGANT_NAMES.map((item, idx) => {
            const keyScript = `name-script-${idx}`;
            const keyBold = `name-bold-${idx}`;
            return (
              <div key={idx} className={styles.nameCard}>
                <span className={styles.nameOriginal}>{item.original}</span>
                <div className={styles.nameRow}>
                  <span className={styles.nameCursive}>{item.elegantScript}</span>
                  <button
                    type="button"
                    className={`${styles.smallCopyBtn} ${copiedKey === keyScript ? styles.copiedBtn : ''}`}
                    onClick={() => handleCopy(item.elegantScript, keyScript)}
                  >
                    {copiedKey === keyScript ? '¡Copiado!' : 'Copiar'}
                  </button>
                </div>
                <div className={styles.nameRow}>
                  <span className={styles.nameCursive}>{item.elegantBold}</span>
                  <button
                    type="button"
                    className={`${styles.smallCopyBtn} ${copiedKey === keyBold ? styles.copiedBtn : ''}`}
                    onClick={() => handleCopy(item.elegantBold, keyBold)}
                  >
                    {copiedKey === keyBold ? '¡Copiado!' : 'Copiar'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
