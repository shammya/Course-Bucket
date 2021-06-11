import { Checkbox, FormControlLabel } from "@material-ui/core";
import React, { useState } from "react";

export function FilterCheckBox({
  object = {
    title: "checkbox",
    checked: false,
  },
  onObjectChange
}) {
  const [checked, setChecked] = useState(object.checked);
  function handleChange(event) {
    onObjectChange({ ...object, checked: !object.checked });
    setChecked(!checked);
  }
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={handleChange}
        />
      }
      label={object.title}
    />
  )
}
