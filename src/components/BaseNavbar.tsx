import logo from "@/assets/LL.jpg";
export default function BaseNavbar() {
  return (
    // <nav className="bg-gray-50 p-4">
    //     <div className="container mx-auto flex justify-between items-center">
    //         <div className="text-white text-lg font-bold">MyApp</div>
    //         <ul className="flex space-x-4">
    //             <li><a href="/home" className="text-black hover:text-gray-300">Home</a></li>
    //             <li><a href="/about" className="text-black hover:text-gray-300">About</a></li>
    //             <li><a href="/contact" className="text-black hover:text-gray-300">Contact</a></li>
    //         </ul>
    //     </div>
    // </nav>

    <div className="px-4 bg-white border-b">
      <header className="relative bg-white">
        <nav className="  ">
          <div className=" border-gray-200">
            <div className="flex h-16 items-center gap-5 justify-between">
              {/* Mobile div button (non-functional) */}
              <button className="rounded-md bg-white p-2 text-gray-400 lg:hidden">
                <span className="sr-only">Open div</span>
                <svg
                  className="size-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <a href="#">
                  <img alt="Logo" src={logo} className="h-16 w-auto" />
                </a>
              </div>

              {/* Desktop navigation links */}
              <div className="hidden lg:flex lg:space-x-8">
                <a
                  href="#"
                  className="text-sm font-medium text-gray-700 hover:text-gray-800"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-sm font-medium text-gray-700 hover:text-gray-800"
                >
                  Men
                </a>
                <a
                  href="#"
                  className="text-sm font-medium text-gray-700 hover:text-gray-800"
                >
                  Company
                </a>
                <a
                  href="#"
                  className="text-sm font-medium text-gray-700 hover:text-gray-800"
                >
                  Stores
                </a>
              </div>

              {/* Right-side icons */}
              <div className="ml-auto flex items-center">
                {/* Cart Icon */}
                <a
                  href="#"
                  className="ml-4 flex items-center p-2 text-gray-400 hover:text-gray-500"
                >
                  <svg
                    className="size-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 3h2l.4 2M7 13h14l1-5H6.4M7 13l-1.3 5.2a1 1 0 00.97 1.3h12.66a1 1 0 00.97-1.3L17 13M10 21a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z"
                    />
                  </svg>
                  <span className="ml-2 text-sm font-medium text-gray-700">
                    0
                  </span>
                </a>

                {/* Search Icon */}
                <a href="#" className="p-2  text-gray-400 hover:text-gray-500">
                  <svg
                    className="size-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
                    />
                  </svg>
                </a>

                <div className="relative ml-3">
                  <div>
                    <div className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user div</span>
                      <img
                        alt=""
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        className="size-8 rounded-full"
                      />
                    </div>
                  </div>
                  <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in">
                    <div>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                      >
                        Your Profile
                      </a>
                    </div>
                    <div>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                      >
                        Settings
                      </a>
                    </div>
                    <div>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                      >
                        Sign out
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
