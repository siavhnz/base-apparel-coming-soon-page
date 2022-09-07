import HeroMobile from "../../assets/images/hero-mobile.jpg";
import HeroDesktop from "../../assets/images/hero-desktop.jpg";
import classes from "./Hero.module.css";
const Hero = () => {
  return (
    <div className={classes.hero}>
      <picture>
        <source media="(max-width: 767px)" srcSet={HeroMobile} />
        <source media="(min-width: 768px)" srcSet={HeroDesktop} />
        <img src={HeroMobile} alt="wr're coming soon" />
      </picture>
    </div>
  );
};

export default Hero;