import Image from "next/image";
import Card from "../stateless/card";

export default function HeaderCard() {
  return (
    <Card className="flex flex-row flex-wrap-reverse sm:flex-nowrap px-8 py-8">
      <div>
        <h1 className="text-4xl font-bold">Dominic Nguyen</h1>
        <h3 className="text-2xl font-bold">Tech @ Microsoft</h3>
        <p className="font-normal text-secondary">
          I'm a passionate Tech Lover from Seattle, WA. Apart from that, I'm an
          opensource enthusiast. Love ⛷️ 🧗 🏃‍♂️
        </p>
      </div>
      <div className="self-center flex-shrink-0">
        <Image src="/avatar.png" width={120} height={120} />
      </div>
    </Card>
  );
}
