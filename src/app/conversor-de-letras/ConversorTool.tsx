'use client';

import { useState } from 'react';
import Link from 'next/link';
import { stylesMap } from '../../utils/unicodeTransformer';
import styles from './page.module.css';

// Preset sample texts
const SAMPLE_TEXTS = ['Hola Mundo', 'Letras Bonitas', 'Buenos días', 'Mi perfil'];

// Categories for filtering
const CATEGORIES = [
  'Todas',
  'Letras Negritas',
  'Letras Cursivas',
  'Letras Góticas',
  'Letras Decorativas',
  'Letras Especiales'
];

// Popular conversions examples
const POPULAR_CONVERSIONS = [
  { label: 'Texto normal → Negrita', normal: 'Hola Mundo', converted: '𝗛𝗼𝗹𝗮 𝗠𝘂𝗻𝗱𝗼', styleName: 'Negrita' },
  { label: 'Texto normal → Cursiva', normal: 'Hola Mundo', converted: '𝘏𝘰𝘭𝘢 𝘔𝘶𝘯𝘥𝘰', styleName: 'Cursiva Clásica' },
  { label: 'Texto normal → Gótico', normal: 'Hola Mundo', converted: 'ℌ𝔬𝔩𝔞 𝔐𝔲𝔫𝔡𝔬', styleName: 'Gótica' },
  { label: 'Texto normal → Doble línea', normal: 'Hola Mundo', converted: 'ℍ𝕠𝕝𝕒 𝕄𝕠𝕟𝕕𝕠', styleName: 'Doble Trazo' },
];

// Ready-made conversions collection
const READY_MADE_CONVERSIONS = [
  { original: 'Hola Mundo', converted: '𝓗𝓸𝓵𝓪 𝓜𝓾𝓷𝓭𝓸' },
  { original: 'Buenos días', converted: '🇧🇺🇪🇳🇴🇸 🇩🇮́🇦🇸' },
  { original: 'Mi perfil', converted: '𝙼𝚒 𝚙𝚎𝚛𝚏𝚒𝚕' },
  { original: 'Letras Bonitas', converted: 'ℒℯ𝓉𝓇𝒶𝓈 ℬℴ𝓃𝒾𝓉𝒶𝓈' },
  { original: 'Sígueme', converted: '𝗦𝗶́𝗴𝘂𝗲𝗺𝗲' },
  { original: 'Buenas noches', converted: '𝓑𝓾𝓮𝓷𝓪𝓼 𝓷𝓸𝓬𝓱𝓮𝓼' },
  { original: 'Feliz día', converted: '𝔉𝔢𝔩𝔦𝔷 𝔡í𝔞' },
  { original: 'Mi nombre', converted: '𝕄𝕚 𝕟𝕠𝕞𝕓𝕣𝕖' },
  { original: 'Nunca te rindas', converted: '𝓝𝓾𝓷𝓬𝓪 𝓽𝓮 𝓻𝓲𝓷𝓭𝓪𝓼' },
  { original: 'Vive el momento', converted: '𝒱𝒾𝓋ℯ ℯ𝓁 𝓂ℴ𝓂ℯ𝓃𝓉ℴ' },
];

export default function ConversorTool() {
  const [inputText, setInputText] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string>('Todas');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => {
      setCopiedKey(null);
    }, 2000);
  };

  const handleShare = async (text: string) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Texto Convertido',
          text: text,
        });
      } catch (err) {
        // User cancelled or share failed silently
      }
    } else {
      handleCopy(text, 'share-fallback');
    }
  };

  const clearInput = () => {
    setInputText('');
  };

  const applySample = (sample: string) => {
    setInputText(sample);
  };

  // Filter styles based on selected category
  const filteredStyles = activeCategory === 'Todas'
    ? stylesMap
    : stylesMap.filter(s => s.category === activeCategory);

  const currentText = inputText.trim();

  return (
    <div className={styles.toolContainer}>
      {/* Main Interactive Converter Box */}
      <div className={styles.converterCard}>
        <div className={styles.inputHeader}>
          <label htmlFor="converter-input" className={styles.inputLabel}>
            Conversor de Letras Online
          </label>
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

        <textarea
          id="converter-input"
          className={styles.converterTextarea}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Escribe o pega tu texto aquí..."
          rows={4}
        />

        {/* Quick Sample Buttons */}
        <div className={styles.samplesWrapper}>
          <span className={styles.samplesLabel}>Prueba un ejemplo rápido:</span>
          <div className={styles.samplesList}>
            {SAMPLE_TEXTS.map((sample) => (
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

        {/* Category Navigation Bar */}
        <div className={styles.categoryBar}>
          <span className={styles.categoryLabel}>Categorías:</span>
          <div className={styles.categoryPills}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`${styles.categoryPill} ${activeCategory === cat ? styles.activeCategoryPill : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Conversion Results Area */}
        {currentText === '' ? (
          <div className={styles.emptyStateBox}>
            <p className={styles.emptyStateTitle}>✨ Escribe algo arriba para comenzar a convertir</p>
            <p className={styles.emptyStateSub}>O pulsa cualquiera de los ejemplos rápidos para ver los diferentes estilos al instante.</p>
          </div>
        ) : (
          <div className={styles.resultsGrid}>
            {filteredStyles.map((style) => {
              const converted = style.transform(currentText);
              const key = `style-${style.id}`;
              return (
                <div key={style.id} className={styles.resultCard}>
                  <div className={styles.resultCardHeader}>
                    <span className={styles.styleName}>{style.name}</span>
                    <span className={styles.categoryTag}>{style.category}</span>
                  </div>
                  <div className={styles.resultCardBody}>
                    <p className={styles.convertedText}>{converted}</p>
                  </div>
                  <div className={styles.cardActions}>
                    <button
                      type="button"
                      className={`${styles.copyBtn} ${copiedKey === key ? styles.copiedBtn : ''}`}
                      onClick={() => handleCopy(converted, key)}
                    >
                      {copiedKey === key ? '¡Copiado!' : 'Copiar'}
                    </button>
                    {typeof window !== 'undefined' && 'share' in navigator && (
                      <button
                        type="button"
                        className={styles.shareBtn}
                        onClick={() => handleShare(converted)}
                        aria-label={`Compartir ${style.name}`}
                      >
                        Compartir
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Popular Conversions Block */}
      <div className={styles.popularSection}>
        <h2 className={styles.subTitle}>Conversiones Populares</h2>
        <div className={styles.popularGrid}>
          {POPULAR_CONVERSIONS.map((item, idx) => {
            const key = `pop-${idx}`;
            return (
              <div key={idx} className={styles.popularCard}>
                <span className={styles.popularLabel}>{item.label}</span>
                <div className={styles.popularTransformBox}>
                  <span className={styles.popularNormal}>{item.normal}</span>
                  <span className={styles.popularArrow}>↓</span>
                  <span className={styles.popularConverted}>{item.converted}</span>
                </div>
                <button
                  type="button"
                  className={`${styles.copyBtn} ${copiedKey === key ? styles.copiedBtn : ''}`}
                  onClick={() => handleCopy(item.converted, key)}
                >
                  {copiedKey === key ? '¡Copiado!' : 'Copiar'}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Ready-made Conversion Examples */}
      <div className={styles.examplesSection}>
        <h2 className={styles.subTitle}>Ejemplos de Conversión de Letras</h2>
        <div className={styles.examplesGrid}>
          {READY_MADE_CONVERSIONS.map((item, idx) => {
            const key = `ex-${idx}`;
            return (
              <div key={idx} className={styles.exampleRowCard}>
                <div className={styles.exampleTextGroup}>
                  <span className={styles.exOriginal}>{item.original}</span>
                  <span className={styles.exArrow}>→</span>
                  <span className={styles.exConverted}>{item.converted}</span>
                </div>
                <button
                  type="button"
                  className={`${styles.smallCopyBtn} ${copiedKey === key ? styles.copiedBtn : ''}`}
                  onClick={() => handleCopy(item.converted, key)}
                >
                  {copiedKey === key ? '¡Copiado!' : 'Copiar'}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Internal Links Cross-Silo Banner */}
      <div className={styles.siloBanner}>
        <div className={styles.siloBannerContent}>
          <h3>¿Buscas únicamente generadores cursivos?</h3>
          <p>Visita nuestras páginas dedicadas dentro del silo de Letras Cursivas para opciones específicas.</p>
        </div>
        <div className={styles.siloLinksGroup}>
          <Link href="/letras-cursivas/" className={styles.siloBtn}>
            Letras Cursivas →
          </Link>
          <Link href="/letras-cursivas/abecedario-cursivo/" className={styles.secondarySiloBtn}>
            Abecedario Cursivo →
          </Link>
        </div>
      </div>
    </div>
  );
}
