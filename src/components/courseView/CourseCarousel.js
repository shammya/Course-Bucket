import { Card, CardContent, makeStyles } from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';
import React from 'react';
import CustomCarousel from './../../tools/CustomCarousel';
import CourseBox from './CourseBox';

const courseWidth = 200;
const customBreakPoints = [];
for (var i = 1; i <= 10; i++) {
  customBreakPoints.push({ width: courseWidth * i + 5 * (i - 1), itemsToShow: i, itemsToScroll: i });
}

const useStyles = makeStyles(theme => ({
  container: {
    margin: theme.spacing(3, 0),
  },
}));

export function CourseCarousel(props) {
  const classes = useStyles();
  return (
    <Card className={classes.container}>
      <CardHeader title={props.title} />
      <CardContent>

        <CustomCarousel isRTL={false} pagination={false} disableArrowsOnEnd={true} breakPoints={customBreakPoints}>
          {props.courses.map(item => (
            <CourseBox courseData={item} />
          ))}
        </CustomCarousel>
      </CardContent>
    </Card>
  );
}

export default CourseCarousel
