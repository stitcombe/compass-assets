export interface Asset {
  id: string;
  name: string;
  path: string; // URL path to the asset
  type: "logo" | "favicon" | "color" | "font";
  format: string;
  fileSize?: string;
  dimensions?: string;
  previewUrl: string;
  tags?: string[];
  description?: string;
  colorValues?: {
    hex: string;
    rgb: string;
    hsl: string;
  };
  fontWeights?: string[];
  fontStyles?: string[];
  variants?: {
    name: string;
    path: string;
    previewUrl: string;
    dimensions?: string;
  }[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  path: string;
}
