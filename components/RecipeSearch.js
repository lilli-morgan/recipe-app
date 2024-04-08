import { useState } from "react";
import RecipeGrid from "./RecipeGrid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

const RecipeSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);
  const appId = process.env.NEXT_PUBLIC_APPID;
  const apiKey = process.env.NEXT_PUBLIC_APIKEY;

  const fetchRecipes = async () => {
    try {
      const url = `https://api.edamam.com/api/recipes/v2?q=${searchQuery}&type=public&app_id=${appId}&app_key=${apiKey}`;

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
    <div>
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
              style={{ marginBottom: "10px" }}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button
              type="submit"
              variant="contained"
              color="success"
              size="large"
              style={{
                display: "inline",
                marginLeft: "20px",
                marginTop: "5px",
              }}
            >
              Find recipes
            </Button>
          </form>
          {error && <Typography color="error">{error}</Typography>}
        </Box>
        <RecipeGrid recipes={recipes} />
      </Box>
    </div>
  );
};

export default RecipeSearch;