import { useState } from "react";
import {
  Grid,
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

const FeaturedRecipes = ({ recipes }) => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleSeeDetails = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleCloseDetails = () => {
    setSelectedRecipe(null);
  };
  return (
    <Grid container spacing={3} justifyContent="center">
      {recipes &&
        recipes.map((recipe, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ maxWidth: 300 }}>
              <CardMedia
                component="img"
                alt={recipe.recipe.label}
                height="140"
                image={recipe.recipe.image}
              />
              <CardContent sx={{ minHeight: '170px' }}>
                <Typography gutterBottom variant="h5" component="div">
                  {recipe.recipe.label}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => handleSeeDetails(recipe)}>
                  See details
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      <Dialog open={selectedRecipe !== null} onClose={() => handleCloseDetails}>
        <DialogTitle>
          {selectedRecipe && selectedRecipe.recipe.label}
        </DialogTitle>
        <DialogContent>
          <CardMedia
            component="img"
            alt={selectedRecipe && selectedRecipe.recipe.label}
            height="100"
            image={selectedRecipe && selectedRecipe.recipe.image}
          />
          <Typography variant="body1">
            You will be linked to:
            {selectedRecipe && selectedRecipe.recipe.source}
          </Typography>
          <Button
            variant="outlined"
            onClick={() =>
              window.open(selectedRecipe && selectedRecipe.recipe.url, "_blank")
            }
          >
            View Recipe
          </Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDetails}>Close</Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default FeaturedRecipes;
