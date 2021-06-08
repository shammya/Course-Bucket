import { Grid, InputAdornment, Slider, TextField } from "@material-ui/core";
import React from "react";


export function FilterSlider({
  object = {
    name: "Rating",
    type: "Slider",
    open: false,
    min: 0,
    max: 5,
    value: [0, 5],
    step: 0.01,
    valueType: "⭐",
  },
  onObjectChange,
}) {
  const [value, setValue] = React.useState(object.value);

  async function handleSliderChange(newValue) {
    setValue([Math.min(newValue[0], newValue[1]), Math.max(newValue[0], newValue[1])]);
    // changeFilteredArrayFunc({ filterType: filterType, min: newValue[0], max: newValue[1] });
  }
  function handleSliderCommit(newValue) {
    setValue([Math.min(newValue[0], newValue[1]), Math.max(newValue[0], newValue[1])]);
    let newObject = object;
    newObject.value = newValue;
    onObjectChange(newObject);
  }

  function handleInputChangeMin(minValue) {
    setValue([minValue, value[1]]);
  }
  function handleInputChangeMax(maxValue) {
    setValue([value[0], maxValue]);
  }
  function handleOnBlurMin(minValue) {
    var newVal = Number(minValue);
    minValue = minValue === '' ? 0 : newVal;
    var maxValue = value[1];

    if (newVal < object.min)
      minValue = object.min;
    if (newVal > object.max)
      minValue = object.max;

    handleSliderCommit([minValue, maxValue]);
  }
  const handleOnBlurMax = (maxValue) => {
    var newVal = Number(maxValue);
    var minValue = value[0];
    maxValue = maxValue === '' ? 0 : newVal;

    if (newVal < object.min) maxValue = object.min;
    if (newVal > object.max) maxValue = object.max;

    handleSliderCommit([minValue, maxValue]);
  };
  function generateMarks() {
    var ara = [];
    for (var i = object.min; i <= object.max; i = i + (object.max - object.min) / 5) {
      ara.push({ value: i, label: "" + i + object.valueType });
    }
    return ara;
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Slider
          min={object.min}
          max={object.max}
          step={object.step}
          value={value}
          onChange={(event, newValue) => handleSliderChange(newValue)}
          onChangeCommitted={(event, newValue) => handleSliderCommit(newValue)}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          marks={generateMarks()}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="Min value"
          id="outlined-start-adornment"
          InputProps={{
            startAdornment: <InputAdornment position="start">{object.valueType}</InputAdornment>,
          }}
          variant="outlined"
          value={value[0]}
          onChange={event => handleInputChangeMin(event.target.value)}
          onBlur={event => handleOnBlurMin(event.target.value)}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="Max value"
          id="outlined-start-adornment"
          InputProps={{
            startAdornment: <InputAdornment position="start">{object.valueType}</InputAdornment>,
          }}
          variant="outlined"
          value={value[1]}
          onChange={event => handleInputChangeMax(event.target.value)}
          onBlur={event => handleOnBlurMax(event.target.value)}
        />
      </Grid>
    </Grid>
  )
}