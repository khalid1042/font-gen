import type { Metadata } from 'next';
import Link from 'next/link';
import NameFontsExplorer from './NameFontsExplorer';
import styles from './page.module.css';
import RelatedLinks from '../../../components/RelatedLinks/RelatedLinks';

export const metadata: Metadata = {
  title: 'Letras para Nombres | Nombres Bonitos para Instagram',
  description: 'Crea nombres bonitos y originales para Instagram con letras elegantes, cursivas, decorativas y otros estilos. Genera tu nombre y cópialo fácilmente.',
  alternates: {
    canonical: '/letras-para-instagram/letras-para-nombres/',
  },
  openGraph: {
    title: 'Letras para Nombres | Nombres Bonitos para Instagram',
    description: 'Crea nombres bonitos y originales para Instagram con letras elegantes, cursivas, decorativas y otros estilos. Genera tu nombre y cópialo fácilmente.',
    url: '/letras-para-instagram/letras-para-nombres/',
    type: 'website',
    locale: 'es_ES',
    siteName: 'Letras Bonitas',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Letras para Nombres | Nombres Bonitos para Instagram',
    description: 'Crea nombres bonitos y originales para Instagram con letras elegantes, cursivas, decorativas y otros estilos. Genera tu nombre y cópialo fácilmente.',
  },
};

export default function LetrasParaNombresPage() {
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
        name: 'Letras para Nombres',
        item: 'https://letrasbonitas.com/letras-para-instagram/letras-para-nombres/',
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
            <li aria-current="page">Letras para Nombres</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>Letras para Nombres de Instagram</h1>
            <p className={styles.subtitle}>
              Convierte tu nombre en diferentes estilos de letras bonitas, elegantes y originales. Elige tu estilo favorito, cópialo y úsalo en tu perfil.
            </p>
            <div className={styles.heroActions}>
              <a href="#herramienta-nombres" className={styles.ctaBtn}>
                Crear mi nombre
              </a>
              <a href="#ideas-nombres" className={styles.secondaryCtaBtn}>
                Ver estilos
              </a>
            </div>
          </div>
        </section>

        {/* Main Interactive Tool */}
        <section className={styles.section}>
          <NameFontsExplorer />
        </section>

        {/* Display Name vs Username Article */}
        <section className={`${styles.section} ${styles.bgLight}`}>
          <div className={styles.article}>
            <h2>Nombre de Instagram y nombre de usuario: ¿cuál es la diferencia?</h2>
            <p>
              Al personalizar tu perfil de Instagram, es fundamental entender la distinción técnica entre el <strong>Nombre visible</strong> de la cuenta y el <strong>Nombre de usuario</strong> (@handle):
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Nombre visible de perfil (Display Name):</strong> Es la etiqueta que aparece resaltada en negrita en la parte superior de tu biografía. En este espacio <strong>sí puedes usar caracteres Unicode estilizados</strong> (como 𝓚𝓱𝓪𝓵𝓲𝓭, 𝐒𝐨𝐟𝐢𝐚 o ☾ 𝙰𝚕𝚎𝚡𝚊𝚗𝚍𝚎𝚛), así como símbolos decorativos y emojis.
              </li>
              <li>
                <strong>Nombre de usuario (Username / @handle):</strong> Es la dirección única y permanente de tu cuenta (por ejemplo, <em>@usuario</em>). Las políticas de la plataforma imponen reglas estrictas para este campo: solo permite caracteres alfabéticos estándar sin acentos, números, puntos y guiones bajos. Los caracteres Unicode ornamentados <strong>no son compatibles</strong> como nombre de usuario.
              </li>
            </ol>
            <p>
              Si deseas un perfil estético y fácil de encontrar en los buscadores, mantén tu nombre de usuario estándar y aprovecha nuestro generador de <Link href="/letras-para-instagram/">letras para Instagram</Link> o <Link href="/letras-para-instagram/letras-para-bio/">letras para bio</Link> en la sección de Nombre visible de tu biografía.
            </p>
          </div>
        </section>

        {/* Step-by-Step Guide */}
        <section className={styles.section}>
          <div className={styles.article}>
            <h2>¿Cómo poner letras bonitas en tu nombre de Instagram?</h2>
            <p>
              Personalizar tu nombre de perfil toma menos de un minuto desde cualquier teléfono móvil o computadora:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Paso 1:</strong> Escribe tu nombre o apodo en la casilla de entrada del generador superior.
              </li>
              <li>
                <strong>Paso 2:</strong> Explora la lista de variantes tipográficas (elegante, cursiva, negrita, gótica, decorativa) o añade marcos con el decorador.
              </li>
              <li>
                <strong>Paso 3:</strong> Pulsa el botón <strong>Copiar</strong> al lado de tu diseño preferido.
              </li>
              <li>
                <strong>Paso 4:</strong> Abre la aplicación de Instagram en tu smartphone.
              </li>
              <li>
                <strong>Paso 5:</strong> Ve a tu perfil personal y pulsa en la opción <strong>Editar perfil</strong>.
              </li>
              <li>
                <strong>Paso 6:</strong> Pega el nombre estilizado en el campo <strong>Nombre</strong> y guarda los cambios.
              </li>
            </ol>
            <p>
              <em>Nota: La interfaz visual de la aplicación de Instagram puede actualizarse con el tiempo, pero la opción para modificar el Nombre visible se encuentra de forma permanente en la edición del perfil.</em>
            </p>
          </div>
        </section>

        {/* How Unicode Works */}
        <section className={`${styles.section} ${styles.bgLight}`}>
          <div className={styles.article}>
            <h2>¿Cómo funcionan estas letras para nombres?</h2>
            <p>
              Aunque a menudo se les llama &quot;fuentes de Instagram&quot;, en realidad no se trata de archivos de fuentes tipográficas que se descargan o instalan. Todas las variantes son caracteres alfanuméricos especiales definidos en el estándar internacional <strong>Unicode</strong>.
            </p>
            <p>
              Gracias a Unicode, los teléfonos móviles y computadoras pueden reconocer miles de símbolos gráficos universales como si fueran texto común. Cuando escribes tu nombre en nuestro <Link href="/conversor-de-letras/">conversor de letras</Link>, el sistema mapea cada letra a su versión equivalente en alfabetos de fantasía (como la caligrafía script de <Link href="/letras-cursivas/">letras cursivas</Link> o las letras cuadradas y encerradas en círculos).
            </p>
            <p>
              Nuestro conversor respeta íntegramente la ortografía en español. Los acentos (<strong>á, é, í, ó, ú, ü</strong>), la letra <strong>ñ / Ñ</strong>, los números, símbolos y emojis son procesados de forma nativa. Si una variante Unicode específica no posee una representación gráfica para un carácter determinado (por ejemplo, una letra con tilde), la herramienta conserva la letra original para que tu nombre siga siendo legible.
            </p>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <div className={styles.noticeBox}>
              <h3>Nota de compatibilidad</h3>
              <p>
                Los caracteres especiales Unicode se muestran correctamente en la inmensa mayoría de dispositivos modernos. Sin embargo, su diseño o renderizado final puede sufrir ligeras variaciones según el sistema operativo (iOS, Android, Windows) o la versión de la app. Si un carácter no dispone de una variante equivalente, mantendremos la letra original.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Preguntas frecuentes</h2>
          <div className={styles.faqList}>
            <details className={styles.faqItem}>
              <summary>¿Cómo puedo poner letras bonitas en mi nombre de Instagram?</summary>
              <p>
                Escribe tu nombre en la herramienta interactiva de esta página, elige el estilo que más te guste y pulsa &quot;Copiar&quot;. Después abre Instagram, dirígete a &quot;Editar perfil&quot; y pega el texto en el campo &quot;Nombre&quot;.
              </p>
            </details>

            <details className={styles.faqItem}>
              <summary>¿Cómo puedo crear un nombre estilizado?</summary>
              <p>
                Puedes usar nuestro generador principal para probar más de 12 variantes tipográficas o combinar tu nombre con marcos estéticos (corazones, estrellas, corchetes) usando nuestro Decorador de Nombres.
              </p>
            </details>

            <details className={styles.faqItem}>
              <summary>¿Puedo copiar y pegar estos nombres desde el móvil?</summary>
              <p>
                ¡Sí! Toda la herramienta está optimizada para pantallas táctiles de smartphones y tablets. El botón de copia guarda el resultado directamente en el portapapeles de tu teléfono.
              </p>
            </details>

            <details className={styles.faqItem}>
              <summary>¿Estas letras son fuentes reales instalables?</summary>
              <p>
                No. Son caracteres especiales pertenecientes al estándar de texto universal Unicode. No requieren instalar aplicaciones adicionales ni archivos tipográficos.
              </p>
            </details>

            <details className={styles.faqItem}>
              <summary>¿Puedo usar estas letras en mi nombre de Instagram?</summary>
              <p>
                Sí, puedes usarlas libremente en el campo de &quot;Nombre visible&quot; de tu biografía de Instagram para destacar tu perfil.
              </p>
            </details>

            <details className={styles.faqItem}>
              <summary>¿Funcionan estas letras en el nombre de usuario (@handle)?</summary>
              <p>
                No. Instagram solo permite letras estándar sin adornos, números, puntos y guiones bajos en el nombre de usuario único. Los caracteres tipográficos decorativos solo son válidos en el Nombre visible de perfil.
              </p>
            </details>

            <details className={styles.faqItem}>
              <summary>¿Por qué algunas letras no cambian?</summary>
              <p>
                En el alfabeto en español, letras con tilde o caracteres como la &quot;ñ&quot; a veces no tienen una representación en ciertos alfabetos de fantasía de Unicode. En esos casos conservamos la letra original para mantener la ortografía.
              </p>
            </details>

            <details className={styles.faqItem}>
              <summary>¿Puedo decorar mi nombre con símbolos?</summary>
              <p>
                Por supuesto. En nuestra sección de Decorador de Nombres puedes añadir estrellas, corazones, separadores y marcos estéticos a tu nombre de forma instantánea.
              </p>
            </details>

            <details className={styles.faqItem}>
              <summary>¿Funcionan las letras cursivas en Instagram?</summary>
              <p>
                Sí, las letras caligráficas y de estilo cursiva funcionan de manera excelente. También puedes explorar nuestro catálogo en <Link href="/letras-cursivas/">letras cursivas</Link> o en <Link href="/conversor-de-letras/letras-para-copiar-y-pegar/">letras para copiar y pegar</Link>.
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
