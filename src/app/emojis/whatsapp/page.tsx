import { Metadata } from 'next';
import Link from 'next/link';
import EmojiGenerator from '../../../components/EmojiGenerator/EmojiGenerator';
import styles from '../page.module.css';

export const metadata: Metadata = {
  title: 'Emoji Generator para WhatsApp: Emojis para Estados y Mensajes',
  description: 'Encuentra los mejores emojis de amor, familia y humor para tus mensajes, estados y chats de WhatsApp. Copia y pega fácilmente.',
  alternates: {
    canonical: '/emojis/whatsapp',
  },
  openGraph: {
    title: 'Emoji Generator para WhatsApp',
    description: 'Genera y copia emojis bonitos y combinaciones para tus chats y estados de WhatsApp.',
    url: '/emojis/whatsapp',
  },
};

export default function WhatsAppEmojisPage() {
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
            <span aria-current="page">Para WhatsApp</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.title}>Emoji Generator para WhatsApp</h1>
          <p className={styles.subtitle}>
            Exprésate mejor en tus chats. Encuentra emojis de amor, cumpleaños, reacciones y combinaciones divertidas para WhatsApp.
          </p>
        </div>
      </section>

      {/* Tool Section */}
      <section className={styles.section}>
        <div className="container">
          <EmojiGenerator platform="whatsapp" />
        </div>
      </section>

      {/* Article Section */}
      <section className={`${styles.section} ${styles.bgLight}`}>
        <div className="container">
          <article className={styles.article}>
            <h2>Emojis para WhatsApp</h2>
            <p>
              WhatsApp es la principal herramienta de comunicación para conectar con amigos, familiares y parejas. Muchas veces, un simple texto no es suficiente para transmitir el tono de un mensaje. Aquí es donde nuestro <strong>Emoji Generator para WhatsApp</strong> resulta indispensable.
            </p>
            <p>
              En lugar de navegar por el interminable teclado de tu teléfono, puedes buscar rápidamente el icono exacto que necesitas para felicitar un cumpleaños, enviar un mensaje romántico o reaccionar a una noticia en un grupo familiar.
            </p>

            <h2>Emojis para estados de WhatsApp</h2>
            <p>
              Los estados de WhatsApp (Stories) son el lugar perfecto para compartir frases, canciones o momentos de tu día. Acompañar tu texto con una combinación de emojis puede hacer que tu estado sea mucho más llamativo.
            </p>
            <ul>
              <li><strong>Reflexiones o frases inspiradoras:</strong> ☁️ ✨ 🕊️ 🤍</li>
              <li><strong>Viajes y vacaciones:</strong> ✈️ 🏖️ 🌴 ☀️</li>
              <li><strong>De fiesta con amigos:</strong> 🎉 🥂 💃 🔥</li>
            </ul>

            <h2>Emojis de amor y romance</h2>
            <p>
              Si quieres enviarle un mensaje especial a tu pareja, hay muchos más iconos además del clásico corazón rojo. Nuestra herramienta te permite explorar diferentes opciones románticas para que cada mensaje sea único.
            </p>
            <p>
              Combinaciones para mensajes de buenos días o aniversarios:
            </p>
            <ul>
              <li>🥰 💖 💌</li>
              <li>🌹 ✨ 💘</li>
              <li>👩‍❤️‍👨 💍 🥂</li>
            </ul>

            <h2>Emojis para cumpleaños y celebraciones</h2>
            <p>
              Felicitar a alguien por WhatsApp es una tradición. No envíes solo un "Feliz cumpleaños", acompáñalo con alegría.
            </p>
            <p>
              Busca en nuestro generador palabras como "fiesta" o "cumpleaños" y copia rápidamente: 🎂 🎉 🎁 🎈 🎊
            </p>

            <h2>Emojis para amigos y familia</h2>
            <p>
              Los grupos de WhatsApp pueden ser caóticos. A veces, la mejor forma de responder es con un emoji que resuma exactamente cómo te sientes. Las caras de humor, los gestos de aprobación o las reacciones exageradas son perfectas para estos chats.
            </p>
            <ul>
              <li><strong>Para una broma en el grupo:</strong> 😂 💀 😭</li>
              <li><strong>Para dar el visto bueno:</strong> 👍 💯 ✅</li>
              <li><strong>Para los grupos familiares:</strong> 🙏 ❤️ 👨‍👩‍👧</li>
            </ul>

            <h2>Cómo copiar y pegar emojis en WhatsApp</h2>
            <p>
              Para usar los iconos en tu teléfono o en WhatsApp Web, sigue estos pasos:
            </p>
            <ol>
              <li>Selecciona los emojis que necesites haciendo clic sobre ellos. Aparecerán en la caja de combinación.</li>
              <li>Pulsa el botón "Copiar combinación".</li>
              <li>Abre tu conversación o tu sección de estados en WhatsApp.</li>
              <li>Mantén pulsado (o haz clic derecho) y selecciona "Pegar".</li>
            </ol>

            <h2>Preguntas frecuentes</h2>
            
            <h3>¿Todos los emojis se ven igual en WhatsApp?</h3>
            <p>WhatsApp utiliza su propio diseño de emojis en la aplicación para Android, mientras que en iOS (iPhone) muestra los nativos del sistema de Apple. Esto significa que el mismo emoji puede tener ligeras variaciones visuales dependiendo del teléfono de quien lo reciba, pero el significado será el mismo.</p>
            
            <h3>¿Puedo poner emojis en el nombre de mis contactos?</h3>
            <p>¡Sí! Muchas personas utilizan iconos para organizar su agenda o para añadir cariño al nombre de un amigo o pareja (ej. "Mamá ❤️"). Solo tienes que pegar el emoji al editar el contacto.</p>

            <h3>¿Existen emojis secretos para WhatsApp?</h3>
            <p>No existen iconos "secretos" per se, pero a menudo se aprueban nuevos caracteres Unicode que tardan un tiempo en llegar al teclado del móvil. Usar nuestro generador puede ayudarte a encontrar caracteres que no sabías que existían.</p>

            <h2>Conclusión</h2>
            <p>
              Darle color y emoción a tus conversaciones nunca fue tan fácil. Ya sea para un estado, un mensaje cariñoso o una reacción divertida en un grupo, el <strong>Emoji Generator para WhatsApp</strong> te ayuda a encontrar la expresión gráfica perfecta en segundos.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
