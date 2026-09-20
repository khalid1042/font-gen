import { Metadata } from 'next';
import Link from 'next/link';
import EmojiGenerator from '../../../components/EmojiGenerator/EmojiGenerator';
import styles from '../page.module.css';

export const metadata: Metadata = {
  title: 'Emoji Generator para Instagram: Emojis para Bio y Posts',
  description: 'Diseña una biografía perfecta. Encuentra emojis aesthetic, símbolos de belleza y moda para copiar y pegar en tus fotos y Reels de Instagram.',
  alternates: {
    canonical: '/emojis/instagram',
  },
  openGraph: {
    title: 'Emoji Generator para Instagram',
    description: 'Encuentra emojis aesthetic y combinaciones para destacar en tu bio y publicaciones de Instagram.',
    url: '/emojis/instagram',
  },
};

export default function InstagramEmojisPage() {
  return (
    <div className={styles.main}>
      {/* Breadcrumb */}
      <div className={styles.breadcrumb}>
        <div className="container">
          <nav className={styles.breadcrumbNav} aria-label="Breadcrumb">
            <Link href="/" className={styles.breadcrumbLink}>Inicio</Link>
            <span className={styles.breadcrumbSeparator}>&gt;</span>
            <Link href="/emojis" className={styles.breadcrumbLink}>Emojis</Link>
            <span className={styles.breadcrumbSeparator}>&gt;</span>
            <span aria-current="page">Para Instagram</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.title}>Emoji Generator para Instagram</h1>
          <p className={styles.subtitle}>
            Diseña un perfil visualmente increíble. Encuentra emojis aesthetic para tu biografía, pies de foto y Reels.
          </p>
        </div>
      </section>

      {/* Tool Section */}
      <section className={styles.section}>
        <div className="container">
          <EmojiGenerator platform="instagram" />
        </div>
      </section>

      {/* Article Section */}
      <section className={`${styles.section} ${styles.bgLight}`}>
        <div className="container">
          <article className={styles.article}>
            <h2>Emojis para Instagram</h2>
            <p>
              Instagram es la red social donde la estética visual lo es todo. Tu perfil no solo se compone de fotos y Reels; el texto que utilizas también comunica tu estilo. Con nuestro <strong>Emoji Generator para Instagram</strong>, puedes encontrar exactamente los iconos que armonicen con el <i>vibe</i> de tu cuenta.
            </p>
            <p>
              Tanto si tienes una cuenta personal, un blog de viajes, o un perfil de moda, usar los emojis adecuados te ayudará a crear una imagen de marca más pulida.
            </p>

            <h2>Emojis para la bio de Instagram</h2>
            <p>
              Tu biografía es tu carta de presentación. Tienes 150 caracteres para decirle al mundo quién eres, por lo que cada espacio cuenta. Los emojis actúan como viñetas visuales que organizan la información.
            </p>
            <ul>
              <li><strong>Información de contacto:</strong> 💌 [email]</li>
              <li><strong>Ubicación:</strong> 📍 [Ciudad]</li>
              <li><strong>Profesión o afición:</strong> 📸 Fotografía | ✈️ Viajes</li>
              <li><strong>Enlaces:</strong> 👇 Mi último vídeo</li>
            </ul>

            <h2>Emojis para captions (pies de foto)</h2>
            <p>
              El texto que acompaña a tus fotos (caption) es fundamental para generar <i>engagement</i>. Los emojis ayudan a romper bloques grandes de texto, haciéndolo más fácil de leer.
            </p>
            <p>
              Por ejemplo, si subes una foto de tu café matutino, en lugar de poner solo "Buenos días", puedes añadir ☕ 🥐 ✨ para darle un toque más acogedor. Si es una foto de tu outfit, prueba con 👗 👠 💅.
            </p>

            <h2>Emojis aesthetic para perfiles de Instagram</h2>
            <p>
              Si tu cuenta sigue una paleta de colores específica (tonos pastel, minimalista, oscuro), deberías elegir iconos que combinen con esa paleta.
            </p>
            <p>Ejemplos de combinaciones por estilo:</p>
            <ul>
              <li><strong>Colores cálidos (otoño, café):</strong> 🤎 ☕ 🍂 🧸</li>
              <li><strong>Estilo Minimalista/Limpio:</strong> 🤍 🕊️ ☁️ 🌿</li>
              <li><strong>Estilo Y2K o Girly:</strong> 🎀 💅 💖 🌸</li>
              <li><strong>Estilo Verano/Playa:</strong> 🌊 🥥 ☀️ 🐚</li>
            </ul>

            <h2>Emojis para nombres</h2>
            <p>
              Puedes añadir un símbolo o icono a tu nombre visible (no al @usuario). Esto hace que tu nombre destaque cuando alguien busca tu perfil o cuando dejas un comentario. Utiliza combinaciones sencillas como:
            </p>
            <p>✨ Tu Nombre ✨ o 🌸 Tu Nombre</p>
            <p>Te recomendamos combinar estos emojis con texto generado en nuestro <Link href="/">conversor de letras cursivas</Link> para un efecto aún más elegante.</p>

            <h2>Cómo copiar emojis para Instagram</h2>
            <ol>
              <li>Filtra nuestra herramienta por categorías como "Aesthetic" o "Moda".</li>
              <li>Construye la combinación deseada haciendo clic en varios iconos.</li>
              <li>Haz clic en "Copiar combinación".</li>
              <li>Abre Instagram (en la app o en la web) y pega el resultado en tu bio, pie de foto o comentario.</li>
            </ol>

            <h2>Consejos para crear una bio visual</h2>
            <p>
              El secreto de una bio atractiva es el equilibrio. Evita saturar cada línea con 5 emojis diferentes. Elige uno o dos tonos que combinen con tus fotos destacadas y utiliza los iconos al principio de cada línea a modo de lista. 
            </p>

            <h2>Preguntas frecuentes</h2>
            
            <h3>¿Puedo poner cualquier emoji en mi biografía de Instagram?</h3>
            <p>Sí, Instagram soporta todos los caracteres Unicode estándar. Sin embargo, recuerda que ocupan espacio dentro del límite de 150 caracteres de la bio.</p>
            
            <h3>¿Los emojis cuentan como hashtags?</h3>
            <p>Sí. Puedes incluir un emoji en un hashtag (por ejemplo, #viaje✈️) y las personas podrán buscar contenido agrupado bajo esa etiqueta gráfica.</p>

            <h3>¿Por qué mi bio se ve desordenada al usar emojis?</h3>
            <p>A veces, el espaciado cambia entre la vista móvil y la vista de escritorio. Te recomendamos usar saltos de línea claros y usar los emojis al principio del texto para mantener un margen ordenado.</p>

            <h2>Conclusión</h2>
            <p>
              Un perfil de Instagram bien diseñado requiere atención a los detalles. El texto es tan importante como la fotografía. Utiliza el <strong>Emoji Generator para Instagram</strong> para encontrar los complementos aesthetic perfectos y eleva la presentación de tu marca personal o negocio.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
