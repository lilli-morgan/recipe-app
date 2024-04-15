import { useState } from "react";
import RecipeGrid from "./RecipeGrid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { theme } from "@/styles/theme";
import pot from "../public/pot.png";
import Image from "next/image";
const RecipeSearch = ({
  recipes,
  setRecipes,
  shoppingList,
  setShoppingList,
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const [error, setError] = useState(null);
  const appId = process.env.NEXT_PUBLIC_APPID;
  const apiKey = process.env.NEXT_PUBLIC_APIKEY;

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
        console.log(data);
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
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchRecipes();
  };
  return (
    <div>
      <Box
        sx={{
          flexGrow: 1,
          textAlign: "center",
          marginTop: "5px",
          padding: "10px",
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            textAlign: "center",
            marginTop: "5px",
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image width={300} height={300} alt="pot image" src={pot} />
          <Typography variant="h2" padding="30px">
            Search for a recipe
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <form onSubmit={handleSubmit}>
            <TextField
              id="outlined-secondary"
              label="Enter a recipe or ingredient"
              variant="outlined"
              color="secondary"
              size="medium"
              style={{ marginBottom: "10px" }}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button
              type="submit"
              variant="contained"
              color="success"
              size="large"
              sx={{
                display: "inline",
                marginLeft: "20px",
                marginTop: "5px",
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.primary.contrastText,
              }}
            >
              Find recipes
            </Button>
          </form>
          {error && <Typography color="error">{error}</Typography>}
        </Box>

        {console.log(recipes)}
        {console.log(shoppingList)}

        <RecipeGrid
          recipes={recipes}
          shoppingList={shoppingList}
          setShoppingList={setShoppingList}
        />
      </Box>
    </div>
  );
};
export default RecipeSearch;
