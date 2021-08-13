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
import { lorem } from "components/course/courseView/CoursePage";
import MUIRichTextEditor from "mui-rte";
import React, { useState } from "react";
import { SlidingUpTransition } from "tools/Tools";

export function ReviewSection() {
  const [writeReview, setWriteReview] = useState(false);
  return (
    <Card>
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
          {[1, 2, 3, 4].map((item, index) => (
            <Grid key={index}>
              <Divider />
              <Grid item>
                <ReviewBox />
              </Grid>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
}
export function ReviewBox() {
  return (
    <Grid container direction="row" wrap="nowrap" spacing={2}>
      <Grid item>
        <Avatar />
      </Grid>
      <Grid item container direction="column">
        <Grid>
          <Typography variant="h5">Reviewer Name</Typography>
        </Grid>
        <Grid item container direction="row" spacing={2}>
          <Grid item>
            <Rating value={3} name="rating-input" />
          </Grid>
          <Grid item>
            <Typography variant="subtitle1">4 weeks ago</Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant="body1">{lorem + lorem}</Typography>
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
