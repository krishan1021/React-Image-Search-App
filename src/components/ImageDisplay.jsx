import styles from "./ImageDisplay.module.css";

const ImageDisplay = ({ image, loading, error, hasSearched }) => {
  if (loading) return <p className={styles.loading}>Loading...</p>;
  if (error) return <p className={styles.error}>{error}</p>;
  if (hasSearched && !image) return <p className={styles.noImage}>No image found. Try another search!</p>;

  return (
    image && (
      <div className={styles.container}>
        <img src={image} alt="Result" className={styles.image} />
      </div>
    )
  );
};

export default ImageDisplay;
