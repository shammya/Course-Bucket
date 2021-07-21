import { Grid } from "@material-ui/core";
import React from "react";
import { Responsive } from "tools/Responsive";
import { Menu, menuItems, useStyles } from "./MenuBar";

export default function TopNav(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Responsive displayIn={["Laptop", "Tablet"]}>
        <Grid
          className={classes.menuContainer}
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          {menuItems.data.map((item) => (
            <Menu
              item={item}
              //@ts-ignore
              key={item}
            />
          ))}
        </Grid>
      </Responsive>
    </React.Fragment>
  );
}
