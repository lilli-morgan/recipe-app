import { useState } from "react";
import RecipeSearch from "@/components/RecipeSearch";
// import RecipeGrid from "@/components/RecipeGrid";
import ShoppingList from "@/components/ShoppingList";
import ButtonAppBar from "@/components/ButtonAppBar";
import Button from "@mui/material/Button";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { theme } from "@/styles/theme";
import { ThemeProvider } from "@mui/material/styles";

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const [shoppingList, setShoppingList] = useState([]);
  const [showShoppingList, setShowShoppingList] = useState(false);

  return (
        <ThemeProvider theme={theme}>
    <div background-color="#F6FEDB">
        <ButtonAppBar
          showShoppingList={showShoppingList}
          setShowShoppingList={setShowShoppingList}
        />
        {showShoppingList ? (
          <ShoppingList
            recipes={recipes}
            shoppingList={shoppingList}
            setShoppingList={setShoppingList}
          />
        ) : (
          <RecipeSearch
            recipes={recipes}
            setRecipes={setRecipes}
            shoppingList={shoppingList}
            setShoppingList={setShoppingList}
          />
        )}
      </div>
    </ThemeProvider>
  );
}
