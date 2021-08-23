import {
  Avatar,
  Button,
  Card,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  IconButton,
  Link,
  TextField,
  Typography,
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import { ReviewInfo } from "classes/Course";
import AuthService from "components/auth/api/AuthService";
import { useSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useDialogClasses } from "Theme";
import ShadowText from "tools/customDesign/ShadowText";
import { SlidingUpTransition } from "tools/Tools";
import CourseService from "../api/CourseService";

export function ReviewSection({
  reviews,
  courseId,
  teacherUsername,
  onReviewSubmit,
}: {
  reviews?: ReviewInfo[] | undefined;
  courseId: number;
  teacherUsername: string;
  onReviewSubmit: () => void;
}) {
  const [reviewInputShow, setReviewInputShow] = useState(false);
  const [reviewOutputShow, setReviewOutputShow] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const [myReview, setMyReview] = useState<ReviewInfo>();
  useEffect(() => {
    if (AuthService.getCurrentAccountType() === "Student") {
      CourseService.reviewSelf(courseId).then((response) => {
        console.log("my review", response.data);
        setMyReview(response.data);
      });
    }
  }, [reviews]);
  return (
    <Card style={{ width: "100%" }}>
      <CardContent>
        <Grid container direction="column" spacing={2}>
          <Grid item container direction="row" justifyContent="space-between">
            <Grid item>
              <Typography variant="h4" align="center">
                Review
              </Typography>
            </Grid>
            {AuthService.getCurrentAccountType() !== "Admin" &&
              AuthService.getCurrentUsername() !== teacherUsername && (
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      if (AuthService.getCurrentAccountType() === "Student") {
                        myReview
                          ? setReviewOutputShow(true)
                          : setReviewInputShow(true);
                      } else {
                        enqueueSnackbar(
                          'Please log in as "Student" to review this course',
                          { variant: "error" }
                        );
                      }
                    }}
                  >
                    {myReview ? "See your review" : "Write a review"}
                  </Button>
                  {!myReview && (
                    <ReviewInputDialog
                      open={reviewInputShow}
                      courseId={courseId}
                      onClose={() => setReviewInputShow(false)}
                      onReviewSubmit={onReviewSubmit}
                    />
                  )}
                  {myReview && (
                    <ReviewOutputDialog
                      open={reviewOutputShow}
                      review={myReview}
                      onClose={() => setReviewOutputShow(false)}
                    />
                  )}
                </Grid>
              )}
          </Grid>
          {!reviews?.length && (
            <Grid item container direction="column">
              {AuthService.getCurrentAccountType() === "Student" && (
                <Typography variant="h5" align="center">
                  Be first to review this course
                </Typography>
              )}
              <ShadowText>No review yet</ShadowText>
            </Grid>
          )}
          {reviews && (
            <Grid item container direction="column" spacing={2}>
              {reviews?.map((review, index) => (
                <Grid item container key={index}>
                  <Divider
                    style={{ width: "100%", marginTop: 8, marginBottom: 16 }}
                  />
                  <ReviewBox review={review} />
                </Grid>
              ))}
            </Grid>
          )}
        </Grid>
      </CardContent>
    </Card>
  );
}
export function ReviewBox({ review }: { review: ReviewInfo | undefined }) {
  const history = useHistory();
  return (
    <Grid container direction="row" wrap="nowrap" spacing={2}>
      <Grid item>
        <IconButton
          onClick={(event) =>
            history.push(`/profile/${review?.studentUsername}`)
          }
        >
          <Avatar src={review?.studentImage} />
        </IconButton>
      </Grid>
      <Grid item container direction="column">
        <Grid>
          <Link href={`/profile/${review?.studentUsername}`} variant="h5">
            {review?.studentName}
          </Link>
        </Grid>
        <Grid item container direction="row" spacing={2}>
          <Grid item>
            <Rating value={review?.ratingValue} readOnly name="rating-input" />
          </Grid>
          <Grid item>
            <Typography variant="subtitle1">
              {new Date(review?.reviewTime + "").toLocaleString()}
            </Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant="body1">{review?.review}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

function ReviewInputDialog({ open, onClose, courseId, onReviewSubmit }) {
  const classes = useDialogClasses();
  const [ratingValue, setRatingValue] = useState<number>(0);
  const [ratingDone, setRatingDone] = useState<boolean>(false);
  const [review, setReview] = useState("");
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    if (courseId) {
      CourseService.ratingSelf(courseId).then((response) => {
        if (response.data > 0) setRatingDone(true);
        setRatingValue(response.data);
      });
    }
  }, [courseId, open]);
  async function handleReviewSubmit() {
    let error = false;
    if (!ratingValue) {
      error = true;
      enqueueSnackbar("Please give a rating", { variant: "warning" });
    }
    if (!review) {
      error = true;
      enqueueSnackbar("Please give a review and submit again", {
        variant: "warning",
      });
    }
    if (error) return;
    if (!ratingDone) {
      await CourseService.submitRating(courseId, ratingValue).then((response) =>
        console.log(response)
      );
      console.log("ratingSubmitted");
    }
    await CourseService.submitReview(courseId, review).then((response) =>
      console.log(response)
    );
    console.log("reviewSubmitted");
    onReviewSubmit();
    onClose();
  }
  return (
    <Dialog
      classes={{ paper: classes.paper }}
      open={open}
      TransitionComponent={SlidingUpTransition}
      keepMounted
      onClose={onClose}
    >
      <DialogTitle>Write a review</DialogTitle>
      <DialogContent classes={{ root: classes.content }}>
        <Grid container direction="column" spacing={3}>
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
                {ratingDone ? "Your rating : " : "Give a rating : "}{" "}
              </Typography>
            </Grid>
            <Grid item>
              <Rating
                value={ratingValue}
                readOnly={ratingDone}
                name="rating-in-review-box"
                onChange={(event, value) => setRatingValue(value as number)}
              />
            </Grid>
          </Grid>
          <Grid item container>
            <TextField
              fullWidth
              variant="outlined"
              color="primary"
              label="Write your review"
              onBlur={(event) => setReview(event.target.value)}
              multiline
              rows={6}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Grid container direction="row" justifyContent="center" spacing={2}>
          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleReviewSubmit}
            >
              Submit
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" onClick={onClose}>
              Cancel
            </Button>
          </Grid>
        </Grid>
      </DialogActions>
    </Dialog>
  );
}

function ReviewOutputDialog({ open, review, onClose }) {
  return (
    <Dialog
      open={open}
      TransitionComponent={SlidingUpTransition}
      keepMounted
      onClose={onClose}
    >
      <DialogContent>
        <ReviewBox review={review} />
      </DialogContent>
      <DialogActions>
        <Grid container justifyContent="center">
          <Button color="secondary" variant="contained" onClick={onClose}>
            Close
          </Button>
        </Grid>
      </DialogActions>
    </Dialog>
  );
}
