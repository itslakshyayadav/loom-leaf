export const BaseSearch = (props: any) => {
  return (
    <div className="flex-1 flex justify-center" {...props}>
      <div
        style={{ minWidth: "28rem" }}
        className="relative min-w-md w-full max-w-md"
      >
        <input
          type="text"
          placeholder="Search..."
          className="w-full pl-10 border-transparent outline-none pr-4 py-1 rounded-md text-gray-800 bg-[#F3F4F6]"
        />
        <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};
