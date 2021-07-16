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
import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Country } from "../classes/Country";
import {
  CreditCard,
  Designation,
  EduStatus,
  Student,
  Teacher,
} from "../classes/Person";
import { CustomImageUploader } from "../tools/ImageUploader";
import { LanguageField } from "../tools/LanguageField";

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

const countryItem: Array<Country> = [
  { id: 1, name: "Bangladesh", adminId: "Mehedi" },
  { id: 2, name: "India", adminId: "Mehedi" },
  { id: 3, name: "Palestain", adminId: "Mehedi" },
  { id: 4, name: "Egypt", adminId: "Mehedi" },
  { id: 5, name: "Iran", adminId: "Mehedi" },
];
const designations: Array<Designation> = [
  { id: 1, type: "Professor", adminId: "Mehedi" },
  { id: 2, type: "Freelencer", adminId: "Mehedi" },
];
const eduStatuses: Array<EduStatus> = [
  { id: 1, type: "HSC", adminId: "Mehedi" },
  { id: 2, type: "SSC", adminId: "Mehedi" },
  { id: 3, type: "BA", adminId: "Mehedi" },
  { id: 4, type: "BSc", adminId: "Mehedi" },
  { id: 5, type: "MA", adminId: "Mehedi" },
  { id: 6, type: "MSc", adminId: "Mehedi" },
];

const ProfileDetails = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const theme = useTheme();
  const [country, setCountry] = React.useState("");
  const [status, setStatus] = React.useState("");
  const [cardExpireDate, setCardExpireDate] = React.useState(new Date());
  console.log(cardExpireDate);
  // Initialize - start
  let person: Student | Teacher;
  let statusItem: Array<Designation> | Array<EduStatus>;
  if (props.location.state.accountType == "Student") {
    person = props.location.state as Student;
    statusItem = eduStatuses;
  } else if (props.location.state.accountType == "Teacher") {
    person = props.location.state as Teacher;
    statusItem = designations;
  }
  // Initialize - end

  function handleSaveClicked() {
    history.push({ pathname: "/home", state: person });
  }

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
    person.country = event.target.value;
  };
  const handleStatusChange = (event) => {
    setStatus(event.target.value);
    person.accountType == "Student"
      ? // @ts-ignore
        (person.eduStatus = event.target.value)
      : // @ts-ignore
        (person.designation = event.target.value);
  };

  const [dob, setDob] = React.useState(new Date());

  const handleDobChange = (date) => {
    setDob(date);
  };

  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  function PersonalDetails() {
    return (
      <Grid container direction="column">
        <TextField
          label="First Name"
          margin="normal"
          variant="outlined"
          color="primary"
          defaultValue={person.firstName}
          onChange={(event) => (person.firstName = event.target.value)}
        />
        <TextField
          label="Last Name"
          margin="normal"
          variant="outlined"
          color="primary"
          defaultValue={person.lastName}
          onChange={(event) => (person.lastName = event.target.value)}
        />
        <LanguageField
          // @ts-ignore
          objects={person.languages}
          onObjectsChange={(selected) => (person.languages = selected)}
        />
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">
            Country
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={country}
            onChange={handleCountryChange}
            label="Country"
          >
            {countryItem.map((item) => (
              <MenuItem
                key={item.id}
                // @ts-ignore
                value={item}
              >
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">
            {person.accountType == "Student"
              ? "Educational Status"
              : "Designation"}
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={status}
            onChange={handleStatusChange}
            label={
              person.accountType == "Student"
                ? "Educational Status"
                : "Designation"
            }
          >
            {statusItem.map((item) => (
              <MenuItem
                key={item.id}
                // @ts-ignore
                value={item}
              >
                {item.type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <KeyboardDatePicker
          // disableToolbar
          variant="inline"
          format="dd/MMM/yyyy"
          label="Date of Birth"
          inputVariant="outlined"
          value={dob}
          onChange={(date) => {
            setDob(date as Date);
            person.dob = date;
          }}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
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
          defaultValue={person.linkedInUrl}
          onChange={(event) => (person.linkedInUrl = event.target.value)}
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
        <TextField
          label="Old Password"
          margin="normal"
          variant="outlined"
          color="primary"
        />
        <TextField
          label="New Password"
          margin="normal"
          variant="outlined"
          color="primary"
        />
        <TextField
          label="New Password (Again)"
          margin="normal"
          variant="outlined"
          color="primary"
        />
      </Grid>
    );
  }
  return (
    // <MuiPickersUtilsProvider utils={DateFnsUtils}>
    // <User>
    <Grid item xs={12} sm={8} md={5}>
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
          <CustomImageUploader />
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
      <Grid item container justify="center" style={{ padding: 10 }}>
        <Button onClick={handleSaveClicked} variant="contained" color="primary">
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
    </Grid>
    // </User >
    // </MuiPickersUtilsProvider>
  );
};

export default ProfileDetails;
