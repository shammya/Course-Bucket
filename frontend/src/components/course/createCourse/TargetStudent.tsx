import { Grid } from "@material-ui/core";
import { Course, Property } from "classes/Course";
import React from "react";
import { AddAbleTextField } from "./AddAbleTextField";

export function TargetStudent({
  course,
  onCourseAttrChange,
}: {
  course: Course;
  onCourseAttrChange: any;
}) {
  if (course.outcomes == undefined) {
    course = { ...course, outcomes: [""] };
  }
  if (course.prerequisites == undefined) {
    course = { ...course, prerequisites: [""] };
  }
  if (course.properties == undefined) {
    course = { ...course, properties: [new Property()] };
  }
  console.log(course);
  return (
    <Grid container direction="column" spacing={3}>
      <Grid item>
        <AddAbleTextField
          header="What will students learn in your course?"
          objects={course.outcomes}
          onObjectsChange={(outcomes) =>
            onCourseAttrChange({ outcomes: outcomes })
          }
        />
      </Grid>
      <Grid item>
        <AddAbleTextField
          header="Are there any course requirements or prerequisites?"
          objects={course.prerequisites}
          onObjectsChange={(prerequisite) =>
            onCourseAttrChange({ prerequisites: prerequisite })
          }
        />
      </Grid>
      <Grid item>
        <AddAbleTextField
          header="Write down the properties in brief with attractive icons"
          showIconPicker
          objects={course.properties}
          onObjectsChange={(properties) =>
            onCourseAttrChange({ properties: properties })
          }
        />
      </Grid>
    </Grid>
  );
}
