import "./navbar.css";
import SearchBarBox from "./searchBarBox.jsx";
import Feedback from "./feedback.jsx";
import Logo from "./logo.jsx";
import { useState } from "react";

const Navbar = () => {
  let [text, setText] = useState("");
  let handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="navbar">
      <Logo />
      <SearchBarBox text={text} handleChange={handleChange} />
      <Feedback>Send Feedback</Feedback>
    </div>
  );
};

export default Navbar;
