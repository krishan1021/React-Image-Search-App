import { useState } from "react";
import { fetchImage } from "../services/api";

export const useImageFetch = () => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);  // State for error

  const getImage = async (query) => {
    setLoading(true);
    setError(null);  // Clear any previous error
    try {
      const img = await fetchImage(query);
      setImage(img);
    } catch (err) {
      console.error("Error fetching image:", err);
      setError(err.message);  // Set error message
      setImage(null);  // Ensure image is cleared on error
    } finally {
      setLoading(false);
    }
  };

  return { image, loading, error, getImage };
};
