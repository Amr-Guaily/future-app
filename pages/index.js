import Landing from "../components/Home/Landing";
import AboutUs from "../components/Home/AboutUS";
import Statistics from "../components/Home/Statistics";
import ContactUs from "../components/Home/ContactUs";

export default function Home() {
  console.log("HOME [Re-rendered..]");

  return <>
    <Landing />

    <AboutUs />

    <Statistics />

    <ContactUs />
  </>;
}
