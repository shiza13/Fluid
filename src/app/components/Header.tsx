// app/components/Header.tsx
import Image from "next/image";

export default function Header() {
  return (
    <header className="shadow-md tracking-wide relative z-50">
      {/* Top Bar */}
      <section className="py-2 bg-[#004080] text-white text-right px-10">
        <p className="text-sm">
          <span className="mx-3 font-semibold">Address:</span> SWF New York
          185669
          <span className="mx-3 font-semibold">Contact:</span> +1 800 333 665
          <span className="mx-3 font-semibold">Email:</span> info@fms.com
        </p>
      </section>

      {/* Main Navbar */}
      <div className="flex flex-wrap items-center justify-between gap-4 px-10 py-3 bg-white min-h-[65px]">
        {/* Logo */}
        <a href="/">
          <Image
            src="/Mainlogo.png"
            alt="Fluid Management Service Logo"
            width={90}
            height={50}
            priority
          />
        </a>

        {/* Nav Menu */}
        <div
          id="collapseMenu"
          className="max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50"
        >
          {/* Close button on mobile */}
          <button
            id="toggleClose"
            className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border border-gray-200 cursor-pointer"
          >
            ✕
          </button>

          {/* Nav Links */}
          <ul className="lg:flex lg:gap-x-6 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
            <li className="mb-6 hidden max-lg:block">
              <a href="/">
                <Image
                  src="/images/fms-logo.png"
                  alt="Fluid Management Service Logo"
                  width={150}
                  height={50}
                />
              </a>
            </li>
            <li>
              <a
                href="/"
                className="hover:text-blue-700 text-blue-700 block font-medium text-[15px]"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/About"
                className="hover:text-blue-700 text-slate-900 block font-medium text-[15px]"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="hover:text-blue-700 text-slate-900 block font-medium text-[15px]"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/products"
                className="hover:text-blue-700 text-slate-900 block font-medium text-[15px]"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="/industries"
                className="hover:text-blue-700 text-slate-900 block font-medium text-[15px]"
              >
                Industries
              </a>
            </li>
            <li>
              <a
                href="/plants"
                className="hover:text-blue-700 text-slate-900 block font-medium text-[15px]"
              >
                Plants & Components
              </a>
            </li>
            <li>
              <a
                href="/blog"
                className="hover:text-blue-700 text-slate-900 block font-medium text-[15px]"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-blue-700 text-slate-900 block font-medium text-[15px]"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Open Button */}
        <div className="flex max-lg:ml-auto">
          <button id="toggleOpen" className="lg:hidden cursor-pointer">
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}
