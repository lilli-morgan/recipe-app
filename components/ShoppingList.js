import Typography from "@mui/material/Typography";
import { Box, Paper } from "@mui/material";

const ShoppingList = ({ shoppingList, setShoppingList }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        marginTop: "20px",
      }}
    >
     <Paper
        elevation={3}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
          marginTop: "20px",
          borderRadius: "10px",
          width: "40%",
        }}
      >
        <Typography variant="h4" sx={{ marginBottom: "20px" }}>
          Shopping List
        </Typography>
        <ul style={{ padding: 0, margin: 0 }}>
          {shoppingList.map((item, index) => (
            <li key={index} style={{ marginBottom: "10px" }}>
              {item}
            </li>
          ))}
        </ul>
      </Paper>
    </Box>
  );
};

export default ShoppingList;
