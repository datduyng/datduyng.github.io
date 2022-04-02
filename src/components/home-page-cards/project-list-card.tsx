import cn from 'classnames';
import { HomePageCard } from '../stateless/card';
import Image from 'next/image';
import { ProjectListSchema } from '../../lib/notion-api-client';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function ProjectListCard({ projects }: { projects: ProjectListSchema[] }) {
  return <HomePageCard>
    <h3 className='text-lg self-center'>🕹️ Projects</h3>
    <div className='h-[1px] bg-secondary-reallight my-4' />
    <div className='flex flex-col gap-3'>
      {projects.map(project => <ProjectItem key={project.id} project={project} />)}
    </div>
    <button className='bg-secondary-light mt-4 p-2 rounded-xl'>Explore all projects</button>
  </HomePageCard>
}

const ProjectItem: React.FC<{ project: ProjectListSchema }> = ({ project }) => {
  const router = useRouter();
  const onClick = () => {
    if (project.url) {
      if (window && project?.url?.startsWith('http')) {
        return window.open(project.url, '_blank')
      }
      router.push(project.url);
    }
  };

  return (<div className={cn('flex flex-row gap-3', project.url ? 'cursor-pointer' : '')} onClick={project.url ? onClick : undefined}>
    <div className='self-center flex-shrink-0'>
      {project.page_icon ? <Image className='rounded-lg' src={project.page_icon} width={60} height={60} />
        : <div className='text-6xl'>
          {project.page_emoji || "🧸"}
        </div>}
    </div>
    <div>
      <h5>{project?.name}</h5>
      <p className='text-sm text-secondary'>
        {project?.previewDesc}
      </p>
    </div>
  </div>)
}
