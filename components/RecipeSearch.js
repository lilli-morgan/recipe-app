import { useState } from "react";
import RecipeGrid from "./RecipeGrid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { theme } from "@/styles/theme";
import { CircularProgress } from "@mui/material";

// Component to fetch recipes from API: 

const RecipeSearch = ({
  recipes,
  shoppingList,
  setShoppingList,
  fetchRecipes,
  addSavedRecipe,
  removeSavedRecipe,
  showSavedRecipes,
  error,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchRecipes(
      `&q=${searchQuery}&dishType=Biscuits%20and%20cookies&dishType=Bread&dishType=Main%20course&dishType=Salad&dishType=Sandwiches&dishType=Side%20dish&dishType=Soup`
    );
  };
  
  return (
    <Box>
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "20px",
            marginTop: "2px",
          }}
        >
          <form onSubmit={handleSubmit}>
            <TextField
              id="outlined-secondary"
              label="Search recipes"
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
                backgroundColor: theme.palette.secondary.main,
                color: theme.palette.secondary.contrastText,
                fontSize: "20px",
                "&:hover": {
                  backgroundColor: "secondary.light",
                  color: "primary.contrastText"
                }
              }}
            >
              Find recipes
            </Button>
          </form>
          {loading && <CircularProgress />} {/* Show loading indicator */}
          {error && <Typography color="error">{error}</Typography>}
        </Box>
        <RecipeGrid
          recipes={recipes}
          shoppingList={shoppingList}
          setShoppingList={setShoppingList}
          addSavedRecipe={addSavedRecipe}
          removeSavedRecipe={removeSavedRecipe}
          showSavedRecipes={showSavedRecipes}
        />
      </Box>
    </Box>
  );
};
export default RecipeSearch;
