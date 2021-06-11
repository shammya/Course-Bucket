import React from "react";
import { AddAbleTextField } from "./AddAbleTextField";

export function TargetStudent() {
  return (
    <>
      <AddAbleTextField header="What will students learn in your course?" />
      <AddAbleTextField header="Are there any course requirements or prerequisites?" />
      <AddAbleTextField header="Write down the properties in brief with attractive icons" showIconPicker />
    </>
  )
}