import { useState } from "react";
// import RecipeSearch from "@/components/RecipeSearch";
// import ShoppingList from "@/components/ShoppingList";
import ButtonAppBar from "@/components/ButtonAppBar";
import pot from "../public/pot.png";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { theme } from "@/styles/theme";
import { ThemeProvider } from "@mui/material/styles";
import { Typography, Grid } from "@mui/material";
import Image from "next/image";

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  // const [shoppingList, setShoppingList] = useState([]);
  // const [showShoppingList, setShowShoppingList] = useState(false);
  const fetchRecipes = async () => {
    try {
      const url = `https://api.edamam.com/api/recipes/v2?q=${searchQuery}&type=public&app_id=${appId}&app_key=${apiKey}`;

      console.log("Fetching recipes...");

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      if (data && data.hits) {
        console.log("Updating recipes state...");
        setRecipes(data.hits);
      } else {
        setRecipes([]);
        setError("No recipes found");
      }
      setError(null);
    } catch (error) {
      console.log("Failed to fetch recipe data: ", error);
      setError("Failed to fetch recipes. Please try again later.");
    }
  };
  return (
    <div style={{ backgroundColor: "#F6FEDB", padding: "20px" }}>
      <ThemeProvider theme={theme}>
        <ButtonAppBar />
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <Image width={600} height={600} alt="pot image" src={pot} />
          </div>
          <div style={{ flex: 1 }}>
            <Typography variant="h1">Discover recipes</Typography>
          </div>
        </div>
        {/* RecipeGrid with featured recipes */}
      </ThemeProvider>
    </div>
  );
}
