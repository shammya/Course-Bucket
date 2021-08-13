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
import { useSnackbar } from "notistack";

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
  weekNo,
}: {
  week: Week;
  onWeekChange: (Week) => void;
  onWeekRemove: () => void;
  weekNo: number;
}) {
  const { enqueueSnackbar } = useSnackbar();
  const [lectures, setLectures] = useState(week.lectures);
  const [editMode, setEditMode] = useState(false);
  const [fieldValue, setFieldValue] = useState(week.title);

  useEffect(() => {
    setFieldValue(week.title);
    // handleOnLectureAdd;
  }, []);

  function handleOnLectureChange(index, lecture) {
    week.lectures.splice(index, 1, lecture);
    onWeekChange({ ...week, lectures: week.lectures });
    setLectures(week.lectures);
  }
  function handleOnLectureAdd() {
    let lectures = [
      ...week.lectures,
      new Lecture().setLectureNo(week.lectures.length + 1),
    ];
    onWeekChange({ ...week, lectures: lectures });
    setLectures(lectures);
  }
  function handleOnLectureRemove(index) {
    if (lectures.length == 1) {
      enqueueSnackbar("There must be at least one lecture in a week", {
        variant: "warning",
      });
      return;
    }
    week.lectures.splice(index, 1);
    onWeekChange({ ...week, lectures: week.lectures });
    setLectures(week.lectures);
  }

  return (
    <Accordion style={{ width: "100%" }}>
      <AccordionSummary expandIcon={<ExpandMore />}>
        {/* <IconButton>
          <ImportExport />
        </IconButton> */}
        {!editMode && (
          <Grid container alignItems="center" direction="row" wrap="nowrap">
            <Grid item>
              <IconButton
                onClick={(event) => {
                  event.stopPropagation();
                  setEditMode(true);
                }}
              >
                <Edit />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                onClick={(event) => {
                  onWeekRemove();
                  event.stopPropagation();
                }}
              >
                <DeleteForever />
              </IconButton>
            </Grid>
            <Grid item>
              <Typography style={{ whiteSpace: "nowrap", marginRight: 10 }}>
                Week {weekNo} :
              </Typography>
            </Grid>
            <Grid item>
              <Typography> {fieldValue}</Typography>
            </Grid>
          </Grid>
        )}
        {editMode && (
          <Grid container direction="row" alignItems="center" wrap="nowrap">
            <Grid item container wrap="nowrap">
              <TextField
                variant="outlined"
                fullWidth
                defaultValue={fieldValue}
                onBlur={(event) => setFieldValue(event.target.value)}
                onClick={(event) => event.stopPropagation()}
              />
            </Grid>
            <Grid item>
              <IconButton
                onClick={(event) => {
                  event.stopPropagation();
                  if (!fieldValue) {
                    enqueueSnackbar("Week name can not be empty", {
                      variant: "warning",
                    });
                    return;
                  }
                  onWeekChange({ ...week, title: fieldValue });
                  setEditMode(false);
                }}
              >
                <CheckCircle />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                onClick={(event) => {
                  setEditMode(false);
                  setFieldValue(week.title);
                  event.stopPropagation();
                }}
              >
                <Cancel />
              </IconButton>
            </Grid>
          </Grid>
        )}
      </AccordionSummary>
      <AccordionDetails>
        <Grid container direction="column" spacing={1}>
          {/* <ReactSortable
            list={lectures}
            setList={setLectures}
          > */}

          {/* <ReactSortable
            list={lectures}
            setList={setLectures}
            style={{ width: "100%" }}
          > */}
          {lectures.map((item, index) => (
            <Grid item container key={index} style={{ marginBottom: 12 }}>
              <LectureView
                lecture={item}
                lectureNo={index + 1}
                onLectureChange={(lecture) =>
                  handleOnLectureChange(index, lecture)
                }
                onLectureRemove={() => handleOnLectureRemove(index)}
              />
            </Grid>
          ))}
          {/* </ReactSortable> */}
          <Grid
            item
            container
            justifyContent="center"
            style={{ marginTop: 10 }}
          >
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
