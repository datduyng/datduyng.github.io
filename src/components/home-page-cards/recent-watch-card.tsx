import cn from "classnames";
import Image from "next/image";
import ReactTooltip from "react-tooltip";
import { LetterboxRssItem } from "../../lib/letterboxd-client";
import { HomePageCard } from "../stateless/card";
import NoSsr from "../stateless/no-ssr";
import styles from "./recent-watch-card.module.css";

interface RecentWatchCardProps {
  recentWatch?: LetterboxRssItem[];
}

const RecentWatchCard: React.FC<RecentWatchCardProps> = ({ recentWatch }) => {
  return (
    <HomePageCard className="items-center content-center justify-items-center justify-content-center">
      <h3 className="text-lg self-center">Recently watched 🍿</h3>
      <div className="mt-5" />
      <div
        style={{
          margin: "auto",
          width: "260px",
        }}
      >
        <ul className={cn(styles["gallery"])}>
          {recentWatch?.map((movie, index) => (
            <li
              className={cn(
                "cursor-pointer",
                styles["gallery-item"],
                styles["pic-" + index]
              )}
              data-tip={`${movie?.film?.title} (${movie?.rating?.text})`}
              data-for="recent-watch"
              onClick={() => {
                window.open(movie.uri, "_blank");
              }}
            >
              <Image
                src={
                  movie?.film?.image?.medium ||
                  movie?.film?.image?.large ||
                  movie?.film?.image?.small ||
                  ""
                }
                alt={`Dominic recently watched movie - ${movie.title}`}
                width={120}
                height={160}
                placeholder={"blur"}
              />
            </li>
          ))}
        </ul>
      </div>
      <NoSsr>
        <ReactTooltip id="recent-watch" />
      </NoSsr>
    </HomePageCard>
  );
};

export default RecentWatchCard;
