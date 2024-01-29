"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const links = [
    { name: "Home", href: "/" },
    { name: "My Portfolio", href: "/portfolio" },
    { name: "About Me", href: "/about" },
    { name: "Contact Me", href: "/contact" },
  ];
  const pathName = usePathname();
  return (
    <header className="bg-gray-800 p-4 sticky top-0 z-10">
      <nav className="container mx-auto">
        <ul className="flex flex-wrap space-x-4 text-white">
          {links.map((link) => {
            return (
              <li key={link.name}>
                <Link
                  className={`${
                    pathName === link.href
                      ? "text-cyan-300"
                      : "hover:text-gray-300 hover:underline "
                  }`}
                  href={link.href}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
