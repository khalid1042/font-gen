import Link from 'next/link';
import styles from './Logo.module.css';

interface LogoProps {
  onClick?: () => void;
}

export default function Logo({ onClick }: LogoProps) {
  return (
    <Link href="/" className={styles.logo} onClick={onClick}>
      <div className={styles.logoIconWrapper}>
        <svg
          className={styles.logoIcon}
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="quill-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ec4899" />
              <stop offset="50%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
            <linearGradient id="quill-bg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ec4899" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#6366f1" stopOpacity="0.15" />
            </linearGradient>
          </defs>

          {/* Rounded background box for the icon */}
          <rect width="36" height="36" rx="10" fill="url(#quill-bg)" />
          <rect x="0.5" y="0.5" width="35" height="35" rx="9.5" stroke="url(#quill-grad)" strokeOpacity="0.2" />

          {/* Abstract stylized 'A' & 'a' (Typography / Fonts) */}
          <path
            d="M14 26L19 10H22L27 26M16 21H25"
            stroke="url(#quill-grad)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={styles.typeA}
          />
          <path
            d="M13 18C13 16 11 15 9 15C7 15 5 16 5 18C5 20 7 21 9 21C11 21 13 20 13 18ZM13 18V21"
            stroke="url(#quill-grad)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={styles.typeSmallA}
          />

        </svg>
      </div>
      <span className={styles.logoText}>
        <span className="text-gradient">Letras</span> Bonitas
      </span>
    </Link>
  );
}
