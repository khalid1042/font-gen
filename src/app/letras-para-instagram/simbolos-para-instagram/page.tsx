import type { Metadata } from 'next';
import Link from 'next/link';
import InstagramSymbolsExplorer from './InstagramSymbolsExplorer';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Símbolos para Instagram | Símbolos Bonitos para Copiar',
  description: 'Encuentra símbolos para Instagram: corazones, estrellas, flechas, separadores, flores y símbolos aesthetic. Cópialos fácilmente y úsalos en tu perfil.',
  alternates: {
    canonical: '/letras-para-instagram/simbolos-para-instagram/',
  },
  openGraph: {
    title: 'Símbolos para Instagram | Símbolos Bonitos para Copiar',
    description: 'Encuentra símbolos para Instagram: corazones, estrellas, flechas, separadores, flores y símbolos aesthetic. Cópialos fácilmente y úsalos en tu perfil.',
    url: '/letras-para-instagram/simbolos-para-instagram/',
    type: 'website',
    locale: 'es_ES',
    siteName: 'Letras Bonitas',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Símbolos para Instagram | Símbolos Bonitos para Copiar',
    description: 'Encuentra símbolos para Instagram: corazones, estrellas, flechas, separadores, flores y símbolos aesthetic. Cópialos fácilmente y úsalos en tu perfil.',
  },
};

export default function SimbolosParaInstagramPage() {
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
        name: 'Símbolos para Instagram',
        item: 'https://letrasbonitas.com/letras-para-instagram/simbolos-para-instagram/',
      },
    ],
  };

  return (
    <main className={styles.main}>
      <script
        type="application/ld+json"
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
            <li aria-current="page">Símbolos para Instagram</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>Símbolos para Instagram</h1>
            <p className={styles.subtitle}>
              Descubre símbolos bonitos, aesthetic y decorativos para Instagram. Elige un símbolo, cópialo y pégalo fácilmente en tu bio, nombre, captions o textos.
            </p>
            <div className={styles.heroActions}>
              <a href="#explorador-simbolos" className={styles.ctaBtn}>
                Explorar símbolos
              </a>
              <a href="#categorias-simbolos" className={styles.secondaryCtaBtn}>
                Ver categorías
              </a>
            </div>
          </div>
        </section>

        {/* Main Interactive Tool */}
        <section className={styles.section}>
          <InstagramSymbolsExplorer />
        </section>

        {/* Symbols for Bio Section */}
        <section className={`${styles.section} ${styles.bgLight}`}>
          <div className={styles.article}>
            <h2>Símbolos para la bio de Instagram</h2>
            <p>
              La biografía es el lugar perfecto para utilizar caracteres especiales y crear una presentación visual atractiva. Los símbolos permiten ordenar tus pasiones, destacar llamadas a la acción y separar líneas de texto de forma estética.
            </p>
            <p>
              Ideas prácticas para tu biografía:
            </p>
            <ul>
              <li>
                <strong>Destacar pasiones o hobbies:</strong> <code>♡ Creador de contenido</code> · <code>✦ Fotografía & Viajes</code> · <code>📍 Madrid / Barcelona</code>
              </li>
              <li>
                <strong>Organizar en listas verticales:</strong> Usa puntos (<code>•</code>), flechas (<code>➜</code>) o destellos (<code>✨</code>) para enumerar tus servicios o descripción.
              </li>
              <li>
                <strong>Separar secciones:</strong> Utiliza marcos como <code>• ─── •</code> o <code>✦ ─── ✦</code> para dar estructura.
              </li>
            </ul>
            <p>
              Si deseas acompañar estos símbolos con fuentes tipográficas bonitas, visita nuestra sección especializada en <Link href="/letras-para-instagram/letras-para-bio/">Letras para Bio</Link>.
            </p>
          </div>
        </section>

        {/* Symbols for Names Section */}
        <section className={styles.section}>
          <div className={styles.article}>
            <h2>Símbolos para nombres de Instagram</h2>
            <p>
              Decorar el <strong>Nombre visible</strong> de tu perfil con pequeños detalles le da un toque único y personal a tu cuenta. Puedes añadir corazones (<code>♡ Sofia ♡</code>), destellos (<code>✦ Alex ✦</code>) o corchetes estéticos (<code>『 Mateo 』</code>).
            </p>
            <p>
              Recuerda que estas decoraciones son recomendadas para el Nombre visible de perfil. Si buscas estilos de letras adicionales para tu nombre, puedes consultar nuestra herramienta de <Link href="/letras-para-instagram/letras-para-nombres/">Letras para Nombres</Link> o la colección de <Link href="/conversor-de-letras/letras-para-copiar-y-pegar/">letras para copiar y pegar</Link>.
            </p>
          </div>
        </section>

        {/* Symbols for Captions & Separators Section */}
        <section className={`${styles.section} ${styles.bgLight}`}>
          <div className={styles.article}>
            <h2>Símbolos para captions</h2>
            <p>
              Los pies de foto o captions leen mucho mejor cuando el contenido está bien estructurado. Usar símbolos discretos como puntos decorativos (<code>•</code>), flechas (<code>→</code>) o destellos (<code>✨</code>) ayuda a captar la atención de tus seguidores en el feed.
            </p>

            <h2 style={{ marginTop: '2rem' }}>Separadores para Instagram</h2>
            <p>
              Los separadores son bloques de símbolos horizontales listos para copiar y pegar entre párrafos. Ayudan a dividir descripciones largas en bloques de lectura cómodos:
            </p>
            <ul>
              <li><code>────────</code> (Línea simple)</li>
              <li><code>• • •</code> (Puntos triples)</li>
              <li><code>✦ ─── ✦</code> (Destellos elegantes)</li>
              <li><code>♡ ───── ♡</code> (Corazones en línea)</li>
              <li><code>༺ ✦ ༻</code> (Marco central)</li>
              <li><code>⋆｡°✩</code> (Noche estrellada)</li>
            </ul>
          </div>
        </section>

        {/* How Symbols Work & Unicode Explanation */}
        <section className={styles.section}>
          <div className={styles.article}>
            <h2>¿Qué son los símbolos para Instagram?</h2>
            <p>
              La gran mayoría de íconos gráficos y símbolos decorativos que encuentras en internet son caracteres integrados en el mapa estándar <strong>Unicode</strong> internacional. No son archivos de imágenes ni fuentes personalizadas instalables, sino glifos tipográficos universales reconocidos por dispositivos Android, iPhone, Windows y Mac.
            </p>
            <p>
              Debido a que son caracteres de texto universales, puedes copiar y pegar estos símbolos directamente en tu biografía, nombre, publicaciones o comentarios. Sin embargo, su diseño gráfico exacto puede cambiar ligeramente según la plataforma o el sistema operativo del teléfono.
            </p>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <div className={styles.noticeBox}>
              <h3>Nota de compatibilidad</h3>
              <p>
                La apariencia y compatibilidad de algunos símbolos especiales puede variar según el dispositivo, el navegador o la versión de la app de Instagram. Si un símbolo específico no se muestra de forma óptima en tu pantalla, te recomendamos seleccionar un símbolo alternativo más extendido (como corazones o estrellas clásicas).
              </p>
            </div>
          </div>
        </section>

        {/* Step-by-Step Instructions */}
        <section className={`${styles.section} ${styles.bgLight}`}>
          <div className={styles.article}>
            <h2>¿Cómo copiar símbolos para Instagram?</h2>
            <p>
              Copiar y usar símbolos en tu perfil es sumamente sencillo desde cualquier dispositivo móvil:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Paso 1:</strong> Utiliza el buscador o navega entre las categorías superiores para encontrar el símbolo o separador que deseas.
              </li>
              <li>
                <strong>Paso 2:</strong> Pulsa el botón <strong>Copiar</strong> ubicado junto al símbolo (o <strong>Copiar todos</strong> para llevarte el conjunto entero).
              </li>
              <li>
                <strong>Paso 3:</strong> Abre la aplicación de Instagram en tu teléfono o en el sitio web.
              </li>
              <li>
                <strong>Paso 4:</strong> Pega el símbolo en el campo de texto donde quieras usarlo (bio, nombre, caption o comentario) y guarda los cambios.
              </li>
            </ol>
          </div>
        </section>

        {/* FAQ Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Preguntas frecuentes</h2>
          <div className={styles.faqList}>
            <details className={styles.faqItem}>
              <summary>¿Dónde puedo encontrar símbolos para Instagram?</summary>
              <p>
                En esta página dispones de un catálogo completo clasificado por categorías (corazones, estrellas, flechas, flores, aesthetic, luna, marcas de check) con buscador instantáneo y copia en un clic.
              </p>
            </details>

            <details className={styles.faqItem}>
              <summary>¿Cómo copio un símbolo para Instagram?</summary>
              <p>
                Solo debes presionar el botón &quot;Copiar&quot; debajo del símbolo deseado. El carácter se guardará automáticamente en el portapapeles de tu teléfono o computadora para que lo pegues en la app.
              </p>
            </details>

            <details className={styles.faqItem}>
              <summary>¿Puedo usar símbolos en mi bio de Instagram?</summary>
              <p>
                ¡Sí! Los símbolos son ampliamente utilizados en la biografía para estructurar enlaces, enumerar pasiones y decorar descripciones personales.
              </p>
            </details>

            <details className={styles.faqItem}>
              <summary>¿Puedo usar símbolos en mi nombre de Instagram?</summary>
              <p>
                Sí, puedes añadir símbolos especiales en el campo de &quot;Nombre visible&quot; de tu perfil. Ten en cuenta que el &quot;Nombre de usuario&quot; (@handle) único no admite símbolos gráficos.
              </p>
            </details>

            <details className={styles.faqItem}>
              <summary>¿Qué símbolos puedo usar para decorar mi bio?</summary>
              <p>
                Los más populares son los corazones (♡), las estrellas (✦, ✨), los lazos aesthetic (୨୧), las flechas discretas (➜) y las líneas de separación (• ─── •).
              </p>
            </details>

            <details className={styles.faqItem}>
              <summary>¿Qué son los símbolos Unicode?</summary>
              <p>
                Unicode es el estándar internacional de codificación de caracteres que permite que teléfonos y computadoras de todo el mundo procesen e intercambien texto y símbolos de forma homogénea.
              </p>
            </details>

            <details className={styles.faqItem}>
              <summary>¿Por qué algunos símbolos no aparecen correctamente?</summary>
              <p>
                Si un dispositivo cuenta con un sistema operativo antiguo, es posible que no incluya el diseño visual del glifo en la fuente del sistema, mostrándolo como un recuadro. Si esto ocurre, elige un símbolo más estándar de nuestro catálogo.
              </p>
            </details>

            <details className={styles.faqItem}>
              <summary>¿Funcionan estos símbolos en todos los dispositivos?</summary>
              <p>
                La inmensa mayoría de los símbolos de esta página son plenamente compatibles con iOS, Android, Windows y macOS.
              </p>
            </details>

            <details className={styles.faqItem}>
              <summary>¿Puedo usar estos símbolos desde el móvil?</summary>
              <p>
                Por supuesto. La herramienta está optimizada con botones de toque fácil adaptados a las pantallas de los smartphones.
              </p>
            </details>
          </div>
        </section>

        {/* Related Pages Section */}
        <section className={`${styles.section} ${styles.bgLight}`}>
          <h2 className={styles.sectionTitle}>También te puede interesar</h2>
          <div className="grid grid-4">
            <div className="card">
              <h3>Letras para Instagram</h3>
              <p>Generador principal de letras bonitas y fuentes tipográficas para la plataforma de Instagram.</p>
              <Link href="/letras-para-instagram/" className="card-link">
                Ver fuente principal →
              </Link>
            </div>

            <div className="card">
              <h3>Letras para Bio</h3>
              <p>Frases, plantillas y fuentes tipográficas optimizadas para la biografía de tu perfil.</p>
              <Link href="/letras-para-instagram/letras-para-bio/" className="card-link">
                Ver letras para bio →
              </Link>
            </div>

            <div className="card">
              <h3>Letras para Nombres</h3>
              <p>Convierte tu nombre en estilos elegantes, cursivos y decorativos para destacar tu perfil.</p>
              <Link href="/letras-para-instagram/letras-para-nombres/" className="card-link">
                Ver letras para nombres →
              </Link>
            </div>

            <div className="card">
              <h3>Letras para Copiar y Pegar</h3>
              <p>Catálogo extenso con cientos de estilos de letras alfanuméricas listas para usar.</p>
              <Link href="/conversor-de-letras/letras-para-copiar-y-pegar/" className="card-link">
                Explorar catálogo →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
