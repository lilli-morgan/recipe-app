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
import { Typography, Grid, Button, Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const [showShoppingList, setShowShoppingList] = useState(false);
  const [error, setError] = useState("");
  const appId = process.env.NEXT_PUBLIC_APPID;
  const apiKey = process.env.NEXT_PUBLIC_APIKEY;
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const url = `https://api.edamam.com/api/recipes/v2?&type=public&app_id=${appId}&app_key=${apiKey}&random=True&dishType=Biscuits%20and%20cookies&dishType=Bread&dishType=Main%20course&dishType=Salad&dishType=Sandwiches&dishType=Side%20dish&dishType=Soup`;

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
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={6}>
          <Image width={500} height={500} alt="pot image" src={pot} />
          <Typography variant="h1" gutterBottom>
            Explore thousands of delicious recipes
          </Typography>
          <Typography variant="h5" gutterBottom>
            Find recipe insoration, save your favorites, and create a shopping list.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid
            container
            spacing={2}
            direction="column"
            sx={{
              borderRadius: "2px",
              border: "1px solid #4F1271",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
              padding: "20px",
            }}
          >
            <Grid
              item
              xs={12}
              sx={{
                borderRadius: "2px",
                border: "1px solid #ccc",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                padding: "20px",
              }}
            >
              <Typography variant="h4">Featured recipes</Typography>
            </Grid>
            <Grid item>
              <FeaturedRecipes recipes={recipes} />
            </Grid>
          </Grid>
          <Grid item>
            <Box mt={5}>
              <Link href="/discover">
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: theme.palette.secondary.main,
                    color: theme.palette.secondary.contrastText,
                    "&:hover": {
                      backgroundColor: theme.palette.secondary.dark,
                    },
                  }}
                >
                  Search for more recipes
                </Button>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
