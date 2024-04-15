import { useState } from "react";
import RecipeGrid from "@/components/RecipeGrid";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import ButtonAppBar from "@/components/ButtonAppBar";

const DiscoverRecipes = () => {
  const appId = process.env.NEXT_PUBLIC_APPID;
  const apiKey = process.env.NEXT_PUBLIC_APIKEY;
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState(null);
  const [recipes, setRecipes] = useState([]);

  const DiscoverTags = [
    { text: "Breakfast", query: "&mealType=Breakfast" },
    { text: "Lunch", query: "&mealType=Lunch" },
    { text: "Dinner", query: "&mealType=Dinner" },
    { text: "Vegan", query: "&health=vegan" },
    { text: "Vegetarian", query: "&health=vegetarian" },
    { text: "Chicken", query: "&q=chicken" },
  ];

  const addTag = (query) => {
    setSearchQuery(query);
    fetchRecipes(query);
  };

  const url = `https://api.edamam.com/api/recipes/v2?type=public&app_id=${appId}&app_key=${apiKey}`;
  const fetchRecipes = async (query) => {
    try {
      console.log("RESPONSE: ", url + query);
      const response = await fetch(url + query);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      if (data && data.hits) {
        setRecipes(data.hits);
        console.log(data);
      } else {
        setRecipes([]);
      }
      setError(null);
    } catch (error) {
      console.log("Failed to fetch recipe data: ", error);
      setError("Failed to fetch recipes. Please try again later.");
    }
  };

  return (
    <div>
      <ButtonAppBar />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "10px",
          padding: "20px",
        }}
      >
        {DiscoverTags.map((tag) => (
          <Button variant="contained" onClick={() => addTag(tag.query)}>
            {tag.text}
          </Button>
        ))}
      </Box>
      <RecipeGrid recipes={recipes} />
    </div>
  );
};

export default DiscoverRecipes;
