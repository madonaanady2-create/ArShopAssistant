import { useState } from "react";
import ShoppingCart from "../ShoppingCart";
import { Button } from "@/components/ui/button";
import sofaImage from "@assets/generated_images/Gray_sofa_product_a0a5db59.png";
import tableImage from "@assets/generated_images/Coffee_table_product_bce8ceaa.png";

export default function ShoppingCartExample() {
  const [isOpen, setIsOpen] = useState(true);
  const [items, setItems] = useState([
    {
      product: {
        id: "1",
        name: "Modern Gray Sofa",
        description: "Comfortable sofa",
        price: "899.99",
        category: "living-room",
        imageUrl: sofaImage,
        arAvailable: 1,
      },
      quantity: 1,
    },
    {
      product: {
        id: "2",
        name: "Oak Coffee Table",
        description: "Round table",
        price: "349.99",
        category: "living-room",
        imageUrl: tableImage,
        arAvailable: 1,
      },
      quantity: 2,
    },
  ]);

  return (
    <div className="h-screen">
      <Button onClick={() => setIsOpen(true)}>Open Cart</Button>
      <ShoppingCart
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        items={items}
        onUpdateQuantity={(id, qty) => {
          if (qty === 0) {
            setItems(items.filter((i) => i.product.id !== id));
          } else {
            setItems(items.map((i) =>
              i.product.id === id ? { ...i, quantity: qty } : i
            ));
          }
        }}
        onRemoveItem={(id) => setItems(items.filter((i) => i.product.id !== id))}
        onCheckout={() => console.log("Checkout")}
      />
    </div>
  );
}
