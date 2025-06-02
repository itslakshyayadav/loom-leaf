import ProductCard from "./ProductCard";
import { products } from "./ProductData";

export default function ProductList() {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8">
            <h2 className="text-3xl font-bold mb-8">Our Products</h2>
            <div className="flex flex-wrap gap-8 justify-center">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        name={product.name}
                        price={product.price}
                        image={product.image}
                    />
                ))}
            </div>
        </div>
    );
}