import Link from 'next/link';
import Logo from '../Logo/Logo';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.topSection}>
          
          <div className={styles.brandColumn}>
            <Logo />
            <p className={styles.description}>
              Letras Bonitas es el generador número uno para crear tipografías, fuentes estéticas, nombres para juegos y letras especiales listas para copiar y pegar. Destaca en redes sociales con textos únicos.
            </p>
          </div>
          
          <div className={styles.linksColumn}>
            <h3 className={styles.linkTitle}>Letras y Fuentes</h3>
            <ul className={styles.linkList}>
              <li><Link href="/conversor-de-letras/">Conversor de Letras</Link></li>
              <li><Link href="/letras-cursivas/">Letras Cursivas</Link></li>
              <li><Link href="/letras-para-instagram/">Letras para Instagram</Link></li>
              <li><Link href="/conversor-de-letras/letras-para-copiar-y-pegar/">Copiar y Pegar</Link></li>
              <li><Link href="/letras-cursivas/abecedario-cursivo/">Abecedario Cursivo</Link></li>
              <li><Link href="/letras-para-instagram/simbolos-para-instagram/">Símbolos y Adornos</Link></li>
            </ul>
          </div>

          <div className={styles.linksColumn}>
            <h3 className={styles.linkTitle}>Nombres Gamer</h3>
            <ul className={styles.linkList}>
              <li><Link href="/nombres-para-juegos/">Nombres para Juegos</Link></li>
              <li><Link href="/nombres-para-free-fire/">Nombres para Free Fire</Link></li>
              <li><Link href="/nombres-para-juegos/nicks/">Generador de Nicks</Link></li>
              <li><Link href="/nombres-para-free-fire/nombres-insanos/">Nombres Insanos</Link></li>
              <li><Link href="/nombres-para-free-fire/clanes/">Nombres para Clanes</Link></li>
              <li><Link href="/nombres-para-juegos/apodos/">Apodos Pro</Link></li>
            </ul>
          </div>

          <div className={styles.linksColumn}>
            <h3 className={styles.linkTitle}>Enlaces Útiles</h3>
            <ul className={styles.linkList}>
              <li><Link href="/">Inicio / Generador Principal</Link></li>
              <li><Link href="/mapa-del-sitio/">Mapa del Sitio</Link></li>
            </ul>
          </div>

        </div>
        
        <div className={styles.bottomSection}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} Letras Bonitas. Todos los derechos reservados. | Diseñado para destacar.
          </p>
        </div>
      </div>
    </footer>
  );
}
