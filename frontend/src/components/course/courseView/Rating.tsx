import {
  Button,
  Card,
  CardContent,
  Grid,
  LinearProgress,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Rating } from "@material-ui/lab";
import { PublicResponse } from "classes/Course";
import AuthService from "components/auth/api/AuthService";
import { useSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import CourseService from "../api/CourseService";

const useStyles = makeStyles(() => ({
  ratingNumber: {
    fontSize: "6.4rem",
    fontWeight: 700,
    color: "#ffc107",
    lineHeight: "1",
    textShadow: "2px 0px 0 #ffffff",
  },
  ratingText: {
    color: "#ffc107",
    fontSize: "1.2rem",
    fontWeight: 700,
  },
}));

function RatingBox({
  data,
  courseId,
  onRatingSubmit,
}: {
  courseId: number;
  data: PublicResponse | undefined;
  onRatingSubmit: () => void;
}) {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [ratingValue, setRatingValue] = useState<number>(0);
  const [ratingDone, setRatingDone] = useState<boolean>(false);
  useEffect(() => {
    if (courseId && AuthService.getCurrentAccountType() === "Student") {
      CourseService.ratingSelf(courseId).then((response) => {
        if (response.data > 0) setRatingDone(true);
        setRatingValue(response.data);
      });
    }
  }, [courseId, data]);
  function handleRatingSubmit() {
    CourseService.submitRating(courseId, ratingValue).then((response) => {
      if (response.status == 200) {
        enqueueSnackbar("Your rating submitted successfully", {
          variant: "success",
        });
        setRatingDone(true);
        onRatingSubmit();
      }
    });
  }
  return (
    <Card style={{ width: "100%" }}>
      <CardContent>
        <Grid container direction="column" spacing={3}>
          <Grid item container direction="row" alignItems="center" spacing={2}>
            <Grid
              item
              md={3}
              xs={3}
              container
              direction="column"
              alignItems="center"
            >
              <Grid item>
                <Typography className={classes.ratingNumber}>
                  {Math.round((data?.ratingValue || 0) * 10) / 10}
                </Typography>
              </Grid>
              <Grid
                item
                container
                direction="row"
                wrap="nowrap"
                spacing={1}
                alignItems="center"
                justifyContent="center"
              >
                <Rating
                  value={
                    data?.ratingValue
                      ? Math.round(data.ratingValue * 10) / 10
                      : 5
                  }
                  readOnly
                  name="rating-read-only"
                />
                <Typography className={classes.ratingText}>
                  ({data?.ratingCount})
                </Typography>
              </Grid>
              <Grid item>
                <Typography className={classes.ratingText}>
                  Course Rating
                </Typography>
              </Grid>
            </Grid>
            <Grid item md={9} xs={9} container direction="column" spacing={1}>
              {[5, 4, 3, 2, 1].map((value) => (
                <Grid
                  key={value}
                  item
                  container
                  direction="row"
                  wrap="nowrap"
                  alignItems="center"
                  spacing={1}
                >
                  <Grid item style={{ width: "100%" }}>
                    <LinearProgress
                      variant="determinate"
                      value={
                        data?.ratingByNumber
                          ? (data?.ratingByNumber[value] / data?.ratingCount) *
                            100
                          : 0
                      }
                    />
                  </Grid>
                  <Grid item>
                    <Rating
                      name="course-rating-output"
                      value={value}
                      readOnly
                    />
                  </Grid>
                  <Grid item>
                    <Typography>{data?.ratingByNumber[value]}</Typography>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Grid>
          {AuthService.getCurrentAccountType() === "Student" && (
            <Grid
              item
              container
              direction="column"
              alignItems="center"
              xs
              spacing={2}
            >
              <Grid
                item
                container
                direction="row"
                wrap="nowrap"
                justifyContent="center"
                xs
                spacing={2}
              >
                <Grid item>
                  <Typography variant="body1">
                    {ratingDone ? "Your rating : " : "Give a rating"}
                  </Typography>
                </Grid>
                <Grid item>
                  <Rating
                    name="course-rating-input"
                    readOnly={ratingDone}
                    value={ratingValue}
                    onChange={(event, value) => setRatingValue(value as number)}
                  />
                </Grid>
              </Grid>
              {!ratingDone && ratingValue && ratingValue > 0 ? (
                <Grid
                  item
                  container
                  direction="row"
                  justifyContent="center"
                  xs
                  spacing={2}
                >
                  <Grid item>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleRatingSubmit}
                    >
                      Submit
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => setRatingValue(0)}
                    >
                      Cancel
                    </Button>
                  </Grid>
                </Grid>
              ) : (
                <></>
              )}
            </Grid>
          )}
        </Grid>
      </CardContent>
    </Card>
  );
}

export default RatingBox;
