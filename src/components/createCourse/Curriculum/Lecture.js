import { Accordion, AccordionDetails, AccordionSummary, Button, Grid, IconButton, Typography } from "@material-ui/core";
import { AddCircleOutline, DeleteForever, Edit, ExpandMore, ImportExport, PictureAsPdf, TextFields, VideoCall } from "@material-ui/icons";
import LinkIcon from '@material-ui/icons/Link';
import React, { useState } from "react";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { ArticleInput } from "./ArticleInput";
import { ArticleOutput } from "./ArticleOutput";
import { LinkInput } from "./LinkInput";
import { LinkOutput } from "./LinkOutput";
import { PDFInput } from "./PDFInput";
import { PDFOutput } from "./PDFOutput";
import { VideoInput } from "./VideoInput";
import { VideoOutput } from "./VideoOutput";
export function Lecture() {
  const [state, setState] = useState({
    expanded: 'panel1',
    no: 1,
    contentClicked: true,
    name: 'Week name According to s the only domesticate',
    file: {
      name: "",
    }
  });
  const handleExpandedChange = (panel) => (event, isExpanded) => {
    console.log(event);
    setState({ ...state, expanded: state.expanded !== panel ? panel : '' })
  }
  function handleContentClick(panel) {
    setState({
      ...state,
      contentClicked: !state.contentClicked,
      expanded: state.contentClicked ? '' : panel
    })
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
        <Typography>Lecture {state.no} :</Typography>
        <Typography> {state.name}</Typography>
        {
          state.file.name === "" &&
          <Button
            variant="outlined"
            color="primary"
            onClick={event => { handleContentClick('panel1') }}
          >Content +</Button>
        }
      </AccordionSummary>
      <AccordionDetails>
        <Grid container direction="column">
          {
            state.contentClicked && <Grid
              container
              direction="row"
              justify="space-around"
              alignItems="center"
            >
              <IconButton>
                <Grid item container direction="column" alignItems="center">
                  <TextFields />
                  <Typography>Article</Typography>
                </Grid>
              </IconButton>
              <IconButton>
                <Grid item container direction="column" alignItems="center">
                  <VideoCall />
                  <Typography>Video</Typography>
                </Grid>
              </IconButton>
              <IconButton>
                <Grid item container direction="column" alignItems="center">
                  <PictureAsPdf />
                  <Typography>PDF</Typography>
                </Grid>
              </IconButton>
              <IconButton>
                <Grid item container direction="column" alignItems="center">
                  <LinkIcon />
                  <Typography>Link</Typography>
                </Grid>
              </IconButton>
            </Grid>
          }
          <PDFInput />
          <PDFOutput />
          <VideoInput />
          <VideoOutput />
          <LinkInput />
          <LinkOutput />
          <ArticleInput />
          <ArticleOutput />
        </Grid>
      </AccordionDetails>
    </Accordion>
  )
}