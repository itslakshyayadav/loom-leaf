interface ProductCardProps {
    name: string;
    price: number;
    image: string;
}

export default function ProductCard({ name, price, image }: ProductCardProps) {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden w-64">
            <img src={image} alt={name} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-lg font-semibold">{name}</h3>
                <p className="text-gray-700 font-bold mt-2">₹{price}</p>
            </div>
        </div>
    );
}