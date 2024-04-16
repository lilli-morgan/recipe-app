import { useState } from "react";
import {
  Grid,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const RecipeGrid = ({
  recipes,
  shoppingList,
  setShoppingList,
  addSavedRecipe,
  removeSavedRecipe,
  showSavedRecipes,
}) => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  // Function to add a recipe's ingredients to shopping list: 
  const handleAddToShoppingList = (ingredients) => {
    setShoppingList([...shoppingList, ...ingredients]);
  };
// Function to show the recipe details modal: 
  const handleSeeDetails = (recipe) => {
    setSelectedRecipe(recipe);
  };
// To close the modal:
  const handleCloseDetails = () => {
    setSelectedRecipe(null);
  };
  return (
    <Grid container spacing={3} sx={{margin: "auto"}}>
      {recipes &&
        recipes.map((recipe, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt={recipe.recipe.label}
                height="140"
                image={recipe.recipe.image}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {recipe.recipe.label}
                </Typography>
              </CardContent>
              <CardActions sx={{ backgroundColor: "primary.main" }}>
                <Button
                  size="medium"
                  onClick={() => handleSeeDetails(recipe)}
                  sx={{
                    color: "secondary.dark",
                    border: "1px solid",
                    borderColor: "secondary.dark",
                    borderRadius: "4px",
                    "&:hover": {
                      backgroundColor: "secondary.light",
                    },
                  }}
                >
                  Details
                </Button>
                {showSavedRecipes ? (
                  <Button
                    size="medium"
                    onClick={() => removeSavedRecipe(recipe)}
                    sx={{
                      color: "secondary.dark",
                      border: "1px solid",
                      borderColor: "secondary.dark",
                      borderRadius: "4px",
                      "&:hover": {
                        backgroundColor: "secondary.light",
                      },
                    }}
                  >
                    Remove
                  </Button>
                ) : (
                  <Button
                    size="medium"
                    onClick={() => addSavedRecipe(recipe)}
                    sx={{
                      color: "secondary.dark",
                      border: "1px solid",
                      borderColor: "secondary.dark",
                      borderRadius: "4px",
                      "&:hover": {
                        backgroundColor: "secondary.light",
                      },
                    }}
                  >
                    Save
                  </Button>
                )}
                <Button
                  size="medium"
                  onClick={() =>
                    handleAddToShoppingList(recipe.recipe.ingredientLines)
                  }
                  sx={{
                    color: "secondary.dark",
                    border: "1px solid",
                    borderColor: "secondary.dark",
                    borderRadius: "4px",
                    "&:hover": {
                      backgroundColor: "secondary.light",
                    },
                  }}
                >
                  + shopping list
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      <Dialog open={selectedRecipe !== null} onClose={() => handleCloseDetails}>
        <DialogTitle sx={{ fontWeight: "bold", fontSize: "35px" }}>
          {selectedRecipe && selectedRecipe.recipe.label}
        </DialogTitle>
        <DialogContent sx={{ textAlign: "center" }}>
          <CardMedia
            component="img"
            alt={selectedRecipe && selectedRecipe.recipe.label}
            height="100"
            image={selectedRecipe && selectedRecipe.recipe.image}
            sx={{ marginBottom: "20px" }}
          />
          <Typography variant="h5" sx={{ marginBottom: "10px" }}>
            You will be linked to: <br />
          </Typography>
          <Typography variant="h5" sx={{marginBottom: "20px", fontWeight: "fontWeightMedium"}}>
            {selectedRecipe && selectedRecipe.recipe.source}
          </Typography>
          <Button
            variant="outlined"
            onClick={() =>
              window.open(selectedRecipe && selectedRecipe.recipe.url, "_blank")
            }
            sx={{
              color: "secondary.dark",
              border: "1px solid",
              borderColor: "secondary.dark",
              borderRadius: "4px",
              "&:hover": {
                backgroundColor: "secondary.light",
              },
            }}
          >
            View Recipe
          </Button>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleCloseDetails}
            sx={{
              color: "secondary.dark",
              border: "1px solid",
              borderColor: "secondary.dark",
              borderRadius: "4px",
              "&:hover": {
                backgroundColor: "secondary.light",
              },
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default RecipeGrid;
