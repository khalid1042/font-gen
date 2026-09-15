import Link from 'next/link';
import Generator from '../components/Generator/Generator';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className={styles.title}>
              Generador de <span className="text-gradient">Letras Bonitas</span>
            </h1>
            <p className={styles.subtitle}>
              Genera letras bonitas, estilos de texto y letras especiales para copiar y pegar fácilmente en tus perfiles, biografías y mensajes.
            </p>
          </div>
        </div>
      </section>

      {/* Main Generator Tool */}
      <section className={styles.generatorSection}>
        <div className="container">
          <Generator />
        </div>
      </section>

      {/* Style Categories (Placeholder links for future pages) */}
      <section id="categorias" className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Explora Más Estilos</h2>
          <div className={styles.categoryGrid}>
            <div className={styles.categoryCard}>
              <h3>Letras Cursivas</h3>
              <p>Textos elegantes y conectados</p>
            </div>
            <div className={styles.categoryCard}>
              <h3>Letras Góticas</h3>
              <p>Estilo medieval y oscuro</p>
            </div>
            <div className={styles.categoryCard}>
              <h3>Letras Decorativas</h3>
              <p>Llamativas y diferentes</p>
            </div>
            <div className={styles.categoryCard}>
              <h3>Letras Especiales</h3>
              <p>Símbolos y caracteres únicos</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="como-funciona" className={`${styles.section} ${styles.bgLight}`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>¿Cómo funciona?</h2>
          <div className={styles.stepsGrid}>
            <div className={styles.step}>
              <div className={styles.stepIcon}>1</div>
              <h3>Escribe</h3>
              <p>Introduce el texto que quieres transformar en el recuadro superior.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepIcon}>2</div>
              <h3>Elige</h3>
              <p>Selecciona tu estilo favorito entre las decenas de opciones generadas automáticamente.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepIcon}>3</div>
              <h3>Copia</h3>
              <p>Haz clic en "Copiar" y pégalo en Instagram, WhatsApp o donde prefieras.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle}>¿Dónde usar estas letras?</h2>
          <div className={styles.tagsContainer}>
            <span className={styles.tag}>Instagram</span>
            <span className={styles.tag}>TikTok</span>
            <span className={styles.tag}>Facebook</span>
            <span className={styles.tag}>WhatsApp</span>
            <span className={styles.tag}>YouTube</span>
            <span className={styles.tag}>Discord</span>
            <span className={styles.tag}>Nombres en Juegos</span>
            <span className={styles.tag}>Biografías</span>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className={`${styles.section} ${styles.seoContent}`}>
        <div className="container">
          <article className={styles.article}>
            <h2>¿Qué son las letras bonitas?</h2>
            <p>
              Las <strong>letras bonitas</strong> o estilos de texto alternativos son en realidad caracteres especiales que forman parte del estándar Unicode. No se trata de fuentes o tipografías tradicionales que requieras instalar en tu dispositivo, sino de símbolos que los navegadores y aplicaciones ya saben interpretar.
            </p>
            <p>
              Esto es lo que permite que puedas copiar y pegar estas <em>letras decorativas</em> en aplicaciones como Instagram, Facebook, WhatsApp y TikTok, y que tus amigos puedan verlas exactamente con el mismo diseño elegante sin importar si usan Android o iOS.
            </p>
          </article>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Preguntas Frecuentes</h2>
          <div className={styles.faqList}>
            <details className={styles.faqItem}>
              <summary>¿Qué son las letras bonitas?</summary>
              <p>Son combinaciones de caracteres Unicode especiales que simulan diferentes estilos tipográficos (cursiva, negrita, gótica) pero que pueden ser copiados y pegados como texto normal en cualquier plataforma que soporte Unicode.</p>
            </details>
            <details className={styles.faqItem}>
              <summary>¿Cómo puedo crear letras bonitas?</summary>
              <p>Simplemente escribe tu texto en el recuadro superior de nuestro generador. La herramienta convertirá instantáneamente tus palabras en decenas de estilos diferentes. Luego, solo debes hacer clic en copiar en el estilo que más te guste.</p>
            </details>
            <details className={styles.faqItem}>
              <summary>¿Funcionan las letras bonitas en Instagram?</summary>
              <p>¡Sí! Las letras generadas funcionan perfectamente en biografías de Instagram, comentarios, descripciones y mensajes directos.</p>
            </details>
            <details className={styles.faqItem}>
              <summary>¿El generador de letras bonitas es gratis?</summary>
              <p>Sí, nuestro generador de texto es 100% gratuito. No requiere registro ni instalación de ninguna aplicación adicional.</p>
            </details>
          </div>
        </div>
      </section>
    </main>
  );
}
