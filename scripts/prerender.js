import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');
const templatePath = path.resolve(distDir, 'index.html');
const serverEntryPath = path.resolve(distDir, 'server', 'entry-server.js');

const ROUTES = [
  {
    path: '/',
    title: 'MedAorticX Healthtek — Empowering Healthcare Through Accurate Coding',
    description: 'MedAorticX Healthtek — Medical Coding Academy training programs, specialized RCM recruitment, and end-to-end healthcare Revenue Cycle Management solutions.',
    canonical: 'https://www.medaorticx.com/',
  },
  {
    path: '/services/rcm-recruitment-services',
    title: 'RCM Recruitment Services | MedAorticX HealthTek',
    description: 'Specialized recruitment solutions for Revenue Cycle Management (RCM) companies, identifying and hiring qualified billing, coding, and operations professionals.',
    canonical: 'https://www.medaorticx.com/services/rcm-recruitment-services',
  },
  {
    path: '/services/medical-coding-academy',
    title: 'Medical Coding Academy | MedAorticX HealthTek',
    description: 'Industry-oriented training providing practical knowledge of medical terminology, anatomy, coding concepts, and healthcare documentation.',
    canonical: 'https://www.medaorticx.com/services/medical-coding-academy',
  },
  {
    path: '/courses/basic-medical-coding',
    title: 'Basic Medical Coding Training | MedAorticX HealthTek Academy',
    description: 'Designed for freshers to learn the fundamentals of medical coding from scratch and build a foundation for a healthcare career.',
    canonical: 'https://www.medaorticx.com/courses/basic-medical-coding',
  },
  {
    path: '/courses/advanced-medical-coding',
    title: 'Advanced Medical Coding Training | MedAorticX HealthTek Academy',
    description: 'Advanced training covering real-time scenarios, specialty coding, modifiers, E/M coding, and hands-on practice with interview preparation.',
    canonical: 'https://www.medaorticx.com/courses/advanced-medical-coding',
  }
];

async function prerender() {
  if (!fs.existsSync(templatePath)) {
    throw new Error(`Template not found at ${templatePath}`);
  }
  if (!fs.existsSync(serverEntryPath)) {
    throw new Error(`Server build entry not found at ${serverEntryPath}`);
  }

  const template = fs.readFileSync(templatePath, 'utf-8');
  const { render } = await import(pathToFileURL(serverEntryPath).href);

  console.log('🚀 Starting SSG Prerendering for routes...');

  for (const route of ROUTES) {
    const appHtml = render(route.path);
    
    let html = template;
    
    // Replace root content
    html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
    
    // Replace title
    html = html.replace(/<title>.*?<\/title>/i, `<title>${route.title}</title>`);
    
    // Replace meta description
    html = html.replace(
      /<meta name="description" content=".*?"\s*\/?>/i,
      `<meta name="description" content="${route.description}" />`
    );
    
    // Replace canonical URL
    html = html.replace(
      /<link rel="canonical" href=".*?"\s*\/?>/i,
      `<link rel="canonical" href="${route.canonical}" />`
    );
    
    // Replace Open Graph and Twitter tags
    html = html.replace(
      /<meta property="og:title" content=".*?"\s*\/?>/i,
      `<meta property="og:title" content="${route.title}" />`
    );
    html = html.replace(
      /<meta property="og:description" content=".*?"\s*\/?>/i,
      `<meta property="og:description" content="${route.description}" />`
    );
    html = html.replace(
      /<meta property="og:url" content=".*?"\s*\/?>/i,
      `<meta property="og:url" content="${route.canonical}" />`
    );
    html = html.replace(
      /<meta name="twitter:title" content=".*?"\s*\/?>/i,
      `<meta name="twitter:title" content="${route.title}" />`
    );
    html = html.replace(
      /<meta name="twitter:description" content=".*?"\s*\/?>/i,
      `<meta name="twitter:description" content="${route.description}" />`
    );

    // Write file
    let filePath;
    if (route.path === '/') {
      filePath = path.resolve(distDir, 'index.html');
    } else {
      const routeDir = path.resolve(distDir, route.path.replace(/^\//, ''));
      fs.mkdirSync(routeDir, { recursive: true });
      filePath = path.resolve(routeDir, 'index.html');
    }

    fs.writeFileSync(filePath, html, 'utf-8');
    console.log(` ✅ Prerendered: ${route.path} -> ${path.relative(rootDir, filePath)}`);
  }

  console.log('✨ All routes prerendered successfully!');
}

prerender().catch((err) => {
  console.error('❌ Prerendering error:', err);
  process.exit(1);
});
