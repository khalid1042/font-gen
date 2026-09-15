import Link from 'next/link';
import type { Metadata } from 'next';
import CopyPasteLettersExplorer from './CopyPasteLettersExplorer';
import styles from './page.module.css';
import RelatedLinks from '../../../components/RelatedLinks/RelatedLinks';

export const metadata: Metadata = {
  title: "Letras para Copiar y Pegar | Textos Bonitos y Estilos para Copiar",
  description: "Encuentra letras para copiar y pegar en diferentes estilos. Crea textos bonitos, decorativos y originales para Instagram, WhatsApp, TikTok y más.",
  alternates: {
    canonical: "/conversor-de-letras/letras-para-copiar-y-pegar/",
  },
  openGraph: {
    title: "Letras para Copiar y Pegar | Textos Bonitos y Estilos para Copiar",
    description: "Genera y copia al instante letras bonitas, decorativas y especiales para redes sociales.",
    url: "https://letrasbonitas.example.com/conversor-de-letras/letras-para-copiar-y-pegar/",
    siteName: "Letras Bonitas",
    locale: "es_ES",
    type: "article",
  },
};

export default function LetrasParaCopiarYPegarPage() {
  return (
    <main className={styles.main}>
      {/* Breadcrumb */}
      <div className="container">
        <nav aria-label="breadcrumb" className={styles.breadcrumb}>
          <ol>
            <li><Link href="/">Inicio</Link></li>
            <li><Link href="/conversor-de-letras/">Conversor de Letras</Link></li>
            <li><span aria-current="page">Letras para Copiar y Pegar</span></li>
          </ol>
        </nav>
      </div>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className={styles.title}>Letras para Copiar y Pegar</h1>
            <p className={styles.subtitle}>
              Crea y copia letras, palabras y textos con estilos diferentes para usar donde quieras. Escribe tu texto, elige un estilo y copia el resultado en segundos.
            </p>
            <a href="#herramienta-generador" className={styles.ctaBtn}>
              Crear mi texto
            </a>
          </div>
        </div>
      </section>

      {/* Main Interactive Tool & Collections */}
      <section className={styles.section}>
        <div className="container">
          <CopyPasteLettersExplorer />
        </div>
      </section>

      {/* How to Use */}
      <section className={`${styles.section} ${styles.bgLight}`}>
        <div className="container">
          <article className={styles.article}>
            <h2>Cómo copiar y pegar letras bonitas</h2>
            <ol className={styles.orderedList}>
              <li><strong>1. Escribe tu texto:</strong> Introduce una palabra, nombre, frase o mensaje en la caja superior.</li>
              <li><strong>2. Elige un estilo:</strong> Explora los diferentes estilos disponibles (negrita, cursiva, gótico, decorativo, etc.).</li>
              <li><strong>3. Copia y pega:</strong> Pulsa el botón "Copiar" y pega el resultado donde quieras.</li>
            </ol>
          </article>
        </div>
      </section>

      {/* Where can I use these letters */}
      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle}>¿Dónde puedo usar estas letras?</h2>
          <div className={styles.tagsContainer}>
            <span className={styles.tag}>Instagram Bios</span>
            <span className={styles.tag}>TikTok Profiles</span>
            <span className={styles.tag}>WhatsApp Status</span>
            <span className={styles.tag}>Facebook Posts</span>
            <span className={styles.tag}>YouTube Comments</span>
            <span className={styles.tag}>Discord Profiles</span>
            <span className={styles.tag}>Telegram Chats</span>
            <span className={styles.tag}>Nombres de Perfil</span>
            <span className={styles.tag}>Estados y Publicaciones</span>
          </div>
        </div>
      </section>

      {/* What are copy-and-paste letters */}
      <section className={`${styles.section} ${styles.bgLight}`}>
        <div className="container">
          <article className={styles.article}>
            <h2>¿Qué son las letras para copiar y pegar?</h2>
            <p>
              Las <strong>letras para copiar y pegar</strong> son caracteres especiales codificados bajo el estándar universal <strong>Unicode</strong>. A diferencia de las fuentes tipográficas tradicionales que se instalan en un ordenador o teléfono, estos símbolos son interpretados directamente por los navegadores y aplicaciones móviles como texto plano.
            </p>
            <p>
              Al copiar estos estilos, no estás copiando una imagen ni una tipografía CSS local, sino verdaderos caracteres Unicode con formas estéticas. Esto les permite ser pegados directamente en biografías, nombres de usuario y comentarios de Instagram, TikTok, WhatsApp y Facebook.
            </p>
          </article>
        </div>
      </section>

      {/* How Unicode Works */}
      <section className={styles.section}>
        <div className="container">
          <article className={styles.article}>
            <h2>¿Cómo funcionan las letras Unicode?</h2>
            <p>
              El sistema Unicode asigna un código numérico único a cada letra y símbolo del mundo. Algunas secciones de este estándar incluyen alfabetos matemáticos y caligráficos especiales que simulan letras en negrita, cursiva, gótica o envueltas en símbolos.
            </p>
            <p>
              Nuestra herramienta transforma automáticamente los caracteres compatibles en sus equivalentes Unicode visuales. Si una letra o acento específico no dispone de un equivalente exacto, el generador conserva el carácter original intacto para mantener la perfecta legibilidad de tu mensaje.
            </p>
          </article>
        </div>
      </section>

      {/* Compatibility Notice */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.noticeBox}>
            <h3>ℹ️ Nota de compatibilidad de plataformas</h3>
            <p>
              Las letras Unicode funcionan en muchas plataformas y aplicaciones compatibles con dicho estándar. Sin embargo, la apariencia visual exacta puede variar ligeramente según la versión de Android, iOS o Windows que utilice el dispositivo que consulta el texto.
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
              <summary>¿Cómo puedo copiar letras bonitas?</summary>
              <p>Escribe tu mensaje en el generador de arriba, haz clic en "Copiar" al lado de la variante que más te guste y pega el texto donde desees.</p>
            </details>
            <details className={styles.faqItem}>
              <summary>¿Estas letras funcionan en Instagram?</summary>
              <p>Sí, la inmensa mayoría de los estilos Unicode son totalmente compatibles con la biografía, publicaciones y comentarios de Instagram.</p>
            </details>
            <details className={styles.faqItem}>
              <summary>¿Puedo copiar estas letras desde el móvil?</summary>
              <p>Por supuesto, el conversor está 100% optimizado para pantallas táctiles de teléfonos móviles y tabletas.</p>
            </details>
            <details className={styles.faqItem}>
              <summary>¿Son letras o fuentes?</summary>
              <p>Son símbolos de texto Unicode universales, no fuentes tipográficas instalables.</p>
            </details>
            <details className={styles.faqItem}>
              <summary>¿Puedo usar estas letras en WhatsApp?</summary>
              <p>Sí, puedes enviarlas en chats directos, nombres de contacto o estados de WhatsApp.</p>
            </details>
            <details className={styles.faqItem}>
              <summary>¿Por qué algunas letras no cambian?</summary>
              <p>Porque algunos caracteres especiales o acentos específicos no poseen un símbolo Unicode estilizado idéntico, por lo que se mantienen en su versión normal para proteger tu texto.</p>
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
