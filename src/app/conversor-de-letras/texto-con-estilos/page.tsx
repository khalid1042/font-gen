import Link from 'next/link';
import type { Metadata } from 'next';
import StyledTextExplorer from './StyledTextExplorer';
import styles from './page.module.css';
import RelatedLinks from '../../../components/RelatedLinks/RelatedLinks';

export const metadata: Metadata = {
  title: "Texto con Estilos | Crea Textos Estilizados para Copiar",
  description: "Crea texto con estilos diferentes y personalizados. Convierte palabras y frases en textos bonitos, decorativos y especiales para copiar y usar online.",
  alternates: {
    canonical: "/conversor-de-letras/texto-con-estilos/",
  },
  openGraph: {
    title: "Texto con Estilos | Crea Textos Estilizados para Copiar",
    description: "Convierte texto normal en múltiples estilos tipográficos Unicode para redes sociales.",
    url: "https://letrasbonitas.example.com/conversor-de-letras/texto-con-estilos/",
    siteName: "Letras Bonitas",
    locale: "es_ES",
    type: "article",
  },
};

export default function TextoConEstilosPage() {
  return (
    <main className={styles.main}>
      {/* Breadcrumb */}
      <div className="container">
        <nav aria-label="breadcrumb" className={styles.breadcrumb}>
          <ol>
            <li><Link href="/">Inicio</Link></li>
            <li><Link href="/conversor-de-letras/">Conversor de Letras</Link></li>
            <li><span aria-current="page">Texto con Estilos</span></li>
          </ol>
        </nav>
      </div>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className={styles.title}>Texto con Estilos</h1>
            <p className={styles.subtitle}>
              Crea textos con diferentes estilos y transforma palabras o frases en diseños especiales que puedes copiar y usar en redes sociales, mensajes, perfiles y mucho más.
            </p>
            <a href="#herramienta-estilos" className={styles.ctaBtn}>
              Crear texto con estilos
            </a>
          </div>
        </div>
      </section>

      {/* Main Interactive Tool & Comparison Section */}
      <section className={styles.section}>
        <div className="container">
          <StyledTextExplorer />
        </div>
      </section>

      {/* What is styled text */}
      <section className={`${styles.section} ${styles.bgLight}`}>
        <div className="container">
          <article className={styles.article}>
            <h2>¿Qué es el texto con estilos?</h2>
            <p>
              El <strong>texto con estilos</strong> es cualquier palabra, frase o mensaje presentado mediante formas tipográficas o diseños caligráficos especiales. En la web existen dos formas principales de modificar el aspecto visual del texto:
            </p>
            <ol className={styles.orderedList}>
              <li><strong>Modificación visual mediante fuentes/CSS:</strong> Cambia el aspecto gráfico dentro de un programa local o sitio web mediante archivos de fuentes tipográficas instalados (.TTF o .OTF).</li>
              <li><strong>Transformación Unicode copiable:</strong> Sustituye las letras normales por caracteres especiales pertenecientes al estándar internacional <strong>Unicode</strong>, lo que permite que el texto copiado conserve su diseño al pegarlo en redes sociales.</li>
            </ol>
          </article>
        </div>
      </section>

      {/* How it works */}
      <section className={styles.section}>
        <div className="container">
          <article className={styles.article}>
            <h2>¿Cómo funciona el texto estilizado?</h2>
            <ol className={styles.orderedList}>
              <li><strong>1. Introduce tu texto:</strong> Escribe tu frase en la herramienta interactiva superior.</li>
              <li><strong>2. Análisis de caracteres:</strong> El generador evalúa cada letra en tiempo real.</li>
              <li><strong>3. Mapeo Unicode:</strong> Las letras compatibles son sustituidas por su versión Unicode estilizada.</li>
              <li><strong>4. Preservación:</strong> Los caracteres sin variante idéntica se conservan intactos.</li>
              <li><strong>5. Copia directa:</strong> Pulsa el botón de copia para guardar el resultado en tu portapapeles.</li>
            </ol>
          </article>
        </div>
      </section>

      {/* Why some text does not change */}
      <section className={`${styles.section} ${styles.bgLight}`}>
        <div className="container">
          <article className={styles.article}>
            <h2>¿Por qué algunas letras no cambian de estilo?</h2>
            <p>
              El estándar internacional Unicode fue diseñado originalmente para notación científica, matemática y lingüística especial. Por esta razón, existen bloques completos para alfabetos latinos en negrita, cursiva o script, pero ciertos caracteres regionales (como la <strong>Ñ / ñ</strong> o algunas vocales con acento) no poseen una variante específica en todos los estilos.
            </p>
            <p>
              En lugar de reemplazar las letras no soportadas por símbolos extraños o eliminarlas, nuestra herramienta mantiene el carácter original para garantizar que tu mensaje siga siendo 100% legible.
            </p>
          </article>
        </div>
      </section>

      {/* Social Media Use Cases */}
      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle}>¿Dónde puedo usar texto con estilos?</h2>
          <div className={styles.tagsContainer}>
            <span className={styles.tag}>Instagram Bios</span>
            <span className={styles.tag}>TikTok Captions</span>
            <span className={styles.tag}>WhatsApp Status</span>
            <span className={styles.tag}>Facebook Posts</span>
            <span className={styles.tag}>YouTube Descriptions</span>
            <span className={styles.tag}>Discord Profiles</span>
            <span className={styles.tag}>Telegram Messages</span>
            <span className={styles.tag}>Nombres de Usuario</span>
            <span className={styles.tag}>Comentarios Destacados</span>
          </div>
        </div>
      </section>

      {/* Compatibility Notice */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.noticeBox}>
            <h3>ℹ️ Nota de compatibilidad</h3>
            <p>
              La compatibilidad visual del texto estilizado puede variar según la aplicación, el dispositivo, el navegador y la fuente predeterminada del sistema utilizada para mostrar los caracteres.
            </p>
          </div>
        </div>
      </section>

      {/* How to Create Styled Text */}
      <section className={`${styles.section} ${styles.bgLight}`}>
        <div className="container">
          <article className={styles.article}>
            <h2>Cómo crear texto con estilos</h2>
            <ol className={styles.orderedList}>
              <li><strong>1. Escribe:</strong> Introduce una palabra, nombre o frase en el cuadro interactivo.</li>
              <li><strong>2. Elige:</strong> Selecciona uno de los estilos disponibles en el menú de filtros.</li>
              <li><strong>3. Copia:</strong> Pulsa <strong>Copiar</strong> y pega el resultado donde quieras.</li>
            </ol>
          </article>
        </div>
      </section>

      {/* Mobile Usage */}
      <section className={styles.section}>
        <div className="container">
          <article className={styles.article}>
            <h2>Texto con estilos desde el móvil</h2>
            <p>
              Nuestra herramienta es 100% responsive y funciona de forma fluida en navegadores de smartphones Android e iPhone:
            </p>
            <ol className={styles.orderedList}>
              <li>Abre esta página web en tu navegador móvil.</li>
              <li>Escribe o pega el texto que deseas transformar.</li>
              <li>Toca el botón <strong>Copiar</strong> en el estilo deseado.</li>
              <li>Abre Instagram, WhatsApp o tu red social preferida y pega el resultado.</li>
            </ol>
          </article>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={`${styles.section} ${styles.bgLight}`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Preguntas frecuentes</h2>
          <div className={styles.faqList}>
            <details className={styles.faqItem}>
              <summary>¿Qué es un texto con estilos?</summary>
              <p>Es un texto formateado mediante caracteres Unicode especiales que imitan trazos estéticos (negritas, cursivas, caligrafía, etc.) para que se puedan copiar y pegar en internet.</p>
            </details>
            <details className={styles.faqItem}>
              <summary>¿Cómo puedo crear texto con estilos?</summary>
              <p>Simplemente introduce tu frase en la herramienta superior y selecciona tu estilo favorito para generarlo al instante.</p>
            </details>
            <details className={styles.faqItem}>
              <summary>¿Puedo copiar el texto con estilos?</summary>
              <p>Sí, todos los estilos generados disponen de un botón "Copiar" para guardar el texto en tu portapapeles sin necesidad de seleccionar manualmente.</p>
            </details>
            <details className={styles.faqItem}>
              <summary>¿Puedo usar texto con estilos en Instagram?</summary>
              <p>Por supuesto, son muy populares para resaltar biografías, historias, comentarios y nombres de perfil en Instagram.</p>
            </details>
            <details className={styles.faqItem}>
              <summary>¿Puedo usar texto con estilos en WhatsApp?</summary>
              <p>Sí, son compatibles con chats privados, nombres de grupo y estados de WhatsApp.</p>
            </details>
            <details className={styles.faqItem}>
              <summary>¿Las letras con estilos son fuentes?</summary>
              <p>No son fuentes de archivo instalables (.ttf o .otf), sino símbolos especiales de texto dentro del estándar internacional Unicode.</p>
            </details>
            <details className={styles.faqItem}>
              <summary>¿Por qué algunas letras no cambian?</summary>
              <p>Cuando un carácter específico no cuenta con una representación idéntica en Unicode, la herramienta conserva la letra original para mantener la legibilidad.</p>
            </details>
            <details className={styles.faqItem}>
              <summary>¿Puedo crear texto con estilos desde el móvil?</summary>
              <p>Sí, la interfaz está completamente adaptada para pantallas táctiles de móviles y tabletas.</p>
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
