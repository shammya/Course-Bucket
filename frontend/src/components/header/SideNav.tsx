import { Button, Divider, SwipeableDrawer } from "@material-ui/core";
import AuthService from "components/auth/api/AuthService";
import React from "react";
import { Responsive } from "tools/responsive/Responsive";
import { Menu, menuItems, useStyles } from "./MenuBar";

function DefaultComponentOfSideNav() {
  const classes = useStyles();
  return (
    <>
      {!AuthService.isLogin() ? (
        <Button
          className={classes.signInBtn}
          variant="contained"
          color="primary"
        >
          Sign in
        </Button>
      ) : null}
      <Divider />
    </>
  );
}

export default function SideNav({ children }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(open);
  };

  return (
    <div>
      <Responsive displayIn={"Mobile"}>
        {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
        <div onClick={toggleDrawer(true)}>{children}</div>
        {/* <ScrollView> */}

        <SwipeableDrawer
          classes={{ paper: classes.drawer }}
          anchor={"right"}
          open={open}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          <DefaultComponentOfSideNav />
          {menuItems.data.map((item) => (
            <Menu
              item={item}
              //@ts-ignore
              key={item}
            />
          ))}
        </SwipeableDrawer>
        {/* </ScrollView> */}
      </Responsive>
    </div>
  );
}
