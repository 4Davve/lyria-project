import { useState, useEffect } from "react";
import { NavLink, type NavLinkRenderProps } from "react-router-dom";

interface MobileNavItem {
  num: string;
  label: string;
  to: string;
}

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const navItems: MobileNavItem[] = [
    { num: "01", label: "home", to: "/" },
    { num: "02", label: "about us", to: "/about" },
    { num: "03", label: "episodes", to: "/episodes" },
    { num: "04", label: "blog", to: "/blog" },
    { num: "05", label: "contact us", to: "/contact" },
  ];

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  const handleLinkClick = (): void => {
    setIsOpen(false);
  };

  const handleMenuClick = (): void => {
    setIsOpen((prev) => !prev);
  };

  const getMobileNavLinkClass = ({ isActive }: NavLinkRenderProps): string => {
    const base =
      "flex flex-1 items-center font-anton-sc font-normal text-3xl leading-tight tracking-tight whitespace-nowrap uppercase";
    return `${base} ${isActive ? "text-[#BBDBFA]" : "text-[#FFFFFF]"}`;
  };

  return (
    <>
      <button
        onClick={handleMenuClick}
        className="md:hidden flex flex-col justify-center items-center gap-[6px] p-3 cursor-pointer hover:opacity-75 z-50 w-10 h-10 relative"
        aria-label="Toggle menu"
      >
        <span
          className={`absolute w-[24px] h-[2px] bg-[#FFFFFF] transition-all duration-300 origin-center
            ${isOpen ? "rotate-45 translate-y-0" : "-translate-y-2"}
            `}
        />
        <span
          className={`w-[24px] h-[2px] bg-[#FFFFFF] transition-all duration-300
            ${isOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"}
            `}
        />
        <span
          className={`absolute w-[24px] h-[2px] bg-[#FFFFFF] transition-all duration-300 origin-center
            ${isOpen ? "-rotate-45 translate-y-0" : "translate-y-2"}
            `}
        />
      </button>

      <div
        onClick={handleLinkClick}
        className={`md:hidden fixed inset-0 backdrop-blur-[13px] bg-black/20 transition-opacity duration-300 z-40
          ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      />
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-fit bg-[#010314] transition-transform duration-300 ease-in-out z-40
          ${isOpen ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        <div
          className={`flex flex-col items-start w-full h-auto gap-[24px] pr-[20px] pl-[15px] pb-[32px] pt-[80px] z-10
              ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
              `}
        >
          <nav className="md:block w-full">
            <ul className="flex flex-col items-start w-full gap-[10px]">
              {navItems.map(({ num, label, to }) => (
                <li key={to} className="flex flex-row w-full gap-[10px]">
                  <div className="flex items-end">
                    <span className="text-[#BBBBBB] font-inter font-normal w-[28px] text-[14px] leading-[20px] tracking-[0.15em]">
                      {num}
                    </span>
                  </div>
                  <NavLink to={to} className={getMobileNavLinkClass}>
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
