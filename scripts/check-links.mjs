import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { extname, join, relative, resolve } from 'node:path';

const root = resolve('dist');
const htmlFiles = [];

function walk(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) walk(path);
    else if (extname(entry.name) === '.html') htmlFiles.push(path);
  }
}

function targetExists(pathname) {
  const cleanPath = decodeURIComponent(pathname).replace(/^\/+/, '');
  if (!cleanPath) return existsSync(join(root, 'index.html'));
  return existsSync(join(root, cleanPath)) ||
    existsSync(join(root, cleanPath, 'index.html')) ||
    existsSync(join(root, `${cleanPath}.html`));
}

walk(root);
const failures = [];

for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  const links = html.matchAll(/href=["']([^"']+)["']/g);
  for (const [, href] of links) {
    if (!href.startsWith('/') || href.startsWith('//')) continue;
    const { pathname } = new URL(href, 'https://hybridsec.org');
    if (!targetExists(pathname)) failures.push(`${relative(root, file)} -> ${href}`);
  }
}

if (failures.length) {
  console.error(`Broken internal links (${failures.length}):\n${failures.join('\n')}`);
  process.exit(1);
}

console.log(`Checked internal links across ${htmlFiles.length} HTML files.`);
