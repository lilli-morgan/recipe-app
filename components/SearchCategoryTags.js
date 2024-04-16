import Button from "@mui/material/Button";
import { Box, Typography, Grid } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
export default function SearchCategoryTags({ addTag }) {
  const MealTags = [
    {
      text: "Breakfast",
      query: "&mealType=Breakfast",
      image: "/breakfast.png",
    },
    { text: "Lunch", query: "&mealType=Lunch", image: "/lunch.png" },
    { text: "Dinner", query: "&mealType=Dinner", image: "/dinner.png" },
    { text: "Snack", query: "&mealType=Snack", image: "/snack.png" },
  ];
  const HealthTags = [
    { text: "Vegan", query: "&health=vegan", image: "/vegan.png" },
    {
      text: "Vegetarian",
      query: "&health=vegetarian",
      image: "/vegetarian.png",
    },
    {
      text: "Dairy free",
      query: "&health=dairy-free",
      image: "/dairyfree.png",
    },
    {
      text: "Gluten free",
      query: "&health=gluten-free",
      image: "/glutenfree.png",
    },
  ];

  const IngredientTags = [
    { text: "Chicken", query: "&q=chicken", image: "/chicken.png" },
    { text: "Fish", query: "&q=fish", image: "/fish.png" },
    { text: "Beef", query: "&q=beef", image: "/beef.png" },
    { text: "Pasta", query: "&q=pasta", image: "/pasta.png" },
  ];

  const DishTags = [
    { text: "Salad", query: "&dishType=Salad", image: "/salad.png" },
    { text: "Soup", query: "&dishType=Soup", image: "/soup.png" },
    { text: "Bread", query: "&dishType=Bread", image: "/bread.png" },
    { text: "Drinks", query: "&dishType=Drinks", image: "/drinks.png" },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "10px",
        padding: "20px",
      }}
    >
      <Grid container spacing={2} sx={{}}>
        <Grid item xs={6}>
          <Box
            p={4}
            border={3}
            borderColor="primary.dark"
            borderRadius={2}
            sx={{ backgroundColor: "primary.main" }}
          >
            <Typography variant="h4" mb={2}>
              Search by ingredient
            </Typography>

            <Stack direction="row" spacing={2}>
              {IngredientTags.map((tag) => (
                <Button
                  variant="contained"
                  onClick={() => addTag(tag.query)}
                  fullWidth
                  sx={{
                    backgroundColor: "#FAF3DD",
                    padding: 0,
                    "&:hover": {
                      backgroundColor: "primary.light",
                      color: "secondary.dark",
                    },
                  }}
                >
                  <Stack direction="column" alignItems="center">
                    <Avatar
                      alt={tag.text}
                      src={tag.image}
                      sx={{ width: 150, height: 150 }}
                    />
                    <Typography variant="subtitle1">{tag.text}</Typography>
                  </Stack>
                </Button>
              ))}
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box
            p={4}
            border={3}
            borderColor="primary.dark"
            borderRadius={2}
            sx={{ backgroundColor: "primary.main" }}
          >
            <Typography variant="h4" mb={2}>
              Search by meal
            </Typography>
            <Stack direction="row" spacing={2}>
              {MealTags.map((tag, index) => (
                <Button
                  variant="contained"
                  onClick={() => addTag(tag.query)}
                  fullWidth
                  sx={{
                    backgroundColor: "#FAF3DD",
                    padding: 0,
                    "&:hover": {
                      backgroundColor: "primary.light",
                      color: "secondary.dark",
                    },
                  }}
                >
                  <Stack direction="column" alignItems="center">
                    <Avatar
                      alt={tag.text}
                      src={tag.image}
                      sx={{ width: 150, height: 150 }}
                    />
                    <Typography variant="subtitle1">{tag.text}</Typography>
                  </Stack>
                </Button>
              ))}
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box
            p={4}
            border={3}
            borderColor="primary.dark"
            borderRadius={2}
            sx={{ backgroundColor: "primary.main" }}
          >
            <Typography variant="h4" mb={2}>
              Search by dietary requirements
            </Typography>
            <Stack direction="row" spacing={2}>
              {HealthTags.map((tag, index) => (
                <Button
                  variant="contained"
                  onClick={() => addTag(tag.query)}
                  fullWidth
                  sx={{
                    backgroundColor: "#FAF3DD",
                    padding: 0,
                    "&:hover": {
                      backgroundColor: "primary.light",
                      color: "secondary.dark",
                    },
                  }}
                >
                  <Stack direction="column" alignItems="center">
                    <Avatar
                      alt={tag.text}
                      src={tag.image}
                      sx={{ width: 150, height: 150 }}
                    />
                    <Typography variant="subtitle1">{tag.text}</Typography>
                  </Stack>
                </Button>
              ))}
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box
            p={4}
            border={3}
            borderColor="primary.dark"
            borderRadius={2}
            sx={{ backgroundColor: "primary.main" }}
          >
            <Typography variant="h4" mb={2}>
              Search by dish type
            </Typography>
            <Stack direction="row" spacing={2}>
              {DishTags.map((tag, index) => (
                <Button
                  variant="contained"
                  onClick={() => addTag(tag.query)}
                  fullWidth
                  sx={{
                    backgroundColor: "#FAF3DD",
                    padding: 0,
                    "&:hover": {
                      backgroundColor: "primary.light",
                      color: "secondary.dark",
                    },
                  }}
                >
                  <Stack direction="column" alignItems="center">
                    <Avatar
                      alt={tag.text}
                      src={tag.image}
                      sx={{ width: 150, height: 150 }}
                    />
                    <Typography variant="subtitle1">{tag.text}</Typography>
                  </Stack>
                </Button>
              ))}
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
