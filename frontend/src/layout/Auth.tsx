// components
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  makeStyles,
} from "@material-ui/core";
import auth_bg from "assets/img/auth_bg.png";
import AuthService from "components/auth/api/AuthService";
import { ForgotPassword } from "components/auth/ForgotPassword";
import { SignIn } from "components/auth/SignIn";
import { SignUp } from "components/auth/SignUp";
import ProfileDetails from "components/person/ProfileDetails";
import React, { useEffect, useState } from "react";
import {
  Redirect,
  Route,
  Switch,
  useHistory,
  useRouteMatch,
} from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    minHeight: "100vh",
    padding: "30px 0px",
  },
}));

export default function Auth() {
  const classes = useStyles();
  const history = useHistory();
  let match = useRouteMatch();
  const [signOut, setSignOut] = useState(true);

  useEffect(() => {
    if (AuthService.isLogin()) {
      setSignOut(false);
    }
  }, []);
  return (
    <>
      {/* <Navbar transparent /> */}
      <main>
        <div
          // className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
          style={{
            // height: "100vw",
            backgroundColor: "#1E293B",
            backgroundSize: "100vw",
            backgroundImage: `url(${auth_bg})`,
          }}
        >
          {/* <Login /> */}

          <Grid
            container
            alignContent="center"
            className={classes.root}
            justifyContent="center"
          >
            {
              <Dialog open={!signOut}>
                <DialogTitle>{"You are already signed in!!"}</DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    Do you want to sign out?
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button
                    onClick={(event) => {
                      setSignOut(true);
                      AuthService.logout();
                    }}
                    color="primary"
                  >
                    Yes
                  </Button>
                  <Button
                    onClick={(event) => {
                      history.goBack();
                    }}
                    color="primary"
                    autoFocus
                  >
                    No
                  </Button>
                </DialogActions>
              </Dialog>
            }
            <Grid item xs={10} sm={8} md={5}>
              <Switch>
                <Route path={`${match.path}/signin`} exact>
                  <SignIn signOut={signOut} />
                </Route>
                <Route path={`${match.path}/signup`} exact>
                  <SignUp signOut={signOut} />
                </Route>
                <Route path={`${match.path}/forgot-password`} exact>
                  <ForgotPassword signOut={signOut} />
                </Route>
                <Route
                  path={`${match.path}/profile-details`}
                  exact
                  component={ProfileDetails}
                />
                <Redirect from="/" to={`${match.path}/signin`} />
              </Switch>
            </Grid>
          </Grid>
          {/* <FooterSmall absolute /> */}
        </div>
      </main>
    </>
  );
}
