# Asset Library Web App

A static web application for browsing, previewing, and downloading brand assets. The application organizes assets into categories (logos, favicons, colors, and fonts) and provides an intuitive interface for users to either download assets or copy URL references to them.

## Features

- **Organized Asset Categories**: Browse assets by logos, favicons, colors, and fonts
- **Search & Filter**: Find assets quickly with search and filter functionality
- **Asset Preview**: Preview assets before downloading
- **Download Options**: Download assets with a single click
- **Copy References**: Copy URLs or color codes for easy use in projects
- **Responsive Design**: Works on all device sizes
- **Dark Mode Support**: Toggle between light and dark themes

## Tech Stack

- **[Astro](https://astro.build/)**: Primary framework for static site generation
- **[shadcn/ui](https://ui.shadcn.com/)**: Component library for UI elements
- **[TypeScript](https://www.typescriptlang.org/)**: Type safety throughout the codebase
- **[Tailwind CSS](https://tailwindcss.com/)**: Utility-first CSS framework
- **[Lucide Icons](https://lucide.dev/)**: Icon library

## Project Structure

```
/
├── public/
│   └── assets/
│       ├── logos/
│       ├── favicons/
│       ├── colors/
│       └── fonts/
├── src/
│   ├── components/
│   │   ├── ui/
│   │   ├── AssetCard.astro
│   │   ├── CategoryGrid.astro
│   │   ├── Navigation.astro
│   │   └── SearchAndFilter.astro
│   ├── layouts/
│   │   └── main.astro
│   ├── lib/
│   │   ├── data.ts
│   │   ├── types.ts
│   │   └── utils.ts
│   ├── pages/
│   │   ├── index.astro
│   │   ├── logos.astro
│   │   ├── favicons.astro
│   │   ├── colors.astro
│   │   └── fonts.astro
│   └── styles/
│       └── global.css
└── package.json
```

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- pnpm (v8 or later)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/asset-library.git
   cd asset-library
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Start the development server:

   ```bash
   pnpm dev
   ```

4. Open your browser and navigate to `http://localhost:4321`

## Building for Production

To create a production build:

```bash
pnpm build
```

The built files will be in the `dist/` directory.

## Adding New Assets

To add new assets to the library:

1. Place the asset files in the appropriate directory under `public/assets/`
2. Update the asset data in `src/lib/data.ts` with the new asset information
3. Rebuild the site to include the new assets

## Customization

- **Styling**: Modify `src/styles/global.css` to change the global styles
- **Components**: Customize components in the `src/components/` directory
- **Data**: Update asset information in `src/lib/data.ts`
- **Pages**: Modify pages in the `src/pages/` directory

## License

This project is licensed under the MIT License - see the LICENSE file for details.
