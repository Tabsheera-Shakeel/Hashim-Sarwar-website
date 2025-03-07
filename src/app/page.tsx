import Image from "next/image";
import HeroSection from "./home/heroSection";
import Navbar from "./home/header";
import AboutSection from "./about/page";
import ServicesPage from "./services/page";
import Contact from "./contact/page";
import FollowersPage from "./connectMe/page";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <AboutSection/>
      <ServicesPage/>
      <FollowersPage/>
      <Contact/>
    </div>
   
  );
}
