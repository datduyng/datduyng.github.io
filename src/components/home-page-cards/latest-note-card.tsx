import cn from 'classnames';
import { HomePageCard } from '../stateless/card';

export default function LatestNoteCard() {
  return <HomePageCard>
    <h3 className='text-lg self-center'>📝 Latest note</h3>
    <div className='h-[1px] bg-secondary-reallight my-4' />
    <h5 className='font-semibold'>Using Window Nano Server Contain for your next .net core</h5>
    <p className='text-secondary mt-3'>
      Windows Server 2016 offers a new installation option: Nano Server. Nano Server is a remotely administered server operating system optimized for private clouds and datacenters.
      <br /> <br />
      It is similar to Windows Server in Server Core mode...
    </p>
    <button className='bg-accent mt-4 p-2 rounded-xl'>Explore all notes</button>
  </HomePageCard>
}