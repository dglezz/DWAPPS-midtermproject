import Header from "./components/Header";
import RecipeCard from "./components/RecipeCard";
import styles from "./page.module.css";
import cuisineData from "../public/cuisineFlags.json"

export default async function Recipe() {
  
  const queryURL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.FOOD_API_KEY}&cuisine=${cuisine}&minReadyTime=30&maxReadyTime=40&number=6&includeNutrition=true`;
  const request = await fetch(queryURL);
  const recipeData = await request.json();

  console.log(recipeData.results);

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        {recipeData.results.map((recipe) => (
          <RecipeCard
            title={recipe.title}
            image={recipe.image}
            readyInMinutes={recipe.readyInMinutes}
            servings={recipe.servings}
          />
        ))}
      </main>
    </div>
  );
}
