import { useRef, useState } from "react";
import classes from "./SubscribeForm.module.css";
import { ReactComponent as ArrowIcon } from "../assets/images/icon-arrow.svg";
import { ReactComponent as ErrorIcon } from "../assets/images/icon-error.svg";

const SubscribeForm = () => {
  const emailInput = useRef();

  /*
  
    Handle 3 state for this component
    1. default state -> when component initialized (we can omit this state)
    2. error state -> user insert invalid email
    3. success state -> user insert a valid email

  */
  const DEFAULT = "default",
    ERROR = "error",
    SUCCESS = "success";

  const [state, setState] = useState(DEFAULT);

  // handle submit
  const submitHandler = (e) => {
    e.preventDefault();

    // prevent form submition with invalid email
    if (!validateEmail()) {
      setState(ERROR);
    } else {
      setState(SUCCESS);
    }
  };

  const emailBlurHandler = () => {};

  // validate email address by regular expression
  // https://stackoverflow.com/a/9204568/3925013
  const validateEmail = () => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(emailInput.current.value);
  };

  // add border red to input if component is in error state
  const inputClasses =
    state === ERROR
      ? `${classes["group-input__input"]} ${classes["error"]}`
      : classes["group-input__input"];

  return (
    <form onSubmit={submitHandler}>
      <div className={classes["group-input"]}>
        <input
          ref={emailInput}
          onBlur={emailBlurHandler}
          type="text"
          className={inputClasses}
          placeholder="Email Address"
        />

        {/* show error icon on input when we are in error state */}
        {state === ERROR && (
          <ErrorIcon
            aria-hidden="true"
            className={classes["group-input__error-icon"]}
          />
        )}

        <button
          aria-label="submit"
          className={classes["group-input__btn"]}
          type="submit"
        >
          <ArrowIcon aria-hidden="true" />
        </button>
      </div>

      {/* show error message when we are in error state */}
      {state === ERROR && (
        <div className={` ${classes["message-container"]} primary-color `}>
          <span>Please provide a valid email</span>
        </div>
      )}

      {/* show success message when we are in success state */}
      {state === SUCCESS && (
        <div className={` ${classes["message-container"]} success `}>
          <span>Your email has been successfully added</span>
        </div>
      )}
    </form>
  );
};

export default SubscribeForm;
