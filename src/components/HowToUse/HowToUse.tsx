import React from 'react';
import styles from './HowToUse.module.css';

interface HowToUseProps {
  title?: string;
  step1Title?: string;
  step1Desc?: string;
  step2Title?: string;
  step2Desc?: string;
  step3Title?: string;
  step3Desc?: string;
}

export const HowToUse: React.FC<HowToUseProps> = ({
  title = "¿Cómo funciona?",
  step1Title = "1. Escribe tu texto",
  step1Desc = "Escribe o pega el texto que deseas convertir en el cuadro superior.",
  step2Title = "2. Elige tu estilo",
  step2Desc = "Explora la lista de fuentes y elige la que más te guste.",
  step3Title = "3. Copia y pega",
  step3Desc = "Haz clic en el botón de copiar y pégalo en tus redes sociales."
}) => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      
      <div className={styles.stepsContainer}>
        {/* Step 1 */}
        <div className={styles.stepCard}>
          <div className={styles.stepNumber}>1</div>
          <div className={styles.stepContent}>
            <h3 className={styles.stepTitle}>{step1Title}</h3>
            <p className={styles.stepDescription}>{step1Desc}</p>
            <div className={styles.visualMockup}>
              <div className={styles.mockupInput}></div>
              <div className={`${styles.arrow} ${styles.arrowRight}`} style={{ '--rotation': '30deg' } as React.CSSProperties}>
                ↖
              </div>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className={styles.stepCard}>
          <div className={styles.stepNumber}>2</div>
          <div className={styles.stepContent}>
            <h3 className={styles.stepTitle}>{step2Title}</h3>
            <p className={styles.stepDescription}>{step2Desc}</p>
            <div className={styles.visualMockup}>
              <div className={styles.mockupList}>
                <div className={styles.mockupItem}></div>
                <div className={styles.mockupItem}></div>
                <div className={styles.mockupItem}></div>
              </div>
              <div className={`${styles.arrow} ${styles.arrowDown}`} style={{ '--rotation': '0deg' } as React.CSSProperties}>
                ↓
              </div>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className={styles.stepCard}>
          <div className={styles.stepNumber}>3</div>
          <div className={styles.stepContent}>
            <h3 className={styles.stepTitle}>{step3Title}</h3>
            <p className={styles.stepDescription}>{step3Desc}</p>
            <div className={styles.visualMockup}>
              <div className={styles.mockupCopyBtn}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
                Copiar
              </div>
              <div className={`${styles.arrow} ${styles.arrowClick}`} style={{ '--rotation': '-30deg' } as React.CSSProperties}>
                👆
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
