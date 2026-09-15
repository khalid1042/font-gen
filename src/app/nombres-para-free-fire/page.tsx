import type { Metadata } from 'next';
import Link from 'next/link';
import FreeFireNameExplorer from './FreeFireNameExplorer';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Nombres para Free Fire | Generador de Nombres y Nicknames',
  description: 'Crea nombres para Free Fire con estilos, símbolos y letras especiales. Genera tu nickname, personalízalo y cópialo fácilmente para usarlo en Free Fire.',
  alternates: {
    canonical: '/nombres-para-free-fire/',
  },
  openGraph: {
    title: 'Nombres para Free Fire | Generador de Nombres y Nicknames',
    description: 'Crea nombres para Free Fire con estilos, símbolos y letras especiales. Genera tu nickname, personalízalo y cópialo fácilmente para usarlo en Free Fire.',
    url: '/nombres-para-free-fire/',
    type: 'website',
    locale: 'es_ES',
    siteName: 'Letras Bonitas',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nombres para Free Fire | Generador de Nombres y Nicknames',
    description: 'Crea nombres para Free Fire con estilos, símbolos y letras especiales. Genera tu nickname, personalízalo y cópialo fácilmente para usarlo en Free Fire.',
  },
};

export default function NombresParaFreeFirePage() {
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
        name: 'Nombres para Free Fire',
        item: 'https://letrasbonitas.com/nombres-para-free-fire/',
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
            <li aria-current="page">Nombres para Free Fire</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>
              <span className={styles.heroBadgeDot}></span>
              <span className={styles.heroBadgeText}>Studio Free Fire #1 • Símbolos Pro</span>
            </div>
            <h1 className={styles.title}>
              Nombres para <span className={styles.titleGradient}>Free Fire</span>
            </h1>
            <p className={styles.subtitle}>
              Crea nombres únicos, insanos y decorados para Free Fire. Genera tu nickname gamer, añade estilos y símbolos, y cópialo en un clic.
            </p>
            <div className={styles.heroStats}>
              <div className={styles.heroStatItem}>
                <span className={styles.heroStatIcon}>⚡</span>
                <span>Copia instantánea</span>
              </div>
              <div className={styles.heroStatItem}>
                <span className={styles.heroStatIcon}>🎯</span>
                <span>Insanos & Heroicos</span>
              </div>
              <div className={styles.heroStatItem}>
                <span className={styles.heroStatIcon}>👑</span>
                <span>Tags & Clanes</span>
              </div>
            </div>
            <div className={styles.heroActions}>
              <a href="#generador-ff" className={styles.ctaBtn}>
                ⚡ Crear mi nombre
              </a>
              <a href="#nombres-aleatorios-ff" className={styles.secondaryCtaBtn}>
                🔥 Generar insano
              </a>
            </div>
          </div>
        </section>

        {/* Main Interactive Tool */}
        <section className={styles.section}>
          <FreeFireNameExplorer />
        </section>

        {/* How Special Letters Work */}
        <section className={`${styles.section} ${styles.bgLight}`}>
          <div className={styles.article}>
            <h2>¿Cómo funcionan los nombres con letras especiales?</h2>
            <p>
              Muchos jugadores de Free Fire buscan nicknames destacados utilizando letras de fantasía, marcos ornamentados (como <code>亗</code>, <code>乂</code> o <code>〆</code>) y símbolos especiales. Estos caracteres no forman parte de un archivo de fuente (.ttf) que se instala en el videojuego, sino que pertenecen al estándar internacional de codificación <strong>Unicode</strong>.
            </p>
            <p>
              Unicode asigna un valor gráfico único a miles de símbolos globales. Al escribir tu apodo en nuestro <Link href="/conversor-de-letras/">conversor de letras</Link> o en la herramienta de <Link href="/letras-para-instagram/letras-para-nombres/">letras para nombres</Link>, el texto se transforma en símbolos universales que la aplicación móvil puede procesar en tu perfil de jugador.
            </p>
            <p>
              Mantenemos soporte total para el idioma español: los acentos (<strong>á, é, í, ó, ú, ü</strong>), la letra <strong>ñ / Ñ</strong>, números y símbolos se conservan intactos. Si una variante gráfica Unicode específica no cuenta con una representación para un carácter determinado, mantenemos la letra original para asegurar que tu nickname sea totalmente legible.
            </p>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <div className={styles.noticeBox}>
              <h3>Nota de compatibilidad e independencia</h3>
              <p>
                Este sitio web es una herramienta utilitaria independiente y no posee afiliación, patrocinio ni vinculación oficial con Garena o Free Fire. La compatibilidad de ciertos símbolos Unicode especiales puede variar según las políticas internas del juego, el dispositivo móvil o las actualizaciones del sistema operativo. Si un símbolo no es aceptado al cambiar tu tarjeta de nombre en el juego, te recomendamos probar con una alternativa más sencilla de nuestro catálogo.
              </p>
            </div>
          </div>
        </section>

        {/* Step-by-Step Instructions */}
        <section className={styles.section}>
          <div className={styles.article}>
            <h2>¿Cómo crear y copiar un nombre para Free Fire?</h2>
            <p>
              Personalizar tu nickname para el juego es un proceso sencillo que puedes realizar desde tu smartphone:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Paso 1:</strong> Escribe tu nombre en la casilla principal o presiona el botón para generar nombres aleatorios por categoría.
              </li>
              <li>
                <strong>Paso 2:</strong> Elige la variante tipográfica que mejor se adapte a tu estilo de juego (Pro, Dark, Royal, Minimal).
              </li>
              <li>
                <strong>Paso 3:</strong> Añade adornos laterales o símbolos decorativos desde la sección Decorador.
              </li>
              <li>
                <strong>Paso 4:</strong> Revisa la vista previa y verifica la cantidad de caracteres recomendada.
              </li>
              <li>
                <strong>Paso 5:</strong> Pulsa el botón <strong>Copiar</strong>.
              </li>
              <li>
                <strong>Paso 6:</strong> Abre Free Fire en tu dispositivo, dirígete a tu perfil de jugador, selecciona la opción para cambiar tarjeta de nombre y pega el texto guardado.
              </li>
            </ol>
          </div>
        </section>

        {/* Advice on choosing a good gaming name */}
        <section className={`${styles.section} ${styles.bgLight}`}>
          <div className={styles.article}>
            <h2>¿Cómo elegir un buen nombre para Free Fire?</h2>
            <p>
              Tu apodo gamer es tu identidad competitiva en el campo de batalla. Para elegir una combinación memorable, ten en cuenta las siguientes recomendaciones prácticas:
            </p>
            <ul>
              <li>
                <strong>Legibilidad ante todo:</strong> Evita recargar tu nickname con demasiados símbolos extraños que impidan a tus compañeros leer tu nombre con claridad durante una partida.
              </li>
              <li>
                <strong>Estilo propio:</strong> Selecciona un concepto que refleje tu rol (agresivo, táctico, sigiloso o divertido). Puedes combinar palabras de poder en inglés o español con prefijos de clan.
              </li>
              <li>
                <strong>Coordinación en equipo:</strong> Si juegas en pareja o en clan, acuerda un prefijo uniforme (por ejemplo <code>亗NX亗</code>) para fortalecer la presencia visual de tu escuadra en las salas personalizadas.
              </li>
              <li>
                <strong>Revisión de longitud:</strong> Intenta mantener nicknames de entre 6 y 12 caracteres para asegurarte de que quepan sin problemas en las tarjetas de perfil y tablas de clasificación.
              </li>
            </ul>
          </div>
        </section>

        {/* FAQ Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Preguntas frecuentes</h2>
          <div className={styles.faqList}>
            <details className={styles.faqItem}>
              <summary>¿Cómo crear un nombre para Free Fire?</summary>
              <p>
                Escribe tu nombre o apodo en la herramienta superior, selecciona un estilo decorativo de nuestro catálogo (Pro, Dark, Royal) y pulsa &quot;Copiar&quot; para guardarlo en tu portapapeles.
              </p>
            </details>

            <details className={styles.faqItem}>
              <summary>¿Cómo puedo hacer un nombre bonito para Free Fire?</summary>
              <p>
                Puedes usar nuestro Decorador de Nombres para incorporar marcos especiales como <code>亗</code>, <code>乂</code> o <code>〆</code> alrededor de tu nombre, o explorar combinaciones aleatorias en la sección Pro.
              </p>
            </details>

            <details className={styles.faqItem}>
              <summary>¿Puedo copiar y pegar estos nombres?</summary>
              <p>
                ¡Sí! Todos los botones de copia guardan el resultado directamente en el portapapeles de tu teléfono o computadora para que lo pegues en la casilla correspondiente del juego.
              </p>
            </details>

            <details className={styles.faqItem}>
              <summary>¿Puedo usar símbolos en mi nombre?</summary>
              <p>
                Sí, en nuestra biblioteca de símbolos encontrarás coronas, estrellas, flechas y caracteres de combate compatibles con la mayoría de interfaces del juego.
              </p>
            </details>

            <details className={styles.faqItem}>
              <summary>¿Por qué algunos símbolos no funcionan?</summary>
              <p>
                Algunas versiones del juego o dispositivos antiguos restringen determinados bloques del mapa Unicode. Si una variante no es aceptada al cambiar la tarjeta de apodo, prueba con una alternativa más sencilla.
              </p>
            </details>

            <details className={styles.faqItem}>
              <summary>¿Puedo generar nombres aleatorios?</summary>
              <p>
                Por supuesto. En la sección &quot;Generar nombres aleatorios&quot; puedes filtrar por categorías (Pro, Royal, Energy, Dark, Minimal) y obtener nuevas combinaciones con un solo clic.
              </p>
            </details>

            <details className={styles.faqItem}>
              <summary>¿Puedo guardar mis nombres favoritos?</summary>
              <p>
                Sí. Puedes pulsar la estrella (★) en cualquier tarjeta para añadirlo a la sección &quot;Mis nombres favoritos&quot;, los cuales se guardan localmente en tu navegador sin requerir registro.
              </p>
            </details>

            <details className={styles.faqItem}>
              <summary>¿Cómo creo nombres para dúos o escuadras?</summary>
              <p>
                Disponemos de una sección dedicada para dúos (nombres combinados en pareja) y un generador con prefijo personalizable para crear apodos uniformes para todos los miembros de tu escuadra.
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
              <p>Generador completo de fuentes tipográficas y estilos de texto para redes sociales.</p>
              <Link href="/letras-para-instagram/" className="card-link">
                Ver fuente principal →
              </Link>
            </div>

            <div className="card">
              <h3>Letras para Nombres</h3>
              <p>Crea variantes decorativas y elegantes específicas para nombres de perfil.</p>
              <Link href="/letras-para-instagram/letras-para-nombres/" className="card-link">
                Ver letras para nombres →
              </Link>
            </div>

            <div className="card">
              <h3>Letras para Copiar y Pegar</h3>
              <p>Explora un catálogo extenso con cientos de estilos de letras alfanuméricas listas para usar.</p>
              <Link href="/conversor-de-letras/letras-para-copiar-y-pegar/" className="card-link">
                Explorar catálogo →
              </Link>
            </div>

            <div className="card">
              <h3>Letras Cursivas</h3>
              <p>Genera fuentes caligráficas manuscritas y delicadas para tus proyectos.</p>
              <Link href="/letras-cursivas/" className="card-link">
                Ver estilos cursivos →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
