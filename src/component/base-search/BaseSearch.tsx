
export const BaseSearch = (props: any) => {

    return (
        <div className="flex-1 flex justify-center" {...props}>
            <div className="relative w-full max-w-xs">
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full pl-10 pr-4 py-1 rounded-md bg-black border text-gray-200 placeholder-gray-400"
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
    )
}