import { Accordion, AccordionDetails, AccordionSummary, IconButton, Typography } from "@material-ui/core";
import { ExpandMore, ImportExport, AddCircleOutline, Edit, DeleteForever } from "@material-ui/icons";
import React, { useState } from "react";
import { Lecture } from "./Lecture";

export function Week() {
  const [state, setState] = useState({
    expanded: 'panel1',
    no: 1,
    name: 'Week name According to s the only domesticate',
  });
  const handleExpandedChange = (panel) => (event, isExpanded) => {
    console.log(event);
    setState({ ...state, expanded: state.expanded !== panel ? panel : '' })
  }
  return (
    <Accordion expanded={state.expanded === 'panel1'}>
      <AccordionSummary
        expandIcon={
          <ExpandMore onClick={handleExpandedChange('panel1')} />
        }
      >
        <IconButton>
          <ImportExport />
        </IconButton>
        <IconButton>
          <AddCircleOutline />
        </IconButton>
        <IconButton>
          <Edit />
        </IconButton>
        <IconButton>
          <DeleteForever />
        </IconButton>
        <Typography>Week {state.no} :</Typography>
        <Typography> {state.name}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Lecture />
      </AccordionDetails>
    </Accordion>
  )
}