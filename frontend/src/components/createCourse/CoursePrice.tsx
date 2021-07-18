import { Grid, TextField, FormControlLabel, Checkbox } from "@material-ui/core";
import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CoursePrice({ course, onCourseAttrChange }) {
  const [offerShow, setOfferShow] = useState(false);
  return (
    <Grid container direction="column">
      <TextField
        label="Course price"
        variant="outlined"
        defaultValue={course?.mainPrice}
        onBlur={(event) =>
          onCourseAttrChange({ mainPrice: event.target.value })
        }
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={offerShow}
            onChange={(event) => {
              onCourseAttrChange({ off: 0 });
              setOfferShow(!offerShow);
            }}
          />
        }
        label="Do you want to give offer?"
      />
      {offerShow && (
        <TextField
          label="Set an offer in percentage"
          variant="outlined"
          defaultValue={course?.off}
          onBlur={(event) =>
            onCourseAttrChange({ off: Number(event.target.value) })
          }
        />
      )}
      <Grid item container direction="row" justify="center">
        <Button variant="contained" color="primary">
          Save
        </Button>
        <Button variant="contained" color="secondary">
          Cancel
        </Button>
      </Grid>
    </Grid>
  );
}
