import { Card, CardContent, makeStyles } from "@material-ui/core";
import CardHeader from "@material-ui/core/CardHeader";
import { MiniCourse } from "classes/Course";
import React from "react";
import { Breakpoint } from "react-elastic-carousel";
import CustomCarousel from "tools/customDesign/CustomCarousel";
import CourseBox from "./CourseBox";

const courseWidth = 200;
type NewType = Breakpoint;

const customBreakPoints: Array<NewType> = [];
for (var i = 1; i <= 10; i++) {
  customBreakPoints.push({
    //@ts-ignore
    width: courseWidth * i + 5 * (i - 1),
    itemsToShow: i,
    itemsToScroll: i,
  });
}

const useStyles = makeStyles((theme) => ({
  container: {
    margin: theme.spacing(3, 0),
    width: "100%",
  },
}));

export function CourseCarousel({
  title,
  courses,
}: {
  title: string;
  courses: MiniCourse[];
}) {
  const classes = useStyles();
  return (
    <Card className={classes.container}>
      <CardHeader title={title} />
      <CardContent>
        <CustomCarousel
          isRTL={false}
          pagination={false}
          disableArrowsOnEnd={true}
          breakPoints={customBreakPoints}
        >
          {courses.map((item) => (
            <CourseBox key={item.id} courseData={item} />
          ))}
        </CustomCarousel>
      </CardContent>
    </Card>
  );
}

export default CourseCarousel;
