import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import ApodosExplorer from './ApodosExplorer';
import styles from './page.module.css';
import RelatedLinks from '../../../components/RelatedLinks/RelatedLinks';

export const metadata: Metadata = {
  title: 'Apodos para Free Fire | Nicknames Chidos, Pro y Originales',
  description: 'Encuentra apodos para Free Fire chidos, originales, pro, divertidos y con estilo. Explora nicknames, personalízalos y cópialos fácilmente.',
  alternates: {
    canonical: '/nombres-para-free-fire/apodos/',
  },
  openGraph: {
    title: 'Apodos para Free Fire | Nicknames Chidos, Pro y Originales',
    description: 'Encuentra apodos para Free Fire chidos, originales, pro, divertidos y con estilo. Explora nicknames, personalízalos y cópialos fácilmente.',
    url: '/nombres-para-free-fire/apodos/',
    type: 'website',
    locale: 'es_ES',
    siteName: 'Letras Bonitas',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apodos para Free Fire | Nicknames Chidos, Pro y Originales',
    description: 'Encuentra apodos para Free Fire chidos, originales, pro, divertidos y con estilo. Explora nicknames, personalízalos y cópialos fácilmente.',
  },
};

export default function ApodosPage() {
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
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Apodos',
        item: 'https://letrasbonitas.com/nombres-para-free-fire/apodos/',
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
              <Link href="/nombres-para-free-fire/">Nombres para Free Fire</Link>
            </li>
            <li aria-current="page">Apodos</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>
              <span className={styles.heroBadgeDot}></span>
              <span className={styles.heroBadgeText}>Apodos Gamer & Nicknames Pro • 100% Gratis</span>
            </div>
            <h1 className={styles.title}>
              Apodos para <span className={styles.titleGradient}>Free Fire</span>
            </h1>
            <p className={styles.subtitle}>
              Encuentra apodos para Free Fire originales, chidos, pro, divertidos y con estilo. Explora diferentes categorías, personaliza tu nickname y cópialo fácilmente.
            </p>
            <div className={styles.heroStats}>
              <div className={styles.heroStatItem}>
                <span className={styles.heroStatIcon}>🌟</span>
                <span>Nicknames Chidos</span>
              </div>
              <div className={styles.heroStatItem}>
                <span className={styles.heroStatIcon}>⚡</span>
                <span>Copia en 1 Clic</span>
              </div>
              <div className={styles.heroStatItem}>
                <span className={styles.heroStatIcon}>🎮</span>
                <span>Nicknames Gamer Pro</span>
              </div>
            </div>
            <div className={styles.heroActions}>
              <Link href="/nombres-para-free-fire/" className={styles.ctaBtn}>
                ⚡ Crear mi apodo
              </Link>
              <a href="#coleccion-apodos" className={styles.secondaryCtaBtn}>
                🔍 Explorar apodos
              </a>
            </div>
          </div>
        </section>

        {/* Main Interactive Apodos Library Component */}
        <section className={styles.section}>
          <ApodosExplorer />
        </section>

        {/* Categorized Educational Sections */}
        <section className={`${styles.section} ${styles.bgLight}`}>
          <div className={styles.article}>
            <h2>Apodos Chidos para Free Fire</h2>
            <p>
              Los apodos chidos destacan por combinar nombres modernos con decoraciones sutiles sin recargar la pantalla. Ejemplos como <code>CoolX</code>, <code>ShadowX</code>, <code>Kingツ</code>, <code>DarkBoy</code> y <code>GhostX</code> brindan una presencia atractiva e ideal para jugadores informales o competitivos.
            </p>

            <h2 style={{ marginTop: '2.5rem' }}>Apodos Originales</h2>
            <p>
              Si buscas distanciarte de las combinaciones repetitivas, los sobrenombres creativos como <code>NovaX</code>, <code>Vortex</code>, <code>Zenix</code>, <code>Riven</code> o <code>Kairo</code> aportan una identidad gamer auténtica.
            </p>

            <h2 style={{ marginTop: '2.5rem' }}>Apodos Pro</h2>
            <p>
              Orientados a la competición de alto nivel, los nicknames pro utilizan abreviaturas de maestría como <code>EliteX</code>, <code>MVP</code>, <code>ClutchX</code>, <code>AimPro</code> o <code>ZeroX</code>.
            </p>

            <h2 style={{ marginTop: '2.5rem' }}>Apodos Gamer</h2>
            <p>
              Inspirados en la cultura de los deportes electrónicos y la tecnología, apodos como <code>PixelX</code>, <code>GameLord</code>, <code>CyberX</code>, <code>BossMode</code> y <code>XPulse</code> transmiten una pasión absoluta por los videojuegos.
            </p>

            <h2 style={{ marginTop: '2.5rem' }}>Apodos Divertidos</h2>
            <p>
              Para quienes prefieren jugar con humor y buen ambiente sin presiones, opciones simpáticas como <code>Noobito</code>, <code>LagMaster</code>, <code>PanConPing</code>, <code>WifiWarrior</code> o <code>BotConSuerte</code> provocan sonrisas entre compañeros y rivales.
            </p>

            <h2 style={{ marginTop: '2.5rem' }}>Apodos Elegantes</h2>
            <p>
              Nicknames limpios y estilizados como <code>Royal</code>, <code>NobleX</code>, <code>Velvet</code>, <code>Elite</code> y <code>Prestige</code> transmiten un toque de clase y distinción.
            </p>

            <h2 style={{ marginTop: '2.5rem' }}>Apodos Oscuros</h2>
            <p>
              Estilismos de estética nocturna y misteriosa como <code>Shadow</code>, <code>NightX</code>, <code>DarkSoul</code>, <code>BlackGhost</code> y <code>Phantom</code>.
            </p>

            <h2 style={{ marginTop: '2.5rem' }}>Apodos Cortos</h2>
            <p>
              Apodos de 3 letras como <code>ZEN</code>, <code>VEX</code>, <code>NOX</code>, <code>REX</code>, <code>AXE</code> y <code>KAI</code> que resultan facilísimos de recordar en partida. Si quieres personalizar cualquiera de estas palabras con tus iniciales o adornos, usa nuestro <Link href="/nombres-para-free-fire/">generador de nombres para Free Fire</Link>.
            </p>

            <h2 style={{ marginTop: '2.5rem' }}>Apodos para Chicos y Chicas</h2>
            <p>
              Ofrecemos opciones variadas orientadas a diferentes identidades, como <code>WolfBoy</code>, <code>RaptorKing</code>, <code>QueenX</code>, <code>LunaGirl</code> o <code>NovaRose</code>, aunque cualquier jugador puede usar libremente el nickname que mejor le represente.
            </p>
          </div>
        </section>

        {/* Educational Content & Differences */}
        <section className={styles.section}>
          <div className={styles.article}>
            <h2>¿Cuál es la diferencia entre un nombre y un apodo en Free Fire?</h2>
            <p>
              Aunque en el uso cotidiano los jugadores emplean los términos como sinónimos, existe una pequeña diferencia conceptual:
            </p>
            <ul>
              <li>
                <strong>Nombre:</strong> Se refiere de manera amplia a la denominación general utilizada para identificar la cuenta de usuario en el juego.
              </li>
              <li>
                <strong>Apodo / Nickname / Alias:</strong> Enfatiza la identidad gamer, el personaje o la reputación competitiva que el jugador proyecta dentro de la comunidad.
              </li>
            </ul>
            <p>
              En nuestra plataforma puedes explorar colecciones especializadas como nuestros <Link href="/nombres-para-free-fire/nombres-insanos/">nombres insanos para Free Fire</Link> o explorar el catálogo completo en nuestra sección de <Link href="/nombres-para-free-fire/nombres/">nombres para Free Fire</Link>.
            </p>

            <h2>¿Cómo elegir un buen apodo para Free Fire?</h2>
            <ol className={styles.orderedList}>
              <li>
                <strong>1. Hazlo memorable:</strong> Escoge un alias que sea fácil de nombrar en el chat de voz durante momentos intensos.
              </li>
              <li>
                <strong>2. Mantén la legibilidad:</strong> Asegúrate de que las letras sean comprensibles sin saturación excesiva.
              </li>
              <li>
                <strong>3. Refleja tu estilo de juego:</strong> Selecciona palabras clave acorde a si juegas como rusheador, soporte o sniper.
              </li>
              <li>
                <strong>4. Usa símbolos con moderación:</strong> Adornos como <code>ツ</code> o <code>亗</code> añaden personalidad sin interferir con la lectura.
              </li>
              <li>
                <strong>5. Evita términos ofensivos:</strong> Cumple siempre las normas de la comunidad para evitar sanciones en tu cuenta.
              </li>
              <li>
                <strong>6. Comprueba los límites de caracteres:</strong> Los límites y caracteres admitidos pueden depender de las reglas y versión actuales del juego.
              </li>
              <li>
                <strong>7. Conserva una versión sencilla:</strong> Es recomendable guardar una variante básica en texto plano por si necesitas usarla en torneos.
              </li>
            </ol>

            <h2>¿Qué son los apodos con letras especiales?</h2>
            <p>
              Son nicknames que sustituyen o enmarcan letras tradicionales mediante símbolos alfanuméricos de Unicode. No se trata de fuentes instaladas en tu dispositivo, sino de caracteres estandarizados que se renderizan visualmente de forma distinta según el sistema operativo.
            </p>
          </div>
        </section>

        {/* Step-by-Step Copying Guide & Notice */}
        <section className={`${styles.section} ${styles.bgLight}`}>
          <div className={styles.article}>
            <h2>¿Cómo copiar un apodo para Free Fire?</h2>
            <ol className={styles.orderedList}>
              <li>
                <strong>Paso 1:</strong> Elige un apodo de nuestras listas o utiliza el buscador para filtrar tu estilo ideal.
              </li>
              <li>
                <strong>Paso 2:</strong> Haz clic en el botón <strong>Copiar</strong> ubicado en la tarjeta del apodo.
              </li>
              <li>
                <strong>Paso 3:</strong> Abre el juego Free Fire en tu dispositivo móvil.
              </li>
              <li>
                <strong>Paso 4:</strong> Dirígete a tu perfil y toca la opción para modificar tu nickname.
              </li>
              <li>
                <strong>Paso 5:</strong> Pega el texto copiado y confirma el cambio de nombre.
              </li>
            </ol>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <div className={styles.noticeBox}>
              <h3>Aviso de compatibilidad e independencia</h3>
              <p>
                Algunos apodos utilizan caracteres Unicode y símbolos especiales. Su disponibilidad puede depender de las reglas y compatibilidad del juego, dispositivo o versión. Si un apodo no funciona, prueba una versión más sencilla. Este sitio web es una herramienta utilitaria independiente sin vinculación ni patrocinio oficial de Garena o Free Fire.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Preguntas frecuentes</h2>
          <div className={styles.faqList}>
            <details className={styles.faqItem}>
              <summary>¿Qué es un apodo para Free Fire?</summary>
              <p>
                Es el alias o nickname personalizado que utiliza un jugador para identificarse ante sus amigos y competidores dentro de las partidas de Free Fire.
              </p>
            </details>

            <details className={styles.faqItem}>
              <summary>¿Dónde puedo encontrar apodos para Free Fire?</summary>
              <p>
                En esta página dispones de un catálogo organizado por categorías (chidos, pro, divertidos, oscuros, elegantes) listo para filtrar y copiar con un solo clic.
              </p>
            </details>

            <details className={styles.faqItem}>
              <summary>¿Puedo copiar los apodos directamente?</summary>
              <p>
                Sí, todos los apodos cuentan con un botón de copia rápida que guarda el texto estilizado en el portapapeles de tu dispositivo.
              </p>
            </details>

            <details className={styles.faqItem}>
              <summary>¿Puedo crear mi propio apodo?</summary>
              <p>
                ¡Claro! Puedes usar nuestro decorador rápido en esta página o ingresar al <Link href="/nombres-para-free-fire/">generador de nombres para Free Fire</Link> para un control completo.
              </p>
            </details>

            <details className={styles.faqItem}>
              <summary>¿Puedo usar letras especiales?</summary>
              <p>
                Sí, la gran mayoría de apodos de nuestra colección incluyen letras alfanuméricas Unicode y símbolos ornamentales que funcionan en el juego.
              </p>
            </details>

            <details className={styles.faqItem}>
              <summary>¿Por qué algunos símbolos no funcionan?</summary>
              <p>
                Determinados dispositivos o parches de actualización del juego pueden bloquear ciertos glifos no compatibles. Si un símbolo da error, usa una variante más simple.
              </p>
            </details>

            <details className={styles.faqItem}>
              <summary>¿Hay apodos para dúos y escuadras?</summary>
              <p>
                Sí, contamos con un apartado dedicado a apodos coordinados para parejas de juego y conjuntos con prefijo de escuadra.
              </p>
            </details>

            <details className={styles.faqItem}>
              <summary>¿Puedo guardar mis apodos favoritos?</summary>
              <p>
                Sí, tocando el icono de corazón (♡) en cualquier tarjeta se guardará el apodo en tu lista personal de favoritos de forma local.
              </p>
            </details>

            <details className={styles.faqItem}>
              <summary>¿Cuál es la diferencia entre un nombre y un apodo?</summary>
              <p>
                El nombre es la denominación genérica de la cuenta, mientras que el apodo se enfoca en la personalidad y el alias competitivo del jugador.
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
