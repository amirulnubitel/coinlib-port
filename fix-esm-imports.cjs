#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function fixImportsInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Fix relative imports to include .mjs extension
  content = content.replace(/from\s+['"](\.\/?[^'"]*?)['"](?!\.\w)/g, (match, importPath) => {
    // If it's already a .mjs file or has an extension, don't modify
    if (importPath.endsWith('.mjs') || importPath.match(/\.\w+$/)) {
      return match;
    }
    
    // If it ends with /index, replace with .mjs
    if (importPath.endsWith('/index')) {
      return match.replace(importPath, importPath.replace('/index', '/index.mjs'));
    }
    
    // If it's a directory import (like '../lib-common'), add /index.mjs
    if (!importPath.includes('.') || importPath.endsWith('/')) {
      return match.replace(importPath, importPath + '/index.mjs');
    }
    
    // Otherwise, just add .mjs
    return match.replace(importPath, importPath + '.mjs');
  });
  
  fs.writeFileSync(filePath, content);
}

function walkDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      walkDirectory(fullPath);
    } else if (file.endsWith('.mjs')) {
      console.log(`Fixing imports in: ${fullPath}`);
      fixImportsInFile(fullPath);
    }
  });
}

// Start from build-esm directory
const buildDir = path.join(process.cwd(), 'build-esm');
if (fs.existsSync(buildDir)) {
  walkDirectory(buildDir);
  console.log('ESM imports fixed successfully!');
} else {
  console.error('build-esm directory not found!');
  process.exit(1);
}
