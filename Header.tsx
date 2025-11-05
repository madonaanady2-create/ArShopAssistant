import Header from "../Header";
import { ThemeProvider } from "@/lib/theme-provider";

export default function HeaderExample() {
  return (
    <ThemeProvider>
      <Header cartItemCount={3} onCartClick={() => console.log("Cart clicked")} />
    </ThemeProvider>
  );
}
