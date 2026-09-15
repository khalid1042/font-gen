import Link from 'next/link';
import type { Metadata } from 'next';
import ConversorTool from './ConversorTool';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: "Conversor de Letras Online | Convierte Texto para Copiar y Pegar",
  description: "Conversor de letras online gratis. Convierte tu texto en estilos negrita, cursiva, gótico, monoespaciado y decorativo para copiar y pegar en Instagram, WhatsApp y bios.",
  alternates: {
    canonical: "/conversor-de-letras/",
  },
  openGraph: {
    title: "Conversor de Letras Online",
    description: "Convierte texto normal en múltiples estilos tipográficos para copiar y pegar.",
    url: "https://letrasbonitas.example.com/conversor-de-letras/",
    siteName: "Letras Bonitas",
    locale: "es_ES",
    type: "article",
  },
};

export default function ConversorDeLetrasPage() {
  return (
    <main className={styles.main}>
      {/* Breadcrumb */}
      <div className="container">
        <nav aria-label="breadcrumb" className={styles.breadcrumb}>
          <ol>
            <li><Link href="/">Inicio</Link></li>
            <li><span aria-current="page">Conversor de Letras</span></li>
          </ol>
        </nav>
      </div>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className={styles.title}>Conversor de Letras</h1>
            <p className={styles.subtitle}>
              Convierte tu texto en letras bonitas y estilos diferentes. Convierte texto normal en fuentes cursivas, negritas, góticas, decorativas y mucho más para copiar y pegar al instante.
            </p>
          </div>
        </div>
      </section>

      {/* Main Converter Tool */}
      <section className={styles.section}>
        <div className="container">
          <ConversorTool />
        </div>
      </section>

      {/* Use Cases Section */}
      <section className={`${styles.section} ${styles.bgLight}`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>¿Para qué puedes usar el conversor de letras?</h2>
          <div className={styles.tagsContainer}>
            <span className={styles.tag}>Instagram Bios</span>
            <span className={styles.tag}>Instagram Captions</span>
            <span className={styles.tag}>WhatsApp Status</span>
            <span className={styles.tag}>TikTok Profiles</span>
            <span className={styles.tag}>Facebook Posts</span>
            <span className={styles.tag}>YouTube Descriptions</span>
            <span className={styles.tag}>Discord Profiles</span>
            <span className={styles.tag}>Gaming Nicks</span>
            <span className={styles.tag}>Comentarios Destacados</span>
            <span className={styles.tag}>Mensajes de Texto</span>
          </div>
        </div>
      </section>

      {/* What is a letter converter */}
      <section className={styles.section}>
        <div className="container">
          <article className={styles.article}>
            <h2>¿Qué es un conversor de letras?</h2>
            <p>
              Un <strong>conversor de letras</strong> es una herramienta web interactiva diseñada para transformar un texto ordinario introducido por el usuario en decenas de variaciones estéticas con diferentes tipografías, adornos y diseños.
            </p>
            <p>
              A diferencia de los procesadores de texto tradicionales que modifican la apariencia mediante fuentes locales instaladas, el conversor de letras reemplaza cada carácter alfanumérico estándar por su símbolo equivalente dentro del mapa internacional <strong>Unicode</strong>. Esto permite que el resultado pueda ser copiado y pegado libremente en cualquier red social o aplicación de mensajería sin perder su estilo.
            </p>
          </article>
        </div>
      </section>

      {/* How it works */}
      <section className={`${styles.section} ${styles.bgLight}`}>
        <div className="container">
          <article className={styles.article}>
            <h2>¿Cómo funciona el conversor de letras?</h2>
            <ol className={styles.orderedList}>
              <li><strong>Escribe o pega tu texto:</strong> Introduce las palabras o frases que deseas transformar en la caja del conversor.</li>
              <li><strong>Procesamiento en tiempo real:</strong> La herramienta analiza cada letra y genera automáticamente decenas de estilos (negrita, cursiva, gótica, etc.).</li>
              <li><strong>Selecciona tu categoría:</strong> Filtra por el tipo de estilo que prefieras para encontrar rápidamente la combinación perfecta.</li>
              <li><strong>Copia el resultado:</strong> Pulsa el botón "Copiar" al lado de la variación elegida.</li>
              <li><strong>Pégalo donde quieras:</strong> Abre tu red social o chat preferido y pega el texto transformado.</li>
            </ol>
          </article>
        </div>
      </section>

      {/* Font vs Unicode explanation */}
      <section className={styles.section}>
        <div className="container">
          <article className={styles.article}>
            <h2>¿Es lo mismo una fuente que un conversor de letras?</h2>
            <p>
              No, existe una diferencia fundamental entre una <strong>fuente tipográfica tradicional</strong> y el resultado producido por un <strong>conversor de letras Unicode</strong>:
            </p>
            <p>
              Una fuente tipográfica (como Arial, Times New Roman o Roboto) es un archivo que indica a tu sistema operativo cómo dibujar visualmente los caracteres estándar. Si intentas copiar texto formateado con una fuente local y pegarlo en una plataforma como Instagram o WhatsApp, el estilo se perderá porque dichas plataformas solo admiten texto plano.
            </p>
            <p>
              En cambio, el conversor de letras sustituye las letras por caracteres Unicode especiales que ya contienen el diseño gráfico (inclinación cursiva, trazo grueso en negrita, estilo gótico o circundante) codificado de origen. Por eso, al copiarlos, mantendrán su diseño visual en casi cualquier aplicación.
            </p>
          </article>
        </div>
      </section>

      {/* Compatibility Notice */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.noticeBox}>
            <h3>ℹ️ Nota de compatibilidad Unicode</h3>
            <p>
              Los caracteres Unicode pueden verse de forma ligeramente diferente según el dispositivo, navegador o aplicación que utilices. Aunque la inmensa mayoría de las plataformas actuales soportan estos símbolos, algunos caracteres específicos (como ciertos acentos o números decorativos) pueden conservarse en su estado original para evitar distorsiones visuales.
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
              <summary>¿Qué es un conversor de letras?</summary>
              <p>Es una aplicación online que convierte texto normal en caracteres estéticos y decorativos basados en el estándar Unicode para poder copiarlos y pegarlos libremente.</p>
            </details>
            <details className={styles.faqItem}>
              <summary>¿Cómo convertir letras normales en letras bonitas?</summary>
              <p>Solo tienes que escribir tu texto en la herramienta interactiva de arriba. Se generarán al instante decenas de variantes con diseños variados (cursivas, negritas, góticas, etc.).</p>
            </details>
            <details className={styles.faqItem}>
              <summary>¿Puedo copiar y pegar el texto convertido?</summary>
              <p>Sí, todos los estilos generados son caracteres Unicode de texto plano, por lo que se pueden copiar y pegar en cualquier campo de texto compatible.</p>
            </details>
            <details className={styles.faqItem}>
              <summary>¿El conversor de letras es gratis?</summary>
              <p>Totalmente gratis, sin necesidad de registro ni instalación de programas.</p>
            </details>
            <details className={styles.faqItem}>
              <summary>¿Necesito instalar una fuente?</summary>
              <p>No. No se requieren descargas ni instalación de archivos de fuentes tipográficas en tu dispositivo.</p>
            </details>
            <details className={styles.faqItem}>
              <summary>¿Las letras convertidas funcionan en Instagram?</summary>
              <p>Sí, son perfectas para biografías, comentarios, descripciones y nombres de perfil en Instagram.</p>
            </details>
            <details className={styles.faqItem}>
              <summary>¿Las letras convertidas funcionan en WhatsApp?</summary>
              <p>Por supuesto, se pueden utilizar en mensajes directos, grupos, estados y nombres de contacto de WhatsApp.</p>
            </details>
            <details className={styles.faqItem}>
              <summary>¿Por qué algunos caracteres no cambian?</summary>
              <p>Caracteres especiales o acentos que no disponen de una representación Unicode equivalente se conservan en su estado original para proteger la legibilidad de tu texto.</p>
            </details>
            <details className={styles.faqItem}>
              <summary>¿Cuál es la diferencia entre una fuente y Unicode?</summary>
              <p>Una fuente modifica el aspecto visual de letras estándar en un programa local, mientras que Unicode sustituye los caracteres por símbolos internacionales universales que se pueden copiar entre aplicaciones.</p>
            </details>
          </div>
        </div>
      </section>

      {/* Cross-Silo Internal Links Block */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.relatedBox}>
            <h3>Explora más herramientas y silos</h3>
            <div className={styles.relatedLinksList}>
              <Link href="/letras-cursivas/" className={styles.relatedLink}>
                Generador de Letras Cursivas →
              </Link>
              <Link href="/letras-cursivas/abecedario-cursivo/" className={styles.relatedLink}>
                Abecedario Cursivo A-Z →
              </Link>
              <Link href="/letras-cursivas/letras-cursivas-para-copiar-y-pegar/" className={styles.relatedLink}>
                Letras Cursivas para Copiar y Pegar →
              </Link>
              <Link href="/letras-cursivas/letras-cursivas-elegantes/" className={styles.relatedLink}>
                Letras Cursivas Elegantes →
              </Link>
              <Link href="/" className={styles.relatedLink}>
                Página Principal - Letras Bonitas →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
