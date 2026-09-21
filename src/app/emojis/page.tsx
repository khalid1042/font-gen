import { Metadata } from 'next';
import Link from 'next/link';
import EmojiGenerator from '../../components/EmojiGenerator/EmojiGenerator';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Emoji Generator: Emojis Bonitos para Copiar y Pegar',
  description: 'Encuentra y genera emojis bonitos y aesthetic para copiar y pegar en TikTok, WhatsApp, Instagram, Twitter/X y YouTube. Crea combinaciones únicas.',
  alternates: {
    canonical: '/emojis',
  },
  openGraph: {
    title: 'Emoji Generator: Emojis Bonitos para Copiar y Pegar',
    description: 'Encuentra emojis aesthetic, combinaciones y símbolos para tus redes sociales.',
    url: '/emojis',
  },
};

export default function EmojisHubPage() {
  return (
    <div className={styles.main}>
      {/* Breadcrumb */}
      <div className={styles.breadcrumb}>
        <div className="container">
          <nav className={styles.breadcrumbNav} aria-label="Breadcrumb">
            <Link href="/" className={styles.breadcrumbLink}>Inicio</Link>
            <span className={styles.breadcrumbSeparator}>&gt;</span>
            <span aria-current="page">Emojis</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.title}>Emoji Generator</h1>
          <p className={styles.subtitle}>
            Encuentra emojis bonitos, aesthetic y combinaciones perfectas para copiar y pegar en tus redes sociales favoritas.
          </p>
        </div>
      </section>

      {/* Tool Section */}
      <section className={styles.section}>
        <div className="container">
          <EmojiGenerator />
        </div>
      </section>

      {/* Article Section */}
      <section className={`${styles.section} ${styles.bgLight}`}>
        <div className="container">
          <article className={styles.article}>
            <h2>Emojis para copiar y pegar</h2>
            <p>
              ¿Buscas la manera perfecta de expresar tus emociones en línea? Nuestro <strong>Emoji Generator</strong> te permite explorar cientos de emojis bonitos, desde caras divertidas hasta opciones aesthetic, listos para copiar y pegar.
            </p>
            <p>
              En lugar de buscar en el teclado de tu móvil, aquí puedes escribir una palabra clave y encontrar rápidamente lo que necesitas. Además, puedes crear combinaciones únicas para destacar en cualquier plataforma.
            </p>

            <h2>Combinaciones de emojis aesthetic</h2>
            <p>
              Los emojis aesthetic se han vuelto esenciales para decorar biografías y publicaciones. Estas combinaciones mezclan colores pastel, símbolos de naturaleza y elementos mágicos.
            </p>
            <ul>
              <li><strong>Soft Girl:</strong> 🌸 🦋 ✨ 🎀</li>
              <li><strong>Dark Academia:</strong> ☕ 🤎 🕯️ 📜</li>
              <li><strong>Y2K:</strong> 💖 💿 🦋 💅</li>
              <li><strong>Minimalista:</strong> ☁️ 🤍 🕊️ ✨</li>
            </ul>
            <p>
              Puedes utilizar la herramienta de arriba para armar tus propias secuencias y copiarlas con un solo clic.
            </p>

            <h2>Emojis para redes sociales</h2>
            <p>
              Cada red social tiene su propio estilo. Mientras que en Instagram triunfan las composiciones ordenadas y los tonos neutros, en TikTok predominan las expresiones virales y el humor.
            </p>
            <div className={styles.platformLinksGrid}>
              <Link href="/emojis/tiktok" className={styles.platformCard}>
                <span className={styles.platformIcon}>🎵</span>
                <span className={styles.platformName}>TikTok</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Bios, captions y comentarios virales</span>
              </Link>
              <Link href="/emojis/whatsapp" className={styles.platformCard}>
                <span className={styles.platformIcon}>💬</span>
                <span className={styles.platformName}>WhatsApp</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Estados, mensajes y grupos</span>
              </Link>
              <Link href="/emojis/instagram" className={styles.platformCard}>
                <span className={styles.platformIcon}>📸</span>
                <span className={styles.platformName}>Instagram</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Biografías aesthetic y descripciones</span>
              </Link>
              <Link href="/emojis/twitter" className={styles.platformCard}>
                <span className={styles.platformIcon}>🐦</span>
                <span className={styles.platformName}>Twitter/X</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Respuestas, hilos y memes</span>
              </Link>
              <Link href="/emojis/youtube" className={styles.platformCard}>
                <span className={styles.platformIcon}>▶️</span>
                <span className={styles.platformName}>YouTube</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Títulos llamativos y canales gaming</span>
              </Link>
            </div>

            <h2>¿Cómo usar el generador de emojis?</h2>
            <p>
              Usar nuestra herramienta es muy sencillo. Solo tienes que seguir estos pasos:
            </p>
            <ol>
              <li>Utiliza la barra de búsqueda para encontrar iconos específicos, como "amor", "fuego" o "gato".</li>
              <li>Filtra por categorías si quieres inspirarte con opciones de naturaleza, gaming o moda.</li>
              <li>Haz clic en un emoji para añadirlo a tu combinación.</li>
              <li>Cuando termines, pulsa el botón "Copiar combinación" y pégalo donde quieras.</li>
            </ol>

            <h2>Diferencia entre emojis y símbolos</h2>
            <p>
              Es común confundir los emojis con los símbolos. Los emojis son pictogramas coloridos que los dispositivos interpretan gráficamente (como ❤️ o 😂). Los símbolos suelen ser caracteres tipográficos monocromáticos (como ♡ o ✧). Si buscas caracteres decorativos para mezclar con texto, te recomendamos visitar nuestra sección de <Link href="/letras-para-instagram/simbolos-para-instagram">símbolos para copiar y pegar</Link>.
            </p>

            <h2>Preguntas frecuentes</h2>
            <h3>¿Es gratis usar este generador de emojis?</h3>
            <p>Sí, la herramienta es totalmente gratuita y no requiere registro.</p>

            <h3>¿Por qué algunos emojis se ven diferentes en mi teléfono?</h3>
            <p>El diseño de un emoji depende del sistema operativo (iOS, Android, Windows) y de la aplicación que estés usando. Aunque el significado es el mismo, el dibujo puede variar ligeramente.</p>

            <h3>¿Puedo combinar emojis con letras bonitas?</h3>
            <p>¡Por supuesto! Muchos usuarios utilizan nuestro <Link href="/">generador de letras bonitas</Link> para crear un nombre original y luego le añaden emojis aesthetic para darle el toque final.</p>

            <h2>Conclusión</h2>
            <p>
              Tener a mano un buen catálogo de emojis bonitos te permite mejorar tus perfiles y comunicarte mejor. Explora las distintas categorías, guarda tus favoritos y no dudes en probar combinaciones nuevas para destacar en TikTok, Instagram y WhatsApp.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
