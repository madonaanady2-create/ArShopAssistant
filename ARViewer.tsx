import { useState } from "react";
import ARViewer from "../ARViewer";
import { Button } from "@/components/ui/button";
import sofaImage from "@assets/generated_images/Gray_sofa_product_a0a5db59.png";

export default function ARViewerExample() {
  const [isOpen, setIsOpen] = useState(false);

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
    <div className="p-4">
      <Button onClick={() => setIsOpen(true)}>Open AR Viewer</Button>
      <ARViewer
        isOpen={isOpen}
        product={mockProduct}
        onClose={() => setIsOpen(false)}
        onAddToCart={(p) => console.log("Added to cart:", p.name)}
      />
    </div>
  );
}
