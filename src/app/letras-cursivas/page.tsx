import Link from 'next/link';
import type { Metadata } from "next";
import Generator from '../../components/Generator/Generator';
import styles from './page.module.css';
import RelatedLinks from '../../components/RelatedLinks/RelatedLinks';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Letras Cursivas para Copiar y Pegar | Letras Bonitas",
  description: "Generador online de letras cursivas para copiar y pegar en Instagram, WhatsApp, Facebook y más. Convierte tu texto en cursiva elegante fácilmente.",
  alternates: {
    canonical: "/letras-cursivas/",
  },
  openGraph: {
    images: [{ url: '/images/letras_cursivas.png', width: 1200, height: 630, alt: 'Letras Cursivas' }],
    title: "Letras Cursivas para Copiar y Pegar",
    description: "Generador de letras cursivas elegantes para copiar y pegar.",
    url: "https://letrasbonitas.example.com/letras-cursivas/",
    siteName: "Letras Bonitas",
    locale: "es_ES",
    type: "article",
  },
};

export default function LetrasCursivas() {
  return (
    <main className={styles.main}>
      {/* Breadcrumb */}
      <div className="container">
        <nav aria-label="breadcrumb" className={styles.breadcrumb}>
          <ol>
            <li><Link href="/">Inicio</Link></li>
            <li><span aria-current="page">Letras Cursivas</span></li>
          </ol>
        </nav>
      </div>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className={styles.title}>Letras Cursivas</h1>
            <p className={styles.subtitle}>
              Genera elegantes letras cursivas para copiar y pegar online. Escribe tu texto, elige un estilo y cópialo fácilmente para usarlo donde quieras.
            </p>
            <div className={styles.heroImageWrapper} style={{ marginTop: '2rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid #eaeaea' }}>
              <Image src="/images/letras_cursivas.png" alt="Letras Cursivas" width={1200} height={630} style={{ width: '100%', height: 'auto', display: 'block' }} priority />
            </div>
          </div>
        </div>
      </section>

      {/* Main Generator Tool */}
      <section className={styles.generatorSection}>
        <div className="container">
          <Generator filterCategory="Letras Cursivas" />
        </div>
      </section>

      {/* Quick Examples */}
      <section className={`${styles.section} ${styles.bgLight}`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Ejemplos de Letras Cursivas</h2>
          <div className={styles.examplesGrid}>
            <div className={styles.exampleCard}>
              <h3>Instagram Bio</h3>
              <p className={styles.exampleText}>𝓛𝓲𝓿𝓮 𝓛𝓪𝓾𝓰𝓱 𝓛𝓸𝓿𝓮</p>
            </div>
            <div className={styles.exampleCard}>
              <h3>WhatsApp Status</h3>
              <p className={styles.exampleText}>𝓑𝓾𝓮𝓷𝓸𝓼 𝓭í𝓪𝓼 ✨</p>
            </div>
            <div className={styles.exampleCard}>
              <h3>Social Media Caption</h3>
              <p className={styles.exampleText}>𝓢𝓾𝓮ñ𝓸𝓼 𝓺𝓾𝓮 𝓼𝓮 𝓬𝓸𝓷𝓿𝓲𝓮𝓻𝓽𝓮𝓷 𝓮𝓷 𝓶𝓮𝓽𝓪𝓼</p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Create */}
      <section className={styles.section}>
        <div className="container">
          <article className={styles.article}>
            <h2>¿Cómo crear letras cursivas?</h2>
            <ol className={styles.orderedList}>
              <li><strong>Escribe tu texto:</strong> Utiliza el recuadro superior para introducir la frase o palabra que deseas transformar.</li>
              <li><strong>Elige un estilo cursivo:</strong> Explora las diferentes opciones generadas automáticamente (cursiva elegante, clásica, manuscrita, etc.).</li>
              <li><strong>Pulsa copiar:</strong> Haz clic en el botón debajo del estilo que más te guste.</li>
              <li><strong>Pega el resultado:</strong> Ve a tu red social favorita y pega el texto donde quieras.</li>
            </ol>
          </article>
        </div>
      </section>

      {/* What are they */}
      <section className={`${styles.section} ${styles.bgLight}`}>
        <div className="container">
          <article className={styles.article}>
            <h2>¿Qué son las letras cursivas?</h2>
            <p>
              El texto cursivo que ves en nuestro generador no es una fuente tradicional (como Arial o Times New Roman). Se trata de <strong>caracteres Unicode especiales</strong> que han sido diseñados originalmente para notación matemática o escritura especial.
            </p>
            <p>
              Debido a que son símbolos Unicode estándar y no fuentes que requieren instalación, puedes <strong>copiarlos y pegarlos</strong> directamente en cualquier aplicación o sitio web que soporte texto enriquecido, garantizando que todos vean el mismo estilo cursivo sin importar el dispositivo que utilicen.
            </p>
          </article>
        </div>
      </section>

      {/* Where to use */}
      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle}>¿Dónde puedes usar letras cursivas?</h2>
          <div className={styles.tagsContainer}>
            <span className={styles.tag}>Instagram</span>
            <span className={styles.tag}>WhatsApp</span>
            <span className={styles.tag}>TikTok</span>
            <span className={styles.tag}>Facebook</span>
            <span className={styles.tag}>YouTube</span>
            <span className={styles.tag}>Discord</span>
            <span className={styles.tag}>Perfiles</span>
            <span className={styles.tag}>Biografías</span>
            <span className={styles.tag}>Estados</span>
            <span className={styles.tag}>Nombres de usuario</span>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={`${styles.section} ${styles.bgLight}`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Preguntas Frecuentes</h2>
          <div className={styles.faqList}>
            <details className={styles.faqItem}>
              <summary>¿Cómo hacer letras cursivas?</summary>
              <p>Solo tienes que escribir tu texto en la herramienta de arriba. Se generarán al instante múltiples opciones de texto en cursiva para que elijas tu favorita.</p>
            </details>
            <details className={styles.faqItem}>
              <summary>¿Cómo copiar letras cursivas?</summary>
              <p>Simplemente haz clic en el botón "Copiar" que aparece debajo de cada estilo generado. Luego puedes usar "Pegar" (Ctrl+V o mantener presionado en móviles) donde lo necesites.</p>
            </details>
            <details className={styles.faqItem}>
              <summary>¿Puedo usar letras cursivas en Instagram?</summary>
              <p>Sí, las fuentes cursivas funcionan perfectamente en las biografías de Instagram, en los nombres de perfil y en las descripciones de las publicaciones.</p>
            </details>
            <details className={styles.faqItem}>
              <summary>¿Funcionan en WhatsApp?</summary>
              <p>Por supuesto. Puedes enviarlas en tus mensajes directos o usarlas para decorar tus Estados de WhatsApp sin ningún problema.</p>
            </details>
            <details className={styles.faqItem}>
              <summary>¿El generador de letras cursivas es gratis?</summary>
              <p>Totalmente. Puedes utilizar esta herramienta todas las veces que quieras de forma 100% gratuita y sin necesidad de instalar nada.</p>
            </details>
          </div>
        </div>
      </section>

      {/* Herramientas Relacionadas */}
      <section className={styles.section}>
        <div className="container">
          <RelatedLinks />
        </div>
      </section>
    </main>
  );
}
