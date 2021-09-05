// components
import Footer from "components/footer/Footer";
import { Header } from "components/header/Header";
import React from "react";
import { useRouteMatch } from "react-router-dom";
import GridImageView from "tools/customDesign/ImageVeiw";
import SimpleBackdrop from "tools/SimpleBackdrop";

export default function User({
  loading = false,
  pageNotFound = false,
  children,
}: {
  loading?: boolean;
  pageNotFound?: boolean;
  children: any;
}) {
  let match = useRouteMatch();
  console.log("in user loading", loading);
  return (
    <>
      <main>
        <section>
          <Header />
          <div style={{ margin: "0 auto", maxWidth: "1400px", padding: 20 }}>
            {loading ? (
              <SimpleBackdrop />
            ) : pageNotFound ? (
              <GridImageView src={require("assets/img/404.jpg")} />
            ) : (
              children
            )}
          </div>
          {!loading && <Footer />}
        </section>
      </main>
    </>
  );
}
