import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Checkbox,
  Grid,
  IconButton,
  TextField,
  Tooltip,
  Typography,
  Zoom,
} from "@material-ui/core";
import {
  Cancel,
  CheckCircle,
  DeleteForever,
  Edit,
  ExpandMore,
  PictureAsPdf,
  TextFields,
  VideoCall,
} from "@material-ui/icons";
import LinkIcon from "@material-ui/icons/Link";
import { Lecture } from "classes/Course";
import { useSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import { ArticleInput } from "./ArticleInput";
import { ArticleOutput } from "./ArticleOutput";
import { LinkInput } from "./LinkInput";
import { LinkOutput } from "./LinkOutput";
import { PDFInput } from "./PDFInput";
import { PDFOutput } from "./PDFOutput";
import { VideoInput } from "./VideoInput";
import { VideoOutput } from "./VideoOutput";

export function LectureView({
  editable,
  lecture,
  lectureNo,
  onLectureChange,
  onLectureRemove,
}: {
  editable: boolean;
  lecture: Lecture;
  lectureNo: number;
  onLectureChange: (Lecture) => void;
  onLectureRemove: () => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [fieldValue, setFieldValue] = useState(lecture.title);
  const [body, setBody] = useState(editable ? "LECTURE_TYPE" : "");
  const [preview, setPreview] = useState(lecture ? lecture.preview : false);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  useEffect(() => {
    setBody(
      lecture?.file?.type
        ? lecture?.file?.type + "_OUTPUT"
        : editable
        ? "LECTURE_TYPE"
        : ""
    );
    setPreview(lecture.preview);
  }, [lecture.title, lecture.preview]);

  // function handleBodyChange(body) {
  //   setState({ ...state, body: body });
  // }
  // function handleContentClick(panel) {
  //   setState({
  //     ...state,
  //     expanded: state.contentClicked ? '' : panel
  //   })
  // }
  function handleOnSave(file) {
    console.log(file);
    let error = false;
    if (file.title == "" || file.title == undefined) {
      error = true;
      switch (file.type) {
        case "ARTICLE":
          enqueueSnackbar("Title is missing", { variant: "error" });
          break;
        case "VIDEO":
          enqueueSnackbar("Lecture body is missing", { variant: "error" });
          break;
        case "PDF":
          enqueueSnackbar("Lecture body is missing", { variant: "error" });
          break;
        case "LINK":
          enqueueSnackbar("Link is missing", { variant: "error" });
          break;
      }
    }
    if (file.content == undefined) {
      error = true;
      switch (file.type) {
        case "ARTICLE":
          enqueueSnackbar("Content is missing", { variant: "error" });
          break;
        case "VIDEO":
          enqueueSnackbar("VIDEO file is missing", { variant: "error" });
          break;
        case "PDF":
          enqueueSnackbar("PDF file is missing", { variant: "error" });
          break;
        case "LINK":
          enqueueSnackbar("Link details is missing", { variant: "error" });
          break;
      }
    }
    if (error) {
      return;
    }
    onLectureChange({ ...lecture, file: file });
    setBody(file.type + "_OUTPUT");
  }
  function handleOnCancel() {
    setBody(
      lecture.file == undefined ? "LECTURE_TYPE" : lecture.file.type + "_OUTPUT"
    );
  }
  function handleOnUpdate() {
    setBody(lecture.file.type + "_INPUT");
  }
  function handlePreviewChange(event) {
    setPreview(!preview);
    onLectureChange({ ...lecture, preview: !preview });
  }

  function LectureType() {
    return (
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
      >
        <IconButton onClick={(event) => setBody("ARTICLE_INPUT")}>
          <Grid item container direction="column" alignItems="center">
            <TextFields />
            <Typography>Article</Typography>
          </Grid>
        </IconButton>
        <IconButton onClick={(event) => setBody("VIDEO_INPUT")}>
          <Grid item container direction="column" alignItems="center">
            <VideoCall />
            <Typography>Video</Typography>
          </Grid>
        </IconButton>
        <IconButton onClick={(event) => setBody("PDF_INPUT")}>
          <Grid item container direction="column" alignItems="center">
            <PictureAsPdf />
            <Typography>PDF</Typography>
          </Grid>
        </IconButton>
        <IconButton onClick={(event) => setBody("LINK_INPUT")}>
          <Grid item container direction="column" alignItems="center">
            <LinkIcon />
            <Typography>Link</Typography>
          </Grid>
        </IconButton>
      </Grid>
    );
  }

  function LectureRow() {
    return (
      <>
        {!editMode && (
          <Grid container direction="row" alignItems="center" wrap="nowrap">
            {editable && (
              <>
                <Grid item>
                  <Tooltip
                    title={
                      preview
                        ? "This lecture is set as preview"
                        : "Do you want to set this lecture as preview?"
                    }
                    TransitionComponent={Zoom}
                    arrow
                  >
                    <span onClick={(event) => event.stopPropagation()}>
                      <Checkbox
                        checked={preview}
                        onChange={handlePreviewChange}
                      />
                    </span>
                  </Tooltip>
                </Grid>
                <Grid item>
                  <IconButton
                    onClick={(event) => {
                      setEditMode(true);
                      event.stopPropagation();
                    }}
                  >
                    <Edit />
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton
                    onClick={(event) => {
                      onLectureRemove();
                      event.stopPropagation();
                    }}
                  >
                    <DeleteForever />
                  </IconButton>
                </Grid>
              </>
            )}
            <Grid item>
              <Typography style={{ whiteSpace: "nowrap", marginRight: 10 }}>
                Lecture {lectureNo} :
              </Typography>
            </Grid>
            <Grid item container>
              <Typography> {lecture.title}</Typography>
            </Grid>
            {!expanded && editable && lecture.file == undefined && (
              <Grid item>
                <Button
                  variant="outlined"
                  color="primary"
                  style={{ marginLeft: 10 }}
                >
                  <Typography style={{ whiteSpace: "nowrap" }}>
                    Content +
                  </Typography>
                </Button>
              </Grid>
            )}
            {expanded && editable && lecture.file == undefined && (
              <Grid item>
                <IconButton
                  onClick={(event) => {
                    setBody("LECTURE_TYPE");
                  }}
                >
                  <Cancel />
                </IconButton>
              </Grid>
            )}
          </Grid>
        )}
        {editMode && (
          <Grid container direction="row" alignItems="center" wrap="nowrap">
            <Grid item container>
              <TextField
                variant="outlined"
                fullWidth
                defaultValue={lecture.title}
                onBlur={(event) => setFieldValue(event.target.value)}
                onClick={(event) => event.stopPropagation()}
              />
            </Grid>
            <Grid item>
              <IconButton
                onClick={(event) => {
                  event.stopPropagation();
                  if (!fieldValue) {
                    enqueueSnackbar("Lecture name can not be empty", {
                      variant: "warning",
                    });
                    return;
                  }
                  onLectureChange({ ...lecture, title: fieldValue });
                  setEditMode(false);
                }}
              >
                <CheckCircle />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                onClick={(event) => {
                  setEditMode(false);
                  setFieldValue(lecture.title);
                  event.stopPropagation();
                }}
              >
                <Cancel />
              </IconButton>
            </Grid>
          </Grid>
        )}
      </>
    );
  }

  return (
    <Accordion
      key={lecture.id}
      expanded={expanded}
      style={{ backgroundColor: "pink", width: "100%" }}
    >
      <AccordionSummary
        expandIcon={lecture.file != undefined && <ExpandMore />}
        onClick={() => {
          if (editable || lecture?.file?.content) setExpanded(!expanded);
        }}
      >
        <LectureRow />
      </AccordionSummary>
      <AccordionDetails>
        {body === "LECTURE_TYPE" && <LectureType />}

        {body === "ARTICLE_INPUT" && (
          <ArticleInput
            file={lecture.file}
            onSave={handleOnSave}
            onCancel={handleOnCancel}
          />
        )}
        {body === "ARTICLE_OUTPUT" && (
          <ArticleOutput
            editable={editable}
            file={lecture.file}
            onUpdate={handleOnUpdate}
          />
        )}
        {body === "LINK_INPUT" && (
          <LinkInput
            file={lecture.file}
            onSave={handleOnSave}
            onCancel={handleOnCancel}
          />
        )}
        {body === "LINK_OUTPUT" && (
          <LinkOutput
            editable={editable}
            file={lecture.file}
            onUpdate={handleOnUpdate}
          />
        )}
        {body === "VIDEO_INPUT" && (
          <VideoInput
            file={lecture.file}
            onSave={handleOnSave}
            onCancel={handleOnCancel}
          />
        )}
        {body === "VIDEO_OUTPUT" && (
          <VideoOutput
            editable={editable}
            file={lecture.file}
            onUpdate={handleOnUpdate}
          />
        )}
        {body === "PDF_INPUT" && (
          <PDFInput
            file={lecture.file}
            onSave={handleOnSave}
            onCancel={handleOnCancel}
          />
        )}
        {body === "PDF_OUTPUT" && (
          <PDFOutput
            editable={editable}
            file={lecture.file}
            onUpdate={handleOnUpdate}
          />
        )}
      </AccordionDetails>
    </Accordion>
  );
}
