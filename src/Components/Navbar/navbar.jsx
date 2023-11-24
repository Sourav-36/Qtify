import "./navbar.css";
import SearchBarBox from "./searchBarBox.jsx";
import Feedback from "./feedback.jsx";
import Logo from "./logo.jsx";

const Navbar = ({ text, handleChange }) => {
  return (
    <div className="navbar">
      <Logo />
      <SearchBarBox text={text} handleChange={handleChange} />
      <Feedback>Send Feedback</Feedback>
    </div>
  );
};

export default Navbar;
