import Link from 'next/link';
import Logo from '../Logo/Logo';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.topSection}>
          <div className={styles.brand}>
            <Logo />
            <p className={styles.description}>
              Generador de letras bonitas, estilos de texto y letras especiales para copiar y pegar fácilmente en tus redes sociales.
            </p>
          </div>
          
          <div className={styles.linksSection}>
            <h3 className={styles.linkTitle}>Herramientas</h3>
            <ul className={styles.linkList}>
              <li><Link href="/">Generador Principal</Link></li>
              {/* Future links */}
              <li><Link href="#categorias">Categorías de Letras</Link></li>
            </ul>
          </div>
        </div>
        
        <div className={styles.bottomSection}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} Letras Bonitas. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
