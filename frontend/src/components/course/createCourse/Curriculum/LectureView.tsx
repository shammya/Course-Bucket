import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Grid,
  IconButton,
  TextField,
  Typography,
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
  lecture,
  onLectureChange,
  onLectureRemove,
}: {
  lecture: Lecture;
  onLectureChange: (Lecture) => void;
  onLectureRemove: () => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [fieldValue, setFieldValue] = useState(lecture.title);
  const [body, setBody] = useState("LECTURE_TYPE");
  useEffect(() => {
    setFieldValue(lecture.title);
  }, [lecture.title]);

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

  function LectureType() {
    return (
      <Grid
        container
        direction="row"
        justify="space-around"
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
          <>
            <IconButton onClick={(event) => setEditMode(true)}>
              <Edit />
            </IconButton>
            <IconButton onClick={onLectureRemove}>
              <DeleteForever />
            </IconButton>
            <Typography>Lecture {11} :</Typography>
            <Typography> {lecture.title}</Typography>
            {!expanded && lecture.file == undefined && (
              <Button
                variant="outlined"
                color="primary"
                onClick={(event) => setExpanded(!expanded)}
              >
                Content +
              </Button>
            )}
            {expanded && lecture.file == undefined && (
              <IconButton
                onClick={(event) => {
                  setExpanded(!expanded);
                  setBody("LECTURE_TYPE");
                }}
              >
                <Cancel />
              </IconButton>
            )}
          </>
        )}
        {editMode && (
          <>
            <TextField
              variant="outlined"
              fullWidth
              defaultValue={lecture.title}
              onBlur={(event) => setFieldValue(event.target.value)}
            />
            <IconButton
              onClick={(event) => {
                onLectureChange({ ...lecture, title: fieldValue });
                setEditMode(false);
              }}
            >
              <CheckCircle />
            </IconButton>
            <IconButton
              onClick={(event) => {
                setEditMode(false);
                setFieldValue(lecture.title);
              }}
            >
              <Cancel />
            </IconButton>
          </>
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
        expandIcon={
          lecture.file != undefined && (
            <ExpandMore onClick={(event) => setExpanded(!expanded)} />
          )
        }
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
          <ArticleOutput file={lecture.file} onUpdate={handleOnUpdate} />
        )}
        {body === "LINK_INPUT" && (
          <LinkInput
            file={lecture.file}
            onSave={handleOnSave}
            onCancel={handleOnCancel}
          />
        )}
        {body === "LINK_OUTPUT" && (
          <LinkOutput file={lecture.file} onUpdate={handleOnUpdate} />
        )}
        {body === "VIDEO_INPUT" && (
          <VideoInput
            file={lecture.file}
            onSave={handleOnSave}
            onCancel={handleOnCancel}
          />
        )}
        {body === "VIDEO_OUTPUT" && (
          <VideoOutput file={lecture.file} onUpdate={handleOnUpdate} />
        )}
        {body === "PDF_INPUT" && (
          <PDFInput
            file={lecture.file}
            onSave={handleOnSave}
            onCancel={handleOnCancel}
          />
        )}
        {body === "PDF_OUTPUT" && (
          <PDFOutput file={lecture.file} onUpdate={handleOnUpdate} />
        )}
      </AccordionDetails>
    </Accordion>
  );
}
