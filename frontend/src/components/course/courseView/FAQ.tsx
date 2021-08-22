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
  Typography,
} from "@material-ui/core";
import { FaqInfo } from "classes/Course";
import AuthService from "components/auth/api/AuthService";
import { useSnackbar } from "notistack";
import React, { useState } from "react";
import { useHistory } from "react-router";
import ShadowText from "tools/customDesign/ShadowText";
import TextEditor from "tools/customDesign/TextEditor";
import { SlidingUpTransition } from "tools/Tools";
import CourseService from "../api/CourseService";

export function FAQSection({
  courseId,
  teacherUsername,
  faqs,
  onSubmit,
}: {
  courseId: number;
  teacherUsername: string;
  faqs: FaqInfo[] | undefined;
  onSubmit: () => void;
}) {
  const [questionInputShow, setQuestionInputShow] = useState(false);
  // const [questionOutputShow, setQuestionOutputShow] = useState(false);
  // const [myFaq, setMyFaq] = useState<FaqInfo>();
  const { enqueueSnackbar } = useSnackbar();
  // useEffect(() => {
  //   CourseService.faqSelf(courseId).then((response) => {
  //     console.log("my faq", response.data);
  //     setMyFaq(response.data);
  //   });
  // }, [faqs]);

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
            {AuthService.getCurrentAccountType() !== "Admin" &&
              AuthService.getCurrentUsername() !== teacherUsername && (
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      if (AuthService.getCurrentAccountType() === "Student") {
                        setQuestionInputShow(true);
                      } else {
                        enqueueSnackbar(
                          'Please log in as "Student" to ask a question',
                          { variant: "error" }
                        );
                      }
                    }}
                  >
                    {"Ask a question"}
                  </Button>
                  <FAQInputQuestionDialog
                    courseId={courseId}
                    open={questionInputShow}
                    onClose={() => setQuestionInputShow(false)}
                    onQuestionSubmit={onSubmit}
                  />
                </Grid>
              )}
          </Grid>
          <Grid item container direction="column">
            {(faqs === undefined || faqs?.length === 0) && (
              <ShadowText>No Question yet</ShadowText>
            )}
            {faqs?.map((faq, index) => (
              <Grid item container key={index}>
                <Divider
                  style={{ width: "100%", marginTop: 8, marginBottom: 16 }}
                />
                <FAQBox faq={faq} onSubmit={onSubmit} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export function FAQBox({
  faq,
  onSubmit,
}: {
  faq: FaqInfo | undefined;
  onSubmit?: () => void;
}) {
  const [answerInputShow, setAnswerInputShow] = useState(false);
  const history = useHistory();
  return (
    <Grid container direction="row" wrap="nowrap" spacing={2}>
      <Grid item>
        <IconButton
          onClick={() => history.push(`/profile/${faq?.studentUsername}`)}
        >
          <Avatar src={faq?.studentImage} />
        </IconButton>
      </Grid>
      <Grid item container direction="column">
        <Grid>
          <Link variant="h5" href={`/profile/${faq?.studentUsername}`}>
            {faq?.studentName}
          </Link>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1">
            {new Date(faq?.questionDate + "").toLocaleString()}
          </Typography>
        </Grid>
        <Grid item>
          <TextEditor value={faq?.question} readOnly />
        </Grid>
        {console.log(faq?.teacherUsername)}
        {console.log(AuthService.getCurrentUsername())}
        {!faq?.answer &&
        faq?.teacherUsername === AuthService.getCurrentUsername() ? (
          <Grid container justifyContent="center" style={{ marginLeft: -40 }}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setAnswerInputShow(true)}
            >
              Give an answer
            </Button>
            <FAQInputAnswerDialog
              open={answerInputShow}
              faq={faq}
              onAnswerSubmit={onSubmit}
              onClose={() => setAnswerInputShow(false)}
            />
          </Grid>
        ) : (
          !faq?.answer && (
            <Typography
              variant="body1"
              style={{
                marginLeft: -40,
                fontWeight: "bold",
                textTransform: "uppercase",
                textAlign: "center",
                fontSize: "1.2rem",
              }}
            >
              No answer yet
            </Typography>
          )
        )}
        {faq?.answer && (
          <Grid item style={{ marginTop: 20 }}>
            <Grid container direction="row" wrap="nowrap" spacing={2}>
              <Grid item>
                <IconButton
                  onClick={() =>
                    history.push(`/profile/${faq?.teacherUsername}`)
                  }
                >
                  <Avatar src={faq?.teacherImage} />
                </IconButton>
              </Grid>
              <Grid item container direction="column">
                <Grid>
                  <Link variant="h5" href={`/profile/${faq?.teacherUsername}`}>
                    {faq?.teacherName}
                  </Link>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">
                    {new Date(faq?.answerDate + "").toLocaleString()}
                  </Typography>
                </Grid>
                <Grid item>
                  <TextEditor value={faq?.answer} readOnly />
                  {/* <Typography variant="body1">{faq?.answer}</Typography> */}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
}

function FAQInputQuestionDialog({ open, courseId, onClose, onQuestionSubmit }) {
  const [question, setQuestion] = useState("");
  const { enqueueSnackbar } = useSnackbar();

  function onSubmitQuestion() {
    if (!question) {
      enqueueSnackbar("Please write a question", { variant: "warning" });
      return;
    }
    CourseService.submitQuestion(courseId, question).then((response) => {
      if (response.status == 200) {
        enqueueSnackbar("Your question is submitted successfully", {
          variant: "success",
        });
        onQuestionSubmit();
        onClose();
      }
    });
  }
  return (
    <Dialog
      open={open}
      TransitionComponent={SlidingUpTransition}
      keepMounted
      onClose={onClose}
    >
      <DialogTitle>Ask a question</DialogTitle>
      <DialogContent>
        <TextEditor onChange={(value) => setQuestion(value)} />
      </DialogContent>
      <DialogActions>
        <Grid container direction="row" justifyContent="center" spacing={2}>
          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              onClick={onSubmitQuestion}
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

function FAQInputAnswerDialog({ faq, open, onClose, onAnswerSubmit }) {
  const [answer, setAnswer] = useState("");
  const { enqueueSnackbar } = useSnackbar();

  function onSubmitAnswer() {
    if (!answer) {
      enqueueSnackbar("Please write an answer", { variant: "warning" });
      return;
    }
    CourseService.submitAnswer(faq?.id, answer).then((response) => {
      if (response.status == 200) {
        enqueueSnackbar("Your answer is submitted successfully", {
          variant: "success",
        });
        onAnswerSubmit();
        onClose();
      }
    });
  }
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
            <TextEditor value={faq?.question} readOnly />
          </Grid>
          <Divider />
          <Grid item>
            <TextEditor onChange={(value) => setAnswer(value)} />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Grid container direction="row" justifyContent="center" spacing={2}>
          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              onClick={onSubmitAnswer}
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
function FAQOutputQuestionDialog({ open, faq, onClose }) {
  return (
    <Dialog
      open={open}
      TransitionComponent={SlidingUpTransition}
      keepMounted
      onClose={onClose}
    >
      <DialogContent>
        <FAQBox faq={faq} />
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
