import React, { useEffect, useState } from "react";
import cn from "classnames";
import Masonry from "react-masonry-css";
import Image from "next/image";

import styles from '../styles/home.module.css';
import NavLink from "../components/nav-link";
import Card from "../components/stateless/card";
import HeaderCard from "../components/home-page-cards/header-card";
import FeaturedProjectCard from "../components/home-page-cards/featured-project-card";
import ProjectListCard from "../components/home-page-cards/project-list-card";

export default function HomeIndex() {
  const nums = [1, 2, 3, 4, 5, 6, 7]
  return (
    <div className={`mx-auto max-w-screen-md`}>
      <div className="flex flex-col justify-center">
        <Header />
        <Spacer />
        <HeaderCard />
        <Spacer />
        <Masonry breakpointCols={2} className={styles['masonry-grid']}>
          <FeaturedProjectCard />
          <ProjectListCard />
        </Masonry>
      </div>
    </div>
  );
}

const Spacer = () => <div className="h-7" />;

const Header = () => {
  return (<nav className="flex items-center justify-between w-full text-secondary pt-8">
    <div>
      <NavLink href="/">Home</NavLink>
      <NavLink href="/notes">Notes</NavLink>
      <NavLink href="/projects">Projects</NavLink>
    </div>
    <div>
      <NavLink href="/projects">Github</NavLink>
    </div>
  </nav>)
}