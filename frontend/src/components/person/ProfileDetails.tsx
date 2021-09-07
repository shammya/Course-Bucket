import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  FormControl,
  Grid,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  TextField,
  Typography,
  useTheme,
} from "@material-ui/core";
import { KeyboardDatePicker } from "@material-ui/pickers";
import axios from "axios";
import { Files } from "classes/Files";
import { CreditCard, Designation, EduStatus, Person } from "classes/Person";
import CountryService from "components/AdminPanel/api/CountryService";
import DesignationService from "components/AdminPanel/api/DesignationService";
import EduStatusService from "components/AdminPanel/api/EduStatusService";
import AuthService, { authHeaders } from "components/auth/api/AuthService";
import { GLOBAL } from "Configure";
import User from "layout/User";
import { useSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { ControlledTextfield } from "tools/customDesign/ControlledTextfield";
import { ImageUploader } from "tools/customDesign/ImageUploader";
import { LanguageField } from "tools/customDesign/LanguageField";
import { Country } from "./../../classes/Country";
import PersonService from "./api/PersonService";

const useStyles = makeStyles((theme) => ({
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
  formControl: {
    margin: theme.spacing(1, 0),
    minWidth: 400,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  root: {
    width: "100%",
    minHeight: "100vh",
    padding: "30px 0px",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

// const countryItem: Array<Country> = [
//   { id: 1, name: "Bangladesh", adminId: "Mehedi" },
//   { id: 2, name: "India", adminId: "Mehedi" },
//   { id: 3, name: "Palestain", adminId: "Mehedi" },
//   { id: 4, name: "Egypt", adminId: "Mehedi" },
//   { id: 5, name: "Iran", adminId: "Mehedi" },
// ];
// const designations: Array<Designation> = [
//   { id: 1, type: "Professor", adminId: "Mehedi" },
//   { id: 2, type: "Freelencer", adminId: "Mehedi" },
// ];
// const eduStatuses: Array<EduStatus> = [
//   { id: 1, type: "HSC", adminId: "Mehedi" },
//   { id: 2, type: "SSC", adminId: "Mehedi" },
//   { id: 3, type: "BA", adminId: "Mehedi" },
//   { id: 4, type: "BSc", adminId: "Mehedi" },
//   { id: 5, type: "MA", adminId: "Mehedi" },
//   { id: 6, type: "MSc", adminId: "Mehedi" },
// ];

const ProfileDetails = (props) => {
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const [person, setPerson] = useState<Person>(
    props.location.state?.person
      ? props.location.state.person
      : new Person("", "", "")
  );
  // let person: Person;

  const [error, setError] = useState(false);
  const [dob, setDob] = React.useState<Date | null>(null);
  const [countryItem, setCountryItem] = useState<Array<Country>>([]);
  const [statusItem, setStatusItem] = useState<
    Array<Designation> | Array<EduStatus>
  >([]);
  const classes = useStyles();
  const theme = useTheme();
  const [countryId, setCountryId] = React.useState<number | undefined>();
  const [statusId, setStatusId] = React.useState<number | undefined>();
  const [cardExpireDate, setCardExpireDate] = React.useState<Date | null>(null);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [againNewPassword, setAgainNewPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const [pageNotFound, setPageNotFound] = useState(false);
  // Snackbar control
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    let abort = new AbortController();
    console.log("heheh");
    if (props.location.state) {
      setPerson(props.location.state.person);
      setLoading(false);
    } else if (AuthService.getCurrentAccountType() != "") {
      if (AuthService.getCurrentAccountType() == "Teacher") {
        axios
          .get(GLOBAL.HOST + "/get-teacher-self", authHeaders())
          .then((response) => {
            console.log("Person data from header", response);
            // history.goBack();

            let photo = response.data.photo;
            response.data.photo = new Files(photo.type, photo.title)
              .setId(photo.id)
              .setContent(photo.content);
            props.location.state = { person: response.data, registered: true };
            setPerson(props.location.state.person);
            setLoading(false);
            // history.push({
            //   pathname: "/profile-details",
            //   state: {
            //     person: response.data,
            //     registered: true,
            //   },
            // });
          });
      } else if (AuthService.getCurrentAccountType() == "Student") {
        axios
          .get(GLOBAL.HOST + "/get-student-self", authHeaders())
          .then((response) => {
            console.log("Person data from header", response);
            // history.goBack();
            let photo = response.data.photo;
            response.data.photo = new Files(photo.type, photo.title)
              .setId(photo.id)
              .setContent(photo.content);

            history.push({
              pathname: "/profile-details",
              state: {
                person: response.data,
                registered: true,
              },
            });
            setLoading(false);
          });
      }
    } else {
      // history.goBack();
      setLoading(false);
      setPageNotFound(true);
    }
    CountryService.getAllCountries().then((response) => {
      setCountryItem(response.data);
    });
    if (person.accountType == "Student") {
      EduStatusService.getAllEduStatus().then((response) => {
        setStatusItem(response.data);
      });
    } else if (person.accountType == "Teacher") {
      DesignationService.getAllDesignation().then((response) => {
        setStatusItem(response.data);
      });
    }
    // console.log(JSON.parse(JSON.stringify(person.country)));
    if (props.location.state?.registered) {
      if (person.country) {
        setCountryId(person.country.id);
      }
      if (person.accountType == "Teacher") {
        PersonService.getDesignation().then((response) => {
          setStatusId(response.data.id);
        });
      } else if (person.accountType == "Student") {
        PersonService.getEduStatus().then((response) => {
          setStatusId(response.data.id);
        });
      }
      if (person.dob) {
        //@ts-ignore
        setDob(person.dob);
      }
      if (person.card && person.card.expireDate) {
        setCardExpireDate(person.card.expireDate);
      }
    }
    // if (person.dob == undefined) {
    //   person.dob = dob;
    // }
    return () => {
      // setOldPassword(null);
      // setNewPassword(null);
      // setAgainNewPassword(null);
      // setDob(null)
      // setPerson(null)
      abort.abort();
    };
  }, []);
  // Initialize - end

  async function passwordInfoCheck(func) {
    if (oldPassword && newPassword && againNewPassword) {
      if (newPassword != againNewPassword) {
        enqueueSnackbar("Password mismatch", { variant: "error" });
      }
      await PersonService.changePassword(oldPassword, newPassword).then(
        async (response) => {
          if (response.data.stringValue) {
            enqueueSnackbar(response.data.stringValue, { variant: "error" });
          } else {
            enqueueSnackbar("Password change successfully", {
              variant: "success",
            });
            await func();
          }
        }
      );
    } else if (!oldPassword && !newPassword && !againNewPassword) {
      await func();
    } else {
      enqueueSnackbar("Fill up password field properly", { variant: "error" });
    }
  }

  async function register() {
    if (person.accountType == "Student") {
      // @ts-ignore
      await AuthService.registerStudent(person, statusId).then((response) => {
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        console.log("done");
        history.push("/home");
      });
    } else if (person.accountType == "Teacher") {
      // @ts-ignore
      await AuthService.registerTeacher(person, statusId).then((response) => {
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        console.log("done");
        history.push("/home");
      });
    }
  }

  async function update() {
    if (person.accountType == "Student") {
      // @ts-ignore
      await PersonService.updateStudent(person, statusId).then((response) => {
        if (response.data.stringValue) {
          enqueueSnackbar(response.data.stringValue, { variant: "error" });
        } else {
          props.location.state.person = person;
          console.log("updated");
          enqueueSnackbar("Successfully updated", { variant: "success" });

          let user = JSON.parse(localStorage.getItem("user") + "");
          user.photo = person.photo;
          localStorage.setItem("user", JSON.stringify(user));
        }
      });
    } else if (person.accountType == "Teacher") {
      // @ts-ignore
      await PersonService.updateTeacher(person, statusId).then((response) => {
        if (response.data.stringValue) {
          enqueueSnackbar(response.data.stringValue, { variant: "error" });
        } else {
          props.location.state.person = person;
          enqueueSnackbar("Successfully updated", { variant: "success" });

          let user = JSON.parse(localStorage.getItem("user") + "");
          user.photo = person.photo;
          localStorage.setItem("user", JSON.stringify(user));
        }
      });
    }
  }

  async function handleSaveClicked(event) {
    event.preventDefault();
    if (person.card) {
      if (
        !person.card.cardNo ||
        !person.card.expireDate ||
        !person.card.nameOnCard
      ) {
        enqueueSnackbar("Please set all information of credit card properly", {
          variant: "warning",
        });
        return;
      }
    }
    if (props.location.state?.registered) {
      enqueueSnackbar("Please wait, your profile is updating...", {
        variant: "info",
      });
      await passwordInfoCheck(async () => {
        console.log("Updated person ", person);
        //@ts-ignore
        if (person?.photo?.content?.file) {
          await person.photo.upload();
          await update();
        } else {
          await update();
        }
      });
    } else {
      enqueueSnackbar(
        "Please wait, your account registration is processing...",
        { variant: "info" }
      );
      console.log(person);
      if (person.photo) {
        await person.photo.upload().then(register);
      } else {
        await register();
      }
    }
  }

  const handleCountryChange = (event) => {
    let country = countryItem.filter(
      (item) => item.id == event.target.value
    )[0];
    person.country = country;
    setCountryId(event.target.value);
  };
  const handleStatusChange = (event) => {
    setStatusId(event.target.value);
  };

  // function handleProfilePicChange(event) {
  //   event.preventDefault();
  //   setFiles(event.target.files[0]);
  //   person.photo = new Files("PICTURE", "Profile Picture").setFile(
  //     event.target.files[0]
  //   );
  // }

  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  function PersonalDetails() {
    return (
      <Grid container direction="column">
        <ControlledTextfield
          label="First Name"
          margin="normal"
          variant="outlined"
          color="primary"
          defaultValue={person.firstName}
          onChange={(event) => {
            person.firstName = event.target.value;
            console.log(person);
          }}
          required
          pattern="name"
        />
        <ControlledTextfield
          label="Last Name"
          margin="normal"
          variant="outlined"
          color="primary"
          defaultValue={person.lastName}
          onChange={(event) => (person.lastName = event.target.value)}
          required
          pattern="name"
        />
        <FormControl
          variant="outlined"
          className={classes.formControl}
          required
        >
          <InputLabel>Country</InputLabel>
          <Select
            value={countryId}
            onChange={handleCountryChange}
            label="Country *"
          >
            {countryItem.map((item) => (
              <MenuItem key={item.id} value={item.id}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl
          variant="outlined"
          className={classes.formControl}
          required
        >
          <InputLabel>
            {person.accountType == "Student"
              ? "Educational Status"
              : "Designation"}
          </InputLabel>
          <Select
            value={statusId}
            onChange={handleStatusChange}
            label={
              person.accountType == "Student"
                ? "Educational Status *"
                : "Designation *"
            }
          >
            {statusItem.map((item) => (
              <MenuItem key={item.id} value={item.id}>
                {item.type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <KeyboardDatePicker
          variant="inline"
          format="dd/MMM/yyyy"
          label="Date of Birth"
          inputVariant="outlined"
          value={dob}
          margin="normal"
          onChange={(date) => {
            setDob(date);
            person.dob = date;
          }}
          // KeyboardButtonProps={{
          //   "aria-label": "change date",
          // }}
          required
        />
        <LanguageField
          objects={person.languages}
          onObjectsChange={(selected) => (person.languages = selected)}
        />
        <TextField
          label="Institution"
          margin="normal"
          variant="outlined"
          color="primary"
          defaultValue={person.institution}
          onChange={(event) => (person.institution = event.target.value)}
        />
        <TextField
          label="Website"
          margin="normal"
          variant="outlined"
          color="primary"
          defaultValue={person.website}
          onChange={(event) => (person.website = event.target.value)}
          // inputProps={{
          //   type: "url",
          // }}
        />
        <TextField
          label="Facebook"
          margin="normal"
          variant="outlined"
          color="primary"
          InputProps={{
            startAdornment: "http://www.facebook.com/",
          }}
          defaultValue={person.fbURL}
          onChange={(event) => (person.fbURL = event.target.value)}
        />
        <TextField
          label="YouTube"
          margin="normal"
          variant="outlined"
          color="primary"
          InputProps={{
            startAdornment: "http://www.youtube.com/channel/",
          }}
          defaultValue={person.youtubeURL}
          onChange={(event) => (person.youtubeURL = event.target.value)}
        />
        <TextField
          label="LinkedIn"
          margin="normal"
          variant="outlined"
          color="primary"
          InputProps={{
            startAdornment: "http://www.linkedin.com/",
          }}
          defaultValue={person.linkedInURL}
          onChange={(event) => (person.linkedInURL = event.target.value)}
        />
        <TextField
          label="About"
          margin="normal"
          variant="outlined"
          color="primary"
          multiline
          rows={6}
          defaultValue={person.about}
          onChange={(event) => (person.about = event.target.value)}
        />
      </Grid>
    );
  }

  function CreditCardInfo() {
    return (
      <Grid container direction="column">
        <TextField
          label="Credit Card No"
          margin="normal"
          variant="outlined"
          color="primary"
          defaultValue={person?.card?.cardNo ?? ""}
          onChange={(event) => {
            if (person.card == undefined) person.card = new CreditCard();
            person.card.cardNo = event.target.value;
          }}
        />
        <TextField
          label="Name on Card"
          margin="normal"
          variant="outlined"
          color="primary"
          defaultValue={person?.card?.nameOnCard ?? ""}
          onChange={(event) => {
            if (person.card == undefined) person.card = new CreditCard();
            person.card.nameOnCard = event.target.value;
          }}
        />
        <KeyboardDatePicker
          variant="inline"
          format="dd/MMM/yyyy"
          label="Expire Date"
          margin="normal"
          inputVariant="outlined"
          value={cardExpireDate}
          onChange={(date) => {
            setCardExpireDate(date as Date);
            if (person.card == undefined) person.card = new CreditCard();
            person.card.expireDate = date;
          }}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
        />
      </Grid>
    );
  }

  function ProfilePicture() {
    return (
      <ImageUploader
        title="Profile Picture"
        onSetClick={(file) => {
          //@ts-ignore
          setPerson({ ...person, photo: file });
          setErrorMessage("");
        }}
        onDeleteClick={() => {
          person.photo = undefined;
          setErrorMessage("");
        }}
        imageDestination={person?.photo}
      />
    );
  }
  function Security() {
    return (
      <Grid container direction="column">
        <TextField
          label="Username"
          margin="normal"
          variant="outlined"
          color="primary"
          disabled
          defaultValue={person.username}
        />
        <TextField
          label="Email"
          margin="normal"
          variant="outlined"
          color="primary"
          disabled
          defaultValue={person.email}
        />
        <ControlledTextfield
          label="Old Password"
          margin="normal"
          variant="outlined"
          color="primary"
          defaultValue={oldPassword}
          onBlur={(event) => setOldPassword(event.target.value)}
          type="password"
        />
        <ControlledTextfield
          label="New Password"
          margin="normal"
          variant="outlined"
          color="primary"
          defaultValue={newPassword}
          onBlur={(event) => setNewPassword(event.target.value)}
          type="password"
        />
        <ControlledTextfield
          label="New Password (Again)"
          margin="normal"
          variant="outlined"
          color="primary"
          defaultValue={againNewPassword}
          onBlur={(event) => setAgainNewPassword(event.target.value)}
          type="password"
        />
      </Grid>
    );
  }
  function FullPage() {
    return (
      <form encType="multipart/form-data" onSubmit={handleSaveClicked}>
        <Grid container direction="column" spacing={2}>
          <Grid item container>
            <Accordion
              expanded={true}
              style={{ width: "100%" }}
              // expanded={expanded === "panel1"}
              // onChange={handleChange("panel1")}
            >
              <AccordionSummary>
                <Typography style={{ width: "100%", textAlign: "center" }}>
                  General settings
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <PersonalDetails />
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item container>
            <Accordion
              expanded={true}
              style={{ width: "100%" }}
              // expanded={expanded === "panel2"}
              // onChange={handleChange("panel2")}
            >
              <AccordionSummary>
                <Typography style={{ width: "100%", textAlign: "center" }}>
                  Profile Picture
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <ProfilePicture />
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item container>
            <Accordion
              expanded={true}
              style={{ width: "100%" }}
              // expanded={expanded === "panel3"}
              // onChange={handleChange("panel3")}
            >
              <AccordionSummary>
                <Typography style={{ width: "100%", textAlign: "center" }}>
                  Credit Card Information
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <CreditCardInfo />
              </AccordionDetails>
            </Accordion>
          </Grid>
          {props.location.state?.registered && (
            <Grid item container>
              <Accordion
                expanded={true}
                style={{ width: "100%" }}
                // expanded={expanded === "panel4"}
                // onChange={handleChange("panel4")}
              >
                <AccordionSummary>
                  <Typography style={{ width: "100%", textAlign: "center" }}>
                    Security
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Security />
                </AccordionDetails>
              </Accordion>
            </Grid>
          )}
        </Grid>

        <Grid
          item
          container
          justifyContent="center"
          spacing={3}
          style={{ padding: 15 }}
        >
          <Grid item>
            <Button
              // onClick={handleSaveClicked}
              variant="contained"
              color="primary"
              type="submit"
            >
              Save
            </Button>
          </Grid>
          <Grid item>
            <Button
              onClick={(event) => history.goBack()}
              variant="contained"
              color="secondary"
              style={{ marginLeft: 10 }}
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      </form>
    );
  }
  return (
    <>
      {props.location.state?.registered || loading || pageNotFound ? (
        <User loading={loading} pageNotFound={pageNotFound}>
          <Grid container justifyContent="center">
            <Grid item xs={12} sm={8} md={5} style={{ margin: "0 auto" }}>
              <FullPage />
            </Grid>
          </Grid>
        </User>
      ) : (
        <Grid item xs={12} style={{ margin: "0 auto" }}>
          <FullPage />
        </Grid>
      )}
    </>
  );
};

export default ProfileDetails;
