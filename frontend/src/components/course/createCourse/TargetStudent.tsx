import { Property } from "classes/Course";
import React from "react";
import { AddAbleTextField } from "./AddAbleTextField";

export function TargetStudent({ course, onCourseAttrChange }) {
  if (course.outcomes == undefined) {
    course = { ...course, outcomes: [""] };
  }
  if (course.prerequisite == undefined) {
    course = { ...course, prerequisite: [""] };
  }
  if (course.properties == undefined) {
    course = { ...course, properties: [new Property()] };
  }
  console.log(course);
  return (
    <>
      <AddAbleTextField
        header="What will students learn in your course?"
        objects={course.outcomes}
        onObjectsChange={(outcomes) =>
          onCourseAttrChange({ outcomes: outcomes })
        }
      />
      <AddAbleTextField
        header="Are there any course requirements or prerequisites?"
        objects={course.prerequisite}
        onObjectsChange={(prerequisite) =>
          onCourseAttrChange({ prerequisite: prerequisite })
        }
      />
      <AddAbleTextField
        header="Write down the properties in brief with attractive icons"
        showIconPicker
        objects={course.properties}
        onObjectsChange={(properties) =>
          onCourseAttrChange({ properties: properties })
        }
      />
    </>
  );
}
