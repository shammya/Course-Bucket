// components
import { Grid, makeStyles } from "@material-ui/core";
import { ForgotPassword } from "components/auth/ForgotPassword";
import { SignIn } from "components/auth/SignIn";
import { SignUp } from "components/auth/SignUp";
import ProfileDetails from "components/person/ProfileDetails";
import React from "react";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    minHeight: "100vh",
    padding: "30px 0px",
  },
}));

export default function Auth() {
  const classes = useStyles();
  let match = useRouteMatch();
  return (
    <>
      {/* <Navbar transparent /> */}
      <main>
        <div
          // className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
          style={{
            // height: "100vw",
            width: "100vw",
            backgroundColor: "#1E293B",
            backgroundSize: "100vw",
            backgroundImage:
              "url(" + require("assets/img/register_bg_2.png").default + ")",
          }}
        >
          {/* <Login /> */}

          <Grid
            container
            justify="space-around"
            alignContent="center"
            className={classes.root}
          >
            <Switch>
              <Route path={`${match.path}/signin`} exact component={SignIn} />
              <Route path={`${match.path}/signup`} exact component={SignUp} />
              <Route
                path={`${match.path}/forgot-password`}
                exact
                component={ForgotPassword}
              />
              <Route
                path={`${match.path}/profile-details`}
                exact
                component={ProfileDetails}
              />
              <Redirect from="/" to={`${match.path}/signin`} />
            </Switch>
          </Grid>
          {/* <FooterSmall absolute /> */}
        </div>
      </main>
    </>
  );
}
