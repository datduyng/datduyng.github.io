import React from "react";
import Masonry from "react-masonry-css";

import styles from "../styles/home.module.css";
import useMediaQuery from "../lib/use-media-query";
import {
  getMyNotionNoteListData,
  NoteListSchema,
} from "../lib/notion-api-client";
import HeaderCard from "../components/home-page-cards/header-card";
import FeaturedProjectCard from "../components/home-page-cards/featured-project-card";
import ProjectListCard from "../components/home-page-cards/project-list-card";
import LatestNoteCard from "../components/home-page-cards/latest-note-card";
import FavoriteArtistCard from "../components/home-page-cards/favorite-artist-card";
import { GetStaticProps, NextPage } from "next";
import { getTopArtist, SpotifyArtist } from "../lib/spotify-client";
import NoSsr from "../components/stateless/no-ssr";
import RecentWatchCard from "../components/home-page-cards/recent-watch-card";
import { getMyRecentWatch, LetterboxRssItem } from "../lib/letterboxd-client";
import DefaultLayout from "../components/default-layout";

const HomeIndex: NextPage<HomeProps> = ({
  favArtists,
  recentWatch,
  latestNote,
}) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <DefaultLayout className="items-center">
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
          <CardList
            favArtists={favArtists}
            isMobile={true}
            recentWatch={recentWatch}
            latestNote={latestNote}
          />
        </NoSsr>
      ) : (
        <CardList
          favArtists={favArtists}
          isMobile={false}
          recentWatch={recentWatch}
          latestNote={latestNote}
        />
      )}
    </DefaultLayout>
  );
};

export default HomeIndex;

type CardListProps = {
  isMobile: boolean;
} & HomeProps;
const CardList: React.FC<CardListProps> = ({
  favArtists,
  isMobile,
  recentWatch,
  latestNote,
}) => {
  return (
    <Masonry
      breakpointCols={isMobile ? 1 : 2}
      className={styles["masonry-grid"]}
    >
      <FeaturedProjectCard />
      <ProjectListCard />
      <LatestNoteCard note={latestNote} />
      <FavoriteArtistCard favArtists={favArtists} />
      <RecentWatchCard recentWatch={recentWatch} />
    </Masonry>
  );
};

const Spacer = () => <div className="h-7" />;

export const getStaticProps: GetStaticProps = async () => {
  const favArtists = (await getTopArtist()) || [];
  const recentWatch = (await getMyRecentWatch()) || [];
  const allNotes = (await getMyNotionNoteListData()) || [];
  const latestNote = allNotes.find(
    (n) => n?.published && !n?.archived && n?.name
  );
  return {
    props: {
      favArtists,
      recentWatch,
      latestNote,
    },
  };
};

interface HomeProps {
  favArtists: SpotifyArtist[];
  recentWatch: LetterboxRssItem[];
  latestNote?: NoteListSchema;
}
