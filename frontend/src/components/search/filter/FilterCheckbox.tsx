import { Checkbox, FormControlLabel } from "@material-ui/core";
import React, { useEffect, useState } from "react";

export function FilterCheckBox({
  checked,
  label,
  onChange,
}: {
  checked: boolean;
  label: string;
  onChange: (state: boolean) => void;
}) {
  const [check, setCheck] = useState(false);
  useEffect(() => {
    setCheck(checked);
  }, [checked]);
  function handleChange(event) {
    setCheck(!check);
    onChange(!check);
  }
  return (
    <FormControlLabel
      control={<Checkbox checked={check} onChange={handleChange} />}
      label={label}
    />
  );
}
