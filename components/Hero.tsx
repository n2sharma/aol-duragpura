import HeroSlider from "./HeroSlider";

const Hero = () => {
  return (
    <section
      className="h-[80vh] lg:h-[912px] relative overflow-hidden scroll-mt-[120px]"
      id="home"
    >
      {/* <div className="container mx-auto h-full"> */}
      {/* Slider */}
      <HeroSlider />
      {/* </div> */}
    </section>
  );
};

export default Hero;
