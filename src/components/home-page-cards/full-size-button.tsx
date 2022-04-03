import cn from 'classnames';
import { useRouter } from 'next/router';

const FullSizeButton: React.FC<{ href: string; value: string; newTab?: boolean; primary?: boolean }> = ({ href, value, newTab, primary }) => {
  const router = useRouter();
  return <button className={cn(primary !== undefined ? "bg-accent" : "bg-secondary-light", "mt-4 p-2 rounded-xl")} onClick={() => {
    if (newTab !== undefined) {
      window.open(href, '_blank');
    } else {
      router.push(href);
    }
  }}>
    {value}
  </button>
}

export default FullSizeButton;