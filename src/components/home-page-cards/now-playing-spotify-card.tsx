import { HomePageCard } from '../stateless/card';
import Image from 'next/image';

export default function NowPlayingSpotifyCard({ nowPlaying }: { nowPlaying?: boolean }) {
  return <HomePageCard className=''>
    <div className='flex flex-row justify-center items-center gap-2'>
      <Image src="/spotify-logo.svg" height={32} width={32} />

      {nowPlaying
        ? <h3 className='text-lg self-center'>Now playing 🎧 <span className='text-secondary'> - Spotify</span></h3>
        : <h3 className='text-lg self-center'> Not Playing <span className='text-secondary'> - Spotify</span></h3>}
    </div>


  </HomePageCard>
}