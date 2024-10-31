import styles from "../page.module.css";

export default function RecipeCard({ title, image, backgroundColor }) {
  return (
    <div style={{ backgroundColor }} className={styles.recipecard}>
      <h2>{title}</h2>
      <img src={image} />
      {/* <p>Ready in: {readyInMinutes} </p>
      <p>Description: {description}</p> */}
    </div>
  );
}
