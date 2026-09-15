const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, 'src', 'app');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      if (file.endsWith('page.tsx')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk(appDir);

files.forEach(file => {
  if (file === path.join(appDir, 'page.tsx')) return;
  
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;
  
  // Find the Related section by comment
  const relatedRegex = /\{\s*\/\*\s*Related.*?\*\/\s*\}[\s\S]*?<\/section>/i;
  
  if (relatedRegex.test(content)) {
    content = content.replace(relatedRegex, `{\/* Herramientas Relacionadas *\/}
      <section className={styles.section}>
        <div className="container">
          <RelatedLinks />
        </div>
      </section>`);
    changed = true;
  } else {
    // Check if it already has <RelatedLinks />
    if (!content.includes('<RelatedLinks />')) {
      // If it doesn't have the comment, we can insert it before </main>
      const mainEndIndex = content.lastIndexOf('</main>');
      if (mainEndIndex !== -1) {
        const insertBlock = `
      {/* Herramientas Relacionadas */}
      <section className={styles.section}>
        <div className="container">
          <RelatedLinks />
        </div>
      </section>
`;
        content = content.substring(0, mainEndIndex) + insertBlock + content.substring(mainEndIndex);
        changed = true;
      }
    }
  }
  
  if (changed && !content.includes('import RelatedLinks from')) {
    const lines = content.split('\n');
    let lastImportIndex = -1;
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].startsWith('import ')) {
        lastImportIndex = i;
      }
    }
    
    const relativePathDepth = file.replace(appDir, '').split(path.sep).length - 1;
    let upDir = '../'.repeat(relativePathDepth);
    const importStatement = `import RelatedLinks from '${upDir}components/RelatedLinks/RelatedLinks';`;
    
    lines.splice(lastImportIndex + 1, 0, importStatement);
    content = lines.join('\n');
  }
  
  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
