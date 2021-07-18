import { Grid, IconButton, TextField, Typography } from "@material-ui/core";
import { AddCircle, DeleteForever } from "@material-ui/icons";
import { Property } from "classes/Course";
import React, { useState } from "react";
import { IconPicker } from "react-fa-icon-picker";
import { ReactSortable } from "react-sortablejs";

export function AddAbleTextField({
  onObjectsChange = (data) => console.log(data),
  header = "",
  showIconPicker = false,
  objects,
  // objects = [{ id: 0, value: "", icon: showIconPicker ? "FaIcons" : "" }],
}) {
  // const defaultObject = { id: 10, value: "", icon: objects[0].icon };
  const [data, setData] = useState(
    showIconPicker
      ? objects
      : objects.map((value, idx) => ({ id: idx, text: value }))
  );

  function onDataChange(newData) {
    setData(newData);
    onObjectsChange(
      showIconPicker
        ? newData.map((item, idx) => ({
            id: item.id,
            icon: item.icon,
            text: item.text,
            position: idx,
          }))
        : newData.map((item) => item.text)
    );
  }
  function onTextFieldChange(index, text) {
    let newArray = [...data];
    newArray[index] = { ...data[index], text: text };
    onDataChange(newArray);
  }
  function addTextField() {
    let newArray = [...data];
    newArray.push(showIconPicker ? new Property() : { id: 100, text: "" });
    onDataChange(newArray);
  }
  function onDelete(index) {
    let newArray = [...data];
    newArray.splice(index, 1);
    onDataChange(newArray);
  }

  // function upArrowClick(index) {
  //   if (index === 0) return;
  //   let array = data.splice(0);
  //   let obj = array[index];
  //   array[index] = array[index - 1];
  //   array[index - 1] = obj;
  //   onDataChange(array);
  // }
  // function downArrowClick(index) {
  //   if (index === data.length - 1) return;
  //   let array = data.splice(0);
  //   let obj = array[index];
  //   array[index] = array[index + 1];
  //   array[index + 1] = obj;
  //   onDataChange(array);
  // }
  function onIconValueChange(index, iconName) {
    let newArray = [...data];
    newArray[index].icon.content = iconName;
    onDataChange(newArray);
  }

  console.log(data);
  return (
    <Grid container>
      {header !== "" && (
        <Typography variant="h5" gutterBottom>
          {header}
        </Typography>
      )}
      <ReactSortable
        list={data}
        setList={onDataChange}
        style={{ width: "100%" }}
      >
        {data.map((item, index) => (
          <TextField
            fullWidth
            onChange={(event) => onTextFieldChange(index, event.target.value)}
            value={item.text}
            variant="outlined"
            InputProps={{
              startAdornment: showIconPicker && (
                <IconButton>
                  <IconPicker
                    containerStyles={{
                      right: "160%",
                      top: "-33.33%",
                      width: "201px",
                    }}
                    value={item.icon.content}
                    onChange={(icon) => onIconValueChange(index, icon)}
                  />
                </IconButton>
              ),
              endAdornment: (
                <>
                  <IconButton onClick={(event) => onDelete(index)}>
                    <DeleteForever />
                  </IconButton>
                </>
              ),
            }}
          />
        ))}
      </ReactSortable>
      <Grid item container justify="flex-end">
        <IconButton
          edge="end"
          size="medium"
          onClick={(event) => addTextField()}
        >
          <AddCircle />
        </IconButton>
      </Grid>
    </Grid>
  );
}
