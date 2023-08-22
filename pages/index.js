import { useTranslate } from "../context/translate-api";

export default function Home() {
  const t = useTranslate();

  console.log("HOME [Re-rendered..]");
  return (
    <>
      <div>
        {t.heroHome}
      </div>
    </>
  );
}
