import { HomePageCard } from '../stateless/card';
import Image from 'next/image';
import Link from 'next/link';

export default function ReachMeAtCard() {
  return <HomePageCard>
    <h3 className="text-lg self-center">You can reach me at 👇</h3>
    <LinkButton href={`https://twitter.com/domnguyen5653`} value={`Twitter`} />
    <LinkButton href={`https://www.linkedin.com/in/datdnguyen/`} value={`LinkedIn`} />
    <LinkButton href={`https://github.com/datduyng`} value={`Github`} />
  </HomePageCard>
}

const LinkButton: React.FC<{ href: string; value: string; }> = ({ href, value }) => {
  return <button className="bg-secondary-light mt-4 p-2 rounded-xl">
    <Link href={href} passHref>
      <a target="_blank">{value}</a>
    </Link>
  </button>
}