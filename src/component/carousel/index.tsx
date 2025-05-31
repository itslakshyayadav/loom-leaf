import React, { useState, useEffect, useRef } from "react";

interface CarouselProps {
  items: Array<{ id: string | number; content: any }>;
  className?: string;
  mode?: "manual" | "auto";
  interval?: number; // in ms, default 5000
}

const Carousel: React.FC<CarouselProps> = ({
  items,
  className = "",
  mode = "manual",
  interval = 5000,
}) => {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const prev = () =>
    setCurrent((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  const next = () =>
    setCurrent((prev) => (prev === items.length - 1 ? 0 : prev + 1));

  useEffect(() => {
    if (mode === "auto") {
      timerRef.current && clearInterval(timerRef.current);
      timerRef.current = setInterval(() => {
        setCurrent((prev) => (prev === items.length - 1 ? 0 : prev + 1));
      }, interval);
      return () => {
        timerRef.current && clearInterval(timerRef.current);
      };
    } else {
      timerRef.current && clearInterval(timerRef.current);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode, interval, items.length]);

  return (
    <div className={`relative w-full max-w-xl mx-auto ${className}`}>
      <div className="overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="w-full flex-shrink-0 flex justify-center items-center h-[23rem]  bg-transparent"
            >
              {item.content}
            </div>
          ))}
        </div>
      </div>
      {mode !== "auto" && (
        <>
          <button
            onClick={prev}
            className="absolute top-1/2 left-2 -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 shadow hover:bg-opacity-100 transition"
            aria-label="Previous"
          >
            &#8592;
          </button>
          <button
            onClick={next}
            className="absolute top-1/2 right-2 -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 shadow hover:bg-opacity-100 transition"
            aria-label="Next"
          >
            &#8594;
          </button>
        </>
      )}
      <div className="flex justify-center mt-4 space-x-2">
        {items.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full ${
              current === idx ? "bg-blue-500" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
            disabled={mode === "auto"}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
