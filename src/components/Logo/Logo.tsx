import Link from 'next/link';
import styles from './Logo.module.css';

interface LogoProps {
  onClick?: () => void;
}

export default function Logo({ onClick }: LogoProps) {
  return (
    <Link href="/" className={styles.logo} onClick={onClick}>
      <svg
        className={styles.logoIcon}
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="brand-logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>
        <path
          d="M12 2L14.8 9.2L22 12L14.8 14.8L12 22L9.2 14.8L2 12L9.2 9.2L12 2Z"
          fill="url(#brand-logo-gradient)"
        />
        <path
          d="M19 3L20.1 5.9L23 7L20.1 8.1L19 11L17.9 8.1L15 7L17.9 5.9L19 3Z"
          fill="url(#brand-logo-gradient)"
          opacity="0.85"
        />
      </svg>
      <span className={styles.logoText}>
        <span className="text-gradient">Letras</span> Bonitas
      </span>
    </Link>
  );
}
