'use client';

import { useState } from 'react';
import Link from 'next/link';
import Logo from '../Logo/Logo';
import ThemeToggle from './ThemeToggle';
import styles from './Header.module.css';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <Logo onClick={closeMenu} />

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav} aria-label="Navegación principal">
          <ul className={styles.navList}>
            <li>
              <Link href="/" className={styles.navLink}>Generador</Link>
            </li>
            <li>
              <Link href="/emojis/" className={styles.navLink}>Emojis</Link>
            </li>
            <li>
              <Link href="/letras-para-instagram/" className={styles.navLink}>Letras para Instagram</Link>
            </li>
            <li>
              <Link href="/conversor-de-letras/" className={styles.navLink}>Conversor de Letras</Link>
            </li>
            <li>
              <Link href="/letras-cursivas/" className={styles.navLink}>Letras Cursivas</Link>
            </li>
            <li>
              <Link href="/nombres-para-free-fire/" className={styles.navLink}>Nombres Free Fire</Link>
            </li>
            <li>
              <Link href="/nombres-para-juegos/" className={styles.navLink}>Nombres para Juegos</Link>
            </li>
          </ul>
        </nav>

        <div className={styles.headerActions}>
          <ThemeToggle />
          
          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            className={styles.mobileMenuBtn}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <nav className={styles.mobileNavDrawer} aria-label="Navegación móvil">
          <ul className={styles.mobileNavList}>
            <li>
              <Link href="/" className={styles.mobileNavLink} onClick={closeMenu}>
                Generador
              </Link>
            </li>
            <li>
              <Link href="/emojis/" className={styles.mobileNavLink} onClick={closeMenu}>
                Emojis
              </Link>
            </li>
            <li>
              <Link href="/letras-para-instagram/" className={styles.mobileNavLink} onClick={closeMenu}>
                Letras para Instagram
              </Link>
            </li>
            <li>
              <Link href="/conversor-de-letras/" className={styles.mobileNavLink} onClick={closeMenu}>
                Conversor de Letras
              </Link>
            </li>
            <li>
              <Link href="/letras-cursivas/" className={styles.mobileNavLink} onClick={closeMenu}>
                Letras Cursivas
              </Link>
            </li>
            <li>
              <Link href="/nombres-para-free-fire/" className={styles.mobileNavLink} onClick={closeMenu}>
                Nombres Free Fire
              </Link>
            </li>
            <li>
              <Link href="/nombres-para-juegos/" className={styles.mobileNavLink} onClick={closeMenu}>
                Nombres para Juegos
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
