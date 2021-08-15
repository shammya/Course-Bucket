import {
  Button,
  Card,
  CardContent,
  Grid,
  LinearProgress,
  Typography,
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import { PublicResponse } from "classes/Course";
import { useSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import CourseService from "../api/CourseService";

function RatingBox({
  data,
  courseId,
  onRatingSubmit,
}: {
  courseId: number;
  data: PublicResponse | undefined;
  onRatingSubmit: () => void;
}) {
  const { enqueueSnackbar } = useSnackbar();
  const [ratingValue, setRatingValue] = useState<number>(0);
  const [ratingDone, setRatingDone] = useState<boolean>(false);
  useEffect(() => {
    if (courseId) {
      CourseService.ratingSelf(courseId).then((response) => {
        if (response.data > 0) setRatingDone(true);
        setRatingValue(response.data);
      });
    }
  }, [courseId]);
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
              md={2}
              xs={3}
              container
              direction="column"
              alignItems="center"
            >
              <Grid item>
                <Typography>{data?.ratingValue}</Typography>
              </Grid>
              <Grid item>
                <Typography>{data?.ratingCount} Rating</Typography>
              </Grid>
              <Grid item>
                <Typography>Course Rating</Typography>
              </Grid>
            </Grid>
            <Grid item md={10} xs={9} container direction="column">
              {[5, 4, 3, 2, 1].map((value) => (
                <Grid
                  key={value}
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
        </Grid>
      </CardContent>
    </Card>
  );
}

export default RatingBox;
