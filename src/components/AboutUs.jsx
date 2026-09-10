import Hero from "./about/Hero";
import MobileHero from "./about/MobileHero";
import MeetOurTeam from "./about/MeetOurTeam";

const AboutUs = () => {
  return (
    <div className="relative z-10">
      <div className="hidden md:block relative z-10">
        <Hero />
      </div>

      <div className="block md:hidden relative z-10">
        <MobileHero />
      </div>

      {/* Meet Our Team Section */}
      <MeetOurTeam />
    </div>
  );
};

export default AboutUs;
