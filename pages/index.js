import Landing from "../components/Home/Landing";
import AboutUs from "../components/Home/AboutUS";
import Statistics from "../components/Home/Statistics";

export default function Home() {
  console.log("HOME [Re-rendered..]");

  return <>
    {/* Landing-banner */}
    <Landing />

    {/* Section-1 */}
    <AboutUs />

    {/* Section-2 */}
    <Statistics />
  </>;
}
