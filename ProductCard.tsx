import ProductCard from "../ProductCard";
import sofaImage from "@assets/generated_images/Gray_sofa_product_a0a5db59.png";

export default function ProductCardExample() {
  const mockProduct = {
    id: "1",
    name: "Modern Gray Sofa",
    description: "Comfortable 3-seater sofa",
    price: "899.99",
    category: "living-room",
    imageUrl: sofaImage,
    arAvailable: 1,
  };

  return (
    <div className="max-w-sm p-4">
      <ProductCard
        product={mockProduct}
        onViewAR={(p) => console.log("View AR:", p.name)}
        onAddToCart={(p) => console.log("Add to cart:", p.name)}
      />
    </div>
  );
}
