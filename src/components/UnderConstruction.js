import HeroMobile from "../assets/images/hero-mobile.jpg";
import HeroDesktop from "../assets/images/hero-desktop.jpg";
import SubscribeForm from "./SubscribeForm";

const UnderConstruction = () => {
  return (
    <div>
      <div>
        <picture>
          <source media="(max-width: 767px)" srcSet={HeroMobile} />
          <source media="(min-width: 768px)" srcSet={HeroDesktop} />
          <img src={HeroMobile} alt="wr're coming soon" />
        </picture>
      </div>
      <div>
        <section>
          <h1>
            <span>We're</span>
            <span>coming soon</span>
          </h1>
          <p>
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
