import Link from 'next/link';
import type { Metadata } from 'next';
import ElegantCursiveExplorer from './ElegantCursiveExplorer';
import styles from './page.module.css';
import RelatedLinks from '../../../components/RelatedLinks/RelatedLinks';

export const metadata: Metadata = {
  title: "Letras Cursivas Elegantes para Copiar y Pegar | Letras Bonitas",
  description: "Generador de letras cursivas elegantes online. Encuentra fuentes, nombres y frases en cursiva elegante listas para copiar y pegar en Instagram, WhatsApp y bios.",
  alternates: {
    canonical: "/letras-cursivas/letras-cursivas-elegantes/",
  },
  openGraph: {
    title: "Letras Cursivas Elegantes para Copiar y Pegar",
    description: "Crea y copia al instante textos con estilo cursivo elegante para redes sociales.",
    url: "https://letrasbonitas.example.com/letras-cursivas/letras-cursivas-elegantes/",
    siteName: "Letras Bonitas",
    locale: "es_ES",
    type: "article",
  },
};

export default function LetrasCursivasElegantesPage() {
  return (
    <main className={styles.main}>
      {/* Breadcrumb */}
      <div className="container">
        <nav aria-label="breadcrumb" className={styles.breadcrumb}>
          <ol>
            <li><Link href="/">Inicio</Link></li>
            <li><Link href="/letras-cursivas/">Letras Cursivas</Link></li>
            <li><span aria-current="page">Letras Cursivas Elegantes</span></li>
          </ol>
        </nav>
      </div>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className={styles.title}>Letras Cursivas Elegantes</h1>
            <p className={styles.subtitle}>
              Crea textos con un estilo elegante y cursivo. Escribe tu mensaje, elige tu estilo favorito y cópialo fácilmente.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Tool & Collections */}
      <section className={styles.section}>
        <div className="container">
          <ElegantCursiveExplorer />
        </div>
      </section>

      {/* Where to use */}
      <section className={`${styles.section} ${styles.bgLight}`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>¿Dónde usar letras cursivas elegantes?</h2>
          <div className={styles.tagsContainer}>
            <span className={styles.tag}>Instagram Bio</span>
            <span className={styles.tag}>Instagram Captions</span>
            <span className={styles.tag}>WhatsApp Status</span>
            <span className={styles.tag}>TikTok Profile</span>
            <span className={styles.tag}>Facebook Posts</span>
            <span className={styles.tag}>YouTube Descriptions</span>
            <span className={styles.tag}>Discord Profiles</span>
            <span className={styles.tag}>Nombres de Perfil</span>
            <span className={styles.tag}>Mensajes Especiales</span>
            <span className={styles.tag}>Invitaciones Digitales</span>
          </div>
        </div>
      </section>

      {/* What makes letters elegant */}
      <section className={styles.section}>
        <div className="container">
          <article className={styles.article}>
            <h2>¿Qué hace que unas letras se vean elegantes?</h2>
            <p>
              La elegancia en el diseño tipográfico se caracteriza por trazos fluidos, proporciones armónicas y un acabado visual limpio. En los alfabetos digitales en cursiva, la elegancia proviene principalmente de:
            </p>
            <ul>
              <li><strong>Trazos caligráficos continuos:</strong> Caracteres con inclinación uniforme que recuerdan a la escritura tradicional a pluma.</li>
              <li><strong>Consistencia estilística:</strong> Mantener una misma línea estética sin saturar el mensaje con demasiados adornos.</li>
              <li><strong>Espaciado equilibrado:</strong> Distancia adecuada entre caracteres para garantizar una lectura cómoda y sofisticada.</li>
              <li><strong>Detalles decorativos discretos:</strong> Uso medido de remates o símbolos elegantes como destellos (`✨`) o sutiles bordes (`~`).</li>
            </ul>
          </article>
        </div>
      </section>

      {/* How elegant cursive works */}
      <section className={`${styles.section} ${styles.bgLight}`}>
        <div className="container">
          <article className={styles.article}>
            <h2>¿Cómo funcionan las letras cursivas elegantes?</h2>
            <p>
              Nuestro generador convierte el texto normal en símbolos tipográficos pertenecientes al bloque <strong>Mathematical Alphanumeric Symbols</strong> del estándar <strong>Unicode</strong>.
            </p>
            <p>
              Estos caracteres imitan el aspecto visual de una fuente cursiva sofisticada sin necesidad de instalar archivos de fuentes tipográficas adicionales en tu teléfono u ordenador. Por ello, puedes copiar cualquier texto generado y pegarlo directamente en tus redes sociales.
            </p>
          </article>
        </div>
      </section>

      {/* Compatibility Notice */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.noticeBox}>
            <h3>ℹ️ Nota sobre la visualización Unicode</h3>
            <p>
              Las letras Unicode elegantes pueden verse ligeramente diferentes dependiendo del sistema operativo, navegador web o aplicación desde la que las consultes. Aunque la inmensa mayoría de dispositivos modernos las muestran correctamente, algunas plataformas antiguas pueden renderizarlas con sutiles variaciones.
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
              <summary>¿Qué son las letras cursivas elegantes?</summary>
              <p>Son estilos tipográficos en cursiva diseñados con trazos sofisticados y caligráficos mediante caracteres Unicode estándar que se pueden copiar y pegar.</p>
            </details>
            <details className={styles.faqItem}>
              <summary>¿Cómo crear letras cursivas elegantes?</summary>
              <p>Escribe tu texto en el recuadro interactivo de la parte superior. La herramienta generará al instante múltiples variaciones elegantes para que elijas tu favorita.</p>
            </details>
            <details className={styles.faqItem}>
              <summary>¿Cómo copiar letras cursivas elegantes?</summary>
              <p>Solo tienes que hacer clic en el botón "Copiar" ubicado bajo cada estilo o frase. El texto se guardará automáticamente en tu portapapeles.</p>
            </details>
            <details className={styles.faqItem}>
              <summary>¿Puedo usar letras cursivas elegantes en Instagram?</summary>
              <p>Sí, son perfectas para resaltar tu biografía de Instagram, descripciones de publicaciones, comentarios y nombres de perfil.</p>
            </details>
            <details className={styles.faqItem}>
              <summary>¿Puedo usar letras cursivas elegantes en WhatsApp?</summary>
              <p>Por supuesto. Funcionan sin problemas en los chats directos, nombres de contacto y estados de WhatsApp.</p>
            </details>
            <details className={styles.faqItem}>
              <summary>¿Puedo usar letras cursivas elegantes para mi nombre?</summary>
              <p>Sí, la sección de nombres elegantes de esta página te muestra ejemplos prácticos para personalizar tu nombre de perfil o usuario.</p>
            </details>
            <details className={styles.faqItem}>
              <summary>¿Las letras cursivas elegantes son una fuente?</summary>
              <p>No son un archivo de fuente tipográfica (.ttf o .otf), sino símbolos especiales de texto Unicode universales.</p>
            </details>
            <details className={styles.faqItem}>
              <summary>¿Por qué algunas letras se ven diferentes?</summary>
              <p>Porque cada sistema operativo (iOS, Android, Windows) utiliza su propia fuente predeterminada del sistema para renderizar los caracteres Unicode.</p>
            </details>
          </div>
        </div>
      </section>

      {/* Internal Silo Links */}
      <section className={styles.section}>
        <div className="container">
          <RelatedLinks />
        </div>
      </section>
    </main>
  );
}
