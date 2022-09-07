import classes from "./UnderConstruction.module.css";
import SubscribeForm from "./SubscribeForm";

const UnderConstruction = () => {
  return (
    <div className={classes["coming-soon"]}>
      <section>
        <h1 className={`${classes["coming-soon__title"]} text-center`}>
          <span className="primary-color font-light">We're </span>
          <span className="font-bold">coming soon</span>
        </h1>
        <p
          className={`${classes["coming-soon__desc"]} text-center primary-color font-regular`}
        >
          Hello fellow shoppers! We're currently building our new fashion store.
          Add your email below to stay up-to-date with announcements and our
          launch deals.
        </p>
      </section>
      <SubscribeForm />
    </div>
  );
};

export default UnderConstruction;
