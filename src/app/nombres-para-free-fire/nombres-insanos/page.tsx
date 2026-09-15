import type { Metadata } from 'next';
import Link from 'next/link';
import InsaneNamesExplorer from './InsaneNamesExplorer';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Nombres Insanos para Free Fire | Nombres Salvajes y Pro',
  description: 'Descubre nombres insanos para Free Fire con estilos salvajes, oscuros, agresivos e intimidantes. Encuentra tu nickname, cópialo y personalízalo fácilmente.',
  alternates: {
    canonical: '/nombres-para-free-fire/nombres-insanos/',
  },
  openGraph: {
    title: 'Nombres Insanos para Free Fire | Nombres Salvajes y Pro',
    description: 'Descubre nombres insanos para Free Fire con estilos salvajes, oscuros, agresivos e intimidantes. Encuentra tu nickname, cópialo y personalízalo fácilmente.',
    url: '/nombres-para-free-fire/nombres-insanos/',
    type: 'website',
    locale: 'es_ES',
    siteName: 'Letras Bonitas',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nombres Insanos para Free Fire | Nombres Salvajes y Pro',
    description: 'Descubre nombres insanos para Free Fire con estilos salvajes, oscuros, agresivos e intimidantes. Encuentra tu nickname, cópialo y personalízalo fácilmente.',
  },
};

export default function NombresInsanosPage() {
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
        name: 'Nombres Insanos',
        item: 'https://letrasbonitas.com/nombres-para-free-fire/nombres-insanos/',
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
            <li aria-current="page">Nombres Insanos</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>
              <span className={styles.heroBadgeDot}></span>
              <span className={styles.heroBadgeText}>Nombres Insanos & Salvajes • Pro Studio</span>
            </div>
            <h1 className={styles.title}>
              Nombres <span className={styles.titleGradient}>Insanos</span> para Free Fire
            </h1>
            <p className={styles.subtitle}>
              Encuentra nombres insanos para Free Fire con estilos salvajes, oscuros, agresivos e intimidantes. Explora ideas únicas, elige tu favorito y cópialo fácilmente.
            </p>
            <div className={styles.heroStats}>
              <div className={styles.heroStatItem}>
                <span className={styles.heroStatIcon}>🔥</span>
                <span>Estilos Insanos</span>
              </div>
              <div className={styles.heroStatItem}>
                <span className={styles.heroStatIcon}>⚡</span>
                <span>1 Clic para Copiar</span>
              </div>
              <div className={styles.heroStatItem}>
                <span className={styles.heroStatIcon}>⚔️</span>
                <span>Glifos Salvajes</span>
              </div>
            </div>
            <div className={styles.heroActions}>
              <Link href="/nombres-para-free-fire/" className={styles.ctaBtn}>
                ⚡ Crear mi nombre
              </Link>
              <a href="#coleccion-insana" className={styles.secondaryCtaBtn}>
                🔥 Ver colección insana
              </a>
            </div>
          </div>
        </section>

        {/* Main Interactive Insane Names Library Component */}
        <section className={styles.section}>
          <InsaneNamesExplorer />
        </section>

        {/* Categorized Educational Sections */}
        <section className={`${styles.section} ${styles.bgLight}`}>
          <div className={styles.article}>
            <h2>Nombres Salvajes para Free Fire</h2>
            <p>
              Los nicknames salvajes proyectan una personalidad audaz e indomable en el campo de batalla. Nombres como <code>SavageX</code>, <code>WildKing</code>, <code>Ruthless</code> o <code>MadWolf</code> son ideales para jugadores agresivos que buscan dominar desde el primer minuto.
            </p>

            <h2 style={{ marginTop: '2.5rem' }}>Nombres Agresivos para Free Fire</h2>
            <p>
              Diseñados para competidores que no dan tregua, los nombres agresivos emplean términos de combate e impacto como <code>Rage</code>, <code>Destroyer</code>, <code>Fury</code> o <code>WarX</code>.
            </p>

            <h2 style={{ marginTop: '2.5rem' }}>Nombres Intimidantes</h2>
            <p>
              Apodos como <code>NoMercy</code>, <code>FearKing</code>, <code>DarkBoss</code> y <code>FinalBoss</code> imponen respeto visual inmediato en la tabla de clasificación antes de que comience el enfrentamiento.
            </p>

            <h2 style={{ marginTop: '2.5rem' }}>Nombres Oscuros</h2>
            <p>
              Para quienes prefieren una estética misteriosa y nocturna, nombres como <code>DarkSoul</code>, <code>Shadow</code>, <code>BlackGhost</code> y <code>NightReaper</code> combinan elegancia y sigilo.
            </p>

            <h2 style={{ marginTop: '2.5rem' }}>Nombres Demoníacos</h2>
            <p>
              Inspirados en la fantasía oscura, nombres como <code>DemonX</code>, <code>HellShade</code>, <code>DarkDemon</code> e <code>Inferno</code> destacan por su estética imponente sin glorificar conductas inapropiadas.
            </p>

            <h2 style={{ marginTop: '2.5rem' }}>Nombres de Guerreros</h2>
            <p>
              Nicknames legendarios basados en luchadores como <code>WarLord</code>, <code>SamuraiX</code>, <code>ShadowKnight</code> e <code>IronWarrior</code> transmiten honor y disciplina competitiva.
            </p>

            <h2 style={{ marginTop: '2.5rem' }}>Nombres Cortos e Insanos</h2>
            <p>
              Para una presencia limpia y memorable en pantallas móviles, los nombres de 3 a 4 letras como <code>RAGE</code>, <code>VOID</code>, <code>VEX</code>, <code>XENO</code>, <code>FURY</code> y <code>NOX</code> ofrecen máxima claridad sin saturar la pantalla. Si deseas personalizar cualquiera de estos términos con tus propios símbolos, usa nuestro <Link href="/nombres-para-free-fire/">generador de nombres para Free Fire</Link>.
            </p>
          </div>
        </section>

        {/* Educational Content */}
        <section className={styles.section}>
          <div className={styles.article}>
            <h2>¿Qué son los nombres insanos para Free Fire?</h2>
            <p>
              En la comunidad de videojuegos competitivos, el término <strong>&quot;insano&quot;</strong> se utiliza popularmente para describir nicknames y estilos gráficos que transmiten un tono audaz, intimidante, poderoso y competitivo. Se refiere exclusivamente a la actitud e identidad visual del apodo gamer en el juego.
            </p>

            <h2>¿Cómo elegir un buen nombre insano?</h2>
            <p>
              Sigue estas recomendaciones para encontrar un nickname insano memorable:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>1. Elige un nombre fácil de recordar:</strong> Selecciona palabras de poder que tus amigos y rivales identifiquen rápidamente.
              </li>
              <li>
                <strong>2. Mantén la legibilidad:</strong> No satures tu apodo con demasiados símbolos ilegibles.
              </li>
              <li>
                <strong>3. Usa símbolos con intención:</strong> Añade adornos laterales (como <code>亗</code> o <code>乂</code>) para enmarcar el texto.
              </li>
              <li>
                <strong>4. Evita decoraciones excesivas:</strong> Mantén el equilibrio visual entre las letras y los adornos.
              </li>
              <li>
                <strong>5. Adapta el nombre a tu rol:</strong> Si juegas como francotirador o rusheador, elige un término que encaje con tu estilo.
              </li>
              <li>
                <strong>6. Comprueba la compatibilidad:</strong> Revisa el resultado en pantalla antes de gastar tus diamantes o tarjeta de cambio.
              </li>
              <li>
                <strong>7. Evita términos ofensivos:</strong> Respeta las normas comunitarias del juego.
              </li>
              <li>
                <strong>8. Conserva una versión sencilla de respaldo:</strong> Guarda una variante minimalista en caso de que alguna actualización restrinja símbolos complejos.
              </li>
            </ol>
          </div>
        </section>

        {/* Step-by-Step Copying Guide */}
        <section className={`${styles.section} ${styles.bgLight}`}>
          <div className={styles.article}>
            <h2>¿Cómo copiar un nombre insano para Free Fire?</h2>
            <ol className={styles.orderedList}>
              <li>
                <strong>Paso 1:</strong> Explora nuestra colección insana o usa el buscador por palabras clave.
              </li>
              <li>
                <strong>Paso 2:</strong> Pulsa el botón <strong>Copiar</strong> al lado de tu nickname favorito.
              </li>
              <li>
                <strong>Paso 3:</strong> Abre la aplicación de Free Fire en tu smartphone.
              </li>
              <li>
                <strong>Paso 4:</strong> Entra en tu perfil de jugador y selecciona la casilla de cambio de apodo.
              </li>
              <li>
                <strong>Paso 5:</strong> Pega el nombre copiado y guarda los cambios si es compatible.
              </li>
            </ol>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <div className={styles.noticeBox}>
              <h3>Nota de compatibilidad e independencia</h3>
              <p>
                Algunos nombres utilizan caracteres Unicode y símbolos especiales. Su disponibilidad puede depender de las reglas y compatibilidad del juego, dispositivo o versión. Si un nombre no funciona, prueba una versión más sencilla. Este sitio web es un portal utilitario independiente sin afiliación oficial a Garena ni Free Fire.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Preguntas frecuentes</h2>
          <div className={styles.faqList}>
            <details className={styles.faqItem}>
              <summary>¿Qué son los nombres insanos para Free Fire?</summary>
              <p>
                Son nicknames estilizados con símbolos y letras especiales que proyectan una estética competitiva, intimidante y poderosa en el perfil del jugador.
              </p>
            </details>

            <details className={styles.faqItem}>
              <summary>¿Dónde puedo encontrar nombres insanos?</summary>
              <p>
                En esta página dispones de un catálogo completo clasificado por categorías (salvajes, agresivos, demoníacos, oscuros) listo para buscar y copiar.
              </p>
            </details>

            <details className={styles.faqItem}>
              <summary>¿Puedo copiar estos nombres?</summary>
              <p>
                ¡Sí! Cada tarjeta tiene un botón &quot;Copiar&quot; que guarda el nickname insano directamente en el portapapeles de tu teléfono.
              </p>
            </details>

            <details className={styles.faqItem}>
              <summary>¿Puedo usar símbolos en un nombre insano?</summary>
              <p>
                Por supuesto. Marcos como <code>亗</code>, <code>乂</code> o <code>〆</code> son ampliamente utilizados para dar un toque pro a los nicknames.
              </p>
            </details>

            <details className={styles.faqItem}>
              <summary>¿Por qué algunos símbolos no funcionan?</summary>
              <p>
                Algunas versiones del juego o teclados antiguos restringen ciertos códigos Unicode. Si un símbolo es rechazado, prueba una versión con adornos más simples.
              </p>
            </details>

            <details className={styles.faqItem}>
              <summary>¿Puedo crear un nombre insano personalizado?</summary>
              <p>
                Sí. Si deseas personalizar un apodo con tu propia palabra o iniciales, entra en nuestro <Link href="/nombres-para-free-fire/">generador de nombres para Free Fire</Link>.
              </p>
            </details>

            <details className={styles.faqItem}>
              <summary>¿Hay nombres insanos para dúos y escuadras?</summary>
              <p>
                Sí, en nuestra sección de dúos y escuadras encontrarás pares coordinados y nombres con prefijo de clan.
              </p>
            </details>

            <details className={styles.faqItem}>
              <summary>¿Los nombres con letras especiales funcionan en todos los dispositivos?</summary>
              <p>
                La mayoría son compatibles con smartphones Android e iOS actuales, aunque la apariencia visual gráfica del glifo puede variar ligeramente entre dispositivos.
              </p>
            </details>
          </div>
        </section>

        {/* Related Content Cards */}
        <section className={`${styles.section} ${styles.bgLight}`}>
          <h2 className={styles.sectionTitle}>También te puede interesar</h2>
          <div className="grid grid-4">
            <div className="card">
              <h3>Generador de Nombres para Free Fire</h3>
              <p>Accede a la herramienta principal para personalizar totalmente tu apodo gamer con alfabetos y adornos.</p>
              <Link href="/nombres-para-free-fire/" className="card-link">
                Ir al generador principal →
              </Link>
            </div>

            <div className="card">
              <h3>Letras para Nombres</h3>
              <p>Crea tipografías bonitas y variantes elegantes específicas para nombres de perfil.</p>
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

            <div className="card">
              <h3>Letras Cursivas</h3>
              <p>Genera fuentes caligráficas y manuscritas para tus proyectos decorativos.</p>
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
