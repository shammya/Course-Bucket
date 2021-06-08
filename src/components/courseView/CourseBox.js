import { Card, CardActionArea, CardContent, CardMedia, Grid, makeStyles, Typography } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import classNames from 'classnames';
import React from 'react';
import { useStyles } from 'Theme';

const localStyles = makeStyles(theme => ({
  titleBox: {
    height: "115px"
  },
  title: {
    marginBottom: "5px",
    maxHeight: "80px",
    textOverflow: "ellipsis",
    overflow: "hidden",
  },
  offPrice: {
    textDecoration: "line-through",
  }
}))

function CourseBox({ courseData }) {
  const global = useStyles();
  const local = localStyles();
  return (
    <div>
      <CardActionArea style={{
        maxWidth: "200px",
      }}>
        <Card>
          <CardMedia style={{ height: 135 }} image={courseData.image} />
          <CardContent style={{ padding: "0px 10px 10px 10px" }}>
            <Grid container className={local.titleBox} wrap="nowrap" direction="column" justify="flex-start">
              <Typography className={classNames(local.title, global.medium, global.bold)} align="left">{courseData.title}</Typography>
              <Typography variant="subtitle2" align="left">{courseData.teacherName}</Typography>
            </Grid>
            <Grid container direction="row" justify="flex-end" alignItems="center" spacing={1}>
              <Rating size="small" value={courseData.rating} readOnly />
              <Grid item className={global.medium}>{courseData.rating}</Grid>
              <Grid item className={global.tiny}>({courseData.numOfRating})</Grid>
            </Grid>
            <Grid container direction="row" justify="flex-end" alignItems="center" spacing={1}>
              <Grid item className={classNames(global.medium, local.offPrice)}>{courseData.price * (1 - courseData.off / 100)}</Grid>
              <Grid item className={classNames(global.big, global.bold)}>{courseData.price}</Grid>
            </Grid>
          </CardContent>
        </Card>
      </CardActionArea>
    </div>
  );
}

export default CourseBox


// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import clsx from 'clsx';
// import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
// import Collapse from '@material-ui/core/Collapse';
// import Avatar from '@material-ui/core/Avatar';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import { red } from '@material-ui/core/colors';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
// import img1 from '../../resources/image/DefaultCourseImage.jpg';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 0,
//     paddingTop: '56.25%', // 16:9
//   },
//   expand: {
//     transform: 'rotate(0deg)',
//     marginLeft: 'auto',
//     transition: theme.transitions.create('transform', {
//       duration: theme.transitions.duration.shortest,
//     }),
//   },
//   expandOpen: {
//     transform: 'rotate(180deg)',
//   },
//   avatar: {
//     backgroundColor: red[500],
//   },
// }));

// export default function CourseBox() {
//   const classes = useStyles();
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <Card className={classes.root}>
//       <CardHeader
//         avatar={
//           <Avatar aria-label="recipe" className={classes.avatar}>
//             R
//           </Avatar>
//         }
//         action={
//           <IconButton aria-label="settings">
//             <MoreVertIcon />
//           </IconButton>
//         }
//         title="Shrimp and Chorizo Paella"
//         subheader="September 14, 2016"
//       />
//       <CardMedia
//         className={classes.media}
//         // image="https://img-a.udemycdn.com/course/240x135/354176_fe73_5.jpg?5oD1okbOTmx4KDKe6F5fXBTC6wejveIIVoHJG9Ui4HOqnVb3a7UnSjdB2qx6qM7W5HnMzpmzsPufkR9PDkeH2F8qCorS1Ahy5_sxQqc3EkXLVinKd_YdG1Or-3M53h4"
//         image={img1}
//         title="Paella dish"
//       />
//       <CardContent>
//         <Typography variant="body2" color="textSecondary" component="p">
//           This impressive paella is a perfect party dish and a fun meal to cook together with your
//           guests. Add 1 cup of frozen peas along with the mussels, if you like.
//         </Typography>
//       </CardContent>
//       <CardActions disableSpacing>
//         <IconButton aria-label="add to favorites">
//           <FavoriteIcon />
//         </IconButton>
//         <IconButton aria-label="share">
//           <ShareIcon />
//         </IconButton>
//         <IconButton
//           className={clsx(classes.expand, {
//             [classes.expandOpen]: expanded,
//           })}
//           onClick={handleExpandClick}
//           aria-expanded={expanded}
//           aria-label="show more"
//         >
//           <ExpandMoreIcon />
//         </IconButton>
//       </CardActions>
//       <Collapse in={expanded} timeout="auto" unmountOnExit>
//         <CardContent>
//           <Typography paragraph>Method:</Typography>
//           <Typography paragraph>
//             Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
//             minutes.
//           </Typography>
//           <Typography paragraph>
//             Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
//             heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
//             browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
//             and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
//             pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
//             saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
//           </Typography>
//           <Typography paragraph>
//             Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
//             without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
//             medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
//             again without stirring, until mussels have opened and rice is just tender, 5 to 7
//             minutes more. (Discard any mussels that don’t open.)
//           </Typography>
//           <Typography>
//             Set aside off of the heat to let rest for 10 minutes, and then serve.
//           </Typography>
//         </CardContent>
//       </Collapse>
//     </Card>
//   );
// }

