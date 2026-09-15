'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './RelatedLinks.module.css';

const allLinks = [
  { href: '/conversor-de-letras', title: 'Conversor de Letras', description: 'Cambia el estilo de tu texto con múltiples fuentes.' },
  { href: '/conversor-de-letras/letras-para-copiar-y-pegar', title: 'Letras para Copiar y Pegar', description: 'Fuentes fáciles de copiar para cualquier red social.' },
  { href: '/conversor-de-letras/texto-con-estilos', title: 'Texto con Estilos', description: 'Generador de texto con estilos únicos.' },
  
  { href: '/letras-cursivas', title: 'Letras Cursivas', description: 'Letras elegantes y manuscritas.' },
  { href: '/letras-cursivas/abecedario-cursivo', title: 'Abecedario Cursivo', description: 'Todo el abecedario en diferentes estilos cursivos.' },
  { href: '/letras-cursivas/letras-cursivas-elegantes', title: 'Cursivas Elegantes', description: 'Estilos refinados y sofisticados.' },
  { href: '/letras-cursivas/letras-cursivas-para-copiar-y-pegar', title: 'Cursivas para Copiar', description: 'Textos cursivos listos para usar.' },
  
  { href: '/letras-para-instagram', title: 'Letras para Instagram', description: 'Destaca en IG con fuentes originales.' },
  { href: '/letras-para-instagram/letras-cursivas-para-instagram', title: 'Cursivas para Instagram', description: 'Da un toque elegante a tus posts de IG.' },
  { href: '/letras-para-instagram/letras-para-bio', title: 'Letras para Biografía', description: 'Optimiza la presentación de tu perfil.' },
  { href: '/letras-para-instagram/letras-para-nombres', title: 'Nombres en Instagram', description: 'Personaliza tu nombre de usuario.' },
  { href: '/letras-para-instagram/simbolos-para-instagram', title: 'Símbolos para Instagram', description: 'Añade caracteres especiales a tu bio.' },
  
  { href: '/nombres-para-free-fire', title: 'Nombres Free Fire', description: 'Crea los mejores nicks para FF.' },
  { href: '/nombres-para-free-fire/apodos', title: 'Apodos Free Fire', description: 'Apodos originales e intimidantes.' },
  { href: '/nombres-para-free-fire/clanes', title: 'Nombres de Clanes', description: 'Nombres épicos para tu squad.' },
  { href: '/nombres-para-free-fire/nombres-insanos', title: 'Nombres Insanos', description: 'Nombres que imponen respeto.' },
  
  { href: '/nombres-para-juegos', title: 'Nombres para Juegos', description: 'Generador de nicks para gamers.' },
  { href: '/nombres-para-juegos/nicks', title: 'Nicks Originales', description: 'Encuentra un alias único.' },
];

export default function RelatedLinks() {
  const pathname = usePathname();
  
  // Filter out the current page
  const availableLinks = allLinks.filter(link => link.href !== pathname && link.href !== '/');
  
  // Deterministic shuffle based on pathname length or string so it doesn't change on every render during hydration
  // but let's just pick 4 links in a stable way related to the current path.
  let related = [];
  
  // If the path contains a main category, prefer links from that category first, then fallback
  const firstSegment = pathname.split('/')[1];
  
  const sameCategory = availableLinks.filter(link => link.href.includes(firstSegment));
  const otherCategories = availableLinks.filter(link => !link.href.includes(firstSegment));
  
  // Pick up to 2 from same category, and 2 from others
  related = [
    ...sameCategory.slice(0, 2),
    ...otherCategories.slice(0, 4 - Math.min(2, sameCategory.length))
  ];
  
  if (related.length === 0) {
      related = availableLinks.slice(0, 4);
  }

  return (
    <div className={styles.relatedLinksContainer}>
      <h3 className={styles.title}>Herramientas Relacionadas</h3>
      <div className={styles.grid}>
        {related.map((link) => (
          <Link key={link.href} href={link.href} className={styles.card}>
            <h4>{link.title}</h4>
            <p>{link.description}</p>
          </Link>
        ))}
      </div>
      <div className={styles.homeLinkWrapper}>
        <Link href="/" className={styles.homeLink}>
          ← Volver al Generador Principal
        </Link>
      </div>
    </div>
  );
}
