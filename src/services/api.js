import axios from "axios";

const API_KEY = import.meta.env.VITE_UNSPLASH_KEY;

export const fetchImage = async (query) => {
  try {
    // Fetch data from Unsplash API
    const res = await axios.get(
      `https://api.unsplash.com/search/photos`, {
        params: { query, per_page: 1 },
        headers: {
          Authorization: `Client-ID ${API_KEY}`
        }
      }
    );

    // Check if results are available
    if (res.data.results.length === 0) {
      throw new Error('No images found for the query.');
    }

    // Return the first image URL
    return res.data.results[0]?.urls?.regular;
  } catch (error) {
    console.error("Error fetching image:", error);
    throw new Error("Failed to fetch image. Please try again.");
  }
};
