import ProductGrid from "../ProductGrid";
import sofaImage from "@assets/generated_images/Gray_sofa_product_a0a5db59.png";
import tableImage from "@assets/generated_images/Coffee_table_product_bce8ceaa.png";
import lampImage from "@assets/generated_images/Floor_lamp_product_e2814c68.png";

export default function ProductGridExample() {
  const mockProducts = [
    {
      id: "1",
      name: "Modern Gray Sofa",
      description: "Comfortable sofa",
      price: "899.99",
      category: "living-room",
      imageUrl: sofaImage,
      arAvailable: 1,
    },
    {
      id: "2",
      name: "Oak Coffee Table",
      description: "Round coffee table",
      price: "349.99",
      category: "living-room",
      imageUrl: tableImage,
      arAvailable: 1,
    },
    {
      id: "3",
      name: "Floor Lamp",
      description: "Modern floor lamp",
      price: "129.99",
      category: "lighting",
      imageUrl: lampImage,
      arAvailable: 1,
    },
  ];

  return (
    <div className="p-4">
      <ProductGrid
        products={mockProducts}
        onViewAR={(p) => console.log("View AR:", p.name)}
        onAddToCart={(p) => console.log("Add to cart:", p.name)}
      />
    </div>
  );
}
