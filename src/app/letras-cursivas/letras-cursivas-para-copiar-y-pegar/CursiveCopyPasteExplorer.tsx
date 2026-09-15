'use client';

import { useState } from 'react';
import Link from 'next/link';
import { stylesMap } from '../../../utils/unicodeTransformer';
import styles from './page.module.css';

// Cursive style subset for the copy tool
const CURSIVE_STYLES = stylesMap.filter(s => s.category === 'Letras Cursivas');

// Ready-made copyable categories and items
const READY_MADE_CATEGORIES = [
  {
    id: 'frases',
    title: 'Frases Bonitas en Cursiva',
    items: [
      { text: '𝓥𝓲𝓿𝓮 𝓮𝓵 𝓶𝓸𝓶𝓮𝓷𝓽𝓸', label: 'Vive el momento' },
      { text: '𝓢𝓸ñ𝓪𝓻 𝓮𝓼 𝓮𝓵 𝓹𝓻𝓲𝓷𝓬𝓲𝓹𝓲𝓸', label: 'Soñar es el principio' },
      { text: '𝓛𝓪 𝓿𝓲𝓭𝓪 𝓮𝓼 𝓫𝓮𝓵𝓵𝓪 ✨', label: 'La vida es bella' },
      { text: '𝒞𝓇ℯℯ ℯ𝓃 𝓉í 𝓈𝒾ℯ𝓂𝓅𝓇ℯ', label: 'Cree en tí siempre' },
    ]
  },
  {
    id: 'instagram',
    title: 'Letras Cursivas para Instagram',
    items: [
      { text: '𝓢í𝓰𝓾𝓮𝓶𝓮 𝓹𝓪𝓻𝓪 𝓶á𝓼 ✨', label: 'Sígueme para más' },
      { text: '𝓥𝓲𝓿𝓲𝓻, 𝓼𝓸ñ𝓪𝓻, 𝓬𝓻𝓮𝓪𝓻', label: 'Vivir, soñar, crear' },
      { text: '𝓜𝓲 𝓶𝓾𝓷𝓭𝓸, 𝓶𝓲𝓼 𝓻𝓮𝓰𝓵𝓪𝓼 💫', label: 'Mi mundo, mis reglas' },
      { text: '𝒰𝓃𝒶 𝒽𝒾𝓈𝓉ℴ𝓇𝒾𝒶 𝒶 𝓁𝒶 𝓋ℯ𝓏', label: 'Una historia a la vez' },
    ]
  },
  {
    id: 'whatsapp',
    title: 'Letras Cursivas para WhatsApp',
    items: [
      { text: '𝓑𝓾𝓮𝓷𝓸𝓼 𝓭í𝓪𝓼 ☀️', label: 'Buenos días' },
      { text: '𝓠𝓾𝓮 𝓽𝓮𝓷𝓰𝓪𝓼 𝓾𝓷 𝓫𝓸𝓷𝓲𝓽𝓸 𝓭í𝓪', label: 'Que tengas un bonito día' },
      { text: '𝓓𝓾𝓮𝓻𝓶𝓮 𝓫𝓲𝓮𝓷 ✨', label: 'Duerme bien' },
      { text: '𝒢𝓇𝒶𝒸𝒾𝒶𝓈 𝓅ℴ𝓇 𝓉ℴ𝒹ℴ 💖', label: 'Gracias por todo' },
    ]
  },
  {
    id: 'bios',
    title: 'Letras Cursivas para Bios y Perfiles',
    items: [
      { text: '𝓢𝓸ñ𝓪𝓭𝓸𝓻 ✨', label: 'Soñador' },
      { text: '𝓥𝓲𝓪𝓳𝓮𝓻𝓸 | 𝓒𝓻𝓮𝓪𝓽𝓲𝓿𝓸 | 𝓢𝓲𝓷 𝓵í𝓶𝓲𝓽𝓮𝓼', label: 'Viajero | Creativo | Sin límites' },
      { text: '𝓐𝓶𝓪𝓷𝓽𝓮 𝓭𝓮 𝓵𝓪 𝓿𝓲𝓭𝓪 🌿', label: 'Amante de la vida' },
      { text: '𝒜𝓇𝓉ℯ, 𝓂ú𝓈𝒾𝒸𝒶 𝓎 𝒸𝒶𝒻é ☕', label: 'Arte, música y café' },
    ]
  }
];

// Quick word comparison list
const COMPARISON_LIST = [
  { original: 'Hola', cursive: '𝓗𝓸𝓵𝓪' },
  { original: 'Amor', cursive: '𝒜𝓂ℴ𝓇' },
  { original: 'Feliz día', cursive: '𝓕𝓮𝓵𝓲𝔔 𝓭í𝓪' },
  { original: 'Buenas noches', cursive: '𝓑𝓾𝓮𝓷𝓪𝓼 𝓷𝓸𝓬𝓱𝓮𝓼 🌙' },
  { original: 'Sueños', cursive: '𝓢𝓾𝓮ñ𝓸𝓼' },
  { original: 'Gracias', cursive: '𝓖𝓻𝓪𝓬𝓲𝓪𝓼' },
  { original: 'Familia', cursive: '𝓕𝓪𝓶𝓲𝓵𝓲𝓪' },
  { original: 'Amigos', cursive: '𝓐𝓶𝓲𝓰𝓸𝓼' },
];

export default function CursiveCopyPasteExplorer() {
  const [inputText, setInputText] = useState<string>('Hola, ¿cómo estás?');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => {
      setCopiedKey(null);
    }, 2000);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className={styles.explorerContainer}>
      {/* Quick Category Jump Bar */}
      <div className={styles.categoryNavWrapper}>
        <span className={styles.categoryNavLabel}>Acceso rápido:</span>
        <div className={styles.categoryNav}>
          <button type="button" className={styles.catNavBtn} onClick={() => scrollToSection('generador')}>
            Generador
          </button>
          <button type="button" className={styles.catNavBtn} onClick={() => scrollToSection('listas-para-copiar')}>
            Listas para Copiar
          </button>
          <button type="button" className={styles.catNavBtn} onClick={() => scrollToSection('frases')}>
            Frases
          </button>
          <button type="button" className={styles.catNavBtn} onClick={() => scrollToSection('instagram')}>
            Instagram
          </button>
          <button type="button" className={styles.catNavBtn} onClick={() => scrollToSection('whatsapp')}>
            WhatsApp
          </button>
          <button type="button" className={styles.catNavBtn} onClick={() => scrollToSection('bios')}>
            Bios
          </button>
          <button type="button" className={styles.catNavBtn} onClick={() => scrollToSection('tabla-ejemplos')}>
            Ejemplos
          </button>
        </div>
      </div>

      {/* Main Copy-and-Paste Interactive Generator */}
      <div id="generador" className={styles.generatorBox}>
        <h2 className={styles.generatorTitle}>Generador de Letras Cursivas para Copiar</h2>
        <p className={styles.generatorDesc}>Escribe tu frase en el recuadro y obtén instantáneamente tus letras cursivas listas para copiar y pegar:</p>
        
        <div className={styles.inputWrapper}>
          <textarea
            className={styles.mainInput}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Escribe o pega tu texto aquí..."
            rows={3}
            aria-label="Escribe o pega tu texto para convertir en cursiva"
          />
        </div>

        <div className={styles.resultsGrid}>
          {CURSIVE_STYLES.map((style) => {
            const resultText = style.transform(inputText || 'Hola, ¿cómo estás?');
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
                  aria-label={`Copiar estilo ${style.name}`}
                >
                  {copiedKey === key ? '¡Copiado!' : 'Copiar'}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Alphabet Link Banner */}
      <div className={styles.alphabetBanner}>
        <div className={styles.alphabetBannerContent}>
          <h3>¿Buscas todas las letras de la A a la Z?</h3>
          <p>Explora el abecedario completo en mayúsculas y minúsculas con tarjetas individuales para cada letra.</p>
        </div>
        <Link href="/letras-cursivas/abecedario-cursivo/" className={styles.bannerBtn}>
          Ver el Abecedario Cursivo →
        </Link>
      </div>

      {/* Ready-Made Cursive Categories */}
      <div id="listas-para-copiar" className={styles.readyMadeSection}>
        <h2 className={styles.subSectionTitle}>Letras Cursivas Listas para Copiar</h2>
        <p className={styles.subSectionDesc}>Selecciona cualquiera de estas frases y diseños cursivos prediseñados y cópialos con un solo clic:</p>

        <div className={styles.categoriesStack}>
          {READY_MADE_CATEGORIES.map((cat) => (
            <div key={cat.id} id={cat.id} className={styles.categoryBlock}>
              <h3 className={styles.categoryBlockTitle}>{cat.title}</h3>
              <div className={styles.itemsGrid}>
                {cat.items.map((item, idx) => {
                  const key = `cat-${cat.id}-${idx}`;
                  return (
                    <div key={idx} className={styles.readyItemCard}>
                      <span className={styles.itemLabel}>{item.label}</span>
                      <p className={styles.itemText}>{item.text}</p>
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

      {/* Examples Table / Grid */}
      <div id="tabla-ejemplos" className={styles.comparisonSection}>
        <h2 className={styles.subSectionTitle}>Tabla de Ejemplos de Texto Cursivo</h2>
        <p className={styles.subSectionDesc}>Ejemplos rápidos de conversión directa de texto normal a letras cursivas:</p>

        <div className={styles.comparisonGrid}>
          {COMPARISON_LIST.map((item, idx) => {
            const key = `table-${idx}`;
            return (
              <div key={idx} className={styles.comparisonCard}>
                <div className={styles.compCol}>
                  <span className={styles.compLabel}>Normal:</span>
                  <span className={styles.compOriginal}>{item.original}</span>
                </div>
                <div className={styles.compCol}>
                  <span className={styles.compLabel}>Cursiva:</span>
                  <span className={styles.compCursive}>{item.cursive}</span>
                </div>
                <button
                  type="button"
                  className={`${styles.smallCopyBtn} ${copiedKey === key ? styles.copiedBtn : ''}`}
                  onClick={() => handleCopy(item.cursive, key)}
                >
                  {copiedKey === key ? '¡Copiado!' : 'Copiar'}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
