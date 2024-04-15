import { useState, useEffect } from "react";
import ButtonAppBar from "@/components/ButtonAppBar";
import FeaturedRecipes from "@/components/FeaturedRecipes";
import pot from "../public/pot.png";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { theme } from "@/styles/theme";
import { ThemeProvider } from "@mui/material/styles";
import { Typography, Grid, Button } from "@mui/material";
import Image from "next/image";

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const [showShoppingList, setShowShoppingList] = useState(false);
  const [error, setError] = useState("");
  const appId = process.env.NEXT_PUBLIC_APPID;
  const apiKey = process.env.NEXT_PUBLIC_APIKEY;
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const url = `https://api.edamam.com/api/recipes/v2?&type=public&app_id=${appId}&app_key=${apiKey}&random=true&dishType=Biscuits%20and%20cookies&dishType=Bread&dishType=Main%20course&dishType=Salad&dishType=Sandwiches&dishType=Side%20dish&dishType=Soup`;

        console.log("Fetching recipes...");

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        if (data && data.hits) {
          console.log("Updating recipes state...");
          setRecipes(data.hits.slice(0, 4));
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
    fetchRecipes();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <ButtonAppBar
        showShoppingList={showShoppingList}
        setShowShoppingList={setShowShoppingList}
      />
      <Grid container spacing={1}>
        <Grid item xs={4} >
          <Image width={600} height={600} alt="pot image" src={pot} />
        </Grid>
        <Grid xs={6} >
        <Grid  xs={9} >
          <Typography variant="h1">Discover recipes</Typography>
          </Grid>

          <FeaturedRecipes recipes={recipes} />
          <Button variant="contained" size="large" sx={{backgroundColor: theme.palette.secondary.main, color: theme.palette.secondary.contrastText}}>Discover more recipes</Button>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
