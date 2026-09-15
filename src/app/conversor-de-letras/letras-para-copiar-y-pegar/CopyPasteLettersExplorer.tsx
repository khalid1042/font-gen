'use client';

import { useState } from 'react';
import Link from 'next/link';
import { stylesMap } from '../../../utils/unicodeTransformer';
import styles from './page.module.css';

// Demo sample buttons for quick input loading
const QUICK_SAMPLES = [
  'Hola mundo',
  'Mi nombre',
  'Mi bio',
  'Te quiero',
  'Buenos días',
  'Gracias por todo'
];

// Style categories for filtering
const CATEGORY_TABS = [
  { id: 'Todas', label: 'Todas' },
  { id: 'Letras Elegantes', label: 'Elegantes' },
  { id: 'Letras Cursivas', label: 'Cursivas' },
  { id: 'Letras Negritas', label: 'Negritas' },
  { id: 'Letras Decorativas', label: 'Decorativas' },
  { id: 'Divertidas', label: 'Divertidas' },
  { id: 'Modernas', label: 'Modernas' },
  { id: 'Letras Especiales', label: 'Especiales' },
];

// Ready-made copy-and-paste text templates
const READY_MADE_TEMPLATES = [
  {
    category: 'Instagram',
    id: 'instagram',
    items: [
      { text: '✨ Mi mundo, mis reglas ✨', label: 'Estilo brillante' },
      { text: '♡ Vive cada momento ♡', label: 'Con corazones' },
      { text: '𝓢𝓸𝓷̃𝓪𝓻 𝓮𝓼 𝓮𝓵 𝓹𝓻𝓲𝓷𝓬𝓲𝓹𝓲𝓸', label: 'Cursiva decorativa' },
      { text: '★ Siempre hacia adelante ★', label: 'Estrella dorada' },
    ]
  },
  {
    category: 'WhatsApp',
    id: 'whatsapp',
    items: [
      { text: 'Buenos días ☀️', label: 'Estado mañanero' },
      { text: 'Que tengas un feliz día ✨', label: 'Mensaje positivo' },
      { text: 'Nos vemos pronto ☕', label: 'Cita / Encuentro' },
      { text: 'Bendiciones 🙏', label: 'Agradecimiento' },
    ]
  },
  {
    category: 'Bios',
    id: 'bios',
    items: [
      { text: 'Soñador ✨ | Creador 🎨', label: 'Perfil creativo' },
      { text: 'Viajando por el mundo ✈️', label: 'Viajero' },
      { text: 'Amante del café y los libros ☕📚', label: 'Lector & Café' },
      { text: 'Modo offline 🔌', label: 'Estado desconectado' },
    ]
  },
  {
    category: 'Nombres',
    id: 'nombres',
    items: [
      { text: '★ Alex ★', label: 'Nombre con estrellas' },
      { text: '꧁ Sofia ꧂', label: 'Nombre ornamentado' },
      { text: '⚡ Carlos ⚡', label: 'Nombre con rayos' },
      { text: '✿ Laura ✿', label: 'Nombre floral' },
    ]
  },
  {
    category: 'Frases',
    id: 'frases',
    items: [
      { text: 'La vida es bella ✨', label: 'Frase de vida' },
      { text: 'Nunca te rindas 💪', label: 'Motivación' },
      { text: 'Cree en ti mismo 🌟', label: 'Confianza' },
      { text: 'Paso a paso 🐾', label: 'Progreso' },
    ]
  }
];

// Browsable special letter groups
const SPECIAL_LETTER_GROUPS = [
  { name: 'Negrita Unicode', chars: '𝐀 𝐁 𝐂 𝐃 𝐄 𝐅 𝐆 𝐇 𝐈 𝐉 𝐊 𝐋 𝐌 𝐍 𝐎 𝐏 𝐐 𝐑 𝐒 𝐓 𝐔 𝐕 𝐖 𝐗 𝐘 𝐙' },
  { name: 'Cursiva Negrita', chars: '𝑨 𝑩 𝑪 𝑫 𝑬 𝑭 𝑮 𝑯 𝑰 𝑱 𝑲 𝑳 𝑴 𝑵 𝑶 𝑵 𝑴 𝑹 𝑺 𝑻 𝑴 𝑽 𝑾 𝑑 𝒀 𝒁' },
  { name: 'Script Manuscrita', chars: '𝓐 𝓑 𝓒 𝓓 𝓔 𝓕 𝓖 𝓗 𝓘 𝓙 𝓚 𝓛 𝓜 𝓝 𝓞 𝓟 𝓠 𝓡 𝓢 𝓣 𝓔 𝓥 𝓦 𝓧 𝓨 𝓩' },
  { name: 'Gótica / Fraktur', chars: '𝔄 𝔅 ℭ 𝔇 𝔈 𝔁 𝔤 ℌ ℑ 𝔍 𝔏 𝔄 𝔐 𝔞 𝔟 𝔠 𝔡 𝔢 𝔣 𝔤 𝔨 𝔩 𝔪' },
  { name: 'Circundadas', chars: 'Ⓐ Ⓑ Ⓒ Ⓓ Ⓔ Ⓕ Ⓖ Ⓗ Ⓘ Ⓙ Ⓚ Ⓛ Ⓜ Ⓝ Ⓞ Ⓟ Ⓠ Ⓡ Ⓢ Ⓣ Ⓤ Ⓥ Ⓦ Ⓧ Ⓨ Ⓩ' },
  { name: 'Ancho Completo (Fullwidth)', chars: 'Ａ Ｂ Ｃ Ｄ Ｅ Ｆ Ｇ Ｈ Ｉ Ｊ Ｋ Ｌ Ｍ Ｎ Ｏ Ｐ Ｑ Ｒ Ｓ Ｔ Ｕ Ｖ Ｗ Ｘ Ｙ Ｚ' }
];

export default function CopyPasteLettersExplorer() {
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

  // Filter styles based on category selection
  const getFilteredStyles = () => {
    if (activeCategory === 'Todas') return stylesMap;
    if (activeCategory === 'Divertidas') return stylesMap.filter(s => s.id === 'circled' || s.id === 'bubble');
    if (activeCategory === 'Modernas') return stylesMap.filter(s => s.id === 'monospace' || s.id === 'doubleStruck' || s.id === 'smallCaps');
    return stylesMap.filter(s => s.category === activeCategory);
  };

  const currentFilteredStyles = getFilteredStyles();
  const currentText = inputText.trim();

  // Full alphabet strings
  const fullUpperStandard = 'A B C D E F G H I J K L M N Ñ O P Q R S T U V W X Y Z';
  const fullLowerStandard = 'a b c d e f g h i j k l m n ñ o p q r s t u v w x y z';

  const scriptStyleObj = stylesMap.find(s => s.id === 'script') || stylesMap[3];
  const fullUpperScript = scriptStyleObj.transform('ABCDEFGHIJKLMNOPQRSTUVWXYZ').split('').join(' ');
  const fullLowerScript = scriptStyleObj.transform('abcdefghijklmnopqrstuvwxyz').split('').join(' ');

  return (
    <div className={styles.explorerContainer}>
      {/* Interactive Tool Card */}
      <div id="herramienta-generador" className={styles.toolCard}>
        <div className={styles.toolHeader}>
          <h2 className={styles.toolTitle}>Generador de Letras para Copiar y Pegar</h2>
          {inputText && (
            <button
              type="button"
              className={styles.clearBtn}
              onClick={clearInput}
              aria-label="Limpiar texto del generador"
            >
              Limpiar ✕
            </button>
          )}
        </div>

        {/* Text Input */}
        <div className={styles.inputGroup}>
          <textarea
            className={styles.mainTextarea}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Escribe o pega tu texto aquí..."
            rows={4}
            aria-label="Escribe o pega tu texto para convertir"
          />
        </div>

        {/* One-click Sample Loading Buttons */}
        <div className={styles.quickSamplesBox}>
          <span className={styles.samplesLabel}>Cargar ejemplo rápido:</span>
          <div className={styles.samplesGrid}>
            {QUICK_SAMPLES.map((sample) => (
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
          <span className={styles.categoryLabel}>Filtrar estilos:</span>
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
            <p className={styles.emptyStateTitle}>Escribe algo para comenzar</p>
            <p className={styles.emptyStateSub}>Introduce una palabra, nombre o frase y aquí aparecerán diferentes estilos para copiar.</p>
          </div>
        ) : (
          <div className={styles.resultsGrid}>
            {currentFilteredStyles.map((style) => {
              const convertedText = style.transform(currentText);
              const key = `gen-${style.id}`;
              return (
                <div key={style.id} className={styles.resultCard}>
                  <div className={styles.resultCardHeader}>
                    <span className={styles.styleName}>{style.name}</span>
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

      {/* Ready-made Copy and Paste Text Templates Section */}
      <div className={styles.templatesSection}>
        <h2 className={styles.subSectionTitle}>Letras y textos para copiar y pegar</h2>
        <p className={styles.subSectionDesc}>Plantillas y frases con formato listas para copiar con un solo clic:</p>

        <div className={styles.templateCategoriesGrid}>
          {READY_MADE_TEMPLATES.map((cat) => (
            <div key={cat.id} className={styles.templateBlock}>
              <h3 className={styles.templateCategoryTitle}>Categoría: {cat.category}</h3>
              <div className={styles.templateItemsGrid}>
                {cat.items.map((item, idx) => {
                  const key = `temp-${cat.id}-${idx}`;
                  return (
                    <div key={idx} className={styles.templateCard}>
                      <span className={styles.templateLabel}>{item.label}</span>
                      <p className={styles.templateText}>{item.text}</p>
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

      {/* Search-Friendly Special Letter Collections */}
      <div className={styles.specialLettersSection}>
        <h2 className={styles.subSectionTitle}>Letras especiales para copiar</h2>
        <p className={styles.subSectionDesc}>Colecciones completas de alfabetos con estilos Unicode especiales para copiar directamente:</p>

        <div className={styles.specialGroupsGrid}>
          {SPECIAL_LETTER_GROUPS.map((group, idx) => {
            const key = `special-group-${idx}`;
            return (
              <div key={idx} className={styles.specialGroupCard}>
                <h3 className={styles.specialGroupName}>{group.name}</h3>
                <p className={styles.specialCharsText}>{group.chars}</p>
                <button
                  type="button"
                  className={`${styles.copyBtn} ${copiedKey === key ? styles.copiedBtn : ''}`}
                  onClick={() => handleCopy(group.chars, key)}
                >
                  {copiedKey === key ? '¡Copiado!' : 'Copiar'}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Alphabet Quick Copy Section */}
      <div className={styles.alphabetQuickCopySection}>
        <h2 className={styles.subSectionTitle}>Letras del alfabeto para copiar</h2>
        <p className={styles.subSectionDesc}>Copia el alfabeto completo en sus versiones estándar o cursivas:</p>

        <div className={styles.alphabetCardsGrid}>
          <div className={styles.alphabetCard}>
            <h3>Alfabeto Estándar (Mayúsculas)</h3>
            <p className={styles.alphabetText}>{fullUpperStandard}</p>
            <button
              type="button"
              className={`${styles.copyBtn} ${copiedKey === 'alpha-std-upper' ? styles.copiedBtn : ''}`}
              onClick={() => handleCopy(fullUpperStandard, 'alpha-std-upper')}
            >
              {copiedKey === 'alpha-std-upper' ? '¡Copiado!' : 'Copiar'}
            </button>
          </div>

          <div className={styles.alphabetCard}>
            <h3>Alfabeto Estándar (Minúsculas)</h3>
            <p className={styles.alphabetText}>{fullLowerStandard}</p>
            <button
              type="button"
              className={`${styles.copyBtn} ${copiedKey === 'alpha-std-lower' ? styles.copiedBtn : ''}`}
              onClick={() => handleCopy(fullLowerStandard, 'alpha-std-lower')}
            >
              {copiedKey === 'alpha-std-lower' ? '¡Copiado!' : 'Copiar'}
            </button>
          </div>

          <div className={styles.alphabetCard}>
            <h3>Alfabeto Cursivo (Mayúsculas)</h3>
            <p className={styles.alphabetText}>{fullUpperScript}</p>
            <button
              type="button"
              className={`${styles.copyBtn} ${copiedKey === 'alpha-script-upper' ? styles.copiedBtn : ''}`}
              onClick={() => handleCopy(fullUpperScript, 'alpha-script-upper')}
            >
              {copiedKey === 'alpha-script-upper' ? '¡Copiado!' : 'Copiar'}
            </button>
          </div>

          <div className={styles.alphabetCard}>
            <h3>Alfabeto Cursivo (Minúsculas)</h3>
            <p className={styles.alphabetText}>{fullLowerScript}</p>
            <button
              type="button"
              className={`${styles.copyBtn} ${copiedKey === 'alpha-script-lower' ? styles.copiedBtn : ''}`}
              onClick={() => handleCopy(fullLowerScript, 'alpha-script-lower')}
            >
              {copiedKey === 'alpha-script-lower' ? '¡Copiado!' : 'Copiar'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
