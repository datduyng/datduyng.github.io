import { SpotifyArtist } from "../lib/spotify-client";
import styles from "./grid-hex-image.module.css";
import ReactTooltip from "react-tooltip";
import NoSsr from './stateless/no-ssr';

export function HexImage({ favArtist }: { favArtist: SpotifyArtist }) {
  const imageLink = favArtist.images?.[0].url;
  return (
    <div
      className={styles["hex"]}
      data-tip={favArtist.name}
      data-for="fav-artists"
      onClick={() => {
        window.open(favArtist?.external_urls?.spotify, "_blank");
      }}
    >
      <img
        className={styles["img-hex"]}
        src={imageLink}
        alt="some"
        height={90}
        width={90}
      />
    </div>
  );
}

export default function GridHexImage({
  favArtists,
}: {
  favArtists: SpotifyArtist[];
}) {
  return (
    <>
      <section className={styles["hexagon-gallery"]}>
        {favArtists?.map((artist, index) => (
          <HexImage key={artist.id} favArtist={artist} />
        ))}
      </section>
      <NoSsr>
        <ReactTooltip id="fav-artists"/>
      </NoSsr>
    </>
  );
}