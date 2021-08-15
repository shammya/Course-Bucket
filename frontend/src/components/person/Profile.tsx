import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { LinkedIn, WorkOutlined } from "@material-ui/icons";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { Rating } from "@material-ui/lab";
import { MiniCourse } from "classes/Course";
import { Person, Student, Teacher } from "classes/Person";
import CoursePagination from "components/course/CustomPagination";
import User from "layout/User";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TeacherMiniInfo } from "./../../classes/Person";
import PersonService from "./api/PersonService";
import TeacherService from "./api/TeacherService";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: "200px",
    height: "200px",
  },
  cardHeader: {
    fontSize: "2.5rem",
    textAlign: "center",
  },
  cardContent: {
    textAlign: "center",
    fontSize: "1.5rem",
  },
}));

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
      value:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Ex reprehenderit aut similique ut nostrum, repellat iusto beatae eum, est sed impedit assumenda molestiae accusamus cum voluptatum ab minima quaerat nam? Lorem ipsum dolor sit amet consectetur, adipisicing elit.Ex reprehenderit aut similique ut nostrum, repellat iusto beatae eum, est sed impedit assumenda molestiae accusamus cum voluptatum ab minima quaerat nam? Lorem ipsum dolor sit amet consectetur, adipisicing elit.Ex reprehenderit aut similique ut nostrum, repellat iusto beatae eum, est sed impedit assumenda molestiae accusamus cum voluptatum ab minima quaerat nam? Lorem ipsum dolor sit amet consectetur, adipisicing elit.Ex reprehenderit aut similique ut nostrum, repellat iusto beatae eum, est sed impedit assumenda molestiae accusamus cum voluptatum ab minima quaerat nam?",
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
  ],
};

const Profile = () => {
  const classes = useStyles();
  const { username } = useParams();
  const [person, setPerson] = useState<Student | Teacher | Person>();
  const [courses, setCourses] = useState<Array<MiniCourse>>();
  const [miniInfo, setMiniInfo] = useState<TeacherMiniInfo>();

  useEffect(() => {
    PersonService.getPersonToShow(username).then((response) => {
      console.log("Fetched person", response.data);
      setPerson(response.data);
    });
    TeacherService.getCreateCourseByUsername(username).then((response) => {
      console.log("Fetched created course list", response.data);
      setCourses(response.data);
    });
    TeacherService.getMiniInfo(username).then((response) => {
      console.log("Teacher mini info ", response.data);
      setMiniInfo(response.data);
    });
  }, []);
  function LeftComponent() {
    return (
      <Card>
        <CardContent>
          <Grid container direction="column" spacing={3}>
            <Grid item container justifyContent="center">
              <Avatar className={classes.avatar} src={person?.photo?.content} />
            </Grid>
            <Grid item container>
              <Details />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    );
  }
  function RightComponent() {
    return (
      <Grid container direction="column" spacing={2}>
        <Grid item container justifyContent="space-around" spacing={2}>
          <Grid item md={3} xs={12}>
            <Card>
              <CardHeader
                title={miniInfo?.courseCount}
                classes={{ title: classes.cardHeader }}
              />
              <CardContent classes={{ root: classes.cardContent }}>
                Course
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={3} xs={12}>
            <Card>
              <CardHeader
                title={miniInfo?.studentCount}
                classes={{ title: classes.cardHeader }}
              />
              <CardContent classes={{ root: classes.cardContent }}>
                Students
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={3} xs={12}>
            <Card>
              <CardHeader
                title={miniInfo?.reviewCount}
                classes={{ title: classes.cardHeader }}
              />
              <CardContent classes={{ root: classes.cardContent }}>
                Review
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={3} xs={12}>
            <Card>
              <CardHeader
                title={miniInfo?.ratingCount}
                classes={{ title: classes.cardHeader }}
              />
              <CardContent classes={{ root: classes.cardContent }}>
                <Rating value={miniInfo?.rating} precision={0.1} readOnly />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid item container>
          <CoursePagination courses={courses} title="Courses" />
        </Grid>
      </Grid>
    );
  }

  // const SocialMedia = () => {
  //   return (
  //     <Grid item container direction="row" justifyContent="space-around">
  //       {data.socialMediaData.map((item) => (
  //         <Link href="#">
  //           <IconButton>
  //             <Icon iconName={item.type} />
  //           </IconButton>
  //         </Link>
  //       ))}
  //     </Grid>
  //   );
  // };

  // function Icon({ iconName }) {
  //   if (iconName === "Email") return <EmailIcon />;
  //   else if (iconName === "Facebook") return <FacebookIcon />;
  //   else if (iconName === "Twitter") return <TwitterIcon />;
  //   else if (iconName === "YouTube") return <YouTubeIcon />;
  //   return null;
  // }
  function Details() {
    function CreateItem({ attribute, value = "", children = <></> }) {
      return (
        <Grid item container direction="column" alignItems="flex-start">
          <Grid item>
            <Typography variant="h6">{attribute}</Typography>
          </Grid>
          <Grid item container>
            {value && <Typography variant="body1">{value}</Typography>}
            {children}
          </Grid>
        </Grid>
      );
    }
    function ContactChip({ url, icon, text }) {
      return (
        <Chip
          variant="outlined"
          color="primary"
          clickable
          icon={icon}
          label={text}
          onClick={(event) => window.open(url, "_blank")}
        />
      );
    }
    return (
      <Grid item container direction="column" spacing={2}>
        <CreateItem
          attribute="Name"
          value={person?.firstName + " " + person?.lastName}
        />
        <CreateItem attribute="Country" value={person?.country?.name} />
        {/* <CreateItem attribute="Designation" value={person?.designation?.name} /> */}
        <CreateItem attribute="Languages">
          <Grid container spacing={1}>
            {person?.languages?.map((lang) => (
              <Grid item key={lang.id}>
                <Chip variant="outlined" color="primary" label={lang?.name} />
              </Grid>
            ))}
          </Grid>
        </CreateItem>
        <CreateItem attribute="Institution" value={person?.institution} />
        <CreateItem attribute="About" value={person?.about} />
        <CreateItem attribute="Contact">
          <Grid container direction="column" spacing={1}>
            <Grid item container>
              <Button
                style={{ width: "100%" }}
                variant="contained"
                color="primary"
              >
                Send Message
              </Button>
            </Grid>
            {person?.fbURL && (
              <Grid item>
                <ContactChip
                  url={"http://www.fb.com/" + person?.fbURL}
                  icon={<FacebookIcon />}
                  text={`/${person?.fbURL}`}
                />
              </Grid>
            )}
            {person?.youtubeURL && (
              <Grid item>
                <ContactChip
                  url={"http://www.youtube.com/channel/" + person?.fbURL}
                  icon={<YouTubeIcon />}
                  text={`/${person?.youtubeURL}`}
                />
              </Grid>
            )}
            {person?.linkedInURL && (
              <Grid item>
                <ContactChip
                  url={"http://www.linkedin.com/" + person?.fbURL}
                  icon={<LinkedIn />}
                  text={`/${person?.linkedInURL}`}
                />
              </Grid>
            )}
            {person?.website && (
              <Grid item>
                <ContactChip
                  url={person?.website}
                  icon={<WorkOutlined />}
                  text={person?.website}
                />
              </Grid>
            )}
          </Grid>
        </CreateItem>
      </Grid>
    );
  }
  return (
    <User>
      <Grid container>
        <Grid container direction="row" alignItems="flex-start">
          <Grid item sm={4} lg={3}>
            <LeftComponent />
          </Grid>
          <Grid item sm={8} lg={9} style={{ paddingLeft: 16 }}>
            <RightComponent />
          </Grid>
        </Grid>
      </Grid>
    </User>
  );
};

export default Profile;
