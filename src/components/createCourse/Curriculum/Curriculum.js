import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import { Week } from "./Week";




const defaultWeek = {
  id: 2,
  name: "New Week",
  lectures: [
    {
      id: 0,
      name: "Lecture name is here...",
      type: '',
      file: {
        title: '',
        body: '',
      }
    },
  ],
}
const weeksTemp = [
  defaultWeek
]

export function Curriculum() {
  const [weeks, setWeeks] = useState(weeksTemp);

  function onWeekChange(index, week) {
    weeks[index] = week;
    // const newWeeks = [...weeks];
    // newWeeks[index] = week;
    // setWeeks(newWeeks);
  }
  function handleOnWeekAdd(index) {
    weeks.splice(index, 0, defaultWeek);
    setWeeks([...weeks]);
  }
  function handleOnWeekRemove(index) {
    weeks.splice(index, 1);
    setWeeks([...weeks]);
  }
  return (
    <Grid container direction="column">
      {/*      <ReactSortable
        list={weeks}
        setList={setWeeks}
      > */}
      {
        weeks.map((item, index) => (
          // <div key={item.id}>
          <Week
            week={item}
            onWeekChange={week => onWeekChange(index, week)}
            onWeekAdd={() => handleOnWeekAdd(index)}
            onWeekRemove={() => handleOnWeekRemove(index)}
          />
        ))
      }
      {/* </div> */}
      {/* </ReactSortable> */}
    </Grid>
  )
}