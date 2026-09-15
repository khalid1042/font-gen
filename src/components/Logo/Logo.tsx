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
        width="36"
        height="36"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="magic-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="50%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#f43f5e" />
          </linearGradient>
          <linearGradient id="magic-gradient-2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Animated magical trail */}
        <path 
          d="M6 24C10 18 16 6 24 8C30 10 28 22 18 28" 
          stroke="url(#magic-gradient-2)" 
          strokeWidth="2" 
          strokeLinecap="round" 
          fill="none" 
          className={styles.magicTrail}
        />
        
        {/* Magical Wand / Pen */}
        <g className={styles.magicWand} filter="url(#glow)">
          <path d="M4 28C5.5 28 7.5 26.5 9 25L23 11L27 7C28 6 28 4 27 3C26 2 24 2 23 3L19 7L5 21C3.5 22.5 2 24.5 2 26C2 27.5 2.5 28 4 28Z" fill="url(#magic-gradient)"/>
          <path d="M21 9L25 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
          <path d="M11 19L19 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="1 3" opacity="0.4"/>
        </g>
        
        {/* Animated Sparkles */}
        <g className={styles.sparkles}>
          <path d="M4 2L5 6L9 7L5 8L4 12L3 8L-1 7L3 6Z" fill="#FCD34D" className={styles.sparkle1}/>
          <path d="M28 16L28.5 19L31.5 19.5L28.5 20L28 23L27.5 20L24.5 19.5L27.5 19Z" fill="#FBCFE8" className={styles.sparkle2}/>
          <circle cx="27" cy="26" r="1.5" fill="#60A5FA" className={styles.sparkle3}/>
        </g>
      </svg>
      <span className={styles.logoText}>
        <span className="text-gradient">Letras</span> Bonitas
      </span>
    </Link>
  );
}
