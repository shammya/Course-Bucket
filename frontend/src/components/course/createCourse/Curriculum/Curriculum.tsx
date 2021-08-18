import { Button, Grid } from "@material-ui/core";
import AddCircle from "@material-ui/icons/AddCircle";
import { Week } from "classes/Course";
import React, { useEffect, useState } from "react";
import { ReactSortable } from "react-sortablejs";
import { WeekView } from "./WeekView";
import { useSnackbar } from "notistack";
import AuthService from "components/auth/api/AuthService";

export function Curriculum({ editable, course, onCourseAttrChange }) {
  const { enqueueSnackbar } = useSnackbar();
  const [weeks, setWeeks] = useState(course.weeks);

  useEffect(() => {
    // handleOnWeekAdd();
  }, []);

  function onWeekChange(index, week) {
    let updWeeks = [...weeks];
    updWeeks[index] = week;
    setWeeks(updWeeks);
    onCourseAttrChange({ weeks: updWeeks });
  }
  function handleOnWeekAdd() {
    let updWeeks = [...weeks, new Week().setWeekNo(weeks.length + 1)];
    setWeeks(updWeeks);
    onCourseAttrChange({ weeks: updWeeks });
  }

  function handleOnWeekRemove(index) {
    if (weeks.length == 1) {
      enqueueSnackbar("There must be at least a week", { variant: "warning" });
      return;
    }
    let updWeeks = [...weeks];
    updWeeks.splice(index, 1);
    onCourseAttrChange({ weeks: updWeeks });
    setWeeks([...updWeeks]);
  }
  return (
    <Grid container direction="column" spacing={1}>
      {/*      <ReactSortable
        list={weeks}
        setList={setWeeks}
      > */}

      {/* <ReactSortable list={weeks} setList={setWeeks} style={{ width: "100%" }}> */}
      {weeks.map((item, index) => (
        // <div key={item.id}>
        <Grid item container key={index} style={{ marginBottom: 12 }}>
          <WeekView
            editable={editable}
            week={item}
            onWeekChange={(week) => onWeekChange(index, week)}
            onWeekRemove={() => handleOnWeekRemove(index)}
            weekNo={index + 1}
            // setWeek={(week) => onWeekChange(index, week)}
            // onWeekAdd={() => handleOnWeekAdd(index)}
          />
        </Grid>
      ))}
      {/* </ReactSortable> */}
      {editable && (
        <Grid item container justifyContent="center" style={{ marginTop: 10 }}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddCircle />}
            onClick={handleOnWeekAdd}
          >
            ADD WEEK
          </Button>
        </Grid>
      )}
      {/* </div> */}
      {/* </ReactSortable> */}
    </Grid>
  );
}
