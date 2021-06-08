import { Avatar, Button, Card, CardContent, CardHeader, Grid, IconButton, Link, makeStyles, Typography } from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { Rating } from '@material-ui/lab';
import CoursePagination from 'components/courseView/CustomPagination';
import { courses } from 'Data';
import User from 'layout/User';
import React from 'react';

const useStyles = makeStyles(theme => ({
  avatar: {
    width: "200px",
    height: "200px",
  }
}))

const data = {
  general: [
    {
      type: "Name",
      value: "Md. Mehedi Hasan",
    },
    {
      type: "Institution",
      value: "Bangladesh University of Engineering and Technology",
    },
    {
      type: "About",
      value: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Ex reprehenderit aut similique ut nostrum, repellat iusto beatae eum, est sed impedit assumenda molestiae accusamus cum voluptatum ab minima quaerat nam? Lorem ipsum dolor sit amet consectetur, adipisicing elit.Ex reprehenderit aut similique ut nostrum, repellat iusto beatae eum, est sed impedit assumenda molestiae accusamus cum voluptatum ab minima quaerat nam? Lorem ipsum dolor sit amet consectetur, adipisicing elit.Ex reprehenderit aut similique ut nostrum, repellat iusto beatae eum, est sed impedit assumenda molestiae accusamus cum voluptatum ab minima quaerat nam? Lorem ipsum dolor sit amet consectetur, adipisicing elit.Ex reprehenderit aut similique ut nostrum, repellat iusto beatae eum, est sed impedit assumenda molestiae accusamus cum voluptatum ab minima quaerat nam?"
    },
  ],
  socialMediaData: [
    {
      type: "Email",
      link: "66.mehedi@gmail.com",
      icon: "<EmailIcon/>",
    },
    {
      type: "Facebook",
      link: "66.mehedi",
      icon: "FacebookIcon",
    },
    {
      type: "YouTube",
      link: "66.mehedi",
      icon: "YoutubeIcon",
    },
    {
      type: "Twitter",
      link: "66.mehedi",
      icon: "TwitterIcon",
    },
  ]
}

const Profile = () => {
  const classes = useStyles();

  function TopHeader() {
    return (
      <Grid item
        container
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        <Grid item sm={3}>
          <Avatar className={classes.avatar}>M</Avatar>
        </Grid>
        <Grid item sm container direction="column" alignItems="center">
          <Grid item sm container justify="space-around" >
            <Card>
              <CardHeader title="6,234" />
              <CardContent>Students</CardContent>
            </Card>
            <Card>
              <CardHeader title="12,364,094" />
              <CardContent>Review</CardContent>
            </Card>
            <Card>
              <CardHeader title="1,234" />
              <CardContent>
                <Rating value={3.5} precision={0.01} readOnly />
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Button color="primary" variant="contained">Send Message</Button>
          </Grid>
          <Grid item>
            <SocialMedia />
          </Grid>
        </Grid>
      </Grid>
    )
  }
  const SocialMedia = () => {
    return (
      <Grid item container direction="row" justify="space-around">
        {
          data.socialMediaData.map(item => (
            <Link href="#">
              <IconButton >
                <Icon iconName={item.type} />
              </IconButton>
            </Link>
          ))
        }
      </Grid>
    )
  }

  function Icon({ iconName }) {
    if (iconName === "Email") return <EmailIcon />
    else if (iconName === "Facebook") return <FacebookIcon />
    else if (iconName === "Twitter") return <TwitterIcon />
    else if (iconName === "YouTube") return <YouTubeIcon />
    return null
  }
  function Details() {
    return (
      <Grid item container sm={3} direction="column">
        {
          data.general.map(item => (
            <Grid item>
              <Typography variant="h6">
                {item.type}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {item.value}
              </Typography>
            </Grid>
          ))
        }
      </Grid>
    )
  }
  return (
    <User>
      <Grid container>
        <TopHeader />
        <Grid item container sm>
          <Details />
          <Grid item sm container>
            <CoursePagination courses={courses} title="Courses" />
          </Grid>
        </Grid>
      </Grid>
    </User>
  )
}

export default Profile
