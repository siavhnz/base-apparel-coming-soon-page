import Header from "./Header";
import Hero from "./Hero";

const Layout = (props) => {
  return (
    <div className="wrapper">
      <Header />
      <Hero />
      {props.children}
    </div>
  );
};

export default Layout;
