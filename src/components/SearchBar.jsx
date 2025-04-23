import { useState } from "react";
import { FaSearch } from "react-icons/fa"; // FontAwesome search icon
import styles from "./SearchBar.module.css";

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) onSearch(input);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search for an image..."
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        <FaSearch className={styles.icon} />
        <span className={styles.buttonText}>Search</span>
      </button>
    </form>
  );
};

export default SearchBar;
