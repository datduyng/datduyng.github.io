import Link from "next/link";
import React from "react";
import { FaLinkedin, FaGithub, FaRegFilePdf, FaProductHunt } from "react-icons/fa";
import Layout from "../components/layout";
type ButtonType = {
  color: string;
  name: string;
  icon: React.ReactNode;
  href?: string;
  newTab: boolean;
};
const links: ButtonType[] = [
  {
    name: "My Resume",
    color: "#00ab6c",
    icon: <FaRegFilePdf fontSize={20} color={"#fff"} />,
    href: "https://www.linkedin.com/in/datdnguyen/",
    newTab: true,
  },
  {
    name: "Product Gallery",
    color: "#1ab7ea",
    icon: <FaProductHunt fontSize={20} color={"#fff"} />,
    href: "/products",
    newTab: false,
  },
  {
    name: "LinkedIn",
    color: "#2867B2",
    icon: <FaLinkedin fontSize={20} />,
    href: "https://www.linkedin.com/in/datdnguyen/",
    newTab: true,
  },
  {
    name: "Github",
    color: "#6e5494",
    icon: <FaGithub fontSize={20} />,
    href: "https://www.github.com/datduyng/",
    newTab: true,
  },
];
const ButtonTemplate = ({
  color,
  name,
  icon,
  href,
  newTab = false,
}: ButtonType) => {
  const buttonContent = (
    <button
      style={{
        backgroundColor: color,
      }}
      className={`hover-scale lg:m-5 md:5 shadow-lg sm:3.5 text-white hover:opacity-75 font-semibold rounded-md w-full place-content-center h-14`}
    >
      <div className="flex justify-center">
        {icon}
        <span className="ml-2">{name}</span>
      </div>
    </button>
  );
  return (
    <div>
      {newTab ? (
        <a target="_blank" href={href}>
          {buttonContent}
        </a>
      ) : (
        <Link href={href || "/"}>{buttonContent}</Link>
      )}
    </div>
  );
};
export function Welcome() {
  return (
      <div
        className="flex flex-col mx-5"
        style={{
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <div className="text-red-600 mtext text-6xl mt-10 ">It's a match!</div>

        <div className="w-full mt-5 flex flex-col gap-6">
          {links.map((link) => (
            <ButtonTemplate
              name={link.name}
              icon={link.icon}
              color={link.color}
              href={link.href}
              newTab={link.newTab}
            />
          ))}
        </div>
      </div>
  );
}


export default function WelcomeWrap() {
  return <Layout><Welcome /></Layout>
}