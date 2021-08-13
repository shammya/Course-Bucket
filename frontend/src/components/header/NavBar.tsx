import { Grid } from "@material-ui/core";
import { Category } from "classes/Category";
import CategoryService from "components/AdminPanel/api/CategoryService";
import React, { useEffect, useState } from "react";
import { Responsive } from "tools/responsive/Responsive";
import { MenuBar, useStyles } from "./MenuBar";

export function TopNav(props) {
  const classes = useStyles();
  const [menuItems, setMenuItems] = useState<Category[]>([]);

  useEffect(() => {
    CategoryService.getCategories().then((response) => {
      setMenuItems(response.data[0].children);
    });
  }, []);

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}
// import { Menu, menuItems, useStyles } from "./MenuBar";

// function DefaultComponentOfSideNav() {
//   const classes = useStyles();
//   return (
//     <>
//       {!AuthService.isLogin() ? (
//         <Button
//           className={classes.signInBtn}
//           variant="contained"
//           color="primary"
//         >
//           Sign in
//         </Button>
//       ) : null}
//       <Divider />
//     </>
//   );
// }

export function SideNav({ children }) {
  // const classes = useStyles();
  // const [open, setOpen] = React.useState(false);
  // const toggleDrawer = (open) => (event) => {
  //   if (
  //     event &&
  //     event.type === "keydown" &&
  //     (event.key === "Tab" || event.key === "Shift")
  //   ) {
  //     return;
  //   }
  //   setOpen(open);
  // };
  // return (
  //   <div>
  //     <Responsive displayIn={"Mobile"}>
  //       {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
  //       <div onClick={toggleDrawer(true)}>{children}</div>
  //       {/* <ScrollView> */}
  //       <SwipeableDrawer
  //         classes={{ paper: classes.drawer }}
  //         anchor={"right"}
  //         open={open}
  //         onClose={toggleDrawer(false)}
  //         onOpen={toggleDrawer(true)}
  //       >
  //         <DefaultComponentOfSideNav />
  //         {menuItems.data.map((item) => (
  //           <Menu
  //             mainCategories={item}
  //           />
  //         ))}
  //       </SwipeableDrawer>
  //       {/* </ScrollView> */}
  //     </Responsive>
  //   </div>
  // );
}
