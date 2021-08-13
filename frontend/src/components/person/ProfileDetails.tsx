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
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { KeyboardDatePicker } from "@material-ui/pickers";
import axios from "axios";
import { CreditCard, Designation, EduStatus, Person } from "classes/Person";
import CountryService from "components/AdminPanel/api/CountryService";
import DesignationService from "components/AdminPanel/api/DesignationService";
import EduStatusService from "components/AdminPanel/api/EduStatusService";
import AuthService, { authHeaders } from "components/auth/api/AuthService";
import { GLOBAL } from "Configure";
import User from "layout/User";
import { FileObject } from "material-ui-dropzone";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { ControlledTextfield } from "tools/customDesign/ControlledTextfield";
import { ImageUploader } from "tools/customDesign/ImageUploader";
import { LanguageField } from "tools/customDesign/LanguageField";
import { ErrorMessage } from "tools/Tools";
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
  const [person, setPerson] = useState<Person>(props.location.state.person);
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
  // const [files, setFiles] = useState<FileObject[]>([]);
  const [tempFiles, setTempFiles] = useState<FileObject[]>([]);

  // Snackbar control
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  // function handleSnackbarClose(event?: React.SyntheticEvent, reason?: string) {
  //   if (reason === "clickaway") {
  //     return;
  //   }
  //   setOpen(false);
  // }
  // Initialize  - start

  useEffect(() => {
    console.log("heheh");
    if (props.location.state) {
      setPerson(props.location.state.person);
    } else if (AuthService.getCurrentAccountType() != "") {
      if (AuthService.getCurrentAccountType() == "Teacher") {
        axios
          .get(GLOBAL.HOST + "/get-teacher-self", authHeaders())
          .then((response) => {
            console.log("Person data from header", response);
            // history.goBack();
            history.push({
              pathname: "/profile-details",
              state: {
                person: response.data,
                registered: true,
              },
            });
          });
      } else if (AuthService.getCurrentAccountType() == "Student") {
        axios
          .get(GLOBAL.HOST + "/get-student-self", authHeaders())
          .then((response) => {
            console.log("Person data from header", response);
            // history.goBack();
            history.push({
              pathname: "/profile-details",
              state: {
                person: response.data,
                registered: true,
              },
            });
          });
      } else {
        history.goBack();
      }
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
    if (props.location.state.registered) {
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
      setOldPassword("");
      setNewPassword("");
      setAgainNewPassword("");
    };
  }, []);
  // Initialize - end

  function passwordInfoCheck(func) {
    if (oldPassword && newPassword && againNewPassword) {
      if (newPassword != againNewPassword) {
        setErrorMessage("Password mismatch");
        setShowErrorMessage(true);
      }
      PersonService.changePassword(oldPassword, newPassword).then(
        (response) => {
          if (response.data.stringValue) {
            setErrorMessage(response.data.stringValue);
            setShowErrorMessage(true);
          } else {
            setSuccessMessage("Password change successfully");
            setShowSuccessMessage(true);
            func();
          }
        }
      );
    } else if (!oldPassword && !newPassword && !againNewPassword) {
      func();
    } else {
      setErrorMessage("Fill up password field properly");
      setShowErrorMessage(true);
    }
  }

  function register() {
    if (person.accountType == "Student") {
      // @ts-ignore
      AuthService.registerStudent(person, statusId).then((response) => {
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        console.log("done");
        history.push("/home");
      });
    } else if (person.accountType == "Teacher") {
      // @ts-ignore
      AuthService.registerTeacher(person, statusId).then((response) => {
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        console.log("done");
        history.push("/home");
      });
    }
  }

  function update() {
    if (person.accountType == "Student") {
      // @ts-ignore
      PersonService.updateStudent(person, statusId).then((response) => {
        if (response.data.stringValue) {
          setErrorMessage(response.data.stringValue);
          setShowErrorMessage(true);
        } else {
          props.location.state.person = person;
          setSuccessMessage("Successfully updated.");
          setShowSuccessMessage(true);
        }
      });
    } else if (person.accountType == "Teacher") {
      // @ts-ignore
      PersonService.updateTeacher(person, statusId).then((response) => {
        if (response.data.stringValue) {
          setErrorMessage(response.data.stringValue);
          setShowErrorMessage(true);
        } else {
          props.location.state.person = person;
          setSuccessMessage("Successfully updated.");
          setShowSuccessMessage(true);
        }
      });
    }
  }

  function handleSaveClicked(event) {
    event.preventDefault();
    if (person.card) {
      if (
        !person.card.cardNo ||
        !person.card.expireDate ||
        !person.card.nameOnCard
      ) {
        setErrorMessage("Please set all information of credit card properly");
        setShowErrorMessage(true);
        return;
      }
    }
    if (props.location.state.registered) {
      passwordInfoCheck(() => {
        console.log("Updated person ", person);
        if (person.photo) {
          person.photo.upload().then(update);
        } else {
          update();
        }
      });
    } else {
      console.log(person);
      if (person.photo) {
        person.photo.upload().then(register);
      } else {
        register();
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
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
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
          inputProps={{
            type: "url",
          }}
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
          onChange={(event) => setOldPassword(event.target.value)}
          type="password"
        />
        <ControlledTextfield
          label="New Password"
          margin="normal"
          variant="outlined"
          color="primary"
          defaultValue={newPassword}
          onChange={(event) => setNewPassword(event.target.value)}
          type="password"
        />
        <ControlledTextfield
          label="New Password (Again)"
          margin="normal"
          variant="outlined"
          color="primary"
          defaultValue={againNewPassword}
          onChange={(event) => setAgainNewPassword(event.target.value)}
          type="password"
        />
      </Grid>
    );
  }
  function FullPage() {
    return (
      <Grid item xs={12} sm={8} md={5} style={{ margin: "0 auto" }}>
        <form onSubmit={handleSaveClicked} encType="multipart/form-data">
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography style={{ width: "100%", textAlign: "center" }}>
                General settings
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <PersonalDetails />
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography style={{ width: "100%", textAlign: "center" }}>
                Profile Picture
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ProfilePicture />
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography style={{ width: "100%", textAlign: "center" }}>
                Credit Card Information
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <CreditCardInfo />
            </AccordionDetails>
          </Accordion>
          {props.location.state.registered && (
            <Accordion
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography style={{ width: "100%", textAlign: "center" }}>
                  Security
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Security />
              </AccordionDetails>
            </Accordion>
          )}
          <Grid item container justifyContent="center" style={{ padding: 10 }}>
            <Button
              // onClick={handleSaveClicked}
              variant="contained"
              color="primary"
              type="submit"
            >
              Save
            </Button>
            <Button
              onClick={(event) => history.goBack()}
              variant="contained"
              color="secondary"
              style={{ marginLeft: 10 }}
            >
              Cancel
            </Button>
          </Grid>
        </form>
      </Grid>
    );
  }
  return (
    <>
      <ErrorMessage
        open={showErrorMessage}
        message={errorMessage}
        onClose={setShowErrorMessage}
      />
      {props.location.state.registered ? (
        <User>
          <Grid container justifyContent="center">
            <FullPage />
          </Grid>
        </User>
      ) : (
        <FullPage />
      )}
    </>
  );
};

export default ProfileDetails;
