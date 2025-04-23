import { useState } from "react";
import { useImageFetch } from "../hooks/useImageFetch";
import SearchBar from "../components/SearchBar";
import ImageDisplay from "../components/ImageDisplay";

const Home = () => {
  const { image, loading, error, getImage } = useImageFetch();
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (query) => {
    getImage(query);
    setHasSearched(true);
  };

  return (
    <div style={{ minHeight: "100vh", textAlign: "center", padding: "2rem" }}>
      <h1 style={{ color: "black" }}>Image Search</h1>

      <SearchBar onSearch={handleSearch} />
      <ImageDisplay image={image} loading={loading} error={error} hasSearched={hasSearched} />
    </div>
  );
};

export default Home;
