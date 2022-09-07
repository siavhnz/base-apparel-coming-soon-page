import classes from "./UnderConstruction.module.css";
import HeroMobile from "../assets/images/hero-mobile.jpg";
import HeroDesktop from "../assets/images/hero-desktop.jpg";
import SubscribeForm from "./SubscribeForm";

const UnderConstruction = () => {
  return (
    <div className={classes["coming-soon"]}>
      <div>
        <picture>
          <source media="(max-width: 767px)" srcSet={HeroMobile} />
          <source media="(min-width: 768px)" srcSet={HeroDesktop} />
          <img src={HeroMobile} alt="wr're coming soon" />
        </picture>
      </div>
      <div class={classes["coming-soon__announcement"]}>
        <section>
          <h1 className={`${classes["coming-soon__title"]} text-center`}>
            <span className="primary-color font-light">We're </span>
            <span className="font-bold">coming soon</span>
          </h1>
          <p
            className={`${classes["coming-soon__desc"]} text-center primary-color font-regular`}
          >
            Hello fellow shoppers! We're currently building our new fashion
            store. Add your email below to stay up-to-date with announcements
            and our launch deals.
          </p>
        </section>
        <SubscribeForm />
      </div>
    </div>
  );
};

export default UnderConstruction;
