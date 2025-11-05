import { useState } from "react";
import CategoryFilter, { type Category } from "../CategoryFilter";

export default function CategoryFilterExample() {
  const [category, setCategory] = useState<Category>("all");

  return (
    <div className="p-4">
      <CategoryFilter
        selectedCategory={category}
        onCategoryChange={(cat) => {
          setCategory(cat);
          console.log("Category changed:", cat);
        }}
      />
    </div>
  );
}
