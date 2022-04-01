import cn from 'classnames';
import { HomePageCard } from '../stateless/card';
import Image from 'next/image';

export default function ProjectListCard() {
  return <HomePageCard>
    <h3 className='text-lg self-center'>🕹️ Projects</h3>
    <div className='h-[1px] bg-secondary-reallight my-4'/>
    <div className='flex flex-col gap-3'>
      <ProjectItem />
      <ProjectItem />
    </div>
    <button className='bg-secondary-light mt-4 p-2 rounded-xl'>Explore all projects</button>
  </HomePageCard>
}

const ProjectItem: React.FC = () => {
  return <div className='flex flex-row gap-3'>
    <div className='self-center flex-shrink-0'>
      <Image className='rounded-lg' src="/logo-knugget.png" width={60} height={60} />
    </div>
    <div>
      <h5>Scriptbar</h5>
      <p className='text-sm text-secondary'>
      A browser spotlight search bar to access your snippet
      </p>
    </div>
  </div>
}