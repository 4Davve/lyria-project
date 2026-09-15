import { ReactNode } from "react";

interface ButtonsProps {
  children: ReactNode;
  href: string;
}

const ButtonsHero = ({ children, href }: ButtonsProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center font-inter text-[12px] lg:text-[16px] px-[30px] py-[10px] text-[#FFFFFF] whitespace-nowrap uppercase cursor-pointer"
    >
      {children}
    </a>
  );
};

export default ButtonsHero;
