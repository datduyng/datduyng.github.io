import Link from "next/link";
import React from "react";
import { FaLinkedin, FaGithub, FaRegFilePdf } from "react-icons/fa";
import Layout from "../components/layout";

export default function Welcome() {
  return (
    <Layout>
 <div
      className="flex flex-col mt-20"
      style={{
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <div className="tastetext text-xl">All good. Taste is individual </div>
      <iframe
        src="https://giphy.com/embed/3o6wrebnKWmvx4ZBio"
        width="480"
        height="270"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className="mt-7 tastetext text-xl">
        Know someone who might interested in Dom?
      </div>
      <div className="mt-10">
        <a
          className="group inline-flex 
      items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-sky-50 text-sky-600 hover:bg-sky-100 hover:text-sky-700 focus:ring-sky-600 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500"
          href="mailto:peakatmyresumeformyemail@gmail.com"
        >
          Send an Email
        </a>
      </div>
    </div>
    </Layout>
   
  );
}
