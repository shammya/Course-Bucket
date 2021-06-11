import { Accordion, AccordionDetails, AccordionSummary, Grid, IconButton, TextField, Typography } from "@material-ui/core";
import { AddCircleOutline, Cancel, CheckCircle, DeleteForever, Edit, ExpandMore } from "@material-ui/icons";
import React, { useState } from "react";
import { Lecture } from "./Lecture";


const defaultLecture = {
  id: 0,
  name: "Lecture name is here...",
  type: '',
  file: {
    title: 'Title',
    body: '',
  }
}

export function Week({
  week, onWeekChange, onWeekAdd, onWeekRemove
}) {
  const [state, setState] = useState({
    expanded: false,
    editMode: false,
    no: 1,
    week: { ...week },
    fieldValue: week.name,
  });
  onWeekChange(state.week);

  function handleOnLectureAdd(index) {
    state.week.lectures.splice(index, 0, defaultLecture);
    setState({
      ...state,
      week: {
        ...state.week,
        lectures: state.week.lectures,
      }
    });
  }
  function handleOnLectureRemove(index) {
    state.week.lectures.splice(index, 1);
    setState({
      ...state,
      week: {
        ...state.week,
        lectures: state.week.lectures,
      }
    });
  }

  return (
    <Accordion expanded={state.expanded}>
      <AccordionSummary
        expandIcon={
          <ExpandMore onClick={event => setState({ ...state, expanded: !state.expanded })} />
        }
      >
        {/* <IconButton>
          <ImportExport />
        </IconButton> */}
        {
          !state.editMode &&
          <>
            <IconButton>
              <AddCircleOutline onClick={onWeekAdd} />
            </IconButton>
            <IconButton>
              <Edit onClick={event => setState({ ...state, editMode: true })} />
            </IconButton>
            <IconButton>
              <DeleteForever onClick={onWeekRemove} />
            </IconButton>
            <Typography>Week {state.no} :</Typography>
            <Typography> {state.week.name}</Typography>
          </>
        }
        {
          state.editMode &&
          <>
            <TextField
              variant="outlined"
              fullWidth
              defaultValue={state.fieldValue}
              onChange={event => setState({ ...state, fieldValue: event.target.value })}
            />
            <IconButton>
              <CheckCircle onClick={event => { setState({ ...state, editMode: false, week: { ...state.week, name: state.fieldValue } }) }} />
            </IconButton>
            <IconButton>
              <Cancel onClick={event => setState({ ...state, editMode: false, fieldValue: state.week.name })} />
            </IconButton>
          </>
        }
      </AccordionSummary>
      <AccordionDetails>
        <Grid
          container
          direction="column"
        >
          {/* <ReactSortable
            list={lectures}
            setList={setLectures}
          > */}
          {
            week.lectures.map((item, index) => (
              // <div key={item.id}>
              <Lecture
                lecture={item}
                onLectureAdd={() => handleOnLectureAdd(index)}
                onLectureRemove={() => handleOnLectureRemove(index)}
              />
              // </div>
            ))
          }
          {/* </ReactSortable> */}
        </Grid>
      </AccordionDetails>
    </Accordion>
  )
}