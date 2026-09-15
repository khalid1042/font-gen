import type { Metadata } from 'next';
import Link from 'next/link';
import NicksExplorer from './NicksExplorer';
import styles from './page.module.css';
import RelatedLinks from '../../../components/RelatedLinks/RelatedLinks';

export const metadata: Metadata = {
  title: 'Nicks para Juegos | Nicknames Gamer para Copiar',
  description: 'Encuentra nicks para juegos originales, cortos, pro y con estilo. Descubre nicknames gamer, personalízalos y cópialos fácilmente.',
  alternates: {
    canonical: '/nombres-para-juegos/nicks/',
  },
  openGraph: {
    title: 'Nicks para Juegos | Nicknames Gamer para Copiar',
    description: 'Encuentra nicks para juegos originales, cortos, pro y con estilo. Descubre nicknames gamer, personalízalos y cópialos fácilmente.',
    url: '/nombres-para-juegos/nicks/',
    type: 'website',
    locale: 'es_ES',
    siteName: 'Letras Bonitas',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nicks para Juegos | Nicknames Gamer para Copiar',
    description: 'Encuentra nicks para juegos originales, cortos, pro y con estilo. Descubre nicknames gamer, personalízalos y cópialos fácilmente.',
  },
};

export default function NicksPage() {
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
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Nicks',
        item: 'https://letrasbonitas.com/nombres-para-juegos/nicks/',
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
            <li>
              <Link href="/nombres-para-juegos/">Nombres para Juegos</Link>
            </li>
            <li aria-current="page">Nicks</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>
              <span className={styles.heroBadgeDot}></span>
              <span className={styles.heroBadgeText}>Nicks Cortos & Nicknames Pro • 100% Gratis</span>
            </div>
            <h1 className={styles.title}>
              Nicks para <span className={styles.titleGradient}>Juegos</span>
            </h1>
            <p className={styles.subtitle}>
              Explora una amplia selección de nicks para juegos listos para copiar. Descubre nicknames cortos, pro, originales, oscuros y estilizados para cualquier plataforma.
            </p>
            <div className={styles.heroStats}>
              <div className={styles.heroStatItem}>
                <span className={styles.heroStatIcon}>⚡</span>
                <span>Nicks Cortos 3-6 Letras</span>
              </div>
              <div className={styles.heroStatItem}>
                <span className={styles.heroStatIcon}>🎯</span>
                <span>Copia en 1 Clic</span>
              </div>
              <div className={styles.heroStatItem}>
                <span className={styles.heroStatIcon}>🎮</span>
                <span>100% Compatibles</span>
              </div>
            </div>
            <div className={styles.heroActions}>
              <Link href="/nombres-para-juegos/" className={styles.ctaBtn}>
                ⚡ Crear mi nick
              </Link>
              <a href="#coleccion-nicks" className={styles.secondaryCtaBtn}>
                🔍 Explorar nicks
              </a>
            </div>
          </div>
        </section>

        {/* Main Interactive Nicks Library Component */}
        <section className={styles.section}>
          <NicksExplorer />
        </section>

        {/* Educational Content */}
        <section className={`${styles.section} ${styles.bgLight}`}>
          <div className={styles.article}>
            <h2>¿Qué es un nick gamer?</h2>
            <p>
              Un nick gamer (o nickname) es la denominación corta o pseudónimo que un jugador utiliza para identificarse en videojuegos multijugador y servicios en línea. A diferencia de un apodo o nombre extenso, los nicks suelen caracterizarse por su brevedad y legibilidad inmediata en pantalla.
            </p>

            <h2>¿Cómo elegir un buen nick para juegos?</h2>
            <ol className={styles.orderedList}>
              <li>
                <strong>1. Prioriza la brevedad:</strong> Los nicks de 3 a 6 caracteres son facilísimos de recordar para tus amigos y comentaristas.
              </li>
              <li>
                <strong>2. Mantén la legibilidad:</strong> Evita saturar el nick con demasiados símbolos ilegibles.
              </li>
              <li>
                <strong>3. Elige palabras con impacto:</strong> Términos como <code>Shadow</code>, <code>Apex</code>, <code>Vex</code> o <code>Zen</code> transmiten una presencia fuerte.
              </li>
              <li>
                <strong>4. Añade adornos laterales sutiles:</strong> Marcos como <code>『』</code> o <code>亗</code> dan un toque único sin interferir en la lectura.
              </li>
              <li>
                <strong>5. Comprueba la compatibilidad:</strong> Revisa el nick en la casilla de cambio de nombre de tu videojuego preferido antes de confirmar.
              </li>
            </ol>
          </div>
        </section>

        {/* Step-by-Step Copying Guide & Notice */}
        <section className={styles.section}>
          <div className={styles.article}>
            <h2>¿Cómo copiar un nick gamer?</h2>
            <ol className={styles.orderedList}>
              <li>
                <strong>Paso 1:</strong> Explora nuestra colección de nicks o usa el buscador por palabras clave.
              </li>
              <li>
                <strong>Paso 2:</strong> Pulsa el botón <strong>Copiar</strong> ubicado al lado de tu nick preferido.
              </li>
              <li>
                <strong>Paso 3:</strong> Abre tu videojuego o plataforma favorita (Fortnite, Roblox, PUBG, Free Fire, Valorant, CoD).
              </li>
              <li>
                <strong>Paso 4:</strong> Pega el texto copiado en el campo de cambio de nick de tu perfil.
              </li>
            </ol>

            <div className={styles.noticeBox} style={{ marginTop: '2rem' }}>
              <h3>Aviso de compatibilidad e independencia</h3>
              <p>
                Los caracteres y símbolos Unicode pueden mostrarse de forma diferente según el dispositivo o videojuego. Si una plataforma rechaza un símbolo específico, te recomendamos probar una variante con adornos más simples o usar nuestro <Link href="/nombres-para-juegos/">generador principal de nombres para juegos</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className={`${styles.section} ${styles.bgLight}`}>
          <h2 className={styles.sectionTitle}>Preguntas frecuentes sobre nicks</h2>
          <div className={styles.faqList}>
            <details className={styles.faqItem}>
              <summary>¿Puedo copiar los nicks directamente?</summary>
              <p>
                Sí, todos los nicks de nuestro catálogo tienen un botón de copia inmediata de un solo clic que guarda el texto en tu portapapeles.
              </p>
            </details>

            <details className={styles.faqItem}>
              <summary>¿Cuál es la diferencia entre un nick y un apodo?</summary>
              <p>
                El nick suele ser una palabra corta o identificador rápido, mientras que el apodo o alias puede ser una frase o sobre-nombre más extenso e identitario.
              </p>
            </details>

            <details className={styles.faqItem}>
              <summary>¿Puedo personalizar cualquiera de estos nicks?</summary>
              <p>
                ¡Por supuesto! Puedes usar nuestro personalizador rápido en esta página o ingresar a nuestro <Link href="/nombres-para-juegos/">generador principal de nombres para juegos</Link>.
              </p>
            </details>

            <details className={styles.faqItem}>
              <summary>¿Puedo guardar mis nicks favoritos?</summary>
              <p>
                Sí, haciendo clic en el icono de corazón (♡) en cualquier tarjeta se guardará en tu lista personal de favoritos de forma local.
              </p>
            </details>
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
