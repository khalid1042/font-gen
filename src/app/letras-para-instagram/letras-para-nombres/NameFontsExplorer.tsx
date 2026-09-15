'use client';

import { useState } from 'react';
import Link from 'next/link';
import { stylesMap } from '../../../utils/unicodeTransformer';
import styles from './page.module.css';

// Preset sample names for quick loading
const PRESET_NAMES = [
  'Khalid', 'Sofia', 'Alex', 'Daniel', 'Valentina', 'Emma', 'Mateo', 'Isabella', 'Lucas', 'Sara'
];

// Style categories for filter tabs
const CATEGORIES = [
  { id: 'all', label: 'Todas' },
  { id: 'Elegante', label: 'Elegantes' },
  { id: 'Cursiva', label: 'Cursivas' },
  { id: 'Negrita', label: 'Negritas' },
  { id: 'Gótica', label: 'Góticas' },
  { id: 'Decorativa', label: 'Decorativas' },
  { id: 'Moderna', label: 'Modernas' },
  { id: 'Divertida', label: 'Divertidas' },
  { id: 'Especial', label: 'Especiales' },
];

// Name Decorator Symbols & Templates
const DECORATION_TEMPLATES = [
  { id: 'hearts', label: '♡ Hearts ♡', prefix: '♡ ', suffix: ' ♡' },
  { id: 'stars', label: '★ Stars ★', prefix: '★ ', suffix: ' ★' },
  { id: 'sparkles', label: '✦ Sparkles ✦', prefix: '✦ ', suffix: ' ✦' },
  { id: 'ribbon', label: '୨୧ Ribbon ୨୧', prefix: '୨୧ ', suffix: ' ୨୧' },
  { id: 'brackets', label: '꧁ Fancy ꧂', prefix: '꧁ ', suffix: ' ꧂' },
  { id: 'box', label: '『 Box 』', prefix: '『 ', suffix: ' 』' },
  { id: 'minimal', label: '• Minimal •', prefix: '• ', suffix: ' •' },
  { id: 'dashes', label: '— Dashes —', prefix: '— ', suffix: ' —' },
];

// Ready-to-copy Name Ideas by Category
const NAME_IDEAS = [
  {
    category: 'Nombres Elegantes & Aesthetic',
    items: [
      { text: '𝓡𝓸𝓫𝓮𝓻𝓽𝓸', label: 'Elegante 1' },
      { text: '𝒮ℴ𝒻𝒾𝒶 ℛℴ𝓈ℯ', label: 'Elegante 2' },
      { text: '☾ 𝙰𝚕𝚎𝚡𝚊𝚗𝚍𝚎𝚛', label: 'Aesthetic 1' },
      { text: '✦ 𝕍𝕒𝕝𝕖𝕟𝕥𝕚𝕟𝕒', label: 'Aesthetic 2' },
    ]
  },
  {
    category: 'Nombres Minimalistas & Creativos',
    items: [
      { text: '• D A N I E L •', label: 'Minimal 1' },
      { text: '— 𝙻 𝚞 𝚌 𝚊 𝚜 —', label: 'Minimal 2' },
      { text: '🎨 𝓒𝓪𝓻𝓵𝓸𝓼 𝓐𝓻𝓽', label: 'Creador' },
      { text: '✨ 𝙴𝚖𝚖𝚊 𝙲𝚛𝚎𝚊𝚝𝚒𝚟𝚎', label: 'Diseño' },
    ]
  },
  {
    category: 'Nombres Románticos & Profesionales',
    items: [
      { text: '♡ 𝒴𝒶𝓇ℯ𝓁𝒾𝓈 ♡', label: 'Romántico 1' },
      { text: '❣ 𝓜𝓪𝓽𝓮𝓸 & 𝓢𝓸𝓯𝓲𝓪', label: 'Romántico 2' },
      { text: '💼 𝙳𝚛. 𝙵𝚎𝚛𝚗𝚊𝚗𝚍𝚘', label: 'Profesional 1' },
      { text: '📈 𝐈𝐧𝐠. 𝐀𝐥𝐞𝐣𝐚𝐧𝐝𝐫𝐨', label: 'Profesional 2' },
    ]
  },
  {
    category: 'Nombres para Gamers & Divertidos',
    items: [
      { text: '⚡ ℱℛ𝒪𝒮𝒯 𝒦ℐ𝒩𝒢 ⚡', label: 'Gamer 1' },
      { text: '🎮 𝒩ℰ𝒳𝒰𝒮 𝒫ℛ𝒪', label: 'Gamer 2' },
      { text: 'Ⓢⓐⓝⓣⓘⓐⓖⓞ', label: 'Burbuja' },
      { text: '🅲🅰🆁🅻🅾🆂', label: 'Cuadrado' },
    ]
  }
];

export default function NameFontsExplorer() {
  const [nameInput, setNameInput] = useState<string>('Khalid');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [decoratorName, setDecoratorName] = useState<string>('Sofia');
  const [selectedDecoration, setSelectedDecoration] = useState<number>(0);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => {
      setCopiedKey(null);
    }, 2000);
  };

  const clearInput = () => {
    setNameInput('');
  };

  const currentName = nameInput.trim() || 'Khalid';
  const currentDecorator = decoratorName.trim() || 'Sofia';

  // Filter styles based on category tab
  const filteredStyles = stylesMap.filter((style) => {
    if (selectedCategory === 'all') return true;
    return style.category.toLowerCase().includes(selectedCategory.toLowerCase());
  });

  // Comparison phrase for preview section
  const comparisonName = nameInput.trim() || 'Sofia';

  return (
    <div className={styles.explorerContainer}>
      {/* Main Interactive Name Generator Card */}
      <div id="herramienta-nombres" className={styles.toolCard}>
        <div className={styles.toolHeader}>
          <h2 className={styles.toolTitle}>Generador de Letras para Nombres</h2>
          {nameInput && (
            <button
              type="button"
              className={styles.clearBtn}
              onClick={clearInput}
              aria-label="Limpiar nombre"
            >
              Limpiar ✕
            </button>
          )}
        </div>

        {/* Input Field & Character Counter */}
        <div className={styles.inputGroup}>
          <label htmlFor="name-input-field" className={styles.inputLabel}>
            Escribe tu nombre:
          </label>
          <input
            id="name-input-field"
            type="text"
            className={styles.mainInput}
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
            placeholder="Escribe tu nombre aquí..."
            maxLength={60}
            aria-label="Escribe tu nombre aquí"
          />
          <div className={styles.inputMetaRow}>
            <span className={styles.charCounter}>
              {nameInput.length} / 60 caracteres
            </span>
            <div className={styles.presetNameChips}>
              <span className={styles.presetLabel}>Prueba con:</span>
              {PRESET_NAMES.map((name, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={styles.presetChip}
                  onClick={() => setNameInput(name)}
                >
                  {name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className={styles.categoryTabs}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`${styles.tabBtn} ${selectedCategory === cat.id ? styles.activeTab : ''}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Live Converted Results Grid */}
        {currentName === '' ? (
          <div className={styles.emptyStateBox}>
            <p className={styles.emptyStateTitle}>Escribe tu nombre arriba para ver el resultado</p>
            <p className={styles.emptyStateSub}>Introduce cualquier nombre o apodo para transformarlo al instante en más de 12 estilos tipográficos Unicode.</p>
          </div>
        ) : (
          <div className={styles.resultsGrid}>
            {filteredStyles.map((style) => {
              const convertedName = style.transform(currentName);
              const key = `gen-name-${style.id}`;
              return (
                <div key={style.id} className={styles.resultCard}>
                  <div className={styles.resultHeader}>
                    <span className={styles.styleBadge}>{style.name}</span>
                    <span className={styles.categoryBadge}>{style.category}</span>
                  </div>
                  <div className={styles.resultContent}>
                    <p className={styles.resultText}>{convertedName}</p>
                  </div>
                  <button
                    type="button"
                    className={`${styles.copyBtn} ${copiedKey === key ? styles.copiedBtn : ''}`}
                    onClick={() => handleCopy(convertedName, key)}
                    aria-label={`Copiar nombre en estilo ${style.name}`}
                  >
                    {copiedKey === key ? '¡Copiado!' : 'Copiar'}
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Dedicated Name Decorator Mini-Tool */}
      <div className={styles.sectionBlock}>
        <h2 className={styles.subSectionTitle}>Decorador de Nombres</h2>
        <p className={styles.subSectionDesc}>Añade marcos, estrellas, corazones y símbolos estéticos alrededor de tu nombre:</p>

        <div className={styles.decoratorBox}>
          <div className={styles.decoratorInputs}>
            <div className={styles.decoratorInputGroup}>
              <label htmlFor="decorator-name-input" className={styles.decoratorLabel}>
                Tu nombre:
              </label>
              <input
                id="decorator-name-input"
                type="text"
                className={styles.decoratorInput}
                value={decoratorName}
                onChange={(e) => setDecoratorName(e.target.value)}
                placeholder="Escribe un nombre..."
                aria-label="Tu nombre para decorar"
              />
            </div>
            <div className={styles.decoratorSelectGroup}>
              <span className={styles.decoratorLabel}>Elige una decoración:</span>
              <div className={styles.decoratorChipsGrid}>
                {DECORATION_TEMPLATES.map((tmpl, idx) => (
                  <button
                    key={tmpl.id}
                    type="button"
                    className={`${styles.decoratorChip} ${selectedDecoration === idx ? styles.activeDecoratorChip : ''}`}
                    onClick={() => setSelectedDecoration(idx)}
                  >
                    {tmpl.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Combined Output Display */}
          {(() => {
            const currentTmpl = DECORATION_TEMPLATES[selectedDecoration];
            const decoratedResult = `${currentTmpl.prefix}${currentDecorator}${currentTmpl.suffix}`;
            const key = `decorator-combined-${selectedDecoration}`;
            return (
              <div className={styles.decoratorOutputCard}>
                <span className={styles.decoratorOutputLabel}>Resultado decorado:</span>
                <p className={styles.decoratorOutputText}>{decoratedResult}</p>
                <button
                  type="button"
                  className={`${styles.copyBtn} ${copiedKey === key ? styles.copiedBtn : ''}`}
                  onClick={() => handleCopy(decoratedResult, key)}
                >
                  {copiedKey === key ? '¡Copiado!' : 'Copiar nombre decorado'}
                </button>
              </div>
            );
          })()}
        </div>
      </div>

      {/* Name Style Preview Comparison Section */}
      <div className={styles.sectionBlock}>
        <h2 className={styles.subSectionTitle}>Prueba tu nombre en diferentes estilos</h2>
        <p className={styles.subSectionDesc}>Compara la apariencia de un mismo nombre a través de variantes tipográficas clave:</p>

        <div className={styles.comparisonGrid}>
          {stylesMap.slice(0, 8).map((style) => {
            const convertedPreview = style.transform(comparisonName);
            const key = `preview-name-${style.id}`;
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

      {/* Ready-to-copy Name Ideas */}
      <div id="ideas-nombres" className={styles.sectionBlock}>
        <h2 className={styles.subSectionTitle}>Nombres bonitos para Instagram</h2>
        <p className={styles.subSectionDesc}>Colección de nombres estilizados e ideas creativas listas para usar:</p>

        <div className={styles.ideasStack}>
          {NAME_IDEAS.map((group, gIdx) => (
            <div key={gIdx} className={styles.ideaGroupBlock}>
              <h3 className={styles.ideaCatTitle}>{group.category}</h3>
              <div className={styles.ideasGrid}>
                {group.items.map((item, iIdx) => {
                  const key = `name-idea-${gIdx}-${iIdx}`;
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
