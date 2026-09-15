import Link from 'next/link';
import type { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Mapa del Sitio | Letras Bonitas',
  description: 'Encuentra todas las páginas, herramientas de generador de letras, fuentes cursivas, y nombres para juegos en el mapa del sitio oficial de Letras Bonitas.',
  alternates: {
    canonical: '/mapa-del-sitio/',
  },
  openGraph: {
    title: 'Mapa del Sitio | Letras Bonitas',
    description: 'Directorio completo de todas las herramientas y recursos de Letras Bonitas.',
    url: '/mapa-del-sitio/',
    type: 'website',
    locale: 'es_ES',
    siteName: 'Letras Bonitas',
  },
};

export default function SitemapPage() {
  return (
    <main className={styles.main}>
      <div className="container">
        {/* Breadcrumb Navigation */}
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <ol>
            <li>
              <Link href="/">Inicio</Link>
            </li>
            <li aria-current="page">Mapa del Sitio</li>
          </ol>
        </nav>

        <header className={styles.header}>
          <h1 className={styles.title}>Mapa del Sitio</h1>
          <p className={styles.subtitle}>
            Explora nuestra estructura completa y descubre todas las herramientas gratuitas que ofrecemos para generar letras bonitas, textos con estilo y nombres gamer.
          </p>
        </header>

        <div className={styles.sitemapGrid}>
          {/* Main Pages */}
          <div className={styles.sitemapColumn}>
            <h2>Páginas Principales</h2>
            <ul>
              <li><Link href="/">Inicio / Generador Principal</Link></li>
              <li><Link href="/conversor-de-letras/">Conversor de Letras</Link>
                <ul>
                  <li><Link href="/conversor-de-letras/letras-para-copiar-y-pegar/">Letras para Copiar y Pegar</Link></li>
                  <li><Link href="/conversor-de-letras/texto-con-estilos/">Texto con Estilos</Link></li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Cursivas y Estilos */}
          <div className={styles.sitemapColumn}>
            <h2>Letras y Tipografías</h2>
            <ul>
              <li><Link href="/letras-cursivas/">Letras Cursivas</Link>
                <ul>
                  <li><Link href="/letras-cursivas/abecedario-cursivo/">Abecedario Cursivo</Link></li>
                  <li><Link href="/letras-cursivas/letras-bonitas-cursivas/">Letras Bonitas Cursivas</Link></li>
                  <li><Link href="/letras-cursivas/letras-cursivas-mayusculas/">Cursivas Mayúsculas</Link></li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Redes Sociales */}
          <div className={styles.sitemapColumn}>
            <h2>Redes Sociales</h2>
            <ul>
              <li><Link href="/letras-para-instagram/">Letras para Instagram</Link>
                <ul>
                  <li><Link href="/letras-para-instagram/letras-para-bio/">Letras para Bio</Link></li>
                  <li><Link href="/letras-para-instagram/letras-para-nombres/">Letras para Nombres</Link></li>
                  <li><Link href="/letras-para-instagram/letras-cursivas-para-instagram/">Cursivas para Instagram</Link></li>
                  <li><Link href="/letras-para-instagram/simbolos-para-instagram/">Símbolos para Instagram</Link></li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Gaming - Free Fire */}
          <div className={styles.sitemapColumn}>
            <h2>Free Fire</h2>
            <ul>
              <li><Link href="/nombres-para-free-fire/">Nombres para Free Fire</Link>
                <ul>
                  <li><Link href="/nombres-para-free-fire/nombres-insanos/">Nombres Insanos</Link></li>
                  <li><Link href="/nombres-para-free-fire/apodos/">Apodos para Free Fire</Link></li>
                  <li><Link href="/nombres-para-free-fire/clanes/">Nombres para Clanes</Link></li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Gaming - Juegos */}
          <div className={styles.sitemapColumn}>
            <h2>Juegos y Nicks</h2>
            <ul>
              <li><Link href="/nombres-para-juegos/">Nombres para Juegos</Link>
                <ul>
                  <li><Link href="/nombres-para-juegos/nicks/">Nicks para Juegos</Link></li>
                  <li><Link href="/nombres-para-juegos/apodos/">Apodos Pro</Link></li>
                  <li><Link href="/nombres-para-juegos/nombres-para-clanes/">Clanes</Link></li>
                  <li><Link href="/nombres-para-juegos/nombres-chidos/">Nombres Chidos</Link></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </main>
  );
}
