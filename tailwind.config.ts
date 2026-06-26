import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        '200': '12.6875rem',
        '219': '13.6875rem',
        '266': '16.625rem',
        '277': '17.3125rem',
        '356': '22.25rem',
        '334': '20.875rem',
        '310': '19.375rem',
        '408': '25.5rem',
        '420': '26.25rem',
        '446': '27.875rem',
        '473': '29.5625rem',
        '550': '34.375rem',
        '585': '36.5625rem',
        '634': '39.625rem',
        '672': '42rem',
        '720': '45rem',
        '1200': '75rem',
      },
      height: {
        '583': '36.4375rem',
        '650': '40.625rem',
      },
      width: {
        '183': '11.4375rem',
        '526': '32.875rem',
        '770': '48.125rem',
        '1/2': '30%',
        '1/4': '37%',
        '2/3': '63%',
        '2/2': '60%',
      },
      gap: {
        '30': '1.875rem',
        '13': '3.125rem',
      },
      boxShadow: {
        'light-shadwo': '0px 4px 17px 0px #0000000F',
        'plan-shadwo': '0 0rem 1.875rem rgba(24, 23, 23, 0.1)',
        'portfolio-box': '0px 20px 80px 0px rgba(104, 117, 141, 0.15)',
        darkmd:
          'rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px',
      },
      borderRadius: {
        '14': '0.875rem',
      },
      transitionProperty: {
        'max-height': 'max-height',
        opacity: 'opacity',
        transform: 'transform',
        width: 'width',
        all: 'all',
      },
      transitionDuration: {
        '0': '0ms',
        '0.4s': '0.4s',
        '2000': '2000ms',
      },
      transitionTimingFunction: {
        'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1);',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
      transform: {
        '-translate-y-4': '-translate-y-1rem',
      },
      zIndex: {
        '1': '1',
        '3': '3',
      },
      colors: {
        // ─── ICHTECH Brand Colors (palette bleue du logo) ───────────────
        primary: '#42A5F5',        // Bleu ciel vif — couleur dominante (cercle & texte logo)
        darkprimary: '#1565C0',    // Bleu marine foncé — hover, ombres, anneau intérieur
        lightPrimary: '#90CAF9',   // Bleu clair — reflets, états désactivés, fonds subtils
        secondary: '#0D47A1',      // Bleu nuit profond — remplace le vert foncé, sections sombres
        // ─── UI Surfaces & Neutrals ─────────────────────────────────────
        SlateBlue: '#547593',      // Texte secondaire muted — inchangé
        AliceBlue: '#F3F9FD',      // Fond clair / cartes light mode — inchangé
        LightApricot: '#F9C78F',   // Accent chaud / badges — inchangé
        border: '#1565C0',         // Bleu marine — bordures
        BorderLine: '#90CAF9',     // Bleu clair — séparateurs subtils
        darkmode: '#021526',       // Fond dark mode profond — inchangé
        darklight: '#061B2E',      // Fond dark mode secondaire — inchangé
        darktext: '#7F8487',       // Texte muted dark mode — inchangé
        dark_border: '#1565C0',    // Bleu marine — bordures dark mode
        Cream: '#EEE8A9',          // Accent crème / highlights — inchangé
        LavenderBlue: '#E3F2FD',   // Bleu très clair — fond badge/tag
        LightSoftBlue: '#BBDEFB',  // Bleu doux — fond section clair
        gray: '#ACBCCA',           // Texte / icônes neutres — inchangé
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config