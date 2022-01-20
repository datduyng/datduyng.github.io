import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaRegFilePdf,
  FaProductHunt,
} from "react-icons/fa";
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
    href: "https://drive.google.com/file/d/1SPiRTXqf17ZNlhvNR6tgZHnR4bgF9IpS/view",
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
      className={`hover-scale h-14 w-full 
      shadow-lg rounded-md
      text-white font-semibold 
      hover:opacity-75 place-content-center`}
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
  const router = useRouter();
  const [itsaMatch, setItsaMatch] = useState<boolean | null>(null);
  useEffect(() => {
    if (router.isReady) {

      setItsaMatch(router.query.match !== undefined);
    }
  }, [router.isReady]);

  return (
    <div
      className="flex flex-col mx-5 mt-10"
      style={{
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      {itsaMatch === null ? (
        <div className="h-72"></div>
      ) : itsaMatch ? (
        <div
          className="flex flex-col justify-center items-center
        text-center"
        >
          <div className="text-red-600 mtext text-6xl mt-10 ">
            It's a match!
          </div>
          <div className="flex flex-row gap-10 mt-5">
            <div
              style={{
                backgroundColor: '#e17055',
                backgroundSize: "contain",
                minHeight: "150px",
                minWidth: "150px",
                borderRadius: '50%'
              }}
            />
            <img
              src="/avatar.png"
              style={{
                backgroundSize: "contain",
                height: "150px",
                width: "150px",
              }}
              alt="Dominic Nguyen"
            />
          </div>
          <div className="text-base font-semibold mt-5">
            You can now connect with Dom on LinkedIn and Github!!
            </div>
        </div>
      ) : (
        <div
          className="sm:w-full md:w-3/4 xl:w-3/4 
        flex flex-col justify-center items-center
        text-center"
        >
          <img
            src="/avatar.png"
            style={{
              backgroundSize: "contain",
              height: "300px",
              width: "300px",
            }}
            alt="Dominic Nguyen"
          />
          <div className="text-4xl font-semibold mt-6">Dominic Nguyen</div>
          <hr className="mt-2" />
          <div className="mt-2">
            Howdy, I'm Dom. I'm a passionate Tech Lover from Seattle, WA. Apart
            from that, I'm a software engineer and an opensource enthusiast
            inspired by imagination
          </div>
        </div>
      )}

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
  return (
    <Layout>
      <Welcome />
    </Layout>
  );
}
