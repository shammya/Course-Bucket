import { Chip, FormControl, InputLabel, makeStyles, MenuItem, Select, useTheme } from "@material-ui/core";
import React, { useState } from "react";


const useStyles = makeStyles((theme) => ({
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
  formControl: {
    margin: theme.spacing(1, 0),
    minWidth: 400,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },

}));

const languageItem = [
  "Bangla", "English", "Hindi", "Arabic", "Persian",
]

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


export function LanguageField({
  objects = [],
  onObjectsChange = (languages) => (console.log(languages))
}) {
  const classes = useStyles();
  const theme = useTheme();
  const [languages, setLanguages] = useState(objects);
  const onLanguagesChange = (event) => {
    setLanguages(event.target.value);
    onObjectsChange(event.target.value);
  };
  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel id="demo-mutiple-chip-label">Language</InputLabel>
      <Select
        label="Language"
        labelId="demo-mutiple-chip-label"
        id="demo-mutiple-chip"
        multiple
        value={languages}
        onChange={onLanguagesChange}
        // input={<Input />}
        renderValue={(selected) => (
          <div className={classes.chips}>
            {selected.map((value) => (
              <Chip key={value} label={value} className={classes.chip} />
            ))}
          </div>
        )}
        MenuProps={MenuProps}
      >
        {languageItem.map((item) => (
          <MenuItem key={item} value={item} style={getStyles(item, languages, theme)}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}