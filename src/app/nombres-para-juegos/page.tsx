import type { Metadata } from 'next';
import Link from 'next/link';
import GamingNameGenerator from './GamingNameGenerator';
import styles from './page.module.css';
import RelatedLinks from '../../components/RelatedLinks/RelatedLinks';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Nombres para Juegos | Generador de Nombres Gamer',
  description: 'Genera nombres para juegos originales, chidos, pro y con estilo. Crea tu nickname gamer, personalízalo con símbolos y cópialo fácilmente.',
  alternates: {
    canonical: '/nombres-para-juegos/',
  },
  openGraph: {
    images: [{ url: '/images/nombres_juegos.png', width: 1200, height: 630, alt: 'Nombres para Juegos' }],
    title: 'Nombres para Juegos | Generador de Nombres Gamer',
    description: 'Genera nombres para juegos originales, chidos, pro y con estilo. Crea tu nickname gamer, personalízalo con símbolos y cópialo fácilmente.',
    url: '/nombres-para-juegos/',
    type: 'website',
    locale: 'es_ES',
    siteName: 'Letras Bonitas',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nombres para Juegos | Generador de Nombres Gamer',
    description: 'Genera nombres para juegos originales, chidos, pro y con estilo. Crea tu nickname gamer, personalízalo con símbolos y cópialo fácilmente.',
  },
};

export default function NombresParaJuegosPage() {
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
        name: 'Nombres para Juegos',
        item: 'https://letrasbonitas.com/nombres-para-juegos/',
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
        {/* Breadcrumbs */}
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <ol>
            <li>
              <Link href="/">Inicio</Link>
            </li>
            <li aria-current="page">Nombres para Juegos</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>
              <span className={styles.heroBadgeDot}></span>
              <span className={styles.heroBadgeText}>Generador Gamer Pro • 100% Gratis</span>
            </div>
            <h1 className={styles.title}>
              Nombres para <span className={styles.titleGradient}>Juegos</span>
            </h1>
            <p className={styles.subtitle}>
              Crea nombres para juegos originales, chidos, pro y con estilo. Genera tu nickname gamer, personalízalo con letras y símbolos y cópialo fácilmente.
            </p>
            <div className={styles.heroImageWrapper} style={{ marginTop: '2rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid #eaeaea' }}>
              <Image src="/images/nombres_juegos.png" alt="Nombres para Juegos" width={1200} height={630} style={{ width: '100%', height: 'auto', display: 'block' }} priority />
            </div>
            <div className={styles.heroStats}>
              <div className={styles.heroStatItem}>
                <span className={styles.heroStatIcon}>⚡</span>
                <span>Copia en 1 Clic</span>
              </div>
              <div className={styles.heroStatItem}>
                <span className={styles.heroStatIcon}>🔥</span>
                <span>+10,000 Nombres</span>
              </div>
              <div className={styles.heroStatItem}>
                <span className={styles.heroStatIcon}>🎮</span>
                <span>100% Insano & Pro</span>
              </div>
            </div>
            <div className={styles.heroActions}>
              <a href="#generador-principal" className={styles.ctaBtn}>
                ⚡ Crear mi nombre
              </a>
              <a href="#nombres-para-copiar" className={styles.secondaryCtaBtn}>
                🔍 Explorar nombres
              </a>
            </div>
          </div>
        </section>

        {/* Main Interactive Gaming Name Generator */}
        <section className={styles.section}>
          <GamingNameGenerator />
        </section>

        {/* Supporting Categories Section (Pillar Preview) */}
        <section className={`${styles.section} ${styles.bgLight}`}>
          <h2 className={styles.sectionTitle}>Categorías principales de nombres gamer</h2>
          <div className="grid grid-4">
            <div className="card">
              <h3>Nicks para Juegos</h3>
              <p>Colección de nicks cortos, limpios y listos para copiar en cualquier plataforma de videojuegos.</p>
              <Link href="/nombres-para-juegos/nicks/" className="card-link">
                Ver todos los nicks →
              </Link>
            </div>

            <div className="card">
              <h3>Apodos para Juegos</h3>
              <p>Encuentra apodos y aliases para crear una identidad gamer fácil de recordar por tus compañeros.</p>
              <Link href="/nombres-para-juegos/apodos/" className="card-link">
                Explorar apodos →
              </Link>
            </div>

            <div className="card">
              <h3>Nombres para Clanes</h3>
              <p>Genera nombres e identidades coordinadas de equipo, escuadra, clan y tags de competición.</p>
              <Link href="/nombres-para-juegos/nombres-para-clanes/" className="card-link">
                Ver nombres para clanes →
              </Link>
            </div>

            <div className="card">
              <h3>Nombres Chidos para Juegos</h3>
              <p>Descubre combinaciones visuales atractivas, modernas y con estilo para destacar en partida.</p>
              <Link href="/nombres-para-juegos/nombres-chidos/" className="card-link">
                Ver nombres chidos →
              </Link>
            </div>
          </div>
        </section>

        {/* Educational Content & FAQs */}
        <section className={styles.section}>
          <div className={styles.article}>
            <h2>¿Cómo funcionan las letras y símbolos para juegos?</h2>
            <p>
              La gran mayoría de los nombres estilizados para videojuegos emplean caracteres alfanuméricos estandarizados por la tabla Unicode. No se trata de archivos de fuentes tipográficas instaladas en el juego, sino de símbolos universales que los navegadores y sistemas operativos renderizan visualmente de forma distinta.
            </p>
            <p>
              Para convertir un nombre simple en una versión decorada, nuestro generador sustituye cada letra por su equivalente tipográfico (como Negrita, Cursiva, Gótica o Doble Trazo) y le añade marcos como <code>亗</code>, <code>乂</code> o <code>『』</code>.
            </p>

            <h2>¿Cómo crear un buen nombre para juegos?</h2>
            <ol className={styles.orderedList}>
              <li>
                <strong>1. Elige una palabra o idea base:</strong> Selecciona un término relacionado con tu rol favorito (francotirador, soporte, tanque) o un concepto que te represente.
              </li>
              <li>
                <strong>2. Decide el estilo visual:</strong> Aplica una tipografía Unicode que encaje con la personalidad de tu perfil.
              </li>
              <li>
                <strong>3. Añade símbolos con moderación:</strong> Adorna los laterales para enmarcar el texto sin interferir en la lectura.
              </li>
              <li>
                <strong>4. Comprueba la legibilidad:</strong> Asegúrate de que tus amigos puedan pronunciar y escribir tu alias fácilmente.
              </li>
              <li>
                <strong>5. Copia y prueba en tu juego:</strong> Copia el nombre estilizado y verifica si la plataforma lo admite en su casilla de cambio de nick.
              </li>
            </ol>

            <div className={styles.noticeBox} style={{ marginTop: '2rem' }}>
              <h3>Nota de compatibilidad e independencia</h3>
              <p>
                Las letras y símbolos especiales pueden mostrarse de forma diferente según el juego, dispositivo o plataforma. Algunos juegos pueden limitar determinados caracteres. Si un nombre no funciona, prueba una versión más sencilla. Este sitio web es una herramienta utilitaria independiente para generar e idear nicknames en cualquier videojuego.
              </p>
            </div>
          </div>
        </section>

        {/* SEO Questions Section */}
        <section className={`${styles.section} ${styles.bgLight}`}>
          <div className={styles.article}>
            <h2>Preguntas habituales sobre nombres gamer</h2>

            <h3 style={{ fontSize: '1.25rem', marginTop: '1.5rem', color: 'var(--foreground)' }}>
              ¿Qué es un nombre gamer?
            </h3>
            <p>
              Un nombre gamer (o nickname) es la identidad digital que elige un jugador para identificarse en plataformas multijugador, salas de competición y comunidades en línea.
            </p>

            <h3 style={{ fontSize: '1.25rem', marginTop: '1.5rem', color: 'var(--foreground)' }}>
              ¿Cómo hacer un nickname con letras especiales?
            </h3>
            <p>
              Puedes ingresar tu palabra en el campo de texto de nuestro generador, elegir el estilo de alfabeto Unicode que más te guste (gótico, negrita, cursiva) y copiar el resultado directamente al portapapeles.
            </p>

            <h3 style={{ fontSize: '1.25rem', marginTop: '1.5rem', color: 'var(--foreground)' }}>
              ¿Se pueden copiar y pegar nombres gamer en todos los juegos?
            </h3>
            <p>
              Sí. Los caracteres tipográficos que generamos forman parte del estándar Unicode y pueden copiarse y pegarse en PC, Android, iOS y consolas. Si un título específico restringe un glifo, te recomendamos usar una versión con adornos más simples.
            </p>

            <p style={{ marginTop: '1.5rem' }}>
              Si buscas nombres específicos para Free Fire, visita nuestro <Link href="/nombres-para-free-fire/">generador de nombres para Free Fire</Link>, o explora nuestro <Link href="/conversor-de-letras/">conversor de letras general</Link> para otros usos decorativos.
            </p>
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Preguntas frecuentes</h2>
          <div className={styles.faqList}>
            <details className={styles.faqItem}>
              <summary>¿Cómo puedo crear un nombre para un juego?</summary>
              <p>
                Escribe cualquier palabra o alias en nuestro generador, selecciona un estilo tipográfico o marco de símbolos y haz clic en &quot;Copiar&quot;.
              </p>
            </details>

            <details className={styles.faqItem}>
              <summary>¿Qué es un nickname gamer?</summary>
              <p>
                Es el apodo único que utiliza un jugador para identificarse en videojuegos en línea y perfiles de streaming.
              </p>
            </details>

            <details className={styles.faqItem}>
              <summary>¿Puedo usar letras especiales en un nombre?</summary>
              <p>
                Sí, la mayoría de juegos actuales admiten caracteres alfanuméricos Unicode especiales en sus perfiles de usuario.
              </p>
            </details>

            <details className={styles.faqItem}>
              <summary>¿Puedo copiar y pegar estos nombres?</summary>
              <p>
                ¡Por supuesto! Todas las tarjetas e ideas generadas cuentan con un botón de copia rápida de un solo clic.
              </p>
            </details>

            <details className={styles.faqItem}>
              <summary>¿Funcionan los nombres en todos los juegos?</summary>
              <p>
                Funciona en la inmensa mayoría de títulos modernos (Fortnite, Free Fire, Roblox, Minecraft, Call of Duty, Valorant), aunque siempre es recomendable probar el resultado en la plataforma final.
              </p>
            </details>

            <details className={styles.faqItem}>
              <summary>¿Puedo crear nombres para clanes?</summary>
              <p>
                Sí, dispones de una sección dedicada a escuadras e ideas de equipo en nuestro <Link href="/nombres-para-juegos/nombres-para-clanes/">generador de nombres para clanes</Link>.
              </p>
            </details>

            <details className={styles.faqItem}>
              <summary>¿Puedo guardar mis nombres favoritos?</summary>
              <p>
                Sí, haciendo clic en el icono de corazón (♡) en cualquier tarjeta de nombre se guardará en tu lista de favoritos de forma local sin necesidad de registro.
              </p>
            </details>
          </div>
        </section>

        {/* Directorio de la Categoría (SEO Hub) */}
      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Directorio de Nombres para Juegos</h2>
          <div className={styles.directoryGrid} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '1.5rem' }}>
            <Link href="/nombres-para-juegos/nicks/" style={{ display: 'block', padding: '1.5rem', backgroundColor: 'var(--bg-card, #ffffff)', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', textDecoration: 'none', color: 'inherit' }} className="dirCard">
              <h3 style={{ margin: '0 0 0.5rem 0', color: 'var(--primary, #4a25e1)', fontSize: '1.25rem' }}>Nicks para Juegos</h3>
              <p style={{ margin: 0, color: 'var(--text-secondary, #555)', lineHeight: '1.5' }}>Encuentra el nickname perfecto para cualquier videojuego.</p>
            </Link>
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
