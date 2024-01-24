import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
// @mui
import { Container, Typography, Grid, Card, CardContent, TextField, FormControl, InputLabel, Select, MenuItem, Button, FormControlLabel, Switch, Box } from '@mui/material';
// hooks
import useSettings from '../../hooks/useSettings';
// components
import Page from '../../components/Page';
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';
import CardComponent from '../../components/card/CardComponent';



export default function ProfilePage() {
  const { themeStretch } = useSettings();

  const [phoneNumber, setPhoneNumber] = useState('');
  const [checked, setChecked] = useState(false)
  const [siblingCount, setSiblingCount] = useState([1])
  const handlePhoneChange = (value) => {
    setPhoneNumber(value);
  };


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

      <CardComponent title={"Basic Admission Details"} >

        <Grid container>
          <>
            <Grid item xs={6} md={3} lg={3} xl={3} sx={{ px: 1, py: 1 }}>
              <TextField
                fullWidth
                id="outlined-number"
                label="App ID"
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
                label="App NO"
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
                label="AY*"
                type="date"
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
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={6} md={3} lg={3} xl={3} sx={{ px: 1, py: 1 }}>
              <TextField
                fullWidth
                id="outlined-number"
                label="Group"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={6} md={3} lg={3} xl={3} sx={{ px: 1, py: 1 }}>
              <TextField
                fullWidth
                id="outlined-number"
                label="L2"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={6} md={3} lg={3} xl={3} sx={{ px: 1, py: 1 }}>
              <TextField
                fullWidth
                id="outlined-number"
                label="L3"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
          </>
        </Grid>

      </CardComponent>

      <CardComponent title={"Student Details"} >
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
              label="Last Name"
              type="text"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={6} md={3} lg={3} xl={3} sx={{ px: 1, py: 1 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={""}
                label="Age"
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
              sx={{ px: 0, py: 1 }}
              id="outlined-number"
              label="Date of Birth"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
        </Grid>
      </CardComponent>
      <CardComponent title={"Parent Details"} >
        <ParentForm data={{}} handlePhoneChange={(value) => setPhoneNumber(value)} />
      </CardComponent>
      <CardComponent title={"Sibling Details"} doSomething={<>
        <Button variant='outlined' color='secondary' onClick={() => {
          const temp = [...siblingCount]
          temp.push(temp[temp.length - 1] + 1)
          setSiblingCount(temp)
        }}>Add</Button>
      </>} >
        {
          siblingCount.map((item, index) => {
            return <SiblingDetailsForm />
          })
        }

      </CardComponent>
      <CardComponent title={"Address Details"} doSomething={<>
        <FormControlLabel
          control={<Switch checked={checked} onChange={() => setChecked(!checked)} />}
          label="Same CA"
        />
      </>}>
        <AddressForm />
        {
          !checked && <Box sx={{ my: 2 }}>
            <Typography style={{ marginBottom: 10 }} variant='h6'>
              Permanent Address
            </Typography>
            <AddressForm />
          </Box>
        }
      </CardComponent>
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