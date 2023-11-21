import "./navbar.css";
import SearchBarBox from "./searchBarBox.jsx";
import Feedback from "./feedback.jsx";
import Logo from "./logo.jsx";

const Navbar = () => {
  return (
    <div className="navbar">
      <Logo />
      <SearchBarBox />
      <Feedback>Send Feedback</Feedback>
    </div>
  );
};

export default Navbar;
