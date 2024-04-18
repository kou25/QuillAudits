"use client";
import Image from "next/image";
import Logo from "../public/logo.png";
import Avatar from "../public/avatar.png";
import { FiChevronDown } from "react-icons/fi";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  return (
    <header className="flex h-[52px] w-full  justify-between bg-quill-300 rounded-sm">
      <div className="flex justify-between items-center w-full gap-4">
        <div className="w-[212px] h-full  border-r border-gray-700 flex justify-center items-center">
          <Image src={Logo} alt="LOGO" width={"24"} height={"28"} />
          <p className="text-white text-lg font-light tracking-wide ml-2">
            QuillShield
          </p>
        </div>
        <div className="flex-1 ">
          <ul className="flex justify-end cursor-pointer space-x-8 text-base pr-4">
            <NextNavItem href="/" label="AI Audits" currentPath={pathname} />
            <NextNavItem
              href="#"
              label="Manual Audits"
              currentPath={pathname}
            />
            <NextNavItem href="#" label="RedTeam" currentPath={pathname} />
            <NextNavItem href="#" label="Monitor" currentPath={pathname} />
            <NextNavItem
              href="#"
              label="Incident Response"
              currentPath={pathname}
            />
          </ul>
        </div>
        <div className="w-[212px] h-full  border-l border-gray-700 flex  items-center">
          <Image
            src={Avatar}
            alt="Avatar"
            width={"24"}
            height={"28"}
            className={"ml-5"}
          />
          <p className="text-white text-sm font-light  ml-2 mr-4">Johhny Doe</p>
          <FiChevronDown className="text-gray-500 h-6 w-5" />
        </div>
      </div>
    </header>
  );
};

const NextNavItem = ({
  href,
  label,
  currentPath
}: {
  href: string;
  label: string;
  currentPath: string;
}) => {
  const isActive = href === currentPath;

  return (
    <li className="font-[300]">
      <Link
        href={href}
        className="w-full flex flex-col justify-center items-center"
      >
        <p
          className={` ${
            isActive
              ? "text-blue-500 font-medium "
              : "text-gray-400 hover:text-blue-500"
          }`}
        >
          {label}
        </p>
        {isActive && (
          <div className="w-1/2 mx-4 mt-1 border-b-2 border-blue-500" />
        )}
      </Link>
    </li>
  );
};

export default Header;
