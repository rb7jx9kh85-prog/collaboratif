import { mkdir, copyFile } from 'node:fs/promises';
await mkdir('dist',{recursive:true});
for(const file of ['index.html','app.js','store.js','style.css','icon.svg','manifest.webmanifest']) await copyFile(file,`dist/${file}`);
console.log('Static build ready: dist/');
