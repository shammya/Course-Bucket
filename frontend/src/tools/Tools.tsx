import { Slide } from "@material-ui/core";
import { TransitionProps } from "@material-ui/core/transitions";
import React from "react";

export function timeout(delay) {
  return new Promise((res) => setTimeout(res, delay));
}

export function delay() {
  return timeout(500);
}

export function getURLLastPart(url) {
  const result = url.split("/");
  return result[result.length - 1];
}

export const SlidingUpTransition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
