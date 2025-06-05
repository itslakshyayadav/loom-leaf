import BaseIcon from "@/component/base-icon";
import { Link } from "react-router-dom";

interface ProductCardProps {
  key?: string | number;
  name?: string;
  title?: string;
  price?: number;
  originalPrice?: number;
  image?: any;
}

export default function ProductCard({
  key,
  name,
  price,
  image,
  title,
  originalPrice,
}: ProductCardProps) {
  const sizes = ["S", "M", "L", "XL", "XXL"];

  return (
    <div
      key={key}
      className="group relative bg-white rounded-lg shadow-md overflow-hidden max-h-max min-h-[30rem] w-[20rem] "
    >
      {/* Image wrapper to allow absolute positioning inside */}
      <div className="relative w-full h-96">
        <Link to="#">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </Link>

        {/* Size Chart Overlay on Image */}
        <div className="absolute rounded-t-md bottom-0 left-0 w-full bg-white/90 px-4 py-3 z-10 opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-700 ease-out">
          <h4 className="text-sm font-semibold text-gray-800 mb-2">
            Select Size
          </h4>
          <div className="flex justify-between gap-2">
            {sizes.map((size) => (
              <button
                key={size}
                className="w-10 h-10 flex items-center justify-center border border-gray-400 rounded text-sm font-medium hover:bg-black hover:text-white transition"
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Text & Price Section */}
      <div className="px-2 py-2">
        <div>
          <h3 className="text-gray-700 font-semibold">{name}</h3>
          <p className="text-gray-500 text-sm">{title}</p>
        </div>

        <div className="flex gap-2 items-center justify-between mt-2">
          <div className="flex gap-2 items-center">
            <span className="font-bold text-gray-700">Rs. {price}</span>
            <span className="line-through text-gray-500">
              Rs. {originalPrice}
            </span>
          </div>

          <button className="flex items-center justify-center bg-black text-white text-sm p-2 rounded-full opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700 ease-out">
            <BaseIcon name="bag" color="text-white" className="" />
          </button>
        </div>
      </div>
    </div>
  );
}
