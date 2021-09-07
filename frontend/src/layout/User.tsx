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
  disableFooter = false,
  disableCategoryBar = false,
  fullWidth = false,
  children,
}: {
  loading?: boolean;
  pageNotFound?: boolean;
  disableFooter?: boolean;
  fullWidth?: boolean;
  disableCategoryBar?: boolean;
  children: any;
}) {
  let match = useRouteMatch();
  console.log("in user loading", loading);
  console.log("page not found", pageNotFound);
  return (
    <>
      <main>
        <section>
          <Header disableCategoryBar={disableCategoryBar} />
          <div
            style={
              !fullWidth
                ? { margin: "0 auto", maxWidth: "1400px", padding: 20 }
                : {}
            }
          >
            {pageNotFound ? (
              <GridImageView
                src={require("assets/img/404.jpg").default}
                wrapperProps={{ xs: 12, md: 8, style: { width: "70%" } }}
              />
            ) : loading ? (
              <SimpleBackdrop />
            ) : (
              children
            )}
          </div>
          {(!loading || pageNotFound) && !disableFooter && <Footer />}
        </section>
      </main>
    </>
  );
}
