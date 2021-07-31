import { Collapse, Grid, List, ListItem, ListItemText } from "@material-ui/core";
import React, { useState } from "react";
import { CategorySelector } from "tools/customDesign/CategorySelector";
import { timeout } from "tools/Tools";
import { FilterCheckBox } from "./FilterCheckbox";
import { FilterSlider } from "./FilterSlider";


export function MakeList({
  object = {
    title: "Filter label",
    type: "List",
    open: false,
    items: [
      {
        title: "Filter values",
        checked: false,
      },
    ],
  },
  onObjectChange
}) {
  const [open, setOpen] = useState(object.open);
  async function handleOpenChange(value) {
    let obj = object;
    obj.open = value;
    setOpen(value);
    await timeout(500);
    onObjectChange(obj);
  }
  return (
    <>
      <ListItem key={object.title} button onClick={() => handleOpenChange(!object.open)}>
        <ListItemText primary={object.title} />
      </ListItem>
      <Collapse in={open} timeout="auto">
        <GenerateFilterValue
          object={object}
          onObjectChange={onObjectChange}
        />
      </Collapse>
    </>
  )
}

export function GenerateFilterValue({
  object = {
    title: "Filter label",
    type: "List",
    open: false,
    items: [
      {
        title: "Filter values",
        checked: false,
      },
    ],
  } || {
    title: "Rating",
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

  function handleItemChange(index, newItem) {
    let obj = { ...object };
    obj.items[index] = newItem;
    onObjectChange(obj);
  }

  function handleCategoryChange(items) {
    let newObject = { ...object };
    newObject.items = items;
    onObjectChange(newObject);
  }

  if (object.title === "Category") {
    return (
      <CategorySelector
        objects={object.items}
        onObjectsChange={handleCategoryChange}
      />
    )
  }
  else if (object.type === "List") {
    return (
      <List>
        {object.items.map((item, index) => (
          <ListItem key={item.title} value={item}>
            <FilterCheckBox
              object={item}
              onObjectChange={(newItem) => { handleItemChange(index, newItem) }}
            />
          </ListItem>
        ))}
      </List>
    )
  }
  else return (
    <Grid
      style={{ height: "100%" }}
      container
      alignItems="center"
      justify="center"
    >
      <FilterSlider
        object={object}
        onObjectChange={onObjectChange}
      // handleSliderCommitFunc={handleSliderCommit}
      // changeFilteredArrayFunc={handleFilterSliderChange}
      />
    </Grid>
  )
}