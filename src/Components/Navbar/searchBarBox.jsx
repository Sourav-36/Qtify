import "./navbar.css";

const SearchBarBox = ({ text, handleChange }) => {
  return (
    <>
      <div className="searchBarSpace">
        <input
          className="inputText"
          placeholder="Search an album of your choice"
          value={text}
          onChange={handleChange}
        />
        <button className="searchIcon">
          <img src="./search_icon.png" alt="Img not available" />
        </button>
      </div>
    </>
  );
};

export default SearchBarBox;
