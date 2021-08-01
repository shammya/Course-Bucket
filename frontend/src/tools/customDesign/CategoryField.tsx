import { Chip, Grid, makeStyles, useTheme } from "@material-ui/core";
import React, { useState } from "react";
import { CategorySelector } from "./CategorySelector";

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
    minWidth: 400,
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

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

export function CategoryField({
  objects = {
    defaultExpanded: [],
    data: [],
  },
  onObjectsChange = (selectedCategories: any) =>
    console.log(selectedCategories),
}) {
  const classes = useStyles();
  const theme = useTheme();
  const [selectedCategories, setSelectedCategories] = useState(objects);
  const onCategoriesChange = (obj) => {
    setSelectedCategories(obj);
    onObjectsChange(obj);
  };
  return (
    <>
      {/* <Grid container direction="row">
        {selectedCategories.data.map((item: any) => (
          <Chip label={item.title} />
        ))}
      </Grid>
      <CategorySelector
        categories={[]}
        onCategoriesChange={onCategoriesChange}
      /> */}
    </>
  );
}
