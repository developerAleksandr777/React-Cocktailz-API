import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function MUIAccordeon({ resultCountry }) {
  return (
    <div>
      {resultCountry.map((el, index) => {
        return (
          <Accordion key={index}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{el.lang}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{el.value}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
