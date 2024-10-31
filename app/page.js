import RecipeHub from "./components/Cuisine";

export default function Page() {
  // const [selectedCuisine, setSelectedCuisine] = useState(null);
  // const [recipes, setRecipes] = useState([]);
  const queryURLWithEnv = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.FOOD_API_KEY}`;
  // const fetchRecipes = useCallback(async (cuisine) => {
  //   const queryURL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.FOOD_API_KEY}&cuisine=${cuisine}&minReadyTime=30&maxReadyTime=40&number=6&includeNutrition=true`;
  //   const response = await fetch(queryURL);
  //   const recipeData = await response.json();
  //   console.log("Fetched Recipe Data:", recipeData);

  //   setRecipes(recipeData.results || []);
  //   setSelectedCuisine(cuisine);

  //   console.log("Selected Cuisine:", cuisine);
  //   console.log("Recipes State:", recipeData.results);
  // }, []);

  return <RecipeHub queryURLWithEnv={queryURLWithEnv} />;
}
