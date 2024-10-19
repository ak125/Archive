const path = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',  // Active le mode sombre via la classe `dark`
  content: [
    // Surveille les fichiers dans `app` et `components` pour appliquer Tailwind
    path.join(__dirname, './app/**/*.{ts,tsx}'),
    path.join(__dirname, './components/**/*.{ts,tsx}'),
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',  // Utilisation de couleurs dynamiques
        foreground: 'hsl(var(--foreground))',
        primary: 'hsl(var(--primary))',
        secondary: 'hsl(var(--secondary))',
      },
      // Ajoutez d'autres extensions de thèmes ici si nécessaire
    },
  },
  plugins: [],
  // Purge des classes inutilisées dans vos fichiers sources (important pour la production)
  purge: {
    enabled: process.env.NODE_ENV === 'production',  // Active la purge en production
    content: [
      path.join(__dirname, './app/**/*.{ts,tsx}'),
      path.join(__dirname, './components/**/*.{ts,tsx}'),
    ],
  },
};
