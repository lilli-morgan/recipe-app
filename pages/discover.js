import { useState } from "react";
import ButtonAppBar from "@/components/ButtonAppBar";
import RecipeSearch from "@/components/RecipeSearch";
import ShoppingList from "@/components/ShoppingList";
import SearchCategoryAccordion from "@/components/SearchCategoryAccordion";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { theme } from "@/styles/theme";
import { ThemeProvider } from "@mui/material/styles";
import "../public/breakfast.png";
import "../public/lunch.png";
import "../public/dinner.png";
import "../public/snack.png";
import "../public/fish.png";
import "../public/pasta.png";
import "../public/beef.png";
import "../public/beef.png";
import "../public/vegan.png";
import "../public/glutenfree.png";
import "../public/vegetarian.png";
import "../public/dairyfree.png";
import "../public/salad.png";
import "../public/soup.png";
import "../public/bread.png";
import "../public/drinks.png";

const DiscoverRecipes = () => {
  const appId = process.env.NEXT_PUBLIC_APPID;
  const apiKey = process.env.NEXT_PUBLIC_APIKEY;
  const [error, setError] = useState(null);
  const [recipes, setRecipes] = useState([]);
  const [showShoppingList, setShowShoppingList] = useState(false);
  const [shoppingList, setShoppingList] = useState([]);
  const [expanded, setExpanded] = useState(true);
  const [savedRecipes, setSavedRecipes] = useState([]);
  const [showSavedRecipes, setShowSavedRecipes] = useState(false);

  const addSavedRecipe = (recipe) => {
    setSavedRecipes([...savedRecipes, recipe]);
  };
  const removeSavedRecipe = (recipe) => {
    setSavedRecipes([
      ...savedRecipes.filter((r) => r.recipe.label !== recipe.recipe.label),
    ]);
  };

  const addTag = (query) => {
    fetchRecipes(query);
  };
  const handleAccordionToggle = () => {
    setExpanded(!expanded);
  };
  const fetchRecipes = async (query) => {
    setExpanded(false);
    setShowSavedRecipes(false);
    const url = `https://api.edamam.com/api/recipes/v2?type=public&app_id=${appId}&app_key=${apiKey}${query}`;

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      if (data && data.hits) {
        setRecipes(data.hits);
        console.log(data.hits);
      } else {
        setRecipes([]);
      }
      setError(null);
    } catch (error) {
      console.log("Failed to fetch recipe data: ", error);
      setError("Failed to fetch recipes. Please try again later.");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <ButtonAppBar
        showShoppingList={showShoppingList}
        setShowShoppingList={setShowShoppingList}
        setShowSavedRecipes={setShowSavedRecipes}
      />
      <SearchCategoryAccordion
        expanded={expanded}
        handleAccordionToggle={handleAccordionToggle}
        addTag={addTag}
      />
      {showShoppingList ? (
        <ShoppingList
          recipes={recipes}
          shoppingList={shoppingList}
          setShoppingList={setShoppingList}
        />
      ) : (
        <RecipeSearch
          recipes={showSavedRecipes ? savedRecipes : recipes}
          setRecipes={setRecipes}
          shoppingList={shoppingList}
          setShoppingList={setShoppingList}
          fetchRecipes={fetchRecipes}
          addSavedRecipe={addSavedRecipe}
          removeSavedRecipe={removeSavedRecipe}
          showSavedRecipes={showSavedRecipes}
          error={error}
        />
      )}
    </ThemeProvider>
  );
};

export default DiscoverRecipes;
