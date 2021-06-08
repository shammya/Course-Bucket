import { Grid, IconButton, TextField, Typography } from "@material-ui/core";
import { AddCircle, DeleteForever, ImportExport } from "@material-ui/icons";
import React, { useState } from "react";
import { IconPicker } from "react-fa-icon-picker";
import { ReactSortable } from "react-sortablejs";


export function AddAbleTextField({
  onObjectsChange = (data) => (console.log(data)),
  header = "",
  showIconPicker = false,
  objects = [{ id: 0, value: "", icon: showIconPicker ? "FaIcons" : "" }],
}) {
  const defaultObject = { id: 10, value: "", icon: objects[0].icon };
  const [data, setData] = useState(objects);
  function onDataChange(newData) {
    setData(newData);
    onObjectsChange(newData);
  }
  function onTextFieldChange(index, text) {
    let newArray = [...data];
    newArray[index] = { ...data[index], value: text }
    onDataChange(newArray);
  }
  function addTextField(index) {
    let newArray = [...data];
    newArray.splice(index, 0, defaultObject);
    onDataChange(newArray);
  }
  function onDelete(index) {
    let newArray = [...data];
    newArray.splice(index, 1);
    onDataChange(newArray);
  }
  function upArrowClick(index) {
    if (index === 0) return;
    let array = data.splice(0);
    let obj = array[index];
    array[index] = array[index - 1];
    array[index - 1] = obj;
    onDataChange(array);
  }
  function downArrowClick(index) {
    if (index === data.length - 1) return;
    let array = data.splice(0);
    let obj = array[index];
    array[index] = array[index + 1];
    array[index + 1] = obj;
    onDataChange(array);
  }
  function onIconValueChange(index, icon) {
    let newArray = [...data];
    newArray.splice(index, 1, { ...newArray[index], icon: icon });
    onDataChange(newArray);
  }

  return (
    <Grid container>
      {header !== "" && <Typography variant="h5" gutterBottom>{header}</Typography>}
      <ReactSortable
        list={data}
        setList={setData}
      >
        {
          data.map((item, index) => (
            <TextField
              fullWidth
              onChange={(event) => onTextFieldChange(index, event.target.value)}
              value={item.value}
              variant="outlined"
              InputProps={{
                // endAdornment: (
                //   <>

                //     <IconButton onClick={event => upArrowClick(index)}>
                //       <ArrowUpward />
                //     </IconButton>
                //     <IconButton onClick={event => downArrowClick(index)} >
                //       <ArrowDownward />
                //     </IconButton>
                //   </>
                // ),
                startAdornment: (
                  <>
                    <IconButton >
                      <ImportExport />
                    </IconButton>
                    <IconButton onClick={(event) => addTextField(index)} >
                      <AddCircle />
                    </IconButton>
                    <IconButton onClick={(event) => onDelete(index)} >
                      <DeleteForever />
                    </IconButton>
                    {
                      showIconPicker && <IconButton >
                        <IconPicker value={item.icon} onChange={(icon) => onIconValueChange(index, icon)} />
                      </IconButton>
                    }
                  </>
                )
              }}
            />
          ))
        }
      </ReactSortable>
    </Grid>
  )
}