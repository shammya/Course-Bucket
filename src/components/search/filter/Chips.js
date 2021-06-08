import { Chip, Grid } from "@material-ui/core";
import React from "react";


function CustomChip({
  object,
  onObjectChange,
  value = object.title,
}) {
  function handleDelete() {
    if (object.type === "Slider") {
      onObjectChange({ ...object, value: [object.min, object.max] })
    }
    else {
      onObjectChange({ ...object, checked: false });
    }
  }
  return (
    <Grid item sm>
      <Chip
        size="medium"
        style={{ width: "100%", marginTop: 5, marginRight: 5 }}
        label={value}
        onDelete={handleDelete}
        color="secondary"
      />
    </Grid>
  )
}

export function FilterChips({
  objects,
  onObjectsChange,
}) {
  function handleSliderFilterChange(index, newFilter) {
    let newObjects = objects.splice(0);
    newObjects[index] = newFilter;
    onObjectsChange(newObjects);
  }
  function handleCategoryFilterChange(index, newFilter) {
    let newObjects = objects;
    newObjects[index].items.data = newFilter;
    onObjectsChange(newObjects);
  }
  function handleFilterChange(index, newFilter) {
    let newObjects = objects;
    newObjects[index].items = newFilter;
    onObjectsChange(newObjects);
  }

  return (
    <Grid id="chipsContainer" sm container>
      {
        objects.map((filter, index) => {
          if (filter.type === "Slider") {
            if ((filter.min !== filter.value[0] || filter.max != filter.value[1]))
              return <CustomChip
                object={filter}
                value={"Showing " + filter.value[0] + filter.valueType + " to " + filter.value[1] + filter.valueType}
                onObjectChange={newFilter => handleSliderFilterChange(index, newFilter)}
              />
          }
          else if (filter.type === "List" && filter.title === "Category")
            return <GenerateChips
              object={filter.items.data}
              onObjectChange={newFilter => handleCategoryFilterChange(index, newFilter)}
            />
          else {
            return <GenerateChips
              object={filter.items}
              onObjectChange={newFilter => handleFilterChange(index, newFilter)}
            />
          }
        })
      }
    </Grid>
  )
}

function GenerateChips({ object, onObjectChange }) {
  function handleChange(index, newItem) {
    let newObject = object;
    newObject[index] = newItem;
    onObjectChange(newObject);
  }
  function handleCategoryChange(index, newItem) {
    let newObject = object;
    newObject[index].items = newItem;
    onObjectChange(newObject);
  }
  return (
    object.map((item, index) => (
      <>
        {item.checked && (
          <CustomChip
            object={item}
            value={item.title}
            onObjectChange={(newItem) => handleChange(index, newItem)}
          />
        )}
        {(item.items !== undefined)
          ? item.items.length !== 0
            ? <GenerateChips
              object={item.items}
              onObjectChange={(newItem) => handleCategoryChange(index, newItem)}
            />
            : null : null
        }
      </>
    ))
  )
}

export function CategoryChips({ object, onObjectChange }) {
  return (
    <Grid container sm>
      <GenerateChips object={object.data} onObjectChange={newData => onObjectChange({ ...object, data: newData })} />
    </Grid>
  )
}