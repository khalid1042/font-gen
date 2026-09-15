const fs = require('fs');
const path = require('path');

const publicImages = path.join(__dirname, 'public', 'images');
const appDir = path.join(__dirname, 'src', 'app');

// 1. Rename images
const files = fs.readdirSync(publicImages);
files.forEach(f => {
  if (f.startsWith('media__')) {
    fs.unlinkSync(path.join(publicImages, f));
    return;
  }
  const match = f.match(/^([a-z_]+)_\d+\.png$/);
  if (match) {
    fs.renameSync(path.join(publicImages, f), path.join(publicImages, match[1] + '.png'));
  }
});

// 2. Define the topic hubs and their data
const hubs = [
  {
    folder: 'conversor-de-letras',
    image: 'conversor_letras.png',
    title: 'Conversor de Letras',
    children: [
      { path: 'letras-para-copiar-y-pegar', title: 'Letras para Copiar y Pegar', desc: 'Variedad de letras fáciles de copiar y pegar en cualquier lugar.' },
      { path: 'texto-con-estilos', title: 'Texto con Estilos', desc: 'Aplica estilos únicos y estéticos a tus textos al instante.' }
    ]
  },
  {
    folder: 'letras-cursivas',
    image: 'letras_cursivas.png',
    title: 'Letras Cursivas',
    children: [
      { path: 'abecedario-cursivo', title: 'Abecedario Cursivo', desc: 'Descubre todo el abecedario en diferentes y hermosas cursivas.' },
      { path: 'letras-cursivas-elegantes', title: 'Letras Cursivas Elegantes', desc: 'Diseños caligráficos elegantes para un toque sofisticado.' },
      { path: 'letras-cursivas-para-copiar-y-pegar', title: 'Letras Cursivas para Copiar y Pegar', desc: 'Fuentes cursivas listas para usar en redes sociales.' }
    ]
  },
  {
    folder: 'letras-para-instagram',
    image: 'letras_instagram.png',
    title: 'Letras para Instagram',
    children: [
      { path: 'letras-cursivas-para-instagram', title: 'Letras Cursivas para Instagram', desc: 'Estilos de letras cursivas perfectos para tu Instagram.' },
      { path: 'letras-para-bio', title: 'Letras para Bio', desc: 'Haz que tu biografía destaque con estas tipografías.' },
      { path: 'letras-para-nombres', title: 'Letras para Nombres', desc: 'Personaliza tu nombre de perfil con letras llamativas.' },
      { path: 'simbolos-para-instagram', title: 'Símbolos para Instagram', desc: 'Símbolos decorativos (estrellas, corazones, etc.) para tus posts.' }
    ]
  },
  {
    folder: 'nombres-para-free-fire',
    image: 'nombres_free_fire.png',
    title: 'Nombres para Free Fire',
    children: [
      { path: 'apodos', title: 'Apodos para Free Fire', desc: 'Los mejores apodos cortos y memorables para dominar.' },
      { path: 'clanes', title: 'Nombres para Clanes', desc: 'Nombres épicos para destacar junto a tu escuadra.' },
      { path: 'nombres-insanos', title: 'Nombres Insanos', desc: 'Nombres competitivos e intimidantes para jugadores pro.' }
    ]
  },
  {
    folder: 'nombres-para-juegos',
    image: 'nombres_juegos.png',
    title: 'Nombres para Juegos',
    children: [
      { path: 'nicks', title: 'Nicks para Juegos', desc: 'Encuentra el nickname perfecto para cualquier videojuego.' }
    ]
  }
];

hubs.forEach(hub => {
  const pagePath = path.join(appDir, hub.folder, 'page.tsx');
  let content = fs.readFileSync(pagePath, 'utf8');

  // --- A. Add Next.js Image import if not present ---
  if (!content.includes('import Image from')) {
    content = content.replace(/(import [^\n]+;\n)+/, match => match + "import Image from 'next/image';\n");
  }
  
  // --- B. Add to metadata ---
  const ogImage = `images: [{ url: '/images/${hub.image}', width: 1200, height: 630, alt: '${hub.title}' }],`;
  if (!content.includes('images: [{ url:')) {
    content = content.replace(/openGraph:\s*\{/, match => match + '\n    ' + ogImage);
  }

  // --- C. Inject Image into Hero Section ---
  const heroImgTag = `<div className={styles.heroImageWrapper} style={{ marginTop: '2rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid #eaeaea' }}>\n              <Image src="/images/${hub.image}" alt="${hub.title}" width={1200} height={630} style={{ width: '100%', height: 'auto', display: 'block' }} priority />\n            </div>`;
  
  if (!content.includes(`src="/images/${hub.image}"`)) {
    content = content.replace(/(<p className=\{styles\.subtitle\}>[\s\S]*?<\/p>)/, match => match + '\n            ' + heroImgTag);
  }

  // --- D. Inject Directory Section ---
  let dirHtml = `\n      {/* Directorio de la Categoría (SEO Hub) */}\n      <section className={styles.section}>\n        <div className="container">\n          <h2 className={styles.sectionTitle}>Directorio de ${hub.title}</h2>\n          <div className={styles.directoryGrid} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '1.5rem' }}>\n`;
  
  hub.children.forEach(child => {
    dirHtml += `            <Link href="/${hub.folder}/${child.path}/" style={{ display: 'block', padding: '1.5rem', backgroundColor: 'var(--bg-card, #ffffff)', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', textDecoration: 'none', color: 'inherit' }} className="dirCard">\n              <h3 style={{ margin: '0 0 0.5rem 0', color: 'var(--primary, #4a25e1)', fontSize: '1.25rem' }}>${child.title}</h3>\n              <p style={{ margin: 0, color: 'var(--text-secondary, #555)', lineHeight: '1.5' }}>${child.desc}</p>\n            </Link>\n`;
  });
  
  dirHtml += `          </div>\n        </div>\n      </section>\n`;

  if (!content.includes('Directorio de la Categoría')) {
    // Attempt to inject before the RelatedLinks block
    content = content.replace(/(\{\/\* (Cross-Silo|Internal Silo|Internal Linking|Related).*?\*\/\})/, match => dirHtml + '\n      ' + match);
  }

  fs.writeFileSync(pagePath, content, 'utf8');
  console.log(`Updated ${hub.folder}/page.tsx`);
});
