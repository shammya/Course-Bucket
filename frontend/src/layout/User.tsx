// components
import { Header } from "components/header/Header";
import React from "react";
import { useRouteMatch } from "react-router-dom";

export default function User({ children }) {
  let match = useRouteMatch();
  return (
    <>
      <main>
        <section>
          <Header />
          <div style={{ margin: "0 auto", maxWidth: "1400px", padding: 20 }}>
            {children}
          </div>
          {/* <Footer /> */}
        </section>
      </main>
    </>
  );
}
