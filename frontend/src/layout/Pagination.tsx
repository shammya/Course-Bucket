import { Grid, Typography } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import React, { useState } from "react";

function CustomPagination({
  type = "one-item-per-line",
  title,
  children,
  objectsPerPage = 12,
}: {
  type?: "one-item-per-line" | "two-item-per-line" | "calculate-by-width";
  children: JSX.Element[];
  title?: string;
  objectsPerPage?: number;
}) {
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastObject = currentPage * objectsPerPage;
  const indexOfFirstObject = indexOfLastObject - objectsPerPage;
  const currentPageObjects = children
    ? children.slice(indexOfFirstObject, indexOfLastObject)
    : [];
  const paginate = (event, pageNumber) => setCurrentPage(pageNumber);

  let elements;
  if (type === "one-item-per-line") {
    elements = (
      <Grid container direction="column" spacing={2}>
        {currentPageObjects.map((item) => (
          <Grid item xs={12}>
            {item}
          </Grid>
        ))}
      </Grid>
    );
  } else if (type == "two-item-per-line") {
    elements = (
      <Grid container spacing={2}>
        {currentPageObjects.map((item) => (
          <Grid item xs={6}>
            {item}
          </Grid>
        ))}
      </Grid>
    );
  } else if (type == "calculate-by-width") {
    elements = (
      <Grid container direction="row" spacing={2} justifyContent="flex-start">
        {currentPageObjects.map((item) => (
          <Grid item xs={6} sm={6} md={3} lg={2}>
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
      <Grid container direction="column" alignItems="center">
        {elements}
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
    </>
  );
}

export default CustomPagination;
