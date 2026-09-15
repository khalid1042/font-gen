import Link from 'next/link';
import type { Metadata } from 'next';
import CursiveCopyPasteExplorer from './CursiveCopyPasteExplorer';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: "Letras Cursivas para Copiar y Pegar | Letras Bonitas",
  description: "Generador de letras cursivas para copiar y pegar gratis. Encuentra frases, nombres y fuentes cursivas listas para usar en Instagram, WhatsApp, TikTok y bios.",
  alternates: {
    canonical: "/letras-cursivas/letras-cursivas-para-copiar-y-pegar/",
  },
  openGraph: {
    title: "Letras Cursivas para Copiar y Pegar",
    description: "Genera y copia letras cursivas bonitas al instante para redes sociales.",
    url: "https://letrasbonitas.example.com/letras-cursivas/letras-cursivas-para-copiar-y-pegar/",
    siteName: "Letras Bonitas",
    locale: "es_ES",
    type: "article",
  },
};

export default function LetrasCursivasParaCopiarYPegarPage() {
  return (
    <main className={styles.main}>
      {/* Breadcrumb */}
      <div className="container">
        <nav aria-label="breadcrumb" className={styles.breadcrumb}>
          <ol>
            <li><Link href="/">Inicio</Link></li>
            <li><Link href="/letras-cursivas/">Letras Cursivas</Link></li>
            <li><span aria-current="page">Letras Cursivas para Copiar y Pegar</span></li>
          </ol>
        </nav>
      </div>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className={styles.title}>Letras Cursivas para Copiar y Pegar</h1>
            <p className={styles.subtitle}>
              Crea o elige textos cursivos, cópialos con un clic y úsalos en Instagram, WhatsApp, TikTok, Facebook y otros lugares.
            </p>
          </div>
        </div>
      </section>

      {/* Main Interactive Tool Section */}
      <section className={styles.section}>
        <div className="container">
          <CursiveCopyPasteExplorer />
        </div>
      </section>

      {/* How to Copy and Paste */}
      <section className={`${styles.section} ${styles.bgLight}`}>
        <div className="container">
          <article className={styles.article}>
            <h2>¿Cómo copiar y pegar letras cursivas?</h2>
            <ol className={styles.orderedList}>
              <li><strong>Escribe tu texto o selecciona un ejemplo:</strong> Introduce tus palabras en la herramienta interactiva o navega por nuestras frases prediseñadas.</li>
              <li><strong>Pulsa Copiar:</strong> Haz clic en el botón de copia al lado de tu estilo cursivo preferido para guardar el texto en tu portapapeles.</li>
              <li><strong>Abre la aplicación de destino:</strong> Ve a Instagram, WhatsApp, TikTok, tu editor de notas o cualquier otra plataforma.</li>
              <li><strong>Pega el texto:</strong> Mantén presionado en pantallas táctiles o presiona Ctrl+V (Cmd+V en Mac) para pegar el texto cursivo al instante.</li>
            </ol>
          </article>
        </div>
      </section>

      {/* Where to use */}
      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle}>¿Dónde puedes usar letras cursivas?</h2>
          <div className={styles.tagsContainer}>
            <span className={styles.tag}>Instagram Bio</span>
            <span className={styles.tag}>WhatsApp Estados</span>
            <span className={styles.tag}>TikTok Captions</span>
            <span className={styles.tag}>Facebook Posts</span>
            <span className={styles.tag}>YouTube Descriptions</span>
            <span className={styles.tag}>Discord Profiles</span>
            <span className={styles.tag}>Nombres de Usuario</span>
            <span className={styles.tag}>Mensajes Privados</span>
            <span className={styles.tag}>Historias & Reels</span>
          </div>
        </div>
      </section>

      {/* What are Copy-and-Paste Cursive Letters */}
      <section className={`${styles.section} ${styles.bgLight}`}>
        <div className="container">
          <article className={styles.article}>
            <h2>¿Qué son las letras cursivas para copiar y pegar?</h2>
            <p>
              Las letras cursivas para copiar y pegar son caracteres generados mediante el estándar internacional <strong>Unicode</strong>. A diferencia de un archivo de fuente tipográfica tradicional (como las fuentes .TTF o .OTF que se instalan en un ordenador), los caracteres Unicode son símbolos independientes que cualquier sistema operativo moderno puede reconocer sin necesidad de descargas.
            </p>
            <p>
              Por esta razón, al copiar estos textos, no estás copiando una imagen ni una tipografía instalada, sino verdaderos <strong>caracteres de texto en cursiva</strong> que permanecen intactos al pegarlos en redes sociales, aplicaciones de mensajería y blogs.
            </p>
          </article>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Preguntas frecuentes</h2>
          <div className={styles.faqList}>
            <details className={styles.faqItem}>
              <summary>¿Cómo copiar letras cursivas?</summary>
              <p>Haz clic en el botón "Copiar" que aparece junto a cualquier estilo o frase. El texto cursivo se copiará automáticamente en el portapapeles de tu dispositivo.</p>
            </details>
            <details className={styles.faqItem}>
              <summary>¿Cómo pegar letras cursivas?</summary>
              <p>Mantén presionada la pantalla en tu móvil y selecciona "Pegar", o usa el atajo de teclado Ctrl+V (Cmd+V en Mac) en tu ordenador.</p>
            </details>
            <details className={styles.faqItem}>
              <summary>¿Puedo copiar letras cursivas desde el móvil?</summary>
              <p>Sí, la herramienta está 100% optimizada para smartphones Android y iPhone con botones adaptados para toques táctiles.</p>
            </details>
            <details className={styles.faqItem}>
              <summary>¿Puedo usar letras cursivas en Instagram?</summary>
              <p>Totalmente. Son ideales para destacar tu biografía de Instagram, descripciones de publicaciones, comentarios e historias.</p>
            </details>
            <details className={styles.faqItem}>
              <summary>¿Puedo usar letras cursivas en WhatsApp?</summary>
              <p>Sí, puedes enviarlas en tus chats individuales o grupales, así como en tu estado y nombre de perfil de WhatsApp.</p>
            </details>
            <details className={styles.faqItem}>
              <summary>¿Las letras cursivas son una fuente?</summary>
              <p>No son un archivo de fuente tipográfica, sino símbolos de texto del estándar Unicode que imitan la forma de la letra cursiva.</p>
            </details>
            <details className={styles.faqItem}>
              <summary>¿Por qué algunas letras se ven diferentes?</summary>
              <p>Cada fabricante de dispositivos (Apple, Samsung, Google) renderiza los caracteres Unicode con su propio diseño predeterminado de sistema.</p>
            </details>
            <details className={styles.faqItem}>
              <summary>¿El generador de letras cursivas es gratis?</summary>
              <p>Sí, nuestra herramienta es 100% gratuita y sin límites de uso ni necesidad de registro.</p>
            </details>
          </div>
        </div>
      </section>

      {/* Internal Linking Block */}
      <section className={`${styles.section} ${styles.bgLight}`}>
        <div className="container">
          <div className={styles.relatedBox}>
            <h3>Sigue navegando en el silo</h3>
            <div className={styles.relatedLinksList}>
              <Link href="/letras-cursivas/" className={styles.relatedLink}>
                Ir al Generador Principal de Letras Cursivas →
              </Link>
              <Link href="/letras-cursivas/abecedario-cursivo/" className={styles.relatedLink}>
                Explorar el Abecedario Cursivo A-Z →
              </Link>
              <Link href="/" className={styles.relatedLink}>
                Volver a la Página Principal de Letras Bonitas →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
