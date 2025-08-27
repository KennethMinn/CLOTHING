import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { catalog } from "@/constants";

type Category = keyof typeof catalog;

const Home = () => {
  const categories = Object.keys(catalog) as Category[];
  const [selectedCategory, setSelectedCategory] = useState<Category>(
    categories[0]
  );
  const [selectedBrand, setSelectedBrand] = useState<string>("");

  const brands = Object.keys(catalog[selectedCategory]);

  // ✅ Automatically set default brand when category changes
  useEffect(() => {
    if (brands.length > 0) {
      setSelectedBrand(brands[0]);
    } else {
      setSelectedBrand("");
    }
  }, [selectedCategory, brands]);

  const onSelectCategory = (category: Category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="space-y-4">
      {/* Category Buttons */}
      <div className="flex items-center gap-x-2">
        {categories.map((category) => (
          <Button
            key={category}
            onClick={() => onSelectCategory(category)}
            variant={category === selectedCategory ? "default" : "outline"}
          >
            {category}
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
            {brand}
          </Button>
        ))}
      </div>

      {/* Debug / Output */}
      <div className="text-muted-foreground">
        Selected Category: <b>{selectedCategory}</b> <br />
        Selected Brand: <b>{selectedBrand || "None"}</b>
      </div>
    </div>
  );
};

export default Home;
