import classes from "./Header.module.css";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";

const Header = () => {
  return (
    <header className={classes.header}>
      <Logo className={classes.header__logo} />
    </header>
  );
};

export default Header;
