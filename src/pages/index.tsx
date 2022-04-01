import React from "react";
import Masonry from "react-masonry-css";

import styles from "../styles/home.module.css";
import useMediaQuery from "../lib/use-media-query";
import HeaderCard from "../components/home-page-cards/header-card";
import Header from "../components/header";
import FeaturedProjectCard from "../components/home-page-cards/featured-project-card";
import ProjectListCard from "../components/home-page-cards/project-list-card";
import LatestNoteCard from "../components/home-page-cards/latest-note-card";
import FavoriteArtistCard from "../components/home-page-cards/favorite-artist-card";
import { GetStaticProps } from "next";
import { getTopArtist, SpotifyArtist } from "../lib/spotify-client";
import NoSsr from "../components/stateless/no-ssr";

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
        {/* HACK: for now render mobile view without ssr.
         * react-masonry-css doesn't support ssr as on the server,
         * the library would render this grid in desktop view but
         * if user has a mobile, then this library won't automatically
         * update the column size. How to fix? fork this react-masonry-css library
         * or use a different one
         */}
        {isMobile ? (
          <NoSsr>
            <CardList favArtists={favArtists} isMobile={true} />
          </NoSsr>
        ) : (
          <CardList favArtists={favArtists} isMobile={false} />
        )}
      </div>
    </div>
  );
}

interface CardListProps {
  favArtists: SpotifyArtist[];
  isMobile: boolean;
}
const CardList: React.FC<CardListProps> = ({ favArtists, isMobile }) => {
  return (
    <Masonry
      breakpointCols={isMobile ? 1 : 2}
      className={styles["masonry-grid"]}
    >
      <FeaturedProjectCard />
      <ProjectListCard />
      <LatestNoteCard />
      <FavoriteArtistCard favArtists={favArtists} />
    </Masonry>
  );
};

const Spacer = () => <div className="h-7" />;

export const getStaticProps: GetStaticProps = async () => {
  const favArtists = (await getTopArtist()) || null;
  return {
    props: {
      favArtists,
    },
  };
};
