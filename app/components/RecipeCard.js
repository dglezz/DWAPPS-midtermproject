import styles from "../page.module.css";

export default function RecipeCard({ title, readyInMinutes, servings, image }) {
  return (
    <div className="recipe-card">
      <div className="top-section">
        <h2>{title}</h2>
        <p>Ready in: {readyInMinutes} </p>
      </div>

      {/* Image Section */}
      <div className="image-section">
        <img src={image} alt={title} />
      </div>

      <div className="bottom-section">
        <div className="detail-box">
          <div className="detail-label">Servings:</div>
          <div className="detail-value">{servings}</div>
        </div>
      </div>
    </div>
  );
}
