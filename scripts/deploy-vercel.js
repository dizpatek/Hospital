#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🏥 Hospital Management System - Vercel Deployment Script');
console.log('====================================================');

// Check if vercel is installed
try {
  execSync('vercel --version', { stdio: 'pipe' });
  console.log('✅ Vercel CLI is installed');
} catch (error) {
  console.log('❌ Vercel CLI is not installed');
  console.log('Please install it with: npm install -g vercel');
  process.exit(1);
}

// Check if .env file exists
const envPath = path.join(process.cwd(), '.env');
if (!fs.existsSync(envPath)) {
  console.log('⚠️  Warning: .env file not found');
  console.log('Run `npm run conf-wiz` to generate your environment variables');
  const continueWithoutEnv = process.argv.includes('--force') || 
    confirm('Continue without .env file? (Not recommended) [y/N]: ');
  if (!continueWithoutEnv) {
    process.exit(1);
  }
} else {
  console.log('✅ Environment variables file found');
}

// Check if package.json exists
const packagePath = path.join(process.cwd(), 'package.json');
if (!fs.existsSync(packagePath)) {
  console.log('❌ package.json not found in current directory');
  process.exit(1);
} else {
  console.log('✅ package.json found');
}

// Check if node_modules exists
const nodeModulesPath = path.join(process.cwd(), 'node_modules');
if (!fs.existsSync(nodeModulesPath)) {
  console.log('⚠️  node_modules not found, installing dependencies...');
  try {
    execSync('npm install', { stdio: 'inherit' });
    console.log('✅ Dependencies installed');
  } catch (error) {
    console.log('❌ Failed to install dependencies');
    process.exit(1);
  }
} else {
  console.log('✅ Dependencies already installed');
}

// Verify the build works before deployment
console.log('🔍 Testing build before deployment...');
try {
  execSync('npm run build', { stdio: 'pipe' });
  console.log('✅ Build successful');
} catch (error) {
  console.log('❌ Build failed, cannot deploy');
  console.log('Error:', error.message);
  process.exit(1);
}

// Check if git repository exists
const gitPath = path.join(process.cwd(), '.git');
if (!fs.existsSync(gitPath)) {
  console.log('⚠️  Not in a git repository');
  console.log('For best results, initialize a git repository and commit your changes');
} else {
  console.log('✅ Git repository found');
}

console.log('\n🚀 Preparing for Vercel deployment...');

// Check if project is already linked to Vercel
let projectId = null;
try {
  const vercelConfigPath = path.join(process.cwd(), '.vercel');
  if (fs.existsSync(vercelConfigPath)) {
    console.log('✅ Project is already linked to Vercel');
  } else {
    console.log('ℹ️  This appears to be a new Vercel project');
    console.log('The deployment command will guide you through the linking process');
  }
} catch (error) {
  console.log('ℹ️  Could not determine Vercel project status');
}

console.log('\n📋 Deployment checklist:');
console.log('1. Environment variables are configured');
console.log('2. Dependencies are installed');
console.log('3. Build is successful');
console.log('4. Git repository is ready (recommended)');

console.log('\n🚀 Running deployment command...');
console.log('Use Ctrl+C to cancel if needed');

// Wait a moment before running the deployment
setTimeout(() => {
  try {
    console.log('\n--- Vercel Deployment Output ---');
    execSync('vercel --prod', { stdio: 'inherit' });
  } catch (error) {
    console.log('\n❌ Deployment failed');
    console.log('Error:', error.message);
    process.exit(1);
  }
}, 3000);