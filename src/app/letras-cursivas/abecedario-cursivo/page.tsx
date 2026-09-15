import Link from 'next/link';
import type { Metadata } from 'next';
import AbecedarioExplorer from './AbecedarioExplorer';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: "Abecedario Cursivo A-Z para Copiar y Pegar | Letras Bonitas",
  description: "Descubre el abecedario cursivo completo de la A a la Z en mayúsculas y minúsculas. Copia letras cursivas individuales o el abecedario entero para Instagram, WhatsApp y más.",
  alternates: {
    canonical: "/letras-cursivas/abecedario-cursivo/",
  },
  openGraph: {
    title: "Abecedario Cursivo A-Z para Copiar y Pegar",
    description: "Descubre el abecedario cursivo completo de la A a la Z. Copia letras cursivas individuales en mayúsculas y minúsculas.",
    url: "https://letrasbonitas.example.com/letras-cursivas/abecedario-cursivo/",
    siteName: "Letras Bonitas",
    locale: "es_ES",
    type: "article",
  },
};

export default function AbecedarioCursivoPage() {
  return (
    <main className={styles.main}>
      {/* Breadcrumb */}
      <div className="container">
        <nav aria-label="breadcrumb" className={styles.breadcrumb}>
          <ol>
            <li><Link href="/">Inicio</Link></li>
            <li><Link href="/letras-cursivas/">Letras Cursivas</Link></li>
            <li><span aria-current="page">Abecedario Cursivo</span></li>
          </ol>
        </nav>
      </div>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className={styles.title}>Abecedario Cursivo</h1>
            <p className={styles.subtitle}>
              Descubre el abecedario cursivo de la A a la Z. Explora diferentes estilos de letras cursivas y copia las letras que quieras usar.
            </p>
          </div>
        </div>
      </section>

      {/* Main Feature: Interactive Cursive Alphabet Explorer */}
      <section className={styles.section}>
        <div className="container">
          <AbecedarioExplorer />
        </div>
      </section>

      {/* Cursive Examples */}
      <section className={`${styles.section} ${styles.bgLight}`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Ejemplos de Letras Cursivas</h2>
          <div className={styles.examplesGrid}>
            <div className={styles.exampleCard}>
              <p className={styles.exampleText}>𝓐𝓶𝓸𝓻</p>
            </div>
            <div className={styles.exampleCard}>
              <p className={styles.exampleText}>𝓕𝓮𝓵𝓲𝓬𝓲𝓭𝓪𝓭</p>
            </div>
            <div className={styles.exampleCard}>
              <p className={styles.exampleText}>𝓢𝓾𝓮ñ𝓸𝓼</p>
            </div>
            <div className={styles.exampleCard}>
              <p className={styles.exampleText}>𝓥𝓲𝓪𝓳𝓮</p>
            </div>
            <div className={styles.exampleCard}>
              <p className={styles.exampleText}>𝓐𝓶𝓲𝓼𝓽𝓪𝓭</p>
            </div>
          </div>
        </div>
      </section>

      {/* Informational Content: What is it */}
      <section className={styles.section}>
        <div className="container">
          <article className={styles.article}>
            <h2>¿Qué es el abecedario cursivo?</h2>
            <p>
              El <strong>abecedario cursivo</strong> es un conjunto completo de caracteres gráficos que simulan la escritura a mano alzada o la caligrafía continua tradicional. En internet, las letras cursivas no requieren descargar ni instalar tipografías en tu ordenador o móvil.
            </p>
            <p>
              En su lugar, cada letra del abecedario cursivo online proviene del estándar universal <strong>Unicode</strong>. Estos símbolos matemáticos y de script están diseñados para ser leídos e interpretados por la mayoría de navegadores, aplicaciones y redes sociales modernas.
            </p>
          </article>
        </div>
      </section>

      {/* Informational Content: How to use */}
      <section className={`${styles.section} ${styles.bgLight}`}>
        <div className="container">
          <article className={styles.article}>
            <h2>¿Cómo usar el abecedario cursivo?</h2>
            <ol className={styles.orderedList}>
              <li><strong>Busca la letra que necesitas:</strong> Explora nuestras tarjetas individuales en mayúsculas o minúsculas o usa el menú de acceso rápido.</li>
              <li><strong>Pulsa Copiar:</strong> Haz clic en el botón situado debajo de la letra o abecedario completo.</li>
              <li><strong>Pégala donde quieras:</strong> Usa Ctrl+V o mantén pulsado en tu dispositivo móvil para pegar el texto cursivo en tu red social o chat.</li>
              <li><strong>Crea palabras completas:</strong> Si lo deseas, utiliza el mini generador de la página para transformar frases completas al instante.</li>
            </ol>
          </article>
        </div>
      </section>

      {/* Informational Content: Use cases */}
      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle}>¿Para qué puedes usar el abecedario cursivo?</h2>
          <div className={styles.tagsContainer}>
            <span className={styles.tag}>Instagram</span>
            <span className={styles.tag}>WhatsApp</span>
            <span className={styles.tag}>TikTok</span>
            <span className={styles.tag}>Facebook</span>
            <span className={styles.tag}>Biografías</span>
            <span className={styles.tag}>Captions</span>
            <span className={styles.tag}>Nombres de usuario</span>
            <span className={styles.tag}>Mensajes</span>
            <span className={styles.tag}>Invitaciones</span>
            <span className={styles.tag}>Proyectos creativos</span>
          </div>
        </div>
      </section>

      {/* Compatibility Notice */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.compatNoticeBox}>
            <h3>⚠️ Aviso de compatibilidad</h3>
            <p>
              Los caracteres del abecedario cursivo Unicode pueden verse ligeramente distintos dependiendo de la marca de tu dispositivo, navegador web, sistema operativo o aplicación. Algunas plataformas antiguas pueden no mostrar todos los caracteres de forma idéntica.
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
              <summary>¿Qué es un abecedario cursivo?</summary>
              <p>Es la recopilación de todas las letras de la A a la Z transformadas mediante símbolos Unicode en caracteres con diseño de caligrafía cursiva o manuscrita.</p>
            </details>
            <details className={styles.faqItem}>
              <summary>¿Cómo copiar letras cursivas?</summary>
              <p>Simplemente pulsa el botón "Copiar" ubicado debajo de cada letra individual o abecedario completo. El carácter se guardará en tu portapapeles de inmediato.</p>
            </details>
            <details className={styles.faqItem}>
              <summary>¿Puedo copiar una sola letra cursiva?</summary>
              <p>Sí, cada letra del abecedario cursivo dispone de su propia tarjeta individual con un botón de copia exclusivo para facilitar la selección de caracteres sueltos.</p>
            </details>
            <details className={styles.faqItem}>
              <summary>¿Puedo copiar todo el abecedario cursivo?</summary>

              <p>Por supuesto. Dispones de bloques de copia directa para el abecedario cursivo completo tanto en mayúsculas como en minúsculas.</p>
            </details>
            <details className={styles.faqItem}>
              <summary>¿Las letras cursivas funcionan en Instagram?</summary>
              <p>Sí, funcionan perfectamente en la biografía, en las publicaciones, comentarios y nombres de perfil de Instagram.</p>
            </details>
            <details className={styles.faqItem}>
              <summary>¿Las letras cursivas funcionan en WhatsApp?</summary>
              <p>Sí, son totalmente compatibles con los chats directos, nombres de contacto y estados de WhatsApp.</p>
            </details>
            <details className={styles.faqItem}>
              <summary>¿Por qué algunas letras pueden verse diferentes?</summary>
              <p>La apariencia visual de los símbolos Unicode puede variar ligeramente según la fuente predeterminada del sistema operativo o aplicación desde la que los consultes.</p>
            </details>
          </div>
        </div>
      </section>

      {/* Related Pages (Parent pillar + Homepage) */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.relatedBox}>
            <h3>Páginas relacionadas</h3>
            <div className={styles.relatedLinksList}>
              <Link href="/letras-cursivas/" className={styles.relatedLink}>
                Descubre más estilos en nuestro generador de Letras Cursivas →
              </Link>
              <Link href="/" className={styles.relatedLink}>
                Volver a la página principal de Letras Bonitas →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
