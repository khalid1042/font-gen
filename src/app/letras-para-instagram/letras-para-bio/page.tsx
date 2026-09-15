import type { Metadata } from 'next';
import Link from 'next/link';
import BioFontsExplorer from './BioFontsExplorer';
import styles from './page.module.css';
import RelatedLinks from '../../../components/RelatedLinks/RelatedLinks';

export const metadata: Metadata = {
  title: 'Letras para Bio de Instagram | Textos Bonitos para Copiar',
  description: 'Crea letras para tu bio de Instagram con estilos bonitos, elegantes y originales. Genera tu texto, cópialo y pégalo fácilmente en tu perfil.',
  alternates: {
    canonical: '/letras-para-instagram/letras-para-bio/',
  },
  openGraph: {
    title: 'Letras para Bio de Instagram | Textos Bonitos para Copiar',
    description: 'Crea letras para tu bio de Instagram con estilos bonitos, elegantes y originales. Genera tu texto, cópialo y pégalo fácilmente en tu perfil.',
    url: '/letras-para-instagram/letras-para-bio/',
    type: 'website',
    locale: 'es_ES',
    siteName: 'Letras Bonitas',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Letras para Bio de Instagram | Textos Bonitos para Copiar',
    description: 'Crea letras para tu bio de Instagram con estilos bonitos, elegantes y originales. Genera tu texto, cópialo y pégalo fácilmente en tu perfil.',
  },
};

export default function LetrasParaBioPage() {
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
        name: 'Letras para Bio',
        item: 'https://letrasbonitas.com/letras-para-instagram/letras-para-bio/',
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
            <li aria-current="page">Letras para Bio</li>
          </ol>
        </nav>

        {/* Compact Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>Letras para Bio de Instagram</h1>
            <p className={styles.subtitle}>
              Crea textos bonitos, elegantes y originales para tu bio de Instagram. Escribe tu texto, elige un estilo y cópialo para pegarlo directamente en tu perfil.
            </p>
            <div className={styles.heroActions}>
              <a href="#herramienta-bio" className={styles.ctaBtn}>
                Crear mi bio
              </a>
              <a href="#ideas-bio" className={styles.secondaryCtaBtn}>
                Ver ejemplos
              </a>
            </div>
          </div>
        </section>

        {/* Main Interactive Tool */}
        <section className={styles.section}>
          <BioFontsExplorer />
        </section>

        {/* Educational Content & Use Cases */}
        <section className={`${styles.section} ${styles.bgLight}`}>
          <div className={styles.article}>
            <h2>¿Qué puedes poner en tu bio de Instagram?</h2>
            <p>
              La biografía de tu perfil es la primera impresión que tienen tus visitantes. Para destacar con elegancia, puedes personalizar diferentes partes de tu descripción utilizando nuestro{' '}
              <Link href="/conversor-de-letras/">conversor de letras</Link> o combinando varios estilos Unicode con íconos y separadores visuales.
            </p>
            <p>
              Elementos recomendados para estructurar tu bio:
            </p>
            <ul>
              <li>
                <strong>Nombre visible:</strong> Destaca tu nombre propio o marca usando una tipografía bonita desde nuestro generador de <Link href="/letras-para-instagram/">letras para Instagram</Link>.
              </li>
              <li>
                <strong>Profesión o área temática:</strong> Especifica a qué te dedicas (por ejemplo: <em>Diseñador gráfico | Fotografía</em>) con tipografías claras.
              </li>
              <li>
                <strong>Descripción personal o pasiones:</strong> Expresa lo que te apasiona o el objetivo de tu cuenta en una frase breve y con estilo.
              </li>
              <li>
                <strong>Intereses y hobbies:</strong> Comparte tus afinidades principales acompañadas de emojis acordes a tu personalidad.
              </li>
              <li>
                <strong>Frases célebres o motivacionales:</strong> Usa nuestro generador para transformar citas célebres en <Link href="/conversor-de-letras/texto-con-estilos/">texto con estilos</Link> o en fuentes elegantes.
              </li>
              <li>
                <strong>Llamada a la acción (CTA):</strong> Indica a tus visitantes qué hacer a continuación (por ejemplo: <em>Mira mi último proyecto 👇</em>).
              </li>
              <li>
                <strong>Separadores y símbolos:</strong> Ordena la información usando puntos (·), barras (|) o líneas decorativas para mantener todo visualmente equilibrado.
              </li>
            </ul>
          </div>
        </section>

        {/* Step-by-Step Guide */}
        <section className={styles.section}>
          <div className={styles.article}>
            <h2>¿Cómo poner letras bonitas en la bio de Instagram?</h2>
            <p>
              Personalizar la tipografía de tu perfil es un proceso rápido que puedes realizar directamente desde tu teléfono móvil o desde tu navegador web:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Paso 1:</strong> Escribe tu frase, nombre o descripción en la casilla del generador interactivo superior.
              </li>
              <li>
                <strong>Paso 2:</strong> Elige el estilo de letra que más encaje con la estética de tu perfil (elegante, negrita, cursiva, gótica, etc.).
              </li>
              <li>
                <strong>Paso 3:</strong> Pulsa el botón <strong>Copiar</strong> en la tarjeta del estilo elegido.
              </li>
              <li>
                <strong>Paso 4:</strong> Abre la aplicación de Instagram y entra en la pestaña de tu perfil.
              </li>
              <li>
                <strong>Paso 5:</strong> Selecciona el botón <strong>Editar perfil</strong>.
              </li>
              <li>
                <strong>Paso 6:</strong> Pega el texto estilizado en el campo correspondiente (Bio o Nombre) y guarda los cambios.
              </li>
            </ol>
            <p>
              <em>Nota: La interfaz exacta de Instagram puede variar según las actualizaciones de la aplicación, pero la sección para modificar la biografía se mantiene en la opción de edición del perfil.</em>
            </p>
          </div>
        </section>

        {/* How Unicode Works */}
        <section className={`${styles.section} ${styles.bgLight}`}>
          <div className={styles.article}>
            <h2>¿Cómo funcionan las letras para la bio?</h2>
            <p>
              Muchas herramientas web se refieren a estas tipografías como &quot;fuentes de Instagram&quot;, pero técnicamente no son archivos de fuentes (.ttf o .otf) que se instalan en el teléfono. En realidad, son combinaciones de símbolos pertenecientes al estándar internacional <strong>Unicode</strong>.
            </p>
            <p>
              El sistema Unicode asigna un código numérico único a miles de glifos y caracteres gráficos. Esto permite que al escribir texto normal, nuestra herramienta lo convierta en caracteres alfanuméricos especiales (como letras en negrillas, cursivas de estilo manuscrito o letras encerradas en círculos) que la mayoría de aplicaciones móviles pueden interpretar y mostrar en pantalla.
            </p>
            <p>
              Para garantizar que tus textos en español se lean a la perfección, gestionamos cuidadosamente caracteres con acentos (<strong>á, é, í, ó, ú, ü</strong>), signos de puntuación (<strong>¿, ¡</strong>), la letra <strong>ñ / Ñ</strong>, números y emojis. Si un carácter no posee una variante equivalente en el estilo seleccionado, conservamos el carácter original para que tu frase mantenga todo su sentido.
            </p>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <div className={styles.noticeBox}>
              <h3>Nota de compatibilidad</h3>
              <p>
                Algunos estilos utilizan caracteres Unicode avanzados. Su apariencia final puede variar levemente según el sistema operativo (iOS, Android, Windows) o la versión de la aplicación de Instagram. Si un dispositivo antiguo no reconoce algún símbolo específico, conservaremos la letra original sin alterar el texto.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Preguntas frecuentes</h2>
          <div className={styles.faqList}>
            <details className={styles.faqItem}>
              <summary>¿Cómo puedo poner letras bonitas en mi bio de Instagram?</summary>
              <p>
                Solo necesitas escribir tu texto en la herramienta interactiva de esta página, seleccionar la tipografía que prefieras y pulsar &quot;Copiar&quot;. Después, entra en tu perfil de Instagram, presiona &quot;Editar perfil&quot; y pega el texto en la casilla de tu biografía.
              </p>
            </details>

            <details className={styles.faqItem}>
              <summary>¿Cómo puedo cambiar las letras de mi bio?</summary>
              <p>
                Puedes cambiar el estilo cuantas veces quieras. Solo vuelve a generar una nueva combinación de texto o <Link href="/conversor-de-letras/letras-para-copiar-y-pegar/">letras para copiar y pegar</Link>, reemplaza la descripción en la edición de tu perfil y guarda los cambios.
              </p>
            </details>

            <details className={styles.faqItem}>
              <summary>¿Estas letras son fuentes oficiales de Instagram?</summary>
              <p>
                No. Son caracteres del estándar Unicode universal que simulan diferentes diseños tipográficos. Instagram los reconoce como texto estándar, por lo que puedes utilizarlos libremente en tu perfil sin necesidad de instalar aplicaciones ni alterar la app.
              </p>
            </details>

            <details className={styles.faqItem}>
              <summary>¿Puedo copiar y pegar estas letras desde el móvil?</summary>
              <p>
                ¡Sí! Toda la página está optimizada para smartphones y tablets. Los botones de copia funcionan con un solo toque directamente al portapapeles de tu teléfono.
              </p>
            </details>

            <details className={styles.faqItem}>
              <summary>¿Puedo usar símbolos en mi bio?</summary>
              <p>
                Por supuesto. En nuestra sección de símbolos para la bio encontrarás estrellas, corazones, separadores y flechas de formato estético que puedes copiar y pegar junto a tus frases para darles un toque creativo.
              </p>
            </details>

            <details className={styles.faqItem}>
              <summary>¿Por qué algunas letras no cambian?</summary>
              <p>
                En el alfabeto español, ciertas letras con tilde o la letra &quot;ñ&quot; no siempre tienen un equivalente directo en todos los alfabetos de fantasía de Unicode. En esos casos, mantenemos la letra original para preservar la ortografía de tus palabras.
              </p>
            </details>

            <details className={styles.faqItem}>
              <summary>¿Funcionan las letras cursivas en Instagram?</summary>
              <p>
                Sí, los estilos de estilo script y caligráfico son plenamente compatibles. Si deseas explorar más opciones de este estilo, puedes visitar nuestra sección dedicada a <Link href="/letras-cursivas/">letras cursivas</Link>.
              </p>
            </details>

            <details className={styles.faqItem}>
              <summary>¿Puedo usar estas letras en mi nombre de Instagram?</summary>
              <p>
                Sí, puedes usar letras con estilos en el campo de &quot;Nombre&quot; de tu perfil. Sin embargo, no se recomienda aplicarlas en el &quot;Nombre de usuario&quot; (@usuario), ya que Instagram solo permite letras alfanuméricas estándar, números, puntos y guiones bajos en el handle oficial.
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
