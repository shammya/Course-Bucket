import {
  Button,
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  Grid,
  InputAdornment,
  TextField,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";

export function CoursePrice({ course, onCourseAttrChange, onSave, onCancel }) {
  const [offerShow, setOfferShow] = useState(false);
  const [offerValue, setOfferValue] = useState(course.off ? course.off : 0);
  const [mainPrice, setMainPrice] = useState(
    course.mainPrice ? course.mainPrice : 0
  );
  useEffect(() => {
    if (course.off) setOfferShow(true);
  }, [course.off]);
  return (
    <Grid container direction="column" spacing={3}>
      <Grid item container>
        <Card style={{ width: "100%" }}>
          <CardContent>
            <Grid container direction="column">
              <TextField
                label="Course price"
                variant="outlined"
                value={mainPrice}
                margin="normal"
                type="number"
                inputProps={{ min: 0 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">৳</InputAdornment>
                  ),
                }}
                onChange={(event) => {
                  if (
                    (parseFloat(event.target.value) >= 0 &&
                      event.target.value != "-") ||
                    event.target.value == ""
                  ) {
                    setMainPrice(event.target.value);
                  }
                }}
                onBlur={(event) =>
                  onCourseAttrChange({ mainPrice: Number(event.target.value) })
                }
                helperText="If you want to give this course as free, set price to 0"
              />
              {mainPrice && mainPrice != "0" && (
                <>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={offerShow}
                        onChange={(event) => {
                          if (!offerShow) onCourseAttrChange({ off: 0 });
                          setOfferShow(!offerShow);
                        }}
                      />
                    }
                    label="Do you want to give offer?"
                  />
                  {offerShow && (
                    <>
                      <TextField
                        label="Set an offer in percentage"
                        variant="outlined"
                        value={offerValue}
                        margin="normal"
                        type="number"
                        inputProps={{
                          min: 0,
                          max: 100,
                        }}
                        InputProps={{
                          endAdornment: "%",
                        }}
                        onChange={(event) => {
                          if (
                            (parseFloat(event.target.value) >= 0 &&
                              parseFloat(event.target.value) <= 100 &&
                              event.target.value != "-") ||
                            event.target.value == ""
                          ) {
                            setOfferValue(event.target.value);
                          }
                        }}
                        onBlur={(event) =>
                          onCourseAttrChange({
                            off: Number(event.target.value),
                          })
                        }
                      />
                      <TextField
                        label="Price will show to student"
                        contentEditable={false}
                        variant="outlined"
                        margin="normal"
                        type={
                          mainPrice == "0" ||
                          mainPrice == "" ||
                          offerValue == 100
                            ? "text"
                            : mainPrice != "" && offerValue != ""
                            ? "number"
                            : mainPrice != 0 && offerValue == ""
                            ? "number"
                            : "text"
                        }
                        value={
                          mainPrice == "0" ||
                          mainPrice == "" ||
                          offerValue == 100
                            ? "FREE"
                            : mainPrice != "" && offerValue != ""
                            ? mainPrice - (mainPrice * offerValue) / 100
                            : mainPrice != 0 && offerValue == ""
                            ? mainPrice
                            : "FREE"
                        }
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">৳</InputAdornment>
                          ),
                          readOnly: true,
                        }}
                        onBlur={(event) =>
                          onCourseAttrChange({
                            off: Number(event.target.value),
                          })
                        }
                      />
                    </>
                  )}
                </>
              )}
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item container direction="row" justifyContent="center" spacing={3}>
        <Grid item>
          <Button variant="contained" color="primary" onClick={onSave}>
            Save
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="secondary" onClick={onCancel}>
            Cancel
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
