import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { catalog } from "@/constants";
import type { Product } from "@/types";
import ProductCard from "@/components/product_card";

type Category = keyof typeof catalog | "all";

const Home = () => {
  const categories = ["all", ...Object.keys(catalog)] as Category[];
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");
  const [selectedBrand, setSelectedBrand] = useState<string>("all");

  const brands = useMemo(() => {
    if (selectedCategory === "all") {
      // Get all unique brands across all categories
      const brandSet = new Set<string>();
      for (const category of Object.keys(catalog)) {
        Object.keys(catalog[category as keyof typeof catalog]).forEach((b) =>
          brandSet.add(b)
        );
      }
      return ["all", ...Array.from(brandSet)];
    } else {
      return ["all", ...Object.keys(catalog[selectedCategory])];
    }
  }, [selectedCategory]);

  // Update selectedBrand when category changes
  useEffect(() => {
    setSelectedBrand(brands[0] || "all");
  }, [brands]);

  // 🧾 Get visible products
  const products = useMemo(() => {
    let items: Product[] = [];

    if (selectedCategory === "all") {
      for (const category of Object.keys(catalog)) {
        const categoryData = catalog[category as keyof typeof catalog];
        for (const brand of Object.keys(categoryData)) {
          if (selectedBrand === "all" || selectedBrand === brand) {
            items = items.concat(categoryData[brand]);
          }
        }
      }
    } else {
      const categoryData = catalog[selectedCategory];
      if (selectedBrand === "all") {
        for (const brand of Object.keys(categoryData)) {
          items = items.concat(categoryData[brand]);
        }
      } else {
        items = categoryData[selectedBrand] || [];
      }
    }

    return items;
  }, [selectedCategory, selectedBrand]);

  return (
    <div className="space-y-6">
      {/* Category Buttons */}
      <div className="flex items-center gap-x-2">
        {categories.map((category) => (
          <Button
            key={category}
            onClick={() => setSelectedCategory(category)}
            variant={category === selectedCategory ? "default" : "outline"}
          >
            {category.toUpperCase()}
          </Button>
        ))}
      </div>

      {/* Brand Buttons */}
      <div className="flex items-center gap-x-2">
        {brands.map((brand) => (
          <Button
            key={brand}
            onClick={() => setSelectedBrand(brand)}
            variant={brand === selectedBrand ? "default" : "outline"}
          >
            {brand.toUpperCase()}
          </Button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product, idx) => (
          <ProductCard product={product} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Home;
