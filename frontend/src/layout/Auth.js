// components
import React from "react";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
// views
import Login from "views/auth/Login.js";
import Register from "views/auth/Register";



export default function Auth() {
  let match = useRouteMatch();
  return (
    <>
      {/* <Navbar transparent /> */}
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
            style={{
              backgroundImage:
                "url(" + require("assets/img/register_bg_2.png").default + ")",
            }}
          >
            Heloo geloo<br />alajsdkfj Heloo geloo<br />alajsdkfj Heloo geloo<br />alajsdkfj Heloo geloo<br />alajsdkfj Heloo geloo<br />alajsdkfj Heloo geloo<br />alajsdkfj Heloo geloo<br />alajsdkfj Heloo geloo<br />alajsdkfj Heloo geloo<br />alajsdkfj Heloo geloo<br />alajsdkfj Heloo geloo<br />alajsdkfj Heloo geloo<br />alajsdkfj Heloo geloo<br />alajsdkfj Heloo geloo<br />alajsdkfj Heloo geloo<br />alajsdkfj Heloo geloo<br />alajsdkfj
            </div>
          {/* <Login /> */}
          <Switch>
            <Route path={`${match.path}/login`} exact component={Login} />
            <Route path={`${match.path}/register`} exact component={Register} />
            <Redirect from="/" to={`${match.path}/login`} />
          </Switch>
          {/* <FooterSmall absolute /> */}
        </section>
        Helo gll
      </main>
    </>
  );
}
