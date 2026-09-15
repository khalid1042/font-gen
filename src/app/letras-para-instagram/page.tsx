import Link from 'next/link';
import type { Metadata } from 'next';
import InstagramFontsExplorer from './InstagramFontsExplorer';
import styles from './page.module.css';
import RelatedLinks from '../../components/RelatedLinks/RelatedLinks';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Letras para Instagram | Fuentes y Textos para Copiar",
  description: "Crea letras para Instagram con diferentes estilos. Genera textos para tu bio, nombre, captions y comentarios, y cópialos fácilmente desde el móvil.",
  alternates: {
    canonical: "/letras-para-instagram/",
  },
  openGraph: {
    images: [{ url: '/images/letras_instagram.png', width: 1200, height: 630, alt: 'Letras para Instagram' }],
    title: "Letras para Instagram | Fuentes y Textos para Copiar",
    description: "Generador de fuentes y letras bonitas para la bio, nombre y captions de Instagram.",
    url: "https://letrasbonitas.example.com/letras-para-instagram/",
    siteName: "Letras Bonitas",
    locale: "es_ES",
    type: "article",
  },
};

export default function LetrasParaInstagramPage() {
  return (
    <main className={styles.main}>
      {/* Breadcrumb */}
      <div className="container">
        <nav aria-label="breadcrumb" className={styles.breadcrumb}>
          <ol>
            <li><Link href="/">Inicio</Link></li>
            <li><span aria-current="page">Letras para Instagram</span></li>
          </ol>
        </nav>
      </div>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className={styles.title}>Letras para Instagram</h1>
            <p className={styles.subtitle}>
              Crea letras y textos con estilos diferentes para tu perfil de Instagram. Escribe tu texto, elige un estilo y cópialo para usarlo en tu bio, nombre, publicaciones, captions o comentarios.
            </p>
            <div className={styles.heroImageWrapper} style={{ marginTop: '2rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid #eaeaea' }}>
              <Image src="/images/letras_instagram.png" alt="Letras para Instagram" width={1200} height={630} style={{ width: '100%', height: 'auto', display: 'block' }} priority />
            </div>
            <div className={styles.heroActions}>
              <a href="#generador-instagram" className={styles.ctaBtn}>
                Crear letras para Instagram
              </a>
              <a href="#estilos-populares" className={styles.secondaryCtaBtn}>
                Ver estilos
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Instagram Generator & Use Cases */}
      <section className={styles.section}>
        <div className="container">
          <InstagramFontsExplorer />
        </div>
      </section>

      {/* Username Compatibility Educational Section */}
      <section className={`${styles.section} ${styles.bgLight}`}>
        <div className="container">
          <article className={styles.article}>
            <h2>¿Puedo usar estas letras en mi nombre de usuario de Instagram?</h2>
            <p>
              Es importante diferenciar entre dos campos clave de tu perfil de Instagram:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Nombre visible (Display Name):</strong> Es el nombre principal que aparece en negrita en tu biografía. En este campo <strong>sí puedes usar caracteres Unicode estilizados</strong> (como 𝐂𝐚𝐫𝐥𝐨𝐬 o 𝓒𝓪𝓻𝓵𝓸𝓼).
              </li>
              <li>
                <strong>Nombre de usuario (Username / @handle):</strong> Es la dirección única de tu cuenta (por ejemplo, @usuario). Instagram exige que los nombres de usuario contengan únicamente caracteres alfabéticos estándar (A-Z), números, puntos y guiones bajos. Por ello, los caracteres Unicode con adornos no están permitidos en el @handle.
              </li>
            </ol>
          </article>
        </div>
      </section>

      {/* What are Instagram fonts */}
      <section className={styles.section}>
        <div className="container">
          <article className={styles.article}>
            <h2>¿Qué son las fuentes para Instagram?</h2>
            <p>
              El término <strong>"fuentes para Instagram"</strong> es una expresión popular utilizada en internet para referirse a textos estilizados que se pueden copiar y pegar en la plataforma.
            </p>
            <p>
              Técnicamente, Instagram no permite instalar archivos de fuentes externos (.ttf o .otf). Las herramientas como nuestro generador funcionan convirtiendo las letras normales en caracteres del mapa <strong>Unicode</strong> internacional. Debido a que son símbolos de texto universales, las aplicaciones móviles pueden mostrarlos con el estilo gráfico de cursiva, negrita o caligrafía.
            </p>
          </article>
        </div>
      </section>

      {/* How to change letters on Instagram */}
      <section className={`${styles.section} ${styles.bgLight}`}>
        <div className="container">
          <article className={styles.article}>
            <h2>¿Cómo cambiar las letras en Instagram?</h2>
            <ol className={styles.orderedList}>
              <li><strong>1. Escribe tu texto:</strong> Introduce el mensaje o frase deseada en la herramienta superior.</li>
              <li><strong>2. Elige un estilo:</strong> Explora las variantes generadas para tu bio, nombre o caption.</li>
              <li><strong>3. Copia el resultado:</strong> Pulsa el botón <strong>Copiar</strong>.</li>
              <li><strong>4. Abre Instagram:</strong> Dirígete a la sección "Editar perfil" o a una nueva publicación.</li>
              <li><strong>5. Pega el texto:</strong> Mantén presionado el campo de texto y selecciona <strong>Pegar</strong>.</li>
            </ol>
          </article>
        </div>
      </section>

      {/* Mobile Instructions */}
      <section className={styles.section}>
        <div className="container">
          <article className={styles.article}>
            <h2>Cómo cambiar las letras de Instagram desde el móvil</h2>
            <p>
              Nuestra aplicación está 100% optimizada para navegadores móviles en Android e iOS:
            </p>
            <ol className={styles.orderedList}>
              <li>Abre el navegador web de tu móvil (Chrome, Safari, etc.).</li>
              <li>Escribe tu nombre o biografía en el cuadro del generador.</li>
              <li>Toca en <strong>Copiar</strong> bajo la variante que más te guste.</li>
              <li>Abre la app de Instagram en tu smartphone.</li>
              <li>Entra en tu perfil, pulsa en <strong>Editar perfil</strong> y pega el texto en el campo Nombre o Biografía.</li>
              <li>Guarda los cambios y tu perfil lucirá con el nuevo estilo.</li>
            </ol>
          </article>
        </div>
      </section>

      {/* Compatibility Notice */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.noticeBox}>
            <h3>⚠️ Nota sobre la compatibilidad de caracteres</h3>
            <p>
              Los caracteres especiales Unicode pueden mostrarse de forma ligeramente diferente según el dispositivo, sistema operativo, navegador o versión de la app de Instagram. Si un estilo no se muestra correctamente en tu pantalla, te recomendamos elegir una variante alternativa de la lista.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={`${styles.section} ${styles.bgLight}`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Preguntas frecuentes</h2>
          <div className={styles.faqList}>
            <details className={styles.faqItem}>
              <summary>¿Cómo puedo poner letras bonitas en Instagram?</summary>
              <p>Simplemente genera tu frase en la herramienta superior, haz clic en "Copiar" y pégala en tu biografía o publicación de Instagram.</p>
            </details>
            <details className={styles.faqItem}>
              <summary>¿Cómo cambiar las letras de mi bio de Instagram?</summary>
              <p>Genera el texto en el conversor, cópialo, entra en Instagram, ve a "Editar perfil", mantén presionado el campo "Biografía" y selecciona "Pegar".</p>
            </details>
            <details className={styles.faqItem}>
              <summary>¿Qué fuentes puedo usar en Instagram?</summary>
              <p>Puedes usar cualquier estilo de texto Unicode compatible, como letras en negrita, cursiva, caligrafía, góticas y decorativas.</p>
            </details>
            <details className={styles.faqItem}>
              <summary>¿Puedo usar letras especiales en mi nombre de Instagram?</summary>
              <p>Sí, en el campo de "Nombre" visible de tu perfil sí puedes usar caracteres tipográficos especiales. En el nombre de usuario (@handle) únicamente se permiten letras estándar y números.</p>
            </details>
            <details className={styles.faqItem}>
              <summary>¿Funcionan estas letras en Instagram desde el móvil?</summary>
              <p>Sí, el proceso de copiar desde el navegador y pegar en la app oficial de Instagram funciona de forma fluida tanto en Android como en iPhone.</p>
            </details>
            <details className={styles.faqItem}>
              <summary>¿Las letras para Instagram son fuentes reales?</summary>
              <p>No son archivos tipográficos instalables, sino símbolos de texto Unicode internacionales reconocidos por la mayoría de smartphones modernos.</p>
            </details>
            <details className={styles.faqItem}>
              <summary>¿Por qué algunas letras no funcionan?</summary>
              <p>Algunos sistemas operativos antiguos o versiones no actualizadas de la app pueden no incluir el glifo Unicode correspondiente en su fuente de sistema.</p>
            </details>
            <details className={styles.faqItem}>
              <summary>¿Puedo usar emojis con estas letras?</summary>
              <p>Por supuesto, nuestro generador preserva todos los emojis estándar para que puedas combinarlos con tus estilos de letras preferidos.</p>
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
