import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";

const RecipeSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);
  const app_id = process.env.APPID;
  const api_key = process.env.APIKEY;

  const fetchRecipes = async () => {
    try {
      const url = `https://api.edamam.com/api/recipes/v2?q=${searchQuery}&type=public&app_id=206f092b&app_key=d0256f401ec926efef61654c461b48ee`;

      const response = await fetch(url);
      //   console.log("RESPONSE: ", response);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      if (data && data.hits) {
        setRecipes(data.hits);
      } else {
        setRecipes([]);
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
    <>
      <Box
        sx={{
          flexGrow: 1,
          textAlign: "center",
          marginTop: "20px",
          padding: "20px",
        }}
      >
        <Typography variant="h1" padding="30px">
          Recipe Book
        </Typography>
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
              id="outlined-basic"
              label="Enter a recipe or ingredient"
              variant="outlined"
              color="success"
              size="medium"
              style={{ marginBottom: '10px' }}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button
              type="submit"
              variant="contained"
              color="success"
              size="large"
              style={{ display: "inline", marginLeft: '20px', marginTop: '5px' }}
            >
              Find recipes
            </Button>
          </form>
          {error && <Typography color="error">{error}</Typography>}
        </Box>
        <Grid container spacing={3} justifyContent="center">
          {recipes.map((recipe, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <Box
                sx={{
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  textAlign: "left",
                }}
              >
                <Typography variant="h5">{recipe.recipe.label}</Typography>
                <img src={recipe.recipe.image} alt={recipe.recipe.label} />
                <ul>
                  {recipe.recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient.text}</li>
                  ))}
                </ul>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default RecipeSearch;
