import MobileMenu from "./MobileMenu";

const Header = () => {
  const navItems = [
    { label: "home", href: "/" },
    { label: "about us", href: "/about" },
    { label: "contact us", href: "/contact" },
    { label: "menu", href: "/menu" },
  ];

  return (
    <>
      <header className="flex justify-between items-center absolute top-0 left-0 w-full h-20 bg-transparent px-[15px] z-50">
        <a href="#" className="font-anton-sc font-medium text-[#BBDBFA] text-3xl z-50">
          lyria
        </a>

        <nav className="hidden md:flex h-full">
          <ul className="flex h-full gap-[40px] text-[#FFFFFF] font-inter font-medium text-sm leading-snug tracking-widest whitespace-nowrap uppercase">
            {navItems.slice(0, 3).map(({ label, href }) => (
              <li key={href} className="flex items-center h-full">
                <a href={href}>{label}</a>
              </li>
            ))}
            <li className="flex items-center justify-center h-full">
              <div className="w-2 h-2 bg-[#FFFFFF]" />
            </li>
            {navItems.slice(3).map(({ label, href }) => (
              <li key={href} className="flex items-center h-full">
                <a href={href}>{label}</a>
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
