import Link from 'next/link';
import Generator from '../components/Generator/Generator';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className={styles.title}>
              Generador de <span className="text-gradient">Letras Bonitas</span>
            </h1>
            <p className={styles.subtitle}>
              Genera letras bonitas, estilos de texto y letras especiales para copiar y pegar fácilmente en tus perfiles, biografías y mensajes.
            </p>
          </div>
        </div>
      </section>

      {/* Main Generator Tool */}
      <section className={styles.generatorSection}>
        <div className="container">
          <Generator />
        </div>
      </section>

      {/* Style Categories (Placeholder links for future pages) */}
      <section id="categorias" className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Explora Más Estilos</h2>
          <div className={styles.categoryGrid}>
            <div className={styles.categoryCard}>
              <h3>Letras Cursivas</h3>
              <p>Textos elegantes y conectados</p>
            </div>
            <div className={styles.categoryCard}>
              <h3>Letras Góticas</h3>
              <p>Estilo medieval y oscuro</p>
            </div>
            <div className={styles.categoryCard}>
              <h3>Letras Decorativas</h3>
              <p>Llamativas y diferentes</p>
            </div>
            <div className={styles.categoryCard}>
              <h3>Letras Especiales</h3>
              <p>Símbolos y caracteres únicos</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="como-funciona" className={`${styles.section} ${styles.bgLight}`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>¿Cómo funciona?</h2>
          <div className={styles.stepsGrid}>
            <div className={styles.step}>
              <div className={styles.stepIcon}>1</div>
              <h3>Escribe</h3>
              <p>Introduce el texto que quieres transformar en el recuadro superior.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepIcon}>2</div>
              <h3>Elige</h3>
              <p>Selecciona tu estilo favorito entre las decenas de opciones generadas automáticamente.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepIcon}>3</div>
              <h3>Copia</h3>
              <p>Haz clic en "Copiar" y pégalo en Instagram, WhatsApp o donde prefieras.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle}>¿Dónde usar estas letras?</h2>
          <div className={styles.tagsContainer}>
            <span className={styles.tag}>Instagram</span>
            <span className={styles.tag}>TikTok</span>
            <span className={styles.tag}>Facebook</span>
            <span className={styles.tag}>WhatsApp</span>
            <span className={styles.tag}>YouTube</span>
            <span className={styles.tag}>Discord</span>
            <span className={styles.tag}>Nombres en Juegos</span>
            <span className={styles.tag}>Biografías</span>
          </div>
        </div>
      </section>

      {/* SEO Article */}
      <section className={`${styles.section} ${styles.bgLight}`}>
        <div className="container">
          <article className={styles.article}>
            <h2>Letras bonitas para copiar y pegar: estilos, ejemplos y consejos</h2>
            <p>¿Tu nombre, bio o frase se ve demasiado simple en Instagram, TikTok o un juego? Encontrar un estilo atractivo puede ser frustrante cuando algunas letras no se copian bien, la ñ cambia o el texto aparece diferente después de pegarlo. Además, cada plataforma puede interpretar los caracteres de una manera distinta.</p>
            <p>Por eso, elegir un estilo no consiste únicamente en buscar el diseño más llamativo. Primero conviene revisar la legibilidad, la compatibilidad y el uso que tendrá el texto. En esta guía encontrarás estilos para copiar y pegar, ejemplos prácticos y consejos para crear texto decorativo sin perder claridad.</p>

            <h2>¿Qué son las letras bonitas?</h2>
            <p>Las letras bonitas son caracteres y estilos de texto que permiten dar una apariencia diferente a un nombre, palabra o frase. Muchos generadores utilizan caracteres Unicode con formas visuales distintas a las letras normales.</p>
            <p>A diferencia de una fuente instalada en un ordenador, estos caracteres se pueden copiar como texto. Sin embargo, su apariencia puede variar según la aplicación, el dispositivo y las fuentes disponibles.</p>
            <p>Por ejemplo, una palabra sencilla como:</p>
            <p><strong>Hola</strong></p>
            <p>puede transformarse en diferentes estilos:</p>
            <p>
              <strong>𝓗𝓸𝓵𝓪</strong><br />
              <strong>𝐇𝐨𝐥𝐚</strong><br />
              <strong>𝙷𝚘𝚕𝚊</strong><br />
              <strong>𝕳𝖔𝖑𝖆</strong><br />
              <strong>Ｈｏｌａ</strong>
            </p>
            <p>De este modo, puedes elegir una apariencia que encaje con tu perfil, nombre o publicación.</p>

            <h2>Tipos de estilos para copiar y pegar</h2>
            <p>Cada estilo tiene un propósito diferente. Algunos destacan por su elegancia, mientras que otros funcionan mejor para nombres de usuario o contenido gaming.</p>
            
            <div className={styles.tableResponsive}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Estilo</th>
                    <th>Uso recomendado</th>
                    <th>Ejemplo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Cursiva</td>
                    <td>Bios, nombres y frases</td>
                    <td>𝓛𝓮𝓽𝓻𝓪𝓼</td>
                  </tr>
                  <tr>
                    <td>Negrita</td>
                    <td>Títulos y palabras destacadas</td>
                    <td>𝗟𝗲𝘁𝗿𝗮𝘀</td>
                  </tr>
                  <tr>
                    <td>Gótica</td>
                    <td>Gaming y nombres llamativos</td>
                    <td>𝕷𝖊𝖙𝖗𝖆𝖘</td>
                  </tr>
                  <tr>
                    <td>Monoespaciada</td>
                    <td>Diseños simples y técnicos</td>
                    <td>𝙻𝚎𝚝𝗿𝗮𝚜</td>
                  </tr>
                  <tr>
                    <td>Ancha</td>
                    <td>Perfiles y publicaciones</td>
                    <td>Ｌｅｔｒａｓ</td>
                  </tr>
                  <tr>
                    <td>Decorativa</td>
                    <td>Bios y contenido creativo</td>
                    <td>Ⓛⓔⓣⓡⓐⓢ</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <p>Sin embargo, el estilo más decorativo no siempre es el más práctico. Para una frase larga, una variante sencilla suele ser más fácil de leer.</p>

            <h2>Letras bonitas para copiar y pegar</h2>
            <p>Una de las principales ventajas de un generador de texto decorativo es la rapidez. No necesitas instalar una fuente ni utilizar un programa de diseño para probar diferentes opciones.</p>
            <p>Primero, escribe tu palabra o frase. Después, revisa los estilos disponibles y selecciona el que mejor represente tu contenido. Finalmente, copia el resultado y pégalo donde quieras utilizarlo.</p>
            <p>Por ejemplo:</p>
            <p>
              <strong>Nombre:</strong><br />𝓚𝓱𝓪𝓵𝓲𝓭
            </p>
            <p>
              <strong>Frase:</strong><br />✨ 𝓥𝓲𝓿𝓮 𝓽𝓾 𝓶𝓮𝓳𝓸𝓻 𝓿𝓲𝓭𝓪 ✨
            </p>
            <p>
              <strong>Perfil:</strong><br />♡ 𝗠𝗶 𝗺𝘂𝗻𝗱𝗼, 𝗺𝗶𝘀 𝗿𝗲𝗴𝗹𝗮𝘀 ♡
            </p>
            <p>Así puedes obtener un resultado listo para copiar sin cambiar manualmente cada carácter.</p>

            <h2>Abecedario, números y caracteres españoles</h2>
            <p>Un buen generador no debería centrarse únicamente en las letras A-Z. También es importante considerar números, símbolos y caracteres utilizados en español.</p>
            <p>Por ejemplo, una frase puede contener:</p>
            <p><strong>Á É Í Ó Ú Ñ Ü</strong></p>
            <p>El problema aparece cuando un conjunto de caracteres estilizados no incluye una versión específica para una letra española. En ese caso, una palabra puede mostrar algunas letras decoradas y otras normales.</p>
            <p>Por esta razón, revisa siempre palabras que contengan <strong>ñ</strong>, tildes o diéresis antes de publicarlas. Una comprobación rápida puede evitar que el nombre final tenga un aspecto inconsistente.</p>
            <p>También puedes combinar letras con números y símbolos para crear nombres más originales.</p>

            <h2>Letras bonitas para Instagram y redes sociales</h2>
            <p>Instagram, TikTok, Facebook, Discord y otras plataformas permiten utilizar determinados caracteres Unicode en algunas áreas. No obstante, las reglas no son iguales en todas ellas.</p>
            <p>Por ejemplo, un texto decorativo puede utilizarse en una bio o publicación, mientras que el campo de nombre de usuario <code>@usuario</code> puede tener restricciones diferentes.</p>
            <p>Además, un carácter que se muestra correctamente en un teléfono puede verse diferente en otro dispositivo. Por eso, conviene comprobar el resultado después de pegarlo.</p>
            <p>Para una bio, prioriza estilos fáciles de leer. En cambio, para una palabra corta o un nombre destacado puedes utilizar una variante más decorativa.</p>

            <h2>Símbolos bonitos para copiar y pegar</h2>
            <p>Las letras pueden combinarse con símbolos para crear nombres, separadores y diseños visuales.</p>
            <p>Algunos ejemplos son:</p>
            <p>
              <strong>Corazones:</strong> ♡ ♥ ღ<br />
              <strong>Estrellas:</strong> ★ ☆ ✦ ✧<br />
              <strong>Flores:</strong> ❀ ✿ ❁<br />
              <strong>Flechas:</strong> → ➜ ➤<br />
              <strong>Lunas:</strong> ☾ ☽<br />
              <strong>Separadores:</strong> ─── ✦ ───
            </p>
            <p>Por ejemplo:</p>
            <p><strong>♡ 𝓛𝓮𝓽𝓻𝓪𝓼 𝓑𝓸𝓷𝓲𝓽𝓪𝓼 ♡</strong></p>
            <p>También puedes combinar símbolos con nombres para perfiles, juegos y publicaciones. Para encontrar más opciones, una página dedicada a símbolos permite mantener este contenido separado del generador principal.</p>

            <h2>¿Por qué algunas letras no funcionan?</h2>
            <p>No todos los caracteres decorativos tienen la misma compatibilidad. Una aplicación puede admitir determinados caracteres mientras otra los muestra de forma diferente.</p>
            <p>Además, algunos alfabetos Unicode no contienen equivalentes estilizados para todos los caracteres españoles. Por eso, palabras con <strong>ñ</strong>, <strong>á</strong>, <strong>é</strong>, <strong>í</strong>, <strong>ó</strong> o <strong>ú</strong> necesitan una revisión adicional.</p>
            <p>Otro problema aparece cuando un juego o plataforma limita los caracteres permitidos. En esos casos, un nombre que funciona en una red social puede ser rechazado en un videojuego.</p>
            <p>Si el texto aparece como un cuadro vacío, un símbolo extraño o una letra diferente, prueba otro estilo más compatible.</p>

            <h2>Unicode, fuentes y lettering: ¿son lo mismo?</h2>
            <p>No exactamente.</p>
            <p>Una <strong>fuente</strong> cambia la apariencia de los caracteres mediante un diseño tipográfico. Normalmente, la fuente debe estar disponible en el sistema o en la aplicación que muestra el texto.</p>
            <p>Los caracteres <strong>Unicode</strong>, en cambio, son caracteres codificados dentro de un estándar que permite representar texto en diferentes sistemas. Algunos generadores aprovechan determinados caracteres Unicode para crear estilos visuales.</p>
            <p>El <strong>lettering</strong> es otra disciplina. Se centra en crear letras como elementos gráficos y puede utilizarse en logotipos, ilustraciones, carteles y diseños.</p>
            <p>Por lo tanto, cuando copias un estilo desde un generador de texto, no necesariamente estás cambiando la fuente del dispositivo.</p>

            <h2>¿Son fáciles de leer?</h2>
            <p>La decoración debe complementar el mensaje, no ocultarlo.</p>
            <p>Un estilo muy elaborado puede resultar atractivo para un nombre corto. Sin embargo, una frase extensa puede ser difícil de leer si utiliza demasiados caracteres especiales.</p>
            <p>También hay una cuestión de accesibilidad. Algunos caracteres Unicode estilizados pueden ser interpretados de manera diferente por tecnologías de asistencia. Por ello, evita utilizar texto excesivamente decorativo para información esencial.</p>
            <p>En general, utiliza estilos sencillos para mensajes importantes y reserva los diseños más llamativos para nombres, títulos cortos o elementos decorativos.</p>

            <h2>¿Cómo elegir el estilo adecuado?</h2>
            <p>La elección depende principalmente del objetivo.</p>
            <ul>
              <li><strong>Para Instagram:</strong> utiliza cursiva, negrita o estilos aesthetic fáciles de leer.</li>
              <li><strong>Para videojuegos:</strong> prueba primero el nombre dentro del juego y evita caracteres que puedan ser rechazados.</li>
              <li><strong>Para Discord:</strong> combina un estilo legible con símbolos pequeños.</li>
              <li><strong>Para una bio:</strong> utiliza una o dos variantes para mantener una estructura clara.</li>
              <li><strong>Para una frase:</strong> elige un diseño que conserve la lectura natural.</li>
            </ul>
            <p>De esta manera, el resultado no solo será bonito, sino también útil.</p>

            <h2>Crea tu texto con LetrasBonitas</h2>
            <p>Con LetrasBonitas puedes explorar diferentes estilos de caracteres y transformar texto normal en opciones decorativas para copiar y pegar.</p>
            <p>Primero, introduce tu texto. A continuación, compara las variantes disponibles y busca la que mejor encaje con tu objetivo. Después, copia el resultado y comprueba cómo aparece en la plataforma donde quieres utilizarlo.</p>
            <p>Antes de publicar, revisa especialmente la <strong>ñ</strong>, las vocales con tilde, los números y los símbolos. Asimismo, comprueba la apariencia final desde el dispositivo o aplicación donde se mostrará.</p>
            <p>El objetivo no es utilizar la mayor cantidad posible de decoración. La mejor combinación es aquella que mantiene el equilibrio entre apariencia, claridad y compatibilidad.</p>
            
            <h2>Preguntas frecuentes sobre letras bonitas</h2>
            
            <h3>¿Qué son las letras bonitas?</h3>
            <p>Son estilos de texto y caracteres especiales que permiten cambiar la apariencia visual de palabras, nombres y frases. Muchos generadores utilizan caracteres Unicode para producir estas variantes.</p>
            
            <h3>¿Puedo copiar y pegar letras bonitas?</h3>
            <p>Sí. Muchos estilos están diseñados para copiarse como texto y pegarse en perfiles, mensajes, publicaciones o determinadas aplicaciones.</p>
            
            <h3>¿Funcionan las letras bonitas en Instagram?</h3>
            <p>Muchos caracteres Unicode pueden utilizarse en diferentes áreas de Instagram, pero no todos los caracteres tienen la misma compatibilidad. Además, el campo <code>@usuario</code> tiene restricciones diferentes.</p>
            
            <h3>¿Por qué la ñ aparece diferente?</h3>
            <p>La razón puede ser que el estilo Unicode utilizado no tenga un carácter equivalente para <strong>ñ</strong>. Algo similar puede ocurrir con las vocales acentuadas. Probar otro estilo suele solucionar el problema.</p>
            
            <h3>¿Las letras bonitas son fuentes?</h3>
            <p>No siempre. En muchos casos son caracteres Unicode con una apariencia estilizada. Una fuente tipográfica funciona de otra manera porque modifica la representación visual mediante un diseño de fuente.</p>
            
            <h3>¿Puedo usar letras bonitas para nombres de juegos?</h3>
            <p>Depende del videojuego. Algunos aceptan determinados caracteres Unicode y otros limitan los símbolos permitidos. Siempre conviene probar el nombre antes de utilizarlo definitivamente.</p>

            <h2>Conclusión</h2>
            <p>Un buen texto decorativo debe ser más que llamativo. También necesita conservar la claridad y funcionar correctamente en el lugar donde quieres utilizarlo. Por eso, antes de publicar, revisa el estilo, la compatibilidad, la ñ, las tildes y los símbolos.</p>
            <p>LetrasBonitas facilita este proceso al permitirte explorar diferentes opciones, comparar estilos y copiar el resultado. Prueba varias alternativas, elige la que encaje con tu nombre o frase y utiliza la decoración de forma sencilla y efectiva.</p>
          </article>
        </div>
      </section>
    </main>
  );
}
