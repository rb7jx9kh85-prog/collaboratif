import {createServer} from 'node:http';
import {readFile} from 'node:fs/promises';
const allowed=new Set(['index.html','app.js','store.js','style.css','icon.svg','manifest.webmanifest']);
const types={html:'text/html',js:'text/javascript',css:'text/css',svg:'image/svg+xml',webmanifest:'application/manifest+json'};
createServer(async(req,res)=>{const pathname=new URL(req.url,'http://localhost').pathname;const file=pathname==='/'?'index.html':pathname.slice(1);if(!allowed.has(file)){res.writeHead(404);res.end('Not found');return;}try{const bytes=await readFile(new URL(file,import.meta.url));res.writeHead(200,{'Content-Type':types[file.split('.').pop()]+'; charset=utf-8'});res.end(bytes);}catch{res.writeHead(404);res.end();}}).listen(3000,'0.0.0.0',()=>console.log('http://localhost:3000'));
