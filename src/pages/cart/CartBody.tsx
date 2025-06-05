export default function CartBody() {
  return (
    <div className="space-y-4">
      <div className="flex gap-4 bg-white p-4 mx-auto rounded-lg hover:shadow-md">
        <img
          src="https://i.pinimg.com/736x/f9/23/65/f923651d7859369a028bd0dff98c2f3e.jpg"
          alt="item"
          className="rounded w-28 h-32"
        />
        <div className="w-full">
          <h3 className="font-semibold">
            Product plain t-shirt for men unisex Name
          </h3>
          <p className="text-gray-500 text-sm">Size: M</p>
          <p className="text-gray-700">Rs. 1,099.00</p>
          <div className="flex justify-between mt-5 items-center">
            <div className="flex border h-8  px-2 items-center justify-center border-gray-700 rounded-md gap-2">
              <button className="text-3xl mb-1">-</button>
              <span>1</span>
              <button className="text-2xl mb-1">+</button>
            </div>
            <button className="border px-2 py-1 mt-1 text-sm border-gray-700 hover:text-white rounded-sm hover:bg-black duration-500 ease-out">
              Remove
            </button>
          </div>
        </div>
      </div>

      <hr />
      <div className="text-right font-bold text-lg">Total: Rs. 1,099.00</div>
    </div>
  );
}
