
import Typography from "@mui/material";

const ShoppingList = ({shoppingList, setShoppingList}) => {


    return (
        <div>
            <h1>Shopping List</h1>

            <ul>
                {shoppingList.map(item => <li>{item}</li>)}
            </ul>
            {/* <Typography variant="h1">Shopping List</Typography> */}
            {/* <RecipeGrid recipes={recipes} addToShoppingList={addToShoppingList} /> */}
        </div>
    );
}

export default ShoppingList;
