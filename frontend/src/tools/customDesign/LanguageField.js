import {
  Chip,
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  useTheme
} from "@material-ui/core";
import LanguageService from "components/AdminPanel/api/LanguageService";
import React, { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
  formControl: {
    margin: theme.spacing(1, 0),
    width: "100%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

// const languageItem = [
//   "Bangla", "English", "Hindi", "Arabic", "Persian",
// ]

const languageItem = [
  { id: 1, name: "Bengali", adminId: "Mehedi" },
  { id: 2, name: "English", adminId: "Mehedi" },
  { id: 3, name: "Hindi", adminId: "Mehedi" },
  { id: 4, name: "Arabic", adminId: "Mehedi" },
  { id: 5, name: "Persian", adminId: "Mehedi" },
];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

function getStyles(id, languages, theme) {
  return {
    fontWeight:
      languages.some(item => item == id)
        ? theme.typography.fontWeightMedium
        :
        theme.typography.fontWeightRegular,
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
  onObjectsChange = (languages) => console.log(languages),
}) {
  const [languageItem, setLanguageItem] = useState([]);
  const classes = useStyles();
  const theme = useTheme();
  const [languages, setLanguages] = useState([]);
  const onLanguagesChange = (event) => {
    setLanguages(event.target.value);
    onObjectsChange(event.target.value.map(item => languageItem.find(langItem => langItem.id == item)));
  };
  useEffect(() => {
    setLanguages(objects.map(item => item.id));
    LanguageService.getAllLanguages().then(response => {
      setLanguageItem(response.data);
    });
  }, [])

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel id="demo-multiple-chip-label">Language</InputLabel>
      <Select
        label="Language"
        labelId="demo-multiple-chip-label"
        id="demo-multiple-chip"
        multiple
        value={languages}
        onChange={onLanguagesChange}
        // input={<Input />}
        renderValue={(selected) => (
          <div className={classes.chips}>
            {
              selected.map((id) => (
                <Chip
                  key={id}
                  label={languageItem.filter(item => item.id == id)[0]?.name}
                  className={classes.chip}
                />
              )
              )
            }
          </div>
        )}
        MenuProps={MenuProps}
      >
        {languageItem.map((item) => {
          // @ts-ignore
          return (
            <MenuItem
              key={item.id}
              value={item.id}
              style={getStyles(item.id, languages, theme)}
            >
              {item.name}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}
