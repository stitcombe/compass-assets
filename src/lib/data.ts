import type { Asset, Category } from "./types";
import { FileIcon, PaletteIcon, TypeIcon, ImageIcon } from "lucide-react";

export const categories: Category[] = [
  {
    id: "logos",
    name: "Logos",
    description: "Company logos in various formats and orientations",
    icon: "ImageIcon",
    path: "/logos",
  },
  {
    id: "favicons",
    name: "Favicons",
    description: "Website favicons in different sizes and formats",
    icon: "FileIcon",
    path: "/favicons",
  },
  {
    id: "colors",
    name: "Colors",
    description: "Brand color palette with hex, RGB, and HSL values",
    icon: "PaletteIcon",
    path: "/colors",
  },
  {
    id: "fonts",
    name: "Fonts",
    description: "Company fonts in various weights and styles",
    icon: "TypeIcon",
    path: "/fonts",
  },
];

// Sample logo assets
export const logoAssets: Asset[] = [
  {
    id: "logo-brand",
    name: "Brand Logo",
    path: "/assets/logos/logo-brand.svg",
    type: "logo",
    format: "SVG",
    fileSize: "292B",
    dimensions: "240x240",
    previewUrl: "/assets/logos/logo-brand.svg",
    tags: ["brand", "color", "primary"],
    description: "Primary brand logo for use on light backgrounds",
    variants: [
      {
        name: "PNG (Large)",
        path: "/assets/logos/primary-logo-large.png",
        previewUrl: "/assets/logos/primary-logo-large.png",
        dimensions: "1200x400",
      },
      {
        name: "PNG (Small)",
        path: "/assets/logos/primary-logo-small.png",
        previewUrl: "/assets/logos/primary-logo-small.png",
        dimensions: "600x200",
      },
    ],
  },
  {
    id: "logo-monochrome",
    name: "Monochrome Logo",
    path: "/assets/logos/logo-mono.svg",
    type: "logo",
    format: "SVG",
    fileSize: "20KB",
    dimensions: "240x80",
    previewUrl: "/assets/logos/logo-mono.svg",
    tags: ["monochrome", "black", "secondary"],
    description: "Monochrome logo for use on colored backgrounds",
    variants: [
      {
        name: "PNG (Large)",
        path: "/assets/logos/monochrome-logo-large.png",
        previewUrl: "/assets/logos/monochrome-logo-large.png",
        dimensions: "1200x400",
      },
      {
        name: "PNG (Small)",
        path: "/assets/logos/monochrome-logo-small.png",
        previewUrl: "/assets/logos/monochrome-logo-small.png",
        dimensions: "600x200",
      },
    ],
  },
  {
    id: "logo-dark",
    name: "Dark Logo",
    path: "/assets/logos/logo-dark.svg",
    type: "logo",
    format: "SVG",
    fileSize: "22KB",
    dimensions: "120x160",
    previewUrl: "/assets/logos/logo-dark.svg",
    tags: ["dark", "white"],
    description: "White logo for use in dark mode",
    variants: [
      {
        name: "PNG (Large)",
        path: "/assets/logos/vertical-logo-large.png",
        previewUrl: "/assets/logos/vertical-logo-large.png",
        dimensions: "600x800",
      },
      {
        name: "PNG (Small)",
        path: "/assets/logos/vertical-logo-small.png",
        previewUrl: "/assets/logos/vertical-logo-small.png",
        dimensions: "300x400",
      },
    ],
  },
  {
    id: "logo-boxed",
    name: "Boxed Logo",
    path: "/assets/logos/logo-boxed.svg",
    type: "logo",
    format: "SVG",
    fileSize: "22KB",
    dimensions: "120x160",
    previewUrl: "/assets/logos/logo-boxed.svg",
    tags: ["vertical", "color", "stacked"],
    description: "Brand logo boxed in white",
    variants: [
      {
        name: "PNG (Large)",
        path: "/assets/logos/vertical-logo-large.png",
        previewUrl: "/assets/logos/vertical-logo-large.png",
        dimensions: "600x800",
      },
      {
        name: "PNG (Small)",
        path: "/assets/logos/vertical-logo-small.png",
        previewUrl: "/assets/logos/vertical-logo-small.png",
        dimensions: "300x400",
      },
    ],
  },
];

// Sample favicon assets
export const faviconAssets: Asset[] = [
  {
    id: "favicon-ico",
    name: "Favicon ICO",
    path: "/assets/favicons/favicon.ico",
    type: "favicon",
    format: "ICO",
    fileSize: "16KB",
    dimensions: "Multiple sizes",
    previewUrl: "/assets/favicons/favicon.ico",
    tags: ["ico", "standard"],
    description: "Standard ICO favicon with multiple sizes embedded",
  },
  {
    id: "favicon-16",
    name: "Favicon 16x16",
    path: "/assets/favicons/favicon-16x16.png",
    type: "favicon",
    format: "PNG",
    fileSize: "1KB",
    dimensions: "16x16",
    previewUrl: "/assets/favicons/favicon-16x16.png",
    tags: ["png", "small"],
    description: "Small 16x16 favicon for older browsers",
  },
  {
    id: "favicon-32",
    name: "Favicon 32x32",
    path: "/assets/favicons/favicon-32x32.png",
    type: "favicon",
    format: "PNG",
    fileSize: "2KB",
    dimensions: "32x32",
    previewUrl: "/assets/favicons/favicon-32x32.png",
    tags: ["png", "medium"],
    description: "Medium 32x32 favicon for modern browsers",
  },
  {
    id: "apple-touch-icon",
    name: "Apple Touch Icon",
    path: "/assets/favicons/apple-touch-icon.png",
    type: "favicon",
    format: "PNG",
    fileSize: "6KB",
    dimensions: "180x180",
    previewUrl: "/assets/favicons/apple-touch-icon.png",
    tags: ["apple", "touch", "ios"],
    description: "Apple Touch Icon for iOS devices",
  },
];

// Sample color assets
export const colorAssets: Asset[] = [
  {
    id: "primary-color",
    name: "Primary Blue",
    path: "/assets/colors/primary-blue.svg",
    type: "color",
    format: "Color",
    previewUrl: "/assets/colors/primary-blue.svg",
    tags: ["primary", "blue"],
    description: "Primary brand color for main UI elements",
    colorValues: {
      hex: "#0066CC",
      rgb: "rgb(0, 102, 204)",
      hsl: "hsl(210, 100%, 40%)",
    },
  },
  {
    id: "secondary-color",
    name: "Secondary Teal",
    path: "/assets/colors/secondary-teal.svg",
    type: "color",
    format: "Color",
    previewUrl: "/assets/colors/secondary-teal.svg",
    tags: ["secondary", "teal"],
    description: "Secondary brand color for accents and highlights",
    colorValues: {
      hex: "#00CCAA",
      rgb: "rgb(0, 204, 170)",
      hsl: "hsl(170, 100%, 40%)",
    },
  },
  {
    id: "accent-color",
    name: "Accent Orange",
    path: "/assets/colors/accent-orange.svg",
    type: "color",
    format: "Color",
    previewUrl: "/assets/colors/accent-orange.svg",
    tags: ["accent", "orange"],
    description: "Accent color for calls to action and important elements",
    colorValues: {
      hex: "#FF6633",
      rgb: "rgb(255, 102, 51)",
      hsl: "hsl(15, 100%, 60%)",
    },
  },
  {
    id: "neutral-dark",
    name: "Neutral Dark",
    path: "/assets/colors/neutral-dark.svg",
    type: "color",
    format: "Color",
    previewUrl: "/assets/colors/neutral-dark.svg",
    tags: ["neutral", "dark", "text"],
    description: "Dark neutral color for text and UI elements",
    colorValues: {
      hex: "#333333",
      rgb: "rgb(51, 51, 51)",
      hsl: "hsl(0, 0%, 20%)",
    },
  },
  {
    id: "neutral-light",
    name: "Neutral Light",
    path: "/assets/colors/neutral-light.svg",
    type: "color",
    format: "Color",
    previewUrl: "/assets/colors/neutral-light.svg",
    tags: ["neutral", "light", "background"],
    description: "Light neutral color for backgrounds and UI elements",
    colorValues: {
      hex: "#F5F5F5",
      rgb: "rgb(245, 245, 245)",
      hsl: "hsl(0, 0%, 96%)",
    },
  },
];

// Sample font assets
export const fontAssets: Asset[] = [
  {
    id: "primary-font",
    name: "Montserrat",
    path: "/assets/fonts/montserrat.woff2",
    type: "font",
    format: "WOFF2",
    fileSize: "120KB",
    previewUrl: "/assets/fonts/montserrat-preview.svg",
    tags: ["primary", "sans-serif"],
    description: "Primary sans-serif font for headings and UI elements",
    fontWeights: ["400", "500", "600", "700"],
    fontStyles: ["normal", "italic"],
  },
  {
    id: "secondary-font",
    name: "Merriweather",
    path: "/assets/fonts/merriweather.woff2",
    type: "font",
    format: "WOFF2",
    fileSize: "135KB",
    previewUrl: "/assets/fonts/merriweather-preview.svg",
    tags: ["secondary", "serif"],
    description: "Secondary serif font for body text and long-form content",
    fontWeights: ["300", "400", "700"],
    fontStyles: ["normal", "italic"],
  },
  {
    id: "monospace-font",
    name: "Fira Code",
    path: "/assets/fonts/fira-code.woff2",
    type: "font",
    format: "WOFF2",
    fileSize: "95KB",
    previewUrl: "/assets/fonts/fira-code-preview.svg",
    tags: ["monospace", "code"],
    description: "Monospace font for code snippets and technical content",
    fontWeights: ["400", "500"],
    fontStyles: ["normal"],
  },
];

// Helper function to get assets by type
export function getAssetsByType(type: Asset["type"]): Asset[] {
  switch (type) {
    case "logo":
      return logoAssets;
    case "favicon":
      return faviconAssets;
    case "color":
      return colorAssets;
    case "font":
      return fontAssets;
    default:
      return [];
  }
}

// Helper function to get all assets
export function getAllAssets(): Asset[] {
  return [...logoAssets, ...faviconAssets, ...colorAssets, ...fontAssets];
}

// Helper function to get asset by ID
export function getAssetById(id: string): Asset | undefined {
  return getAllAssets().find((asset) => asset.id === id);
}

// Helper function to search assets
export function searchAssets(query: string): Asset[] {
  const lowerQuery = query.toLowerCase();
  return getAllAssets().filter((asset) => {
    return (
      asset.name.toLowerCase().includes(lowerQuery) ||
      asset.description?.toLowerCase().includes(lowerQuery) ||
      asset.tags?.some((tag) => tag.toLowerCase().includes(lowerQuery))
    );
  });
}
