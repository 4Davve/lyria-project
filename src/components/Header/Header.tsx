import { Link } from "react-router-dom";

import MobileMenu from "./MobileMenu";

interface NavItem {
  label: string;
  to: string;
}

const Header = () => {
  const navItems: NavItem[] = [
    { label: "home", to: "/" },
    { label: "about us", to: "#" },
    { label: "contact us", to: "#" },
    { label: "menu", to: "#" },
  ];

  return (
    <>
      <header className="flex justify-between items-center absolute top-0 left-0 w-full h-20 bg-transparent px-[15px] z-50">
        <Link to="/" className="font-anton-sc font-medium text-[#BBDBFA] text-3xl z-50">
          lyria
        </Link>

        <nav className="hidden md:flex h-full">
          <ul className="flex h-full gap-[40px] text-[#FFFFFF] font-inter font-medium text-sm leading-snug tracking-widest whitespace-nowrap uppercase">
            {navItems.slice(0, 3).map(({ label, to }) => (
              <li key={to} className="flex items-center h-full">
                <Link to={to}>{label}</Link>
              </li>
            ))}
            <li className="flex items-center justify-center h-full">
              <div className="w-2 h-2 bg-[#FFFFFF]" />
            </li>
            {navItems.slice(3).map(({ label, to }) => (
              <li key={to} className="flex items-center h-full">
                <Link to={to}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <MobileMenu />
      </header>
    </>
  );
};

export default Header;
