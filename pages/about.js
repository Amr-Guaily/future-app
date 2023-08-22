import { useTranslate } from "../context/translate-api";

export default function About() {
    const t = useTranslate();
    console.log("ABOUT [Re-rendered..]");
    return (
        <>
            <div>
                {t.heroAbout}
            </div>
        </>
    );
}
