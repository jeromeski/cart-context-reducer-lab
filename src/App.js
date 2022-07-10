import CartProvider from "./context/cart.context";
import Counter from "./counter";
import "./styles.css";

export default function App() {
  return (
    <CartProvider>
      <div className="App">
        <Counter />
      </div>
    </CartProvider>
  );
}
