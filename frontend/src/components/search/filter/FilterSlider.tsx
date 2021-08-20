import { Grid, InputAdornment, Slider, TextField } from "@material-ui/core";
import React, { useEffect } from "react";
import { ISliderFilter } from "../SearchPage";

export function FilterSlider({
  sliderData,
  onChange,
}: {
  sliderData: ISliderFilter;
  onChange: (value: number[], isClear: boolean) => void;
}) {
  const [value, setValue] = React.useState(sliderData.value);
  useEffect(() => {
    setValue(sliderData.value);
  }, [sliderData.value]);

  async function handleSliderChange(newValue) {
    setValue([
      Math.min(newValue[0], newValue[1]),
      Math.max(newValue[0], newValue[1]),
    ]);
    // changeFilteredArrayFunc({ filterType: filterType, min: newValue[0], max: newValue[1] });
  }
  function handleSliderCommit(newValue) {
    setValue([
      Math.min(newValue[0], newValue[1]),
      Math.max(newValue[0], newValue[1]),
    ]);
    onChange(value, value[0] == sliderData.min && value[1] == sliderData.max);
    // let newObject = object;
    // newObject.value = newValue;
    // onObjectChange(newObject);
  }

  function handleInputChangeMin(minValue) {
    setValue([Math.min(minValue, value[1]), Math.max(minValue, value[1])]);
  }
  function handleInputChangeMax(maxValue) {
    setValue([Math.min(value[0], maxValue), Math.max(value[0], maxValue)]);
  }
  function handleOnBlurMin(minValue) {
    var newVal = Number(minValue);
    minValue = minValue === "" ? 0 : newVal;
    var maxValue = value[1];

    if (newVal < sliderData.min) minValue = sliderData.min;
    if (newVal > sliderData.max) minValue = sliderData.max;

    handleSliderCommit([minValue, maxValue]);
  }
  const handleOnBlurMax = (maxValue) => {
    var newVal = Number(maxValue);
    var minValue = value[0];
    maxValue = maxValue === "" ? 0 : newVal;

    if (newVal < sliderData.min) maxValue = sliderData.min;
    if (newVal > sliderData.max) maxValue = sliderData.max;

    handleSliderCommit([minValue, maxValue]);
  };
  function generateMarks() {
    var ara: Array<{ value: number; label: string }> = [];
    for (
      var i = sliderData.min;
      i <= sliderData.max;
      i = i + (sliderData.max - sliderData.min) / 5
    ) {
      ara.push({ value: i, label: "" + i + sliderData.valueType });
    }
    return ara;
  }

  return (
    <Grid item container xs spacing={2}>
      <Grid item xs={12}>
        <Slider
          min={sliderData.min}
          max={sliderData.max}
          step={sliderData.step}
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
          fullWidth
          label="Min value"
          id="outlined-start-adornment"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {sliderData.valueType}
              </InputAdornment>
            ),
          }}
          variant="outlined"
          value={value[0]}
          onChange={(event) => handleInputChangeMin(event.target.value)}
          onBlur={(event) => handleOnBlurMin(event.target.value)}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          fullWidth
          label="Max value"
          id="outlined-start-adornment"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {sliderData.valueType}
              </InputAdornment>
            ),
          }}
          variant="outlined"
          value={value[1]}
          onChange={(event) => handleInputChangeMax(event.target.value)}
          onBlur={(event) => handleOnBlurMax(event.target.value)}
        />
      </Grid>
    </Grid>
  );
}
