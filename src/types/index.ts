export type Variant = {
  color: string;
  size: string;
  stock: number;
  images: string[];
};

export type Product = {
  name: string;
  preview: string;
  price: number;
  variants: Variant[];
};

export type BrandMap = {
  [brand: string]: Product[];
};

export type Catalog = {
  shoes: BrandMap;
  pants: BrandMap;
  tops: BrandMap;
};
