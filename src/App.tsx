import ProductCard from "./components/product/ProductCard";
import "./index.css";

function App() {
  return (
    <div
      style={{
        backgroundColor: "#0a0f1e",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <ProductCard
        id={1}
        title="Classic White T-Shirt"
        category="Men's Clothing"
        description="A comfortable, classic white t-shirt made from 100% cotton. Perfect for everyday wear."
        price={249}
        imageUrl="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop"
        promotion={20}
      />
    </div>
  );
}

export default App;
