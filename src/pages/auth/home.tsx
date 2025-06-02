import img1 from "@/assets/t-shirts/img1.jpg";
import img2 from "@/assets/t-shirts/img2.jpg";
import img3 from "@/assets/t-shirts/textImg3.jpg";

export default function Home() {
  return (
    <div>
      <div className="text-center bg-[#F3F4F6] p-5">
        <h1 className="text-8xl font-semibold bg-clip-text ">
          SUMMER COLLECTION
        </h1>
        <h2 className="text-5xl p-2 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Inspired by you, crafted for you
        </h2>
      </div>

      <div className="flex">
        <div>
          <img src={img1} alt="" className="h-[42rem] w-[47rem]" />
        </div>
        <div>
          <img src={img3} alt="" className="h-[42rem] w-[47rem]" />
        </div>
        <div>
          <img src={img2} alt="" className="h-[42rem] w-[47rem]" />
        </div>
      </div>
    </div>
  );
}
