import {
  Avatar,
  CardContent,
  Grid,
  Typography,
  Card,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
} from "@material-ui/core";
import React, { useState } from "react";
import { lorem } from "components/course/courseView/CoursePage";
import { Rating } from "@material-ui/lab";
import MUIRichTextEditor from "mui-rte";
import { SlidingUpTransition } from "tools/Tools";

export function FAQSection() {
  const [writeFAQ, setWriteFAQ] = useState(true);
  return (
    <Card>
      <CardContent>
        <Grid container direction="column" xs spacing={2}>
          <Grid item container direction="row" justify="space-between">
            <Grid item>
              <Typography variant="h4" align="center">
                FAQ
              </Typography>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                onClick={() => setWriteFAQ(true)}
              >
                Ask a question
              </Button>
              <FAQInputAnswerDialog
                open={writeFAQ}
                onClose={() => setWriteFAQ(false)}
              />
            </Grid>
          </Grid>
          {[1, 2, 3, 4].map((item) => (
            <>
              <Divider />
              <Grid item>
                <FAQBox />
              </Grid>
            </>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
}

export function FAQBox() {
  return (
    <Grid container direction="row" wrap="nowrap" xs spacing={2}>
      <Grid item>
        <Avatar />
      </Grid>
      <Grid item container direction="column">
        <Grid>
          <Typography variant="h5">Questioner</Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1">4 weeks ago</Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">{lorem + lorem}</Typography>
        </Grid>
        <Grid item style={{ marginTop: 20 }}>
          <Grid container direction="row" wrap="nowrap" xs spacing={2}>
            <Grid item>
              <Avatar />
            </Grid>
            <Grid item container direction="column">
              <Grid>
                <Typography variant="h5">Respondent</Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">4 weeks ago</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1">{lorem + lorem}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

function FAQInputQuestionDialog({ open, onClose }) {
  return (
    <Dialog
      open={open}
      TransitionComponent={SlidingUpTransition}
      keepMounted
      onClose={onClose}
    >
      <DialogTitle>Ask a question</DialogTitle>
      <DialogContent>
        <MUIRichTextEditor />
      </DialogContent>
      <DialogActions>
        <Grid container direction="row" justify="center" xs spacing={2}>
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

function FAQInputAnswerDialog({ open, onClose }) {
  return (
    <Dialog
      open={open}
      TransitionComponent={SlidingUpTransition}
      keepMounted
      onClose={onClose}
    >
      <DialogTitle>Reply this question</DialogTitle>
      <DialogContent>
        <Grid container direction="column" xs spacing={2}>
          <Grid item>
            <Typography>Question will be here...</Typography>
          </Grid>
          <Divider />
          <Grid item>
            <MUIRichTextEditor />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Grid container direction="row" justify="center" xs spacing={2}>
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
