import { useTranslate } from "../context/translate-api";
import Image from "next/image";

export default function Home() {
  const t = useTranslate();

  console.log("HOME [Re-rendered..]");
  return (
    <>
      <div className="hero-banner relative">
        <div className="absolute w-full h-full bg-black/30 flex justify-center items-center">
          <h1>FUTURE CONSTRUCTION</h1>
        </div>
        <Image src="/assets/hero-banner.jpg" alt="hero-banner" layout="responsive" width={600} height={600} />
      </div>
    </>
  );
}
