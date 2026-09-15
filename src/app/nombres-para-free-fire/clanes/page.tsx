import type { Metadata } from 'next';
import Link from 'next/link';
import ClanNamesExplorer from './ClanNamesExplorer';
import styles from './page.module.css';
import RelatedLinks from '../../../components/RelatedLinks/RelatedLinks';

export const metadata: Metadata = {
  title: 'Nombres para Clanes de Free Fire | Clanes Pro y Originales',
  description: 'Encuentra nombres para clanes de Free Fire originales, pro, chidos, oscuros y competitivos. Explora ideas, crea un clan tag y copia tu nombre fácilmente.',
  alternates: {
    canonical: '/nombres-para-free-fire/clanes/',
  },
  openGraph: {
    title: 'Nombres para Clanes de Free Fire | Clanes Pro y Originales',
    description: 'Encuentra nombres para clanes de Free Fire originales, pro, chidos, oscuros y competitivos. Explora ideas, crea un clan tag y copia tu nombre fácilmente.',
    url: '/nombres-para-free-fire/clanes/',
    type: 'website',
    locale: 'es_ES',
    siteName: 'Letras Bonitas',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nombres para Clanes de Free Fire | Clanes Pro y Originales',
    description: 'Encuentra nombres para clanes de Free Fire originales, pro, chidos, oscuros y competitivos. Explora ideas, crea un clan tag y copia tu nombre fácilmente.',
  },
};

export default function ClanesPage() {
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
        name: 'Clanes',
        item: 'https://letrasbonitas.com/nombres-para-free-fire/clanes/',
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
              <Link href="/nombres-para-free-fire/">Nombres para Free Fire</Link>
            </li>
            <li aria-current="page">Clanes</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>
              <span className={styles.heroBadgeDot}></span>
              <span className={styles.heroBadgeText}>Nombres para Clanes & Tags Pro • Escuadras</span>
            </div>
            <h1 className={styles.title}>
              Nombres para <span className={styles.titleGradient}>Clanes de Free Fire</span>
            </h1>
            <p className={styles.subtitle}>
              Encuentra nombres para clanes de Free Fire originales, pro, chidos, oscuros y competitivos. Explora ideas para tu equipo, crea un clan tag y copia tu nombre fácilmente.
            </p>
            <div className={styles.heroStats}>
              <div className={styles.heroStatItem}>
                <span className={styles.heroStatIcon}>🛡️</span>
                <span>Clanes Pro & Tags</span>
              </div>
              <div className={styles.heroStatItem}>
                <span className={styles.heroStatIcon}>⚡</span>
                <span>Copia en 1 Clic</span>
              </div>
              <div className={styles.heroStatItem}>
                <span className={styles.heroStatIcon}>👥</span>
                <span>Identidad de Escuadra</span>
              </div>
            </div>
            <div className={styles.heroActions}>
              <Link href="/nombres-para-free-fire/" className={styles.ctaBtn}>
                ⚡ Crear nombre de clan
              </Link>
              <a href="#coleccion-clanes" className={styles.secondaryCtaBtn}>
                🛡️ Explorar clanes
              </a>
            </div>
          </div>
        </section>

        {/* Main Interactive Clan Names Library Component */}
        <section className={styles.section}>
          <ClanNamesExplorer />
        </section>

        {/* Categorized Educational Content */}
        <section className={`${styles.section} ${styles.bgLight}`}>
          <div className={styles.article}>
            <h2>Nombres Pro para Clanes</h2>
            <p>
              Los clanes competitivos de alto nivel requieren un nombre profesional que inspire respeto en torneos y salas privadas. Denominaciones como <code>Elite Force</code>, <code>Prime Legion</code>, <code>Victory Squad</code>, <code>Apex Team</code> o <code>Titan Esports</code> proyectan seriedad y disciplina táctica.
            </p>

            <h2 style={{ marginTop: '2.5rem' }}>Nombres Chidos para Clanes</h2>
            <p>
              Para grupos de amigos que buscan un estilo visual moderno sin perder frescura, nombres como <code>Nova Crew</code>, <code>Shadow Crew</code>, <code>Fire Nation</code>, <code>Urban Kings</code> y <code>Galaxy Force</code> brindan un impacto estético excelente.
            </p>

            <h2 style={{ marginTop: '2.5rem' }}>Nombres Originales para Clanes</h2>
            <p>
              Si deseas destacar de las abreviaturas tradicionales, combinaciones creativas como <code>Zero Gravity</code>, <code>Pixel Raiders</code>, <code>Neon Wolves</code>, <code>Lunar Force</code> y <code>Echo Storm</code> aseguran una marca única.
            </p>

            <h2 style={{ marginTop: '2.5rem' }}>Nombres Poderosos para Clanes</h2>
            <p>
              Para comunicar dominio y fuerza colectiva en el campo de batalla, nombres como <code>Iron Legion</code>, <code>Titan Force</code>, <code>Dragon Guard</code>, <code>Royal Warriors</code> y <code>Vanguard Elite</code> son opciones de gran presencia.
            </p>

            <h2 style={{ marginTop: '2.5rem' }}>Nombres Oscuros para Clanes</h2>
            <p>
              Con una temática misteriosa y nocturna, agrupaciones como <code>Dark Legion</code>, <code>Black Wolves</code>, <code>Night Raiders</code>, <code>Shadow Order</code> y <code>Phantom Force</code> imponen temor visual en la lista de eliminaciones.
            </p>

            <h2 style={{ marginTop: '2.5rem' }}>Nombres de Guerreros</h2>
            <p>
              Basados en conceptos de batalla legendaria y honor, nombres como <code>War Titans</code>, <code>Iron Warriors</code>, <code>Shadow Knights</code> y <code>Battle Lords</code> reflejan el espíritu de escuadra.
            </p>

            <h2 style={{ marginTop: '2.5rem' }}>Nombres Elegantes</h2>
            <p>
              Identidades distinguidas como <code>Royal Elite</code>, <code>Noble Force</code>, <code>Prestige Crew</code> e <code>Imperial Clan</code>.
            </p>

            <h2 style={{ marginTop: '2.5rem' }}>Nombres Divertidos</h2>
            <p>
              Para clanes informales enfocados en el entretenimiento, opciones simpáticas como <code>Lag Legends</code>, <code>Noob Nation</code>, <code>Ping Masters</code>, <code>Bot Hunters</code> y <code>WiFi Warriors</code> garantizan diversión en cada partida.
            </p>

            <h2 style={{ marginTop: '2.5rem' }}>Nombres Cortos y Clan Tags</h2>
            <p>
              Tags breves de 3 o 4 letras como <code>VEX</code>, <code>NFX</code>, <code>ZEN</code>, <code>NOVA</code>, <code>AXIS</code> y <code>RAGE</code> facilitan que los integrantes incluyan las siglas del clan antes de su apodo individual. Si deseas personalizar el nombre de un jugador individual dentro del grupo, visita nuestro <Link href="/nombres-para-free-fire/apodos/">catálogo de apodos para Free Fire</Link>.
            </p>
          </div>
        </section>

        {/* Identity Guide & Educational Sections */}
        <section className={styles.section}>
          <div className={styles.article}>
            <h2>¿Cómo crear una identidad completa para tu clan?</h2>
            <p>
              La creación de una marca de clan sólida no se limita únicamente al nombre principal de la agrupación, sino a la armonía visual de toda la escuadra. La estructura recomendada incluye:
            </p>
            <ul>
              <li>
                <strong>1. Nombre del Clan:</strong> Denominación completa del equipo (ej. <em>Nova Force</em>).
              </li>
              <li>
                <strong>2. Clan Tag:</strong> Siglas cortas de 2 a 4 letras (ej. <em>NFX</em>).
              </li>
              <li>
                <strong>3. Prefijo de Miembros:</strong> Marco ornamental para las siglas (ej. <code>亗NFX亗</code>).
              </li>
              <li>
                <strong>4. Nombres de los Jugadores:</strong> Unificación del prefijo con el nick individual (ej. <code>亗NFX亗 Shadow</code>, <code>亗NFX亗 Ghost</code>).
              </li>
            </ul>

            <h2>¿Cómo elegir un buen nombre para un clan de Free Fire?</h2>
            <ol className={styles.orderedList}>
              <li>
                <strong>1. Mantén la legibilidad:</strong> Elige un nombre comprensible para todos los miembros y narradores de torneos.
              </li>
              <li>
                <strong>2. Consenso de escuadra:</strong> Asegúrate de que todos los integrantes apoyen la identidad seleccionada.
              </li>
              <li>
                <strong>3. Diseña un Clan Tag reconocible:</strong> Abreviaturas limpias facilitan el reconocimiento en la tabla de clasificaciones.
              </li>
              <li>
                <strong>4. Evita el exceso de símbolos:</strong> No sobrecargues el nombre con adornos ilegibles.
              </li>
              <li>
                <strong>5. Evita términos ofensivos:</strong> Cumple con las políticas de nombres de Garena para evitar la disolución del clan.
              </li>
              <li>
                <strong>6. Comprueba límites de caracteres:</strong> Los límites y caracteres admitidos pueden depender de las reglas y versión actuales del juego.
              </li>
              <li>
                <strong>7. Ten una versión en texto plano:</strong> Guarda una variante sin caracteres especiales para registros oficiales de torneos.
              </li>
            </ol>

            <h2>¿Qué son los nombres de clan con letras especiales?</h2>
            <p>
              Son marcas de equipo que incorporan glifos alfanuméricos Unicode y adornos como <code>亗</code>, <code>乂</code> o <code>『』</code>. No requieren fuentes adicionales instaladas, aunque su visualización precisa depende de la compatibilidad del dispositivo.
            </p>
          </div>
        </section>

        {/* Step-by-Step Copying Guide & Notice */}
        <section className={`${styles.section} ${styles.bgLight}`}>
          <div className={styles.article}>
            <h2>¿Cómo copiar y configurar un nombre de clan?</h2>
            <ol className={styles.orderedList}>
              <li>
                <strong>Paso 1:</strong> Selecciona una idea de clan o usa nuestro creador de identidad de escuadra.
              </li>
              <li>
                <strong>Paso 2:</strong> Haz clic en el botón <strong>Copiar</strong> o <strong>Copiar todos</strong> para guardar los nombres.
              </li>
              <li>
                <strong>Paso 3:</strong> Abre Free Fire y ve a la pestaña de administración de tu Clan o Escuadra.
              </li>
              <li>
                <strong>Paso 4:</strong> Pega el nombre principal o reparte los nicknames formateados a tus compañeros.
              </li>
            </ol>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <div className={styles.noticeBox}>
              <h3>Aviso de compatibilidad e independencia</h3>
              <p>
                Algunos nombres utilizan caracteres Unicode y símbolos especiales. Su disponibilidad puede depender de las reglas y compatibilidad del juego, dispositivo o versión. Si un nombre no funciona, prueba una versión más sencilla. Este sitio web es una herramienta utilitaria independiente sin vinculación oficial con Garena o Free Fire.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Preguntas frecuentes</h2>
          <div className={styles.faqList}>
            <details className={styles.faqItem}>
              <summary>¿Dónde puedo encontrar nombres para clanes de Free Fire?</summary>
              <p>
                En esta página dispones de un catálogo completo con herramientas para generar nombres de clanes, tags, prefijos e identidades de escuadra listos para copiar.
              </p>
            </details>

            <details className={styles.faqItem}>
              <summary>¿Cómo puedo crear un nombre para mi clan?</summary>
              <p>
                Puedes usar nuestro generador aleatorio de clanes o acceder a la herramienta completa en el <Link href="/nombres-para-free-fire/">generador de nombres para Free Fire</Link>.
              </p>
            </details>

            <details className={styles.faqItem}>
              <summary>¿Qué es un clan tag?</summary>
              <p>
                Es una abreviatura o siglas cortas (generalmente de 2 a 4 letras) que representan al clan y se anteceden al apodo individual de cada jugador.
              </p>
            </details>

            <details className={styles.faqItem}>
              <summary>¿Puedo crear un prefijo para todos los miembros?</summary>
              <p>
                Sí, con nuestro generador de prefijos puedes enmarcar las siglas de tu clan con símbolos como <code>亗NFX亗</code> o <code>『NFX』</code>.
              </p>
            </details>

            <details className={styles.faqItem}>
              <summary>¿Puedo copiar los nombres de los clanes?</summary>
              <p>
                ¡Sí! Todos los nombres, tags y conjuntos de escuadra incluyen botones de copia rápida.
              </p>
            </details>

            <details className={styles.faqItem}>
              <summary>¿Puedo usar símbolos especiales?</summary>
              <p>
                Sí, siempre que sean compatibles con la versión actual del juego en tu dispositivo.
              </p>
            </details>

            <details className={styles.faqItem}>
              <summary>¿Por qué algunos símbolos no funcionan?</summary>
              <p>
                Algunos sistemas operativos antiguos o parches del juego restringen ciertos glifos. Si un símbolo da error, utiliza una variante en texto plano.
              </p>
            </details>

            <details className={styles.faqItem}>
              <summary>¿Puedo crear nombres para todos los miembros del clan?</summary>
              <p>
                Sí, con nuestro creador de identidad de escuadra puedes ingresar hasta 4 jugadores y generar la lista completa formateada con un solo clic.
              </p>
            </details>

            <details className={styles.faqItem}>
              <summary>¿Cómo puedo hacer que todos los nombres del clan combinen?</summary>
              <p>
                Utilizando el mismo prefijo enmarcado (ej. <code>亗NFX亗</code>) al inicio del apodo de cada integrante.
              </p>
            </details>

            <details className={styles.faqItem}>
              <summary>¿Cuál es la diferencia entre un nombre de clan y un apodo?</summary>
              <p>
                El nombre de clan identifica a todo el grupo o equipo competitivo, mientras que el apodo pertenece exclusivamente al jugador individual.
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
