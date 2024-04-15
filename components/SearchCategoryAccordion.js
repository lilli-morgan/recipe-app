import { useState } from "react";
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
      <Accordion expanded={expanded} onChange={handleAccordionToggle}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Search by Category</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <SearchCategoryTags addTag={addTag} />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
