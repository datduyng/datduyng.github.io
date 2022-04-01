import React, { useEffect, useState } from "react";
import cn from "classnames";
import Masonry from "react-masonry-css";
import Image from "next/image";

import styles from "../styles/home.module.css";
import NavLink from "../components/nav-link";
import useMediaQuery from "../lib/use-media-query";
import HeaderCard from "../components/home-page-cards/header-card";
import FeaturedProjectCard from "../components/home-page-cards/featured-project-card";
import ProjectListCard from "../components/home-page-cards/project-list-card";
import LatestNoteCard from "../components/home-page-cards/latest-note-card";
import FavoriteArtistCard from "../components/home-page-cards/favorite-artist-card";
import { GetStaticProps, NextPageContext } from "next";
import { getTopArtist, SpotifyArtist } from "../lib/spotify-client";

export default function HomeIndex({
  favArtists,
}: {
  favArtists: SpotifyArtist[];
}) {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className={`mx-auto max-w-screen-md`}>
      <div className="flex flex-col justify-center items-center">
        <Header />
        <Spacer />
        <HeaderCard />
        <Spacer />
        <Masonry
          breakpointCols={isMobile ? 1 : 2}
          className={styles["masonry-grid"]}
        >
          <FeaturedProjectCard />
          <ProjectListCard />
          <LatestNoteCard />
          <FavoriteArtistCard favArtists={favArtists} />
        </Masonry>
      </div>
    </div>
  );
}

const Spacer = () => <div className="h-7" />;

const Header = () => {
  return (
    <nav className="flex items-center justify-between w-full text-secondary pt-8">
      <div>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/notes">Notes</NavLink>
        <NavLink href="/projects">Projects</NavLink>
      </div>
      <div>
        <NavLink href="/projects">Github</NavLink>
      </div>
    </nav>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const favArtists = (await getTopArtist()) || null;
  return {
    props: {
      favArtists,
    },
  };
};
