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
  
  // Replace the bad import line
  const lines = content.split('\n');
  let changed = false;
  
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('import RelatedLinks from')) {
      // Calculate correct relative path
      // Depth from src/app
      const relativeToApp = file.replace(appDir, '');
      const depthInsideApp = relativeToApp.split(path.sep).length - 1; 
      // Example: \conversor-de-letras\page.tsx -> depth is 2 (conversor-de-letras and page.tsx)
      // Actually split(path.sep) on "\conversor-de-letras\page.tsx" gives ['', 'conversor-de-letras', 'page.tsx'] length 3
      // Let's just use path.relative
      
      const fileDir = path.dirname(file);
      const componentsDir = path.join(__dirname, 'src', 'components');
      
      let relativePath = path.relative(fileDir, componentsDir);
      // Ensure forward slashes
      relativePath = relativePath.split(path.sep).join('/');
      
      const newImport = `import RelatedLinks from '${relativePath}/RelatedLinks/RelatedLinks';`;
      
      if (lines[i] !== newImport) {
        lines[i] = newImport;
        changed = true;
      }
    }
  }
  
  if (changed) {
    fs.writeFileSync(file, lines.join('\n'), 'utf8');
    console.log(`Fixed import in ${file}`);
  }
});
