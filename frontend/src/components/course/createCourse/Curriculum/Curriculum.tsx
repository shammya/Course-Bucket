import { Button, Grid } from "@material-ui/core";
import AddCircle from "@material-ui/icons/AddCircle";
import { Course, Week } from "classes/Course";
import React, { useState } from "react";
import { WeekView } from "./WeekView";

export function Curriculum({
  course,
  onCourseAttrChange,
}: {
  course: Course;
  onCourseAttrChange: ({ week: Week }) => void;
}) {
  const [weeks, setWeeks] = useState(
    course.weeks == undefined ? [new Week()] : course.weeks
  );

  function onWeekChange(index, week) {
    let updWeeks = [...weeks];
    updWeeks[index] = week;
    setWeeks(updWeeks);
    onCourseAttrChange({ week: updWeeks });
  }
  function handleOnWeekAdd() {
    let updWeeks = [...weeks, new Week()];
    setWeeks(updWeeks);
    onCourseAttrChange({ week: updWeeks });
  }

  function handleOnWeekRemove(index) {
    let updWeeks = [...weeks];
    updWeeks.splice(index, 1);
    onCourseAttrChange({ week: updWeeks });
    setWeeks([...updWeeks]);
  }
  return (
    <Grid container direction="column" spacing={1}>
      {/*      <ReactSortable
        list={weeks}
        setList={setWeeks}
      > */}
      {weeks.map((item, index) => (
        // <div key={item.id}>
        <Grid item container>
          <WeekView
            week={item}
            onWeekChange={(week) => onWeekChange(index, week)}
            onWeekRemove={() => handleOnWeekRemove(index)}
            // setWeek={(week) => onWeekChange(index, week)}
            // onWeekAdd={() => handleOnWeekAdd(index)}
          />
        </Grid>
      ))}
      <Grid item container justify="center" style={{ marginTop: 10 }}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddCircle />}
          onClick={handleOnWeekAdd}
        >
          ADD WEEK
        </Button>
      </Grid>
      {/* </div> */}
      {/* </ReactSortable> */}
    </Grid>
  );
}
