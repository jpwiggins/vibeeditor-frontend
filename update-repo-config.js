#!/usr/bin/env node

// Script to update repository configuration for GitHub Pages deployment
const fs = require('fs');
const path = require('path');

// Get repository name from command line argument or use default
const repoName = process.argv[2] || 'vibeeditor-frontend';

console.log(`🔧 Updating configuration for repository: ${repoName}`);

// Update vite.config.js
const viteConfigPath = path.join(__dirname, 'vite.config.js');
let viteConfig = fs.readFileSync(viteConfigPath, 'utf8');
viteConfig = viteConfig.replace(
  /base: '\/.*?\/',
  `base: '/${repoName}/',`
);
fs.writeFileSync(viteConfigPath, viteConfig);
console.log('✅ Updated vite.config.js');

// Update App.jsx
const appPath = path.join(__dirname, 'src', 'App.jsx');
let appContent = fs.readFileSync(appPath, 'utf8');
appContent = appContent.replace(
  /basename="\/.*?"/g,
  `basename="/${repoName}"`
);
fs.writeFileSync(appPath, appContent);
console.log('✅ Updated src/App.jsx');

// Update package.json homepage
const packagePath = path.join(__dirname, 'package.json');
let packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
packageJson.homepage = `https://yourusername.github.io/${repoName}`;
fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2));
console.log('✅ Updated package.json');

console.log(`\n🚀 Configuration updated for repository: ${repoName}`);
console.log('📝 Next steps:');
console.log('1. Update the homepage URL in package.json with your actual GitHub username');
console.log('2. Commit and push your changes');
console.log('3. Enable GitHub Pages in your repository settings');
console.log(`4. Your site will be available at: https://yourusername.github.io/${repoName}/`);