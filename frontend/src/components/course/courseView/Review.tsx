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
  Typography,
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import { ReviewInfo } from "classes/Course";
import MUIRichTextEditor from "mui-rte";
import React, { useState } from "react";
import { SlidingUpTransition } from "tools/Tools";

export function ReviewSection({
  reviews,
}: {
  reviews?: ReviewInfo[] | undefined;
}) {
  const [writeReview, setWriteReview] = useState(false);

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
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                onClick={() => setWriteReview(true)}
              >
                Write a review
              </Button>
              <ReviewInputDialog
                open={writeReview}
                onClose={() => setWriteReview(false)}
              />
            </Grid>
          </Grid>
          {!reviews && (
            <Grid item container>
              <Typography variant="h5">
                Be first to review this course
              </Typography>
            </Grid>
          )}
          {reviews && (
            <Grid item container direction="column">
              {reviews?.map((review, index) => (
                <Grid item container key={index}>
                  <Grid item container>
                    <Divider />
                  </Grid>
                  <Grid item container>
                    <ReviewBox review={review} />
                  </Grid>
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
  return (
    <Grid container direction="row" wrap="nowrap" spacing={2}>
      <Grid item>
        <Avatar src={review?.studentImage} />
      </Grid>
      <Grid item container direction="column">
        <Grid>
          <Typography variant="h5">{review?.studentName}</Typography>
        </Grid>
        <Grid item container direction="row" spacing={2}>
          <Grid item>
            <Rating value={review?.ratingValue} name="rating-input" />
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

function ReviewInputDialog({ open, onClose }) {
  return (
    <Dialog
      open={open}
      TransitionComponent={SlidingUpTransition}
      keepMounted
      onClose={onClose}
    >
      <DialogTitle>Write a review</DialogTitle>
      <DialogContent>
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
              <Typography variant="body1">Give a rating </Typography>
            </Grid>
            <Grid item>
              <Rating name="rating-input" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <MUIRichTextEditor />
        </Grid>
      </DialogContent>
      <DialogActions>
        <Grid container direction="row" justifyContent="center" spacing={2}>
          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => {
                onClose();
              }}
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
