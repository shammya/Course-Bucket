import { Avatar, Grid, IconButton, Typography } from "@material-ui/core";
import { Facebook, Mail } from "@material-ui/icons";
import React from "react";
import { FaPinterestSquare, FaTwitterSquare } from "react-icons/fa";
import {
  ImFacebook2,
  ImInstagram,
  ImLinkedin,
  ImYoutube,
} from "react-icons/im";
import "./SimpleReactFooter.sass";

function SimpleReactFooter(props) {
  return (
    <div
      style={{ backgroundColor: props.backgroundColor || "bisque" }}
      className="footer-container"
    >
      <Grid container>
        {props.columns.length !== 0 && (
          <Grid item container sm={4} xs={12}>
            {props.columns.map((column) => (
              <Grid className="grid-item" item sm={12} xs={6}>
                <div
                  style={{ color: props.fontColor || "black" }}
                  className="second-title"
                >
                  {column.title}
                </div>
                {column.resources.map((resource) => (
                  <div key={resource.id}>
                    <a
                      href={`${resource.link}`}
                      target="_blank"
                      style={{ color: props.fontColor || "black" }}
                      className="resources"
                    >
                      as {resource.name}
                    </a>
                  </div>
                ))}
              </Grid>
            ))}
          </Grid>
        )}

        <Grid item xs={6} sm={props.columns.length === 0 ? 6 : 4}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item>
              <Avatar
                src="https://avatars.githubusercontent.com/u/46004817?v=4"
                style={{ width: 180, height: 180 }}
              />
            </Grid>
            <Grid
              item
              container
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <Typography variant="h5" style={{ color: "#FFFFBA" }}>
                Md. Mehedi Hasan
              </Typography>
              <Typography variant="h5" style={{ color: "#FFFFBA" }}>
                CSE, BUET
              </Typography>
            </Grid>
            <Grid item container justifyContent="center">
              <Grid item>
                <IconButton href="https://www.fb.com/66.mehedi">
                  <Facebook style={{ color: "#FFFFBA" }} />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton href="https://www.google.com/66.mehedi">
                  <Mail style={{ color: "#FFFFBA" }} />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6} sm={props.columns.length === 0 ? 6 : 4}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item>
              <Avatar
                src="https://avatars.githubusercontent.com/u/46061332?v=4"
                style={{ width: 180, height: 180 }}
              />
            </Grid>
            <Grid
              item
              container
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <Typography variant="h5" style={{ color: "#FFFFBA" }}>
                Kazi Wasif Amin
              </Typography>
              <Typography variant="h5" style={{ color: "#FFFFBA" }}>
                CSE, BUET
              </Typography>
            </Grid>
            <Grid item container justifyContent="center">
              <Grid item>
                <IconButton href="https://www.fb.com/kazishammu">
                  <Facebook style={{ color: "#FFFFBA" }} />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton href="https://www.google.com/kazishammu">
                  <Mail style={{ color: "#FFFFBA" }} />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {props.facebook !== undefined ||
      props.linkedin !== undefined ||
      props.instagram !== undefined ||
      props.twitter !== undefined ||
      props.pinterest !== undefined ||
      props.youtube !== undefined ? (
        <div className="social-media-col">
          <div
            style={{ color: props.fontColor || "black" }}
            className="stay-connected-title"
          >
            Stay connected
          </div>
          <div className="social-media">
            {props.facebook !== undefined ? (
              <a
                href={`https://www.facebook.com/${props.facebook}`}
                target="_blank"
                className="socialMediaLogo"
              >
                <ImFacebook2
                  color={`${props.iconColor || "black"}`}
                  size={25}
                />{" "}
              </a>
            ) : (
              ""
            )}
            {props.linkedin !== undefined ? (
              <a
                href={`https://www.linkedin.com/in/${props.linkedin}`}
                target="_blank"
                className="socialMediaLogo"
              >
                <ImLinkedin color={`${props.iconColor || "black"}`} size={25} />{" "}
              </a>
            ) : (
              ""
            )}
            {props.instagram !== undefined ? (
              <a
                href={`https://www.instagram.com/${props.instagram}`}
                target="_blank"
                className="socialMediaLogo"
              >
                <ImInstagram
                  color={`${props.iconColor || "black"}`}
                  size={25}
                />{" "}
              </a>
            ) : (
              ""
            )}
            {props.twitter !== undefined ? (
              <a
                href={`https://www.twitter.com/${props.twitter}`}
                target="_blank"
                className="socialMediaLogo"
              >
                <FaTwitterSquare
                  color={`${props.iconColor || "black"}`}
                  size={25}
                />{" "}
              </a>
            ) : (
              ""
            )}
            {props.pinterest !== undefined ? (
              <a
                href={`https://www.pinterest.com/${props.pinterest}`}
                target="_blank"
                className="socialMediaLogo"
              >
                <FaPinterestSquare
                  color={`${props.iconColor || "black"}`}
                  size={25}
                />{" "}
              </a>
            ) : (
              ""
            )}
            {props.youtube !== undefined ? (
              <a
                href={`https://www.youtube.com/channel/${props.youtube}`}
                target="_blank"
                className="socialMediaLogo"
              >
                <ImYoutube color={`${props.iconColor || "black"}`} size={25} />{" "}
              </a>
            ) : (
              ""
            )}
          </div>
        </div>
      ) : (
        ""
      )}

      <div>
        <div
          style={{ color: props.copyrightColor || "grey" }}
          className="copyright"
        >
          Copyright &copy; {props.copyright}
        </div>
      </div>
    </div>
  );
}

// SimpleReactFooter.propTypes = {
//   description: PropTypes.string,
//   linkedin: PropTypes.string,
//   instagram: PropTypes.string,
//   facebook: PropTypes.string,
//   youtube: PropTypes.string,
//   pinterest: PropTypes.string,
//   title: PropTypes.string,
//   columns: PropTypes.arrayOf(
//     PropTypes.shape({
//       title: PropTypes.string,
//       resources: PropTypes.arrayOf(
//         PropTypes.shape({
//           name: PropTypes.string,
//           link: PropTypes.string,
//         })
//       ),
//     })
//   ),
//   copyright: PropTypes.string,
//   iconColor: PropTypes.string,
//   backgroundColor: PropTypes.string,
//   fontColor: PropTypes.string,
//   copyrightColor: PropTypes.string,
// };

export default SimpleReactFooter;
