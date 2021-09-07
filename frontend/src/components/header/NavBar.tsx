import {
  Button,
  Collapse,
  Divider,
  Grid,
  SwipeableDrawer,
  Typography,
} from "@material-ui/core";
import { Category } from "classes/Category";
import CategoryService from "components/AdminPanel/api/CategoryService";
import AuthService from "components/auth/api/AuthService";
import React, { useEffect, useState } from "react";
import { Responsive } from "tools/responsive/Responsive";
import { MenuBar, useStyles } from "./MenuBar";

export function TopNav(props) {
  const classes = useStyles();
  const [menuItems, setMenuItems] = useState<Category[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    CategoryService.getCategories().then((response) => {
      setMenuItems(response.data[0].children);
      setLoaded(true);
    });
  }, []);

  return (
    <React.Fragment>
      {loaded && (
        <Responsive displayIn={["Laptop", "Tablet"]}>
          <Grid
            className={classes.menuContainer}
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <MenuBar mainCategories={menuItems} />
            {/* {menuItems.map((item) => (
          ))} */}
          </Grid>
        </Responsive>
      )}
    </React.Fragment>
  );
}

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

function MainCat({ category }: { category: Category }) {
  const [open, setOpen] = useState(false);
  return (
    <Grid
      item
      container
      onClick={() => setOpen(!open)}
      direction="column"
      spacing={0}
    >
      <Grid item>
        <Typography variant="h6">{category.name} </Typography>
      </Grid>
      <Grid item container>
        <Collapse in={open}>
          <Grid container direction="column" spacing={0}>
            {category.children?.map((subCategory) => (
              <Grid item key={subCategory.id}>
                <Typography variant="body1">{subCategory.name}</Typography>
              </Grid>
            ))}
          </Grid>
        </Collapse>
      </Grid>
    </Grid>
  );
}

export function SideNav(props) {
  const classes = useStyles();
  const [menuItems, setMenuItems] = useState<Category[]>([]);

  useEffect(() => {
    CategoryService.getCategories().then((response) => {
      setMenuItems(response.data[0].children);
    });
  }, []);

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
        <div onClick={toggleDrawer(true)}>{props.children}</div>
        {/* <ScrollView> */}
        <SwipeableDrawer
          classes={{ paper: classes.drawer }}
          anchor={"right"}
          open={open}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          <Grid container direction="column" style={{ width: "50%" }}>
            <Grid item>
              <DefaultComponentOfSideNav />
            </Grid>
            <Grid item container>
              {menuItems.map((menu) => (
                <MainCat key={menu.id} category={menu} />
              ))}
            </Grid>
          </Grid>
        </SwipeableDrawer>
        {/* </ScrollView> */}
      </Responsive>
    </div>
  );
}
