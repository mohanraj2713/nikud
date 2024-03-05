import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
// @mui
import { Container, Typography, Grid, Card, CardContent, TextField, FormControl, InputLabel, Select, MenuItem, Button, FormControlLabel, Switch, Box, OutlinedInput } from '@mui/material';
// hooks
import useSettings from '../../hooks/useSettings';
// components
import Page from '../../components/Page';
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';
import CardComponent from '../../components/card/CardComponent';
import HorizontalLinearStepper from '../../components/stepper/StepperComponent';
import StudentDetails from './admission/StudentDetails';
import ParentDetails from './admission/ParentDetails';
import AddressDetails from './admission/AddressDetails';
import SiblingDetails from './admission/SiblingDetails';



export default function ProfilePage() {
  const { themeStretch } = useSettings();

  const [phoneNumber, setPhoneNumber] = useState('');
  const [checked, setChecked] = useState(false)
  const [siblingCount, setSiblingCount] = useState([1])
  const handlePhoneChange = (value) => {
    setPhoneNumber(value);
  };
  const content = [
    { title: "Student Details", component: <StudentDetails /> },
    { title: "Parent Details", component: <ParentDetails /> },
    { title: "Sibling Details", component: <SiblingDetails /> },
    { title: "Address Details", component: <AddressDetails /> },
  ]


  return (
    <Page title="Student : Admission">

      <HeaderBreadcrumbs
        heading="Admission"
        links={[
          { name: 'Student', href: "" },
          { name: 'Admission' },
        ]}
        action={
          <>

          </>
        }
      />

      <HorizontalLinearStepper steps={content} stepOptional={2} />

      

    </Page >
  );
}



const ParentForm = ({ data, handlePhoneChange }) => {

  return <>
    <Grid container>
      <Grid item xs={6} md={3} lg={3} xl={3} sx={{ px: 1, py: 1 }}>
        <TextField
          fullWidth
          id="outlined-number"
          label="First Name"
          type="text"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
      <Grid item xs={6} md={3} lg={3} xl={3} sx={{ px: 1, py: 1 }}>
        <TextField
          fullWidth
          id="outlined-number"
          label="Mobile Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
      <Grid item xs={6} md={3} lg={3} xl={3} sx={{ px: 1, py: 1 }}>
        <TextField
          fullWidth
          id="outlined-number"
          label="Email ID"
          type="email"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
      {/* <PhoneInput
        placeholder="Enter phone number"
        value={data.phoneNumber}
        onChange={handlePhoneChange}
        defaultCountry="US" // Set the default country (optional)
        inputComponent={(props) => (
          <TextField
            {...props}
            fullWidth
            variant="outlined"
            label="Phone Number"
            InputLabelProps={{
              shrink: true,
            }}
          />
        )}
      /> */}
      <Grid item xs={6} md={3} lg={3} xl={3} sx={{ px: 1, py: 1 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Qualification</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={""}
            label="Qualification"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={() => { }}
          >
            <MenuItem value={"10th"}>10th</MenuItem>
            <MenuItem value={"12th"}>12th</MenuItem>
            <MenuItem value={"Batchlor"}>Batchlor</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6} md={3} lg={3} xl={3} sx={{ px: 1, py: 1 }}>
        <TextField
          fullWidth
          id="outlined-number"
          label="Profession"
          type="text"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
      <Grid item xs={6} md={3} lg={3} xl={3} sx={{ px: 1, py: 1 }}>
        <TextField
          fullWidth
          id="outlined-number"
          label="Designation"
          type="text"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
      <Grid item xs={6} md={3} lg={3} xl={3} sx={{ px: 1, py: 1 }}>
        <TextField
          fullWidth
          id="outlined-number"
          label="Organization"
          type="text"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
      <Grid item xs={6} md={3} lg={3} xl={3} sx={{ px: 1, py: 1 }}>
        <TextField
          fullWidth
          id="outlined-number"
          label="Work Phone Number"
          type="text"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
      <Grid item xs={6} md={3} lg={3} xl={3} sx={{ px: 1, py: 1 }}>
        <TextField
          fullWidth
          id="outlined-number"
          label="Monthly Income"
          type="text"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>

    </Grid>
  </>
}

const AddressForm = () => {

  return <>
    <Grid container>
      <Grid item xs={6} md={3} lg={3} xl={3} sx={{ px: 1, py: 1 }}>
        <TextField
          fullWidth
          id="outlined-number"
          label="Flat No & Name"
          type="text"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
      <Grid item xs={6} md={3} lg={3} xl={3} sx={{ px: 1, py: 1 }}>
        <TextField
          fullWidth
          id="outlined-number"
          label="Door Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
      <Grid item xs={6} md={3} lg={3} xl={3} sx={{ px: 1, py: 1 }}>
        <TextField
          fullWidth
          id="outlined-number"
          label="Street / Road"
          type="text"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>

      <Grid item xs={6} md={3} lg={3} xl={3} sx={{ px: 1, py: 1 }}>
        <TextField
          fullWidth
          id="outlined-number"
          label="Locality"
          type="text"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
      <Grid item xs={6} md={3} lg={3} xl={3} sx={{ px: 1, py: 1 }}>
        <TextField
          fullWidth
          id="outlined-number"
          label="Area"
          type="text"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
      <Grid item xs={6} md={3} lg={3} xl={3} sx={{ px: 1, py: 1 }}>
        <TextField
          fullWidth
          id="outlined-number"
          label="City / Town"
          type="text"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
      <Grid item xs={6} md={3} lg={3} xl={3} sx={{ px: 1, py: 1 }}>
        <TextField
          fullWidth
          id="outlined-number"
          label="Post"
          type="text"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
      <Grid item xs={6} md={3} lg={3} xl={3} sx={{ px: 1, py: 1 }}>
        <TextField
          fullWidth
          id="outlined-number"
          label="State"
          type="text"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
      <Grid item xs={6} md={3} lg={3} xl={3} sx={{ px: 1, py: 1 }}>
        <TextField
          fullWidth
          id="outlined-number"
          label="PIN Code"
          type="text"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>

    </Grid>
  </>
}

const SiblingDetailsForm = () => {

  return <>
    <Grid container>
      <Grid item xs={6} md={3} lg={3} xl={3} sx={{ px: 1, py: 1 }}>
        <TextField
          fullWidth
          id="outlined-number"
          label="Name"
          type="text"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
      <Grid item xs={6} md={3} lg={3} xl={3} sx={{ px: 1, py: 1 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">SEX</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={""}
            label="SEX"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={() => { }}
          >
            <MenuItem value={"MALE"}>MALE</MenuItem>
            <MenuItem value={"FEMALE"}>FEMALE</MenuItem>
            <MenuItem value={"OTHERS"}>OTHERS</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6} md={3} lg={3} xl={3} sx={{ px: 1, py: 1 }}>
        <TextField
          fullWidth
          id="outlined-number"
          label="Currently Doing"
          type="text"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>

      <Grid item xs={6} md={3} lg={3} xl={3} sx={{ px: 1, py: 1 }}>
        <TextField
          fullWidth
          id="outlined-number"
          label="From This School"
          type="text"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
      <Grid item xs={6} md={3} lg={3} xl={3} sx={{ px: 1, py: 1 }}>
        <TextField
          fullWidth
          id="outlined-number"
          label="Class"
          type="text"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
      <Grid item xs={6} md={3} lg={3} xl={3} sx={{ px: 1, py: 1 }}>
        <TextField
          fullWidth
          id="outlined-number"
          label="City / Town"
          type="Academic Year"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
    </Grid>
  </>
}