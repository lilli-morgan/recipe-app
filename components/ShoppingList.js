import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

const ShoppingList = ({ shoppingList, setShoppingList }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        marginTop: "20px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          border: "2px solid",
          padding: "20px",
          marginTop: "20px",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
          width: "40%",
        }}
      >
        <Typography variant="h4" sx={{ marginBottom: "20px" }}>
          Shopping List
        </Typography>
        <ul>
          {shoppingList.map((item) => (
            <li style={{ listStyleType: "none", marginBottom: "10px" }}>
              {item}
            </li>
          ))}
        </ul>
      </Box>
    </Box>
  );
};

export default ShoppingList;
