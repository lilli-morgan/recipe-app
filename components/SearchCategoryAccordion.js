import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchCategoryTags from "./SearchCategoryTags";

export default function SearchCategoryAccordion({
  expanded,
  handleAccordionToggle,
  addTag,
}) {
  return (
    <div>
      <Accordion
        expanded={expanded}
        onChange={handleAccordionToggle}
        sx={{
          backgroundColor: "primary.light",
          borderRadius: "8px",
          boxShadow: "none",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header" sx={{
            backgroundColor: "#FAF3DD", 
            color: "primary.contrastText",
            borderRadius: "8px 8px 0 0",
            border: "2px solid",
            borderColor: "primary.dark",
            "&:hover": {
              backgroundColor: "primary.dark",
              color: "white",
            },
          }}
        >
          <Typography variant="h5">Search by Category</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{backgroundColor: "#FAF3DD"}}>
          <SearchCategoryTags addTag={addTag} />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
