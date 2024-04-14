import { useState } from "react";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const RecipeGrid = ({ recipes, shoppingList, setShoppingList }) => {
  const handleAddToShoppingList = (ingredients) => {
  
    setShoppingList([...shoppingList, ...ingredients]);
  };
  return (
    <Grid container spacing={3} justifyContent="center">
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
                {/* Add recipe summary here? */}
              </CardContent>
              <CardActions>
                <Button size="small">See details</Button>
                <Button size="small">Save</Button>
                <Button
                  size="small"
                  onClick={() =>
                    handleAddToShoppingList(recipe.recipe.ingredientLines)
                  }
                >
                  + shopping list
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
    </Grid>
  );
};

export default RecipeGrid;
