import {
  Button,
  Card,
  CardContent,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@material-ui/core";
import { AddCircle, DeleteForever } from "@material-ui/icons";
import { Property } from "classes/Course";
import React, { useCallback, useState } from "react";
import { IconPicker } from "react-fa-icon-picker";
import { ReactSortable } from "react-sortablejs";

function onEnterPressFocusNext(e) {
  if (e.key === "Enter") {
    const inputs = Array.from(
      // Get table or tbody whatever that contains all inputs. The number of parentElements depends on the structure of your html
      e.currentTarget?.parentElement?.parentElement?.parentElement?.querySelectorAll(
        "input"
      ) ?? []
    ).filter(
      (e) =>
        //@ts-ignore
        !e.disabled
    );
    const current = Array.from(e.currentTarget.querySelectorAll("input") ?? []);
    //@ts-ignore
    const index = inputs.indexOf(current[0]);
    //@ts-ignore
    inputs[index + 1]?.focus();
    e.preventDefault();
  }
}

export function AddAbleTextField({
  onObjectsChange = (data) => console.log(data),
  header = "",
  showIconPicker = false,
  objects,
  // objects = [{ id: 0, value: "", icon: showIconPicker ? "FaIcons" : "" }],
}) {
  const onKeyPress: React.KeyboardEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      if (e.key === "Enter") {
        const inputs = Array.from(
          // Get table or tbody whatever that contains all inputs. The number of parentElements depends on the structure of your html
          e.currentTarget?.parentElement?.parentElement?.parentElement?.querySelectorAll(
            "input"
          ) ?? []
        ).filter((e) => !e.disabled);
        const current = Array.from(
          e.currentTarget.querySelectorAll("input") ?? []
        );
        const index = inputs.indexOf(current[0]);
        inputs[index + 1]?.focus();
        e.preventDefault();
      }
    },
    []
  );

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

  return (
    <Card style={{ width: "100%", overflow: "visible" }}>
      <CardContent>
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
                key={index}
                fullWidth
                margin="normal"
                onChange={(event) =>
                  onTextFieldChange(index, event.target.value)
                }
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
                onKeyPress={onKeyPress}
              />
            ))}
          </ReactSortable>
          <Grid item container justifyContent="center">
            <Button
              variant="contained"
              color="primary"
              onClick={(event) => addTextField()}
              startIcon={<AddCircle />}
            >
              Add More
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
