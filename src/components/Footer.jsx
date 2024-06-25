// @ts-nocheck
import logo from "../assets/youelax.jpg";

function Footer() {
  return (
    <div>
      <footer className="bg-white rounded-lg border-t ">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="https://yourelax.vercel.app/"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img src={logo} className="h-8" alt="You Relax Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap ">
                YouRelax
              </span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 ">
              <li>
                <a href="mailto:hello@rohanvaidya.tech" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center ">
            © 2024{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              YouRelax™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer