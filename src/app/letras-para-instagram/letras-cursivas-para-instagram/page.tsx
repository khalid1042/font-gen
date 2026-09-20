import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import CursiveInstagramExplorer from './CursiveInstagramExplorer';
import styles from './page.module.css';
import RelatedLinks from '../../../components/RelatedLinks/RelatedLinks';

export const metadata: Metadata = {
  title: 'Letras Cursivas para Instagram | Texto Cursivo para Copiar',
  description: 'Crea letras cursivas para Instagram con estilos elegantes y fáciles de copiar. Escribe tu texto, elige un estilo y pégalo en tu bio, nombre o publicaciones.',
  alternates: {
    canonical: '/letras-para-instagram/letras-cursivas-para-instagram/',
  },
  openGraph: {
    title: 'Letras Cursivas para Instagram | Texto Cursivo para Copiar',
    description: 'Crea letras cursivas para Instagram con estilos elegantes y fáciles de copiar. Escribe tu texto, elige un estilo y pégalo en tu bio, nombre o publicaciones.',
    url: '/letras-para-instagram/letras-cursivas-para-instagram/',
    type: 'website',
    locale: 'es_ES',
    siteName: 'Letras Bonitas',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Letras Cursivas para Instagram | Texto Cursivo para Copiar',
    description: 'Crea letras cursivas para Instagram con estilos elegantes y fáciles de copiar. Escribe tu texto, elige un estilo y pégalo en tu bio, nombre o publicaciones.',
  },
};

export default function LetrasCursivasParaInstagramPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Inicio',
        item: 'https://letrasbonitas.com/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Letras para Instagram',
        item: 'https://letrasbonitas.com/letras-para-instagram/',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Letras Cursivas para Instagram',
        item: 'https://letrasbonitas.com/letras-para-instagram/letras-cursivas-para-instagram/',
      },
    ],
  };

  return (
    <main className={styles.main}>
      <Script id="json-ld"         type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container">
        {/* Breadcrumb Navigation */}
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <ol>
            <li>
              <Link href="/">Inicio</Link>
            </li>
            <li>
              <Link href="/letras-para-instagram/">Letras para Instagram</Link>
            </li>
            <li aria-current="page">Letras Cursivas para Instagram</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>Letras Cursivas para Instagram</h1>
            <p className={styles.subtitle}>
              Convierte tu texto en letras cursivas y elegantes para Instagram. Escribe una frase, elige tu estilo favorito y cópiala para usarla donde quieras.
            </p>
            <div className={styles.heroActions}>
              <a href="#generador-cursivo-ig" className={styles.ctaBtn}>
                Crear texto cursivo
              </a>
              <a href="#estilos-cursivos-ig" className={styles.secondaryCtaBtn}>
                Ver estilos
              </a>
            </div>
          </div>
        </section>

        {/* Main Interactive Cursive Tool */}
        <section className={styles.section}>
          <CursiveInstagramExplorer />
        </section>

        {/* Use-Cases Sections */}
        <section className={`${styles.section} ${styles.bgLight}`}>
          <div className={styles.article}>
            <h2>Letras cursivas para la bio de Instagram</h2>
            <p>
              La biografía de tu perfil es la carta de presentación ante tus nuevos seguidores. Aplicar una tipografía de caligrafía script (como <code>✨ 𝓥𝓲𝓿𝓲𝓮𝓷𝓭𝓸 𝓶𝓲 𝓶𝓮𝓳𝓸𝓻 𝓿𝓲𝓭𝓪</code> o <code>📸 𝒞𝒶𝓅𝓉𝓊𝓇𝒶𝓃𝒹ℴ 𝒽𝒾𝓈𝓉ℴ𝓇𝒾𝒶𝓈</code>) proyecta sofisticación y creatividad al instante.
            </p>
            <p>
              Puedes combinar estas letras manuscritas con separadores y símbolos. Para explorar más diseños de biografías, visita nuestra página especializada en <Link href="/letras-para-instagram/letras-para-bio/">Letras para Bio</Link>.
            </p>

            <h2 style={{ marginTop: '2.5rem' }}>Nombres cursivos para Instagram</h2>
            <p>
              Estilizar el <strong>Nombre visible</strong> de tu perfil en cursiva (por ejemplo: <code>𝓢𝓸𝓯𝓲𝓪</code> o <code>𝓐𝓵𝓮𝔃</code>) destaca tu perfil en las búsquedas internas. Explora combinaciones decorativas en nuestra sección de <Link href="/letras-para-instagram/letras-para-nombres/">Letras para Nombres</Link>.
            </p>

            <h2 style={{ marginTop: '2.5rem' }}>Texto cursivo para captions de Instagram</h2>
            <p>
              Utilizar líneas en letra cursiva en las primeras frases de tus pies de foto o publicaciones (por ejemplo: <code>𝓤𝓷 𝓷𝓾𝓮𝓿𝓸 𝓭í𝓪, 𝓾𝓷𝓪 𝓷𝓾𝓮𝓿𝓪 𝓪𝓿𝓮𝓷𝓽𝓾𝓻𝓪 ✨</code>) aporta dinamismo visual a tus historias y captions sin recargar el texto.
            </p>
          </div>
        </section>

        {/* Display Name vs Username Note */}
        <section className={styles.section}>
          <div className={styles.article}>
            <h2>Nombre de perfil y nombre de usuario no son lo mismo</h2>
            <p>
              Es muy importante recordar la diferencia entre los campos de tu cuenta de Instagram:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Nombre visible de perfil (Display Name):</strong> Permite caracteres de caligrafía cursiva Unicode ornamentada de forma ilimitada.
              </li>
              <li>
                <strong>Nombre de usuario (Username / @handle):</strong> Exige únicamente letras estándar sin acentos, números, puntos y guiones bajos. Los alfabetos de cursiva Unicode <strong>no son compatibles</strong> como handle oficial.
              </li>
            </ol>
          </div>
        </section>

        {/* How to Use Cursive Text Steps */}
        <section className={`${styles.section} ${styles.bgLight}`}>
          <div className={styles.article}>
            <h2>¿Cómo poner letras cursivas en Instagram?</h2>
            <p>
              El proceso es muy rápido y funciona desde cualquier navegador móvil o de escritorio:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Paso 1:</strong> Escribe tu frase, nombre o descripción en la casilla del generador superior.
              </li>
              <li>
                <strong>Paso 2:</strong> Selecciona la variante de letra cursiva (elegante, negrita, manuscrita o decorada) que prefieras.
              </li>
              <li>
                <strong>Paso 3:</strong> Pulsa el botón <strong>Copiar</strong> en la tarjeta del resultado.
              </li>
              <li>
                <strong>Paso 4:</strong> Abre la aplicación de Instagram en tu teléfono.
              </li>
              <li>
                <strong>Paso 5:</strong> Pega el texto cursivo en la biografía, en la opción de Editar perfil o en un nuevo caption/comentario.
              </li>
            </ol>
          </div>
        </section>

        {/* Unicode Explanation */}
        <section className={styles.section}>
          <div className={styles.article}>
            <h2>¿Son fuentes reales las letras cursivas para Instagram?</h2>
            <p>
              Muchas herramientas web se refieren a estas letras como &quot;fuentes para Instagram&quot;, pero técnicamente no son archivos de fuentes instalables (.ttf o .otf). Son variantes alfanuméricas del estándar de codificación universal <strong>Unicode</strong>.
            </p>
            <p>
              Al contrario que las fuentes CSS tradicionales que solo cambian la apariencia visual en un sitio web determinado, los caracteres Unicode modifican la codificación del texto mismo. Esto permite que al copiar 𝓒𝓊𝓇𝓈𝒾𝓋𝒶, el sistema operativo de tu teléfono interprete el carácter con su diseño gráfico de manuscrito en cualquier aplicación compatible.
            </p>
            <p>
              Nuestro conversor gestiona de forma inteligente caracteres especiales del español. Los acentos (<strong>á, é, í, ó, ú, ü</strong>), la letra <strong>ñ / Ñ</strong>, signos de puntuación, números y emojis se conservan. Si una letra con acento no dispone de un equivalente en el mapa Unicode de un estilo cursivo específico, mantenemos el carácter original (por ejemplo en palabras como <em>Niñez</em>) para garantizar que el texto siga siendo 100% legible.
            </p>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <div className={styles.noticeBox}>
              <h3>Nota de compatibilidad</h3>
              <p>
                Las letras cursivas utilizan caracteres Unicode en la gran mayoría de casos. Su apariencia puede variar levemente según el sistema operativo (iOS, Android, Windows) o la versión de la app de Instagram. Si un carácter no tiene una versión cursiva compatible, conservaremos el carácter original.
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
                <summary>¿Cómo puedo poner letras cursivas en Instagram?</summary>
                <p>
                  Genera tu texto en nuestro conversor de letras cursivas, pulsa &quot;Copiar&quot; y pégalo directamente en la biografía, nombre visible o pie de foto de tu cuenta de Instagram.
                </p>
              </details>

              <details className={styles.faqItem}>
                <summary>¿Cómo puedo escribir mi nombre en cursiva?</summary>
                <p>
                  Escribe tu nombre en la casilla superior, selecciona el diseño de caligrafía cursiva (script o negrita manuscrita) y presiona &quot;Copiar&quot;. Puedes consultar más opciones en nuestra página de <Link href="/letras-para-instagram/letras-para-nombres/">Letras para Nombres</Link>.
                </p>
              </details>

              <details className={styles.faqItem}>
                <summary>¿Puedo usar letras cursivas en la bio?</summary>
                <p>
                  Sí, la biografía admite letras cursivas Unicode sin ningún tipo de restricción.
                </p>
              </details>

              <details className={styles.faqItem}>
                <summary>¿Puedo usar letras cursivas en captions?</summary>
                <p>
                  Por supuesto. Puedes incluir frases completas en letra cursiva en las publicaciones e historias de tu perfil.
                </p>
              </details>

              <details className={styles.faqItem}>
                <summary>¿Puedo copiar letras cursivas desde el móvil?</summary>
                <p>
                  ¡Sí! Toda la herramienta está adaptada para smartphones y tablets. Un toque en el botón &quot;Copiar&quot; guarda la frase en el portapapeles de tu móvil.
                </p>
              </details>

              <details className={styles.faqItem}>
                <summary>¿Estas letras son fuentes reales instalables?</summary>
                <p>
                  No son archivos de tipografías, sino símbolos de texto pertenecientes al estándar de caracteres Unicode internacional.
                </p>
              </details>

              <details className={styles.faqItem}>
                <summary>¿Por qué algunas letras no se convierten?</summary>
                <p>
                  Ciertas letras con acentos o caracteres especiales carecen de una versión directa en algunos mapas de Unicode de fantasía. Conservamos la letra original para mantener la ortografía intacta.
                </p>
              </details>

              <details className={styles.faqItem}>
                <summary>¿Funcionan las letras cursivas en el nombre de usuario (@handle)?</summary>
                <p>
                  No. El @handle único de Instagram solo acepta letras alfanuméricas estándar sin adornos, números, puntos y guiones bajos.
                </p>
              </details>

              <details className={styles.faqItem}>
                <summary>¿Puedo usar letras cursivas con ñ y acentos?</summary>
                <p>
                  Sí, nuestro sistema reconoce la ñ y las vocales con tilde, preservando la palabra de forma legible si un símbolo cursivo específico no existe.
                </p>
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
      </div>
    </main>
  );
}
