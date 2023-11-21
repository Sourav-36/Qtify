import "./navbar.css";
// import TextField from "@mui/material/TextField";

const SearchBarBox = () => {
  return (
    <>
      <form className="searchBarSpace">
        <input
          className="inputText"
          placeholder="Search an album of your choice"
        />
        <button className="searchIcon">
          <img src="./search_icon.png" />
        </button>
      </form>
    </>
  );
};

export default SearchBarBox;
