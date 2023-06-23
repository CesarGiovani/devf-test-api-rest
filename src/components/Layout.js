import { useState } from "react";
import Link from "next/link";
import { ThreeDots } from "react-loader-spinner";
import { GiBookCover, GiCharacter, GiSpellBook } from "react-icons/gi";
import { BiCameraMovie } from "react-icons/bi";
import { BsFillChatQuoteFill } from "react-icons/bs";
import { useServices } from "../context/ServicesProvider";

const NAVIGATION = [
  { name: "Books", href: "/books", icon: <GiBookCover className="mr-2" /> },
  { name: "Movies", href: "/movies", icon: <BiCameraMovie className="mr-2" /> },
  {
    name: "Character",
    href: "/characters",
    icon: <GiCharacter className="mr-2" />,
  },
  {
    name: "Quote",
    href: "/quotes",
    icon: <BsFillChatQuoteFill className="mr-2" />,
  },
  {
    name: "Chapter",
    href: "/chapters",
    icon: <GiSpellBook className="mr-2" />,
  },
];

const Layout = ({ children }) => {
  const { stateService } = useServices();
  const [isOpen, setIsopen] = useState(false);

  return (
    <div className="min-h-full">
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="font-black text-lg text-white">
                  The Lord Of The Rings API
                </h1>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {NAVIGATION.map(({ name, href, icon }) => (
                    <Link key={name} href={href}>
                      <button className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium inline-flex items-center">
                        {icon}
                        {name}
                      </button>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              {/* <!-- Mobile menu button --> */}
              <button
                onClick={() => setIsopen((prevState) => !prevState)}
                type="button"
                className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {/* <!-- Menu open: "hidden", Menu closed: "block" --> */}
                <svg
                  className={`${!isOpen ? "block" : "hidden"} h-6 w-6`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                {/* <!-- Menu open: "block", Menu closed: "hidden" --> */}
                <svg
                  className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* <!-- Mobile menu, show/hide based on menu state. --> */}
        <div className={`${isOpen ? "" : "hidden"} md:hidden`} id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            {NAVIGATION.map(({ name, href, icon }) => (
              <Link key={name} href={href}>
                <button className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium inline-flex items-center">
                  {icon}
                  {name}
                </button>
              </Link>
            ))}
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-full py-6 sm:px-6 lg:px-8">
        {stateService ? (
          <section className="container mx-auto p-10 md:p-20 antialiased flex justify-center">
            <ThreeDots
              height="80"
              width="80"
              radius="9"
              color="#721414"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          </section>
        ) : (
          children
        )}
      </main>
    </div>
  );
};

export default Layout;
