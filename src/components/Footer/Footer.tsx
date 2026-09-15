import { NavLink, type NavLinkRenderProps } from "react-router-dom";

interface NavItem {
  label: string;
  to: string;
}

const Footer = () => {
  const navLinks: NavItem[] = [
    { label: "home", to: "/" },
    { label: "blog", to: "/blog" },
    { label: "about us", to: "/about-us" },
    { label: "episodes", to: "/episodes" },
    { label: "internal epicodes", to: "/internal-episodes" },
    { label: "contact us", to: "/contact-us" },
  ];

  const getNaviLinkActive = ({ isActive }: NavLinkRenderProps): string => {
    return isActive ? "text-[#FFFFFF] font-medium" : "text-[#BBBBBB] font-normal";
  };
  
  return (
    <>
      <footer className="bg-[#010314] text-[#FFFFFF] uppercase">
        <div>
          <div className="grid grid-cols-1 auto-cols-fr auto-rows-auto gap-[32px] px-[20px] pt-[32px] py-[32px]">
            <a href="/" className="font-anton-sc font-normal text-[#BBDBFA]  text-[54px] leading-tight tracking-tight">
              lyria
            </a>
            <div className="flex flex-col gap-[10px]">
              {navLinks.map(({ label, to }) => (
                <NavLink key={to} to={to} className={getNaviLinkActive}>
                  {label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
        <div className="px-[20px] pb-[30px]">
          <p className="font-inter font-normal text-[#BBBBBB] text-[16px] text-start">
            © 2026 temlis. All right Reserved
          </p>
        </div>
        <div className="flex flex-row justify-center items-end flex-row gap-[20px]">
          <div className="relative overflow-hidden h-[200px]">
            <span className="font-anton-sc font-normal text-[#BBDBFA] text-[220px] leading-none tracking-[-0.03em] uppercase">
              lyria
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
