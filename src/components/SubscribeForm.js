import classes from "./SubscribeForm.module.css";

import { ReactComponent as ArrowIcon } from "../assets/images/icon-arrow.svg";
import { ReactComponent as ErrorIcon } from "../assets/images/icon-error.svg";

const SubscribeForm = () => {
  return (
    <form>
      <div className={` ${classes["group-input"]}`}>
        <input
          type="text"
          className={` ${classes["group-input__input"]}`}
          placeholder="Email Address"
        />
        <ErrorIcon
          aria-hidden="true"
          className={` ${classes["group-input__error-icon"]} `}
        />
        <button className={classes["group-input__btn"]}>
          <ArrowIcon aria-hidden="true" />
        </button>
      </div>
      <div className={` ${classes.warning} primary-color `}>
        <span>Please provide a valid email</span>
      </div>
    </form>
  );
};

export default SubscribeForm;
