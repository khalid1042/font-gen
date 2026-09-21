const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const appDir = path.join(__dirname, 'src', 'app');

// 1. Find all valid routes from src/app
function getRoutes(dir, routes = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      getRoutes(fullPath, routes);
    } else if (file === 'page.tsx') {
      let route = fullPath.replace(appDir, '').replace(/\\/g, '/').replace('/page.tsx', '');
      if (route === '') route = '/';
      routes.push(route);
    }
  }
  return routes;
}
const validRoutes = getRoutes(appDir);
validRoutes.push('/mapa-del-sitio'); // add standard ones if mapped specially
// Also handle trailing slashes
const normalizedRoutes = new Set(validRoutes.map(r => r.endsWith('/') && r !== '/' ? r.slice(0, -1) : r));

// 2. Find all links in all .tsx files
function getFiles(dir, files = []) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      getFiles(fullPath, files);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      files.push(fullPath);
    }
  }
  return files;
}

const allTsxFiles = getFiles(srcDir);
const linkRegex = /href=["'](\/[^"']*)["']/g;
const brokenLinks = [];

for (const file of allTsxFiles) {
  const content = fs.readFileSync(file, 'utf8');
  let match;
  while ((match = linkRegex.exec(content)) !== null) {
    let href = match[1];
    // Normalize href for checking
    let checkHref = href.split('#')[0].split('?')[0]; // remove hash and query params
    if (checkHref.endsWith('/') && checkHref !== '/') {
      checkHref = checkHref.slice(0, -1);
    }
    
    if (checkHref !== '' && !normalizedRoutes.has(checkHref) && !checkHref.startsWith('/images/')) {
      brokenLinks.push({ file: file.replace(__dirname, ''), href: href });
    }
  }
}

if (brokenLinks.length > 0) {
  console.log("BROKEN LINKS FOUND:");
  brokenLinks.forEach(b => console.log(`File: ${b.file} | Link: ${b.href}`));
} else {
  console.log("No broken internal links found!");
}
