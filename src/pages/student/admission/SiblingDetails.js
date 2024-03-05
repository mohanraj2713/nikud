import { useState } from 'react';
import { Container, Typography, Grid, Card, CardContent, TextField, FormControl, InputLabel, Select, MenuItem, Button, FormControlLabel, Switch, Box, OutlinedInput, IconButton, Divider } from '@mui/material';
import { Formik, Field, FieldArray, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import CardComponent from "../../../components/card/CardComponent"
import { RHFTextField } from '../../../components/hook-form';


const validationSchema = Yup.object().shape({
  siblings: Yup.array().of(
    Yup.object().shape({
      Name: Yup.string().required('Name is required'),
      SEX: Yup.string().required('Sex is required'),
      Currently_Doing: Yup.string().required('Currently doing is required'),
      From_This_School: Yup.string().required('From this school is required'),
      Class: Yup.string().required('Class is required'),
      City: Yup.string().required('City is required'),
    })
  ),
});

const initialValues = {
  siblings: [
    {
      Name: "",
      SEX: "",
      Currently_Doing: "",
      From_This_School: "",
      Class: "",
      City: ""
    }
  ],
};

const SiblingDetails = () => {
  const [siblingCount, setSiblingCount] = useState([1])
  const handleSubmit = (values) => {
    // Your form submission logic here
    console.log(values);
  };
  return <>
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, touched, errors, handleSubmit }) => (
        <form onSubmit={handleSubmit}>

          <FieldArray name="siblings">
            {({ push, remove }) => (
              <Grid container spacing={2}>
                {values.siblings.map((contact, index) => (
                  <>
                    <CardComponent title={`Sibling Details- ${index + 1}`} doSomething={<>
                      <Button variant='outlined' color='error' onClick={() => remove(index)}>Delete</Button>
                    </>} >

                      <Grid container>
                        <Grid item xs={6} md={3} lg={3} xl={3} sx={{ px: 1, py: 1 }}>
                          <Field
                            as={TextField}
                            fullWidth
                            id="outlined-number"
                            name={`siblings[${index}].Name`}
                            label="Name"
                            type="text"
                            error={touched.siblings?.[index]?.Name && Boolean(errors.siblings?.[index]?.Name)}
                            helperText={touched.siblings?.[index]?.Name && errors.siblings?.[index]?.Name}
                            InputLabelProps={{
                              shrink: true,
                            }}
                          />
                        </Grid>
                        <Grid item xs={6} md={3} lg={3} xl={3} sx={{ px: 1, py: 1 }}>
                          <Field
                            // as={Select}
                            as={TextField}
                            select
                            fullWidth
                            name={`siblings[${index}].SEX`}
                            SelectProps={{ native: false }}
                            label="SEX"
                            error={touched.siblings?.[index]?.SEX && Boolean(errors.siblings?.[index]?.SEX)}
                            helperText={touched.siblings?.[index]?.SEX && errors.siblings?.[index]?.SEX}
                            InputLabelProps={{
                              shrink: true,
                            }}
                          // helperText={error?.message}
                          >
                            <MenuItem
                              value=""
                              sx={{
                                mx: 1,
                                borderRadius: 0.75,
                                typography: 'body2',
                                fontStyle: 'italic',
                                color: 'text.secondary',
                              }}
                            >
                              None
                            </MenuItem>
                            <Divider />
                            {[].map((option) => (
                              <MenuItem
                                key={option}
                                value={option}
                                sx={{
                                  mx: 1,
                                  my: 0.5,
                                  borderRadius: 0.75,
                                  typography: 'body2',
                                  textTransform: 'capitalize',
                                }}
                              >
                                {option}
                              </MenuItem>
                            ))}
                            <MenuItem value={"MALE"}>MALE</MenuItem>
                            <MenuItem value={"FEMALE"}>FEMALE</MenuItem>
                            <MenuItem value={"OTHERS"}>OTHERS</MenuItem>
                          </Field>

                        </Grid>
                        <Grid item xs={6} md={3} lg={3} xl={3} sx={{ px: 1, py: 1 }}>
                          <Field
                            as={TextField}
                            fullWidth
                            id="outlined-number"
                            label="Currently Doing"
                            name={`siblings[${index}].Currently_Doing`}
                            type="text"
                            error={touched.siblings?.[index]?.Currently_Doing && Boolean(errors.siblings?.[index]?.Currently_Doing)}
                            helperText={touched.siblings?.[index]?.Currently_Doing && errors.siblings?.[index]?.Currently_Doing}
                            InputLabelProps={{
                              shrink: true,
                            }}
                          />
                        </Grid>

                        <Grid item xs={6} md={3} lg={3} xl={3} sx={{ px: 1, py: 1 }}>
                          <Field
                            as={TextField}
                            fullWidth
                            id="outlined-number"
                            name={`siblings[${index}].From_This_School`}
                            label="From This School"
                            type="text"
                            error={touched.siblings?.[index]?.From_This_School && Boolean(errors.siblings?.[index]?.From_This_School)}
                            helperText={touched.siblings?.[index]?.From_This_School && errors.siblings?.[index]?.From_This_School}
                            InputLabelProps={{
                              shrink: true,
                            }}
                          />
                        </Grid>
                        <Grid item xs={6} md={3} lg={3} xl={3} sx={{ px: 1, py: 1 }}>
                          <Field
                            as={TextField}
                            fullWidth
                            id="outlined-number"
                            name={`siblings[${index}].Class`}
                            label="Class"
                            type="text"
                            error={touched.siblings?.[index]?.Class && Boolean(errors.siblings?.[index]?.Class)}
                            helperText={touched.siblings?.[index]?.Class && errors.siblings?.[index]?.Class}
                            InputLabelProps={{
                              shrink: true,
                            }}
                          />
                        </Grid>
                        <Grid item xs={6} md={3} lg={3} xl={3} sx={{ px: 1, py: 1 }}>
                          <Field
                            as={TextField}
                            fullWidth
                            id="outlined-number"
                            name={`siblings[${index}].City`}
                            label="City / Town"
                            type="Academic Year"
                            error={touched.siblings?.[index]?.City && Boolean(errors.siblings?.[index]?.City)}
                            helperText={touched.siblings?.[index]?.City && errors.siblings?.[index]?.City}
                            InputLabelProps={{
                              shrink: true,
                            }}
                          />
                        </Grid>
                      </Grid>
                    </CardComponent>
                  </>
                ))}
                <Grid item xs={12}>
                  <Button
                    type="button"
                    variant="contained"
                    color="primary"
                    onClick={() => push({
                      Name: "",
                      SEX: "",
                      Currently_Doing: "",
                      From_This_School: "",
                      Class: "",
                      City: ""
                    })}
                  >
                    Add Sibling
                  </Button>
                </Grid>
              </Grid>
            )}
          </FieldArray>

          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      )}
    </Formik>

  </>

}

export default SiblingDetails
