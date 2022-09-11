import HeroMobile from "../../assets/images/hero-mobile.jpg";
import HeroDesktop from "../../assets/images/hero-desktop.jpg";
import classes from "./Hero.module.css";
const Hero = () => {
  return (
    <figure className={classes.hero}>
      <picture>
        <source media="(max-width: 1023px)" srcSet={HeroMobile} />
        <source media="(min-width: 1024px)" srcSet={HeroDesktop} />
        <img src={HeroMobile} alt="wr're coming soon" />
      </picture>
    </figure>
  );
};

export default Hero;
