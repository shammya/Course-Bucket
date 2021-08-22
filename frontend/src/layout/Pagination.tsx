import { Divider, Grid, GridSpacing, Typography } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import React, { useState } from "react";
import ShadowText from "tools/customDesign/ShadowText";

function CustomPagination({
  type = "one-item-per-line",
  title,
  children,
  objectsPerPage = 12,
  divider = false,
  spacing = 2,
  noContentText = "No content"
}: {
  type?: "one-item-per-line" | "two-item-per-line" | "calculate-by-width";
  children: JSX.Element[];
  title?: string;
  objectsPerPage?: number;
  divider?: boolean;
    spacing?: GridSpacing | undefined;
    noContentText?: string;
}) {
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastObject = currentPage * objectsPerPage;
  const indexOfFirstObject = indexOfLastObject - objectsPerPage;
  const currentPageObjects = children
    ? children.slice(indexOfFirstObject, indexOfLastObject)
    : [];
  const paginate = (event, pageNumber) => setCurrentPage(pageNumber);

  let elementsWithContainer;
  if (type === "one-item-per-line") {
    elementsWithContainer = (
      <Grid container direction="column" spacing={spacing}>
        {currentPageObjects.map((item, index) => (
          <Grid item container key={index}>
            {index != 0 && divider ? (
              <Grid item xs={12} key={index}>
                <Divider style={{ marginBottom: 4 }} />
              </Grid>
            ) : (
              ""
            )}
            <Grid item xs={12}>
              {item}
            </Grid>
          </Grid>
        ))}
      </Grid>
    );
  } else if (type == "two-item-per-line") {
    elementsWithContainer = (
      <Grid container spacing={2}>
        {currentPageObjects.map((item, index) => (
          <Grid item xs={6} key={index}>
            {item}
          </Grid>
        ))}
      </Grid>
    );
  } else if (type == "calculate-by-width") {
    elementsWithContainer = (
      <Grid container direction="row" spacing={2} justifyContent="flex-start">
        {currentPageObjects.map((item, index) => (
          <Grid item xs={6} sm={6} md={3} lg={2} key={index}>
            {item}
          </Grid>
        ))}
      </Grid>
    );
  }
  return (
    <>
      {title != undefined && (
        <Typography
          variant="h3"
          style={{ textAlign: "center", marginBottom: 10 }}
        >
          {title}
        </Typography>
      )}
      <Grid container direction="column" alignItems="center" spacing={2}>
        {(children == undefined || children.length == 0) && 
          <ShadowText>{noContentText}</ShadowText>
        }
        {elementsWithContainer}
        {children?.length > objectsPerPage && (
          <Grid item container justifyContent="center">
            <Pagination
              count={children ? Math.ceil(children.length / objectsPerPage) : 0}
              page={currentPage}
              onChange={paginate}
              color="secondary"
              siblingCount={3}
              size="large"
              style={{ marginTop: 15 }}
            />
          </Grid>
        )}
      </Grid>
    </>
  );
}

export default CustomPagination;
