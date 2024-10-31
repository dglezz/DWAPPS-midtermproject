"use client";
import { useCallback, useState } from "react";
import Header from "../components/Header";
import RecipeCard from "../components/RecipeCard";
import styles from "../page.module.css";
import cuisineData from "../cuisineFlags.json"; // Make sure this path is correct

const cuisineBackgrounds = {
  Italian: "#d9f8d9", // Light green
  Mexican: "#ffebcc", // Light orange
  Chinese: "#ffe6e6", // Light red
  Indian: "#fff0cc", // Light yellow
  // Add more cuisines as needed
};

export default function RecipeHub({ queryURLWithEnv }) {
  const [selectedCuisine, setSelectedCuisine] = useState(null);
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = useCallback(async (cuisine) => {
    const queryURL = `${queryURLWithEnv}&cuisine=${cuisine}&minReadyTime=30&maxReadyTime=40&number=6&includeNutrition=true`;
    const response = await fetch(queryURL);
    const recipeData = await response.json();

    setRecipes(recipeData.results || []);
    setSelectedCuisine(cuisine);
  }, []);

  console.log({ recipes });
  return (
    <div className={styles.mainContainer}>
      <Header />
      {!selectedCuisine ? (
        <div className={styles.cuisineCardGrid}>
          {Object.keys(cuisineData).map((cuisine) => (
            <div
              key={cuisine}
              className={styles.cuisineCard}
              onClick={() => fetchRecipes(cuisine)}
            >
              <span>{cuisineData[cuisine].flag}</span>
              <h2>{cuisine}</h2>
              <p>{cuisineData[cuisine].description}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.recipes}>
          <h2 className={styles.cuisineTitle}>{selectedCuisine} Recipes</h2>
          <div className={styles.main}>
            {recipes.length > 0 ? (
              recipes.map((recipe) => (
                <RecipeCard
                  title={recipe.title}
                  image={recipe.image}
                  backgroundColor={cuisineBackgrounds[selectedCuisine]}
                />
              ))
            ) : (
              <p>No recipes found.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
