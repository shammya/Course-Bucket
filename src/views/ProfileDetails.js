// import 'date-fns'
import { Accordion, AccordionDetails, AccordionSummary, FormControl, Grid, InputLabel, makeStyles, MenuItem, Select, TextField, Typography, useTheme } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import User from 'layout/User'
import React from 'react'
import { LanguageField } from 'tools/LanguageField'
import { CustomImageUploader } from './../tools/ImageUploader'

const useStyles = makeStyles((theme) => ({
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
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
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },

}));

const countryItem = [
  "Bangladesh",
  "Pakistan",
  "Iran",
  "Iraq",
  "Palestain",
  "Syria",
]


const statusItem = [
  "HSC", "SSC", "BA", "BSc", "MA", "MSc",
]


const ProfileDetails = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [country, setCountry] = React.useState('');
  const [status, setStatus] = React.useState('');


  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };
  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const [dob, setDob] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleDobChange = (date) => {
    setDob(date);
  };

  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  function PersonalDetails() {

    return (
      <Grid container sm direction="column">
        <TextField
          label="First Name"
          margin="normal"
          variant="outlined"
          color="primary"
        />
        <TextField
          label="Last Name"
          margin="normal"
          variant="outlined"
          color="primary"
        />
        <LanguageField />
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">Country</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={country}
            onChange={handleCountryChange}
            label="Country"
          >
            {
              countryItem.map(item => (
                <MenuItem value={item}>{item}</MenuItem>
              ))
            }
          </Select>
        </FormControl>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">Educational Status</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={status}
            onChange={handleStatusChange}
            label="Educational Status"
          >
            {
              statusItem.map(item => (
                <MenuItem value={item}>{item}</MenuItem>
              ))
            }
          </Select>
        </FormControl>
        {/* <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            label="Date picker dialog"
            format="MM/dd/yyyy"
            value={dob}
            onChange={handleDobChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          /> */}
        <TextField
          label="Institution"
          margin="normal"
          variant="outlined"
          color="primary"
        />
        <TextField
          label="Website"
          margin="normal"
          variant="outlined"
          color="primary"
        />
        <TextField
          label="Facebook"
          margin="normal"
          variant="outlined"
          color="primary"
          InputProps={{
            startAdornment: ("http://www.facebook.com/")
          }}
        />
        <TextField
          label="YouTube"
          margin="normal"
          variant="outlined"
          color="primary"
          InputProps={{
            startAdornment: ("http://www.youtube.com/channel/")
          }}
        />
        <TextField
          label="LinkedIn"
          margin="normal"
          variant="outlined"
          color="primary"
          InputProps={{
            startAdornment: ("http://www.linkedin.com/")
          }}
        />
        <TextField
          label="About"
          margin="normal"
          variant="outlined"
          color="primary"
          multiline
          rows={6}
        />
      </Grid>
    )
  }

  function CreditCardInfo() {
    return (
      <Grid container sm direction="column">
        <TextField
          label="Credit Card No"
          margin="normal"
          variant="outlined"
          color="primary"
        />
        <TextField
          label="Name on Card"
          margin="normal"
          variant="outlined"
          color="primary"
        />
        <TextField
          label="Expire Date"
          margin="normal"
          variant="outlined"
          color="primary"
        />
      </Grid>
    )
  }
  function Security() {
    return (
      <Grid container sm direction="column">
        <TextField
          label="Email"
          margin="normal"
          variant="outlined"
          color="primary"
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
    )
  }
  return (
    // <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <User>
      <div className={classes.root} style={{ maxWidth: "700px", margin: "0 auto" }}>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography style={{ width: "100%", textAlign: "center" }}>General settings</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <PersonalDetails />
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography style={{ width: "100%", textAlign: "center" }}>Profile Picture</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <CustomImageUploader />
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography style={{ width: "100%", textAlign: "center" }}>Credit Card Information</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <CreditCardInfo />
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography style={{ width: "100%", textAlign: "center" }}>Security</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Security />
          </AccordionDetails>
        </Accordion>
      </div>
    </User >
    // </MuiPickersUtilsProvider>
  )
}

export default ProfileDetails
