import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  Grid,
  makeStyles,
  Radio,
  RadioGroup,
  Typography,
} from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const CustomSelect = ({ data, title, open, selected, onClose, onChange }) => {
  const classes = useStyles();
  const [value, setValue] = useState(selected);

  function handleChange(event) {
    onChange(event.target.value);
  }

  return (
    <Dialog onClose={onClose} open={open} style={{ padding: 10 }}>
      <DialogTitle style={{ textAlign: "center" }}>{title}</DialogTitle>
      <DialogContent>
        <FormControl component="fieldset">
          <RadioGroup>
            {data.map((item, index) => (
              <FormControlLabel
                key={index}
                checked={item === selected}
                value={item}
                control={<Radio />}
                label={item}
                onClick={handleChange}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </DialogContent>
      <Button color="primary" onClick={onClose}>
        Cancel
      </Button>
    </Dialog>
  );
};

function Sort({ sortTypes, sortType, setSortType }) {
  const [open, setOpen] = useState(false);
  const handleChange = (value) => {
    setSortType(value);
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Grid item sm={12} xs={6} container>
      <Grid container justifyContent="space-between" onClick={handleOpen}>
        <Typography variant="h6">Sort by</Typography>
        <SortIcon />
      </Grid>
      <CustomSelect
        title={"Set sort type"}
        selected={sortType}
        open={open}
        data={sortTypes}
        onClose={handleClose}
        onChange={handleChange}
      />
    </Grid>
  );
}

export default Sort;
