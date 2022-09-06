import { ReactComponent as ArrowIcon } from "../assets/images/icon-arrow.svg";
import { ReactComponent as ErrorIcon } from "../assets/images/icon-error.svg";
const SubscribeForm = () => {
  return (
    <form>
      <div>
        <input type="text" />
        <ErrorIcon aria-hidden="true" />
        <button>
          <ArrowIcon aria-hidden="true" />
        </button>
      </div>
      <div>
        <span>Please provide a valid email</span>
      </div>
    </form>
  );
};

export default SubscribeForm;
