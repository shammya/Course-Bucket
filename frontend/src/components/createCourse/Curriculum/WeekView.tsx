import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@material-ui/core";
import {
  Cancel,
  CheckCircle,
  DeleteForever,
  Edit,
  ExpandMore,
} from "@material-ui/icons";
import AddCircle from "@material-ui/icons/AddCircle";
import { Lecture, Week } from "classes/Course";
import React, { useEffect, useState } from "react";
import { LectureView } from "./LectureView";

const defaultLecture = {
  id: 0,
  name: "Lecture name is here...",
  type: "",
  file: {
    title: "Title",
    body: "",
  },
};

export function WeekView({
  week,
  onWeekChange,
  onWeekRemove,
}: {
  week: Week;
  onWeekChange: (Week) => void;
  onWeekRemove: () => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [fieldValue, setFieldValue] = useState(week.title);

  useEffect(() => {
    setFieldValue(week.title);
  }, [week.title]);

  function handleOnLectureChange(index, lecture) {
    week.lectures.splice(index, 1, lecture);
    onWeekChange({ ...week, lectures: week.lectures });
  }
  function handleOnLectureAdd() {
    onWeekChange({ ...week, lectures: [...week.lectures, new Lecture()] });
  }
  function handleOnLectureRemove(index) {
    week.lectures.splice(index, 1);
    onWeekChange({ ...week, lectures: week.lectures });
  }

  return (
    <Accordion expanded={expanded} style={{ width: "100%" }}>
      <AccordionSummary
        expandIcon={<ExpandMore onClick={(event) => setExpanded(!expanded)} />}
      >
        {/* <IconButton>
          <ImportExport />
        </IconButton> */}
        {!editMode && (
          <>
            <IconButton onClick={(event) => setEditMode(true)}>
              <Edit />
            </IconButton>
            <IconButton onClick={onWeekRemove}>
              <DeleteForever />
            </IconButton>
            <Typography>Week {10} :</Typography>
            <Typography> {fieldValue}</Typography>
          </>
        )}
        {editMode && (
          <>
            <TextField
              variant="outlined"
              fullWidth
              defaultValue={fieldValue}
              onBlur={(event) => setFieldValue(event.target.value)}
            />
            <IconButton
              onClick={(event) => {
                onWeekChange({ ...week, title: fieldValue });
                setEditMode(false);
              }}
            >
              <CheckCircle />
            </IconButton>
            <IconButton
              onClick={(event) => {
                setEditMode(false);
                setFieldValue(week.title);
              }}
            >
              <Cancel />
            </IconButton>
          </>
        )}
      </AccordionSummary>
      <AccordionDetails>
        <Grid container direction="column" spacing={1}>
          {/* <ReactSortable
            list={lectures}
            setList={setLectures}
          > */}
          {week.lectures.map((item, index) => (
            <Grid item container>
              <LectureView
                lecture={item}
                onLectureChange={(lecture) =>
                  handleOnLectureChange(index, lecture)
                }
                onLectureRemove={() => handleOnLectureRemove(index)}
              />
            </Grid>
          ))}
          <Grid item container justify="center" style={{ marginTop: 10 }}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddCircle />}
              onClick={handleOnLectureAdd}
            >
              ADD LECTURE
            </Button>
          </Grid>
          {/* </ReactSortable> */}
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
}
