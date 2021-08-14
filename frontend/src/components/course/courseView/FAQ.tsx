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
import { FaqInfo } from "classes/Course";
import MUIRichTextEditor from "mui-rte";
import React, { useState } from "react";
import { SlidingUpTransition } from "tools/Tools";

export function FAQSection({ faqs }: { faqs: FaqInfo[] | undefined }) {
  const [writeFAQ, setWriteFAQ] = useState(false);
  return (
    <Card style={{ width: "100%" }}>
      <CardContent>
        <Grid container direction="column" spacing={2}>
          <Grid item container direction="row" justifyContent="space-between">
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
          <Grid item container direction="column">
            {faqs?.map((faq, index) => (
              <Grid item container key={index}>
                <Grid item container>
                  <Divider />
                </Grid>
                <Grid item container>
                  <FAQBox faq={faq} />
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export function FAQBox({ faq }: { faq: FaqInfo | undefined }) {
  return (
    <Grid container direction="row" wrap="nowrap" spacing={2}>
      <Grid item>
        <Avatar src={faq?.studentImage} />
      </Grid>
      <Grid item container direction="column">
        <Grid>
          <Typography variant="h5">{faq?.studentName}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1">
            {new Date(faq?.questionDate + "").toLocaleString()}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">{faq?.question}</Typography>
        </Grid>
        <Grid item style={{ marginTop: 20 }}>
          <Grid container direction="row" wrap="nowrap" spacing={2}>
            <Grid item>
              <Avatar src={faq?.teacherImage} />
            </Grid>
            <Grid item container direction="column">
              <Grid>
                <Typography variant="h5">{faq?.teacherName}</Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">
                  {new Date(faq?.answerDate + "").toLocaleString()}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1">{faq?.answer}</Typography>
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
        <Grid container direction="column" spacing={2}>
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
