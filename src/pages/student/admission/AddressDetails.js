import * as Yup from 'yup';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import { LoadingButton } from '@mui/lab';
import { Box, Button, Card, CardHeader, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Select, Stack, Switch, TextField, Typography } from "@mui/material"
import { RHFUploadAvatar, FormProvider, RHFTextField, RHFSelect } from "../../../components/hook-form"

const AddressDetails = ({ isEdit, data }) => {
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();
    const [checked, setChecked] = useState(false)
    const NewUserSchema = Yup.object().shape({
        Current_Flat_No: Yup.string().required('Flat No is required'),
        Current_Street_Road: Yup.string().required('Street or Road is required'),
        Current_Door_No: Yup.string().required('Door Number is required'),
        Current_Locality: Yup.string().required('Locality is required'),
        Current_Area: Yup.string().required('Area is required'),
        Current_City: Yup.string().required('City is required'),
        Current_Post: Yup.string().required('Post is required'),
        Current_State: Yup.string().required('State is required'),
        Current_PIN_CODE: Yup.string().required('Pincode is required'),
        Permanent_Flat_No: Yup.string().required('Flat No is required'),
        Permanent_Street_Road: Yup.string().required('Street or Road is required'),
        Permanent_Door_No: Yup.string().required('Door Number is required'),
        Permanent_Locality: Yup.string().required('Locality is required'),
        Permanent_Area: Yup.string().required('Area is required'),
        Permanent_City: Yup.string().required('City is required'),
        Permanent_Post: Yup.string().required('Post is required'),
        Permanent_State: Yup.string().required('State is required'),
        Permanent_PIN_CODE: Yup.string().required('Pincode is required'),
    });

    const defaultValues = useMemo(
        () => ({
            Current_Flat_No: data?.Current_Flat_No || '',
            Current_Street_Road: data?.Current_Street_Road || '',
            Current_Door_No: data?.Current_Door_No || '.',
            Current_Locality: data?.Current_Locality || '',
            Current_Area: data?.Current_Area || '',
            Current_City: data?.Current_City || '',
            Current_Post: data?.Current_Post || '',
            Current_State: data?.Current_State || '',
            Current_PIN_CODE: data?.Current_PIN_CODE || '',
            Permanent_Flat_No: data?.Permanent_Flat_No || '',
            Permanent_Street_Road: data?.Permanent_Street_Road || '',
            Permanent_Door_No: data?.Permanent_Door_No || '.',
            Permanent_Locality: data?.Permanent_Locality || '',
            Permanent_Area: data?.Permanent_Area || '',
            Permanent_City: data?.Permanent_City || '',
            Permanent_Post: data?.Permanent_Post || '',
            Permanent_State: data?.Permanent_State || '',
            Permanent_PIN_CODE: data?.Permanent_PIN_CODE || '',

        }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [data]
    );

    const methods = useForm({
        resolver: yupResolver(NewUserSchema),
        defaultValues,
    });

    const {
        reset,
        watch,
        control,
        setValue,
        handleSubmit,
        formState: { isSubmitting },
    } = methods;

    const values = watch();

    useEffect(() => {
        if (isEdit && data) {
            reset(defaultValues);
        }
        if (!isEdit) {
            reset(defaultValues);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isEdit, data]);

    const onSubmit = async (values) => {
        try {
            console.log('form values', values)
            // await new Promise((resolve) => setTimeout(resolve, 500));
            // reset();
            // enqueueSnackbar(!isEdit ? 'Create success!' : 'Update success!');
            // navigate(PATH_DASHBOARD.user.list);
        } catch (error) {
            console.error(error);
        }
    };

    console.log("Values",values)
    return <>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>

            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>


                <Grid item xs={12} md={12} lg={12} xl={12} >
                    <Card style={{ boxShadow: "none" }} sx={{ p: 3 }}>
                        <Typography variant="h6" sx={{ mb: 3 }}>
                            Current Address Details
                        </Typography>
                        <Box
                            sx={{
                                display: 'grid',
                                columnGap: 2,
                                rowGap: 3,
                                gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)', lg: 'repeat(5, 1fr)', xl: 'repeat(5, 1fr)' },
                            }}
                        >

                            <RHFTextField name="Current_Flat_No" label="Flat No" InputLabelProps={{ shrink: true }} />
                            <RHFTextField name="Current_Door_No" label="Door No" InputLabelProps={{ shrink: true }} />
                            <RHFTextField name="Current_Street_Road" label="Street Road" InputLabelProps={{ shrink: true }} />
                            <RHFTextField name="Current_Locality" label="Locality" InputLabelProps={{ shrink: true }} />
                            <RHFTextField name="Current_Area" label="Area" InputLabelProps={{ shrink: true }} />
                            <RHFTextField name="Current_City" label="City / Town" InputLabelProps={{ shrink: true }} />
                            <RHFTextField name="Current_Post" label="Post" InputLabelProps={{ shrink: true }} />
                            <RHFTextField name="Current_State" label="State" InputLabelProps={{ shrink: true }} />
                            <RHFTextField name="Current_PIN_CODE" label="Pincode" InputLabelProps={{ shrink: true }} />
                        </Box>
                    </Card>
                    <Card style={{ boxShadow: "none" }} sx={{ p: 3 }}>
                        <CardHeader style={{ padding: "unset", marginBottom: 15 }} action={<>
                            <FormControlLabel
                                control={<Switch checked={checked} onChange={(e) => {
                                    setChecked(!checked)
                                    console.log("Values",values,e.target.checked)
                                    setValue("Permanent_Flat_No","2838488")
                                    if (e.target.checked) {
                                        setValue("Permanent_Flat_No",values.Current_Flat_No)
                                        setValue("Permanent_Street_Road",values.Current_Street_Road)
                                        setValue("Permanent_Door_No",values.Current_Door_No)
                                        setValue("Permanent_Locality",values.Current_Locality)
                                        setValue("Permanent_Area",values.Current_Area)
                                        setValue("Permanent_City",values.Current_City)
                                        setValue("Permanent_Post",values.Current_Post)
                                        setValue("Permanent_State",values.Current_State)
                                        setValue("Permanent_PIN_CODE",values.Current_PIN_CODE)                                        
                                        
                                    }
                                    else {
                                        setValue("Permanent_Flat_No","")
                                        setValue("Permanent_Street_Road","")
                                        setValue("Permanent_Door_No","")
                                        setValue("Permanent_Locality","")
                                        setValue("Permanent_Area","")
                                        setValue("Permanent_City","")
                                        setValue("Permanent_Post","")
                                        setValue("Permanent_State","")
                                        setValue("Permanent_PIN_CODE","") 
                                    }
                                }} />}
                                label="Same CA"
                            />
                        </>} subheader={""} title={"Permanent Address Details"} />

                        <Box
                            sx={{
                                display: 'grid',
                                columnGap: 2,
                                rowGap: 3,
                                gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)', lg: 'repeat(5, 1fr)', xl: 'repeat(5, 1fr)' },
                            }}
                        >

                            <RHFTextField name="Permanent_Flat_No" label="Flat No" InputLabelProps={{ shrink: true }} />
                            <RHFTextField name="Permanent_Door_No" label="Door No" InputLabelProps={{ shrink: true }} />
                            <RHFTextField name="Permanent_Street_Road" label="Street Road" InputLabelProps={{ shrink: true }} />
                            <RHFTextField name="Permanent_Locality" label="Locality" InputLabelProps={{ shrink: true }} />
                            <RHFTextField name="Permanent_Area" label="Area" InputLabelProps={{ shrink: true }} />
                            <RHFTextField name="Permanent_City" label="City / Town" InputLabelProps={{ shrink: true }} />
                            <RHFTextField name="Permanent_Post" label="Post" InputLabelProps={{ shrink: true }} />
                            <RHFTextField name="Permanent_State" label="State" InputLabelProps={{ shrink: true }} />
                            <RHFTextField name="Permanent_PIN_CODE" label="Pincode" InputLabelProps={{ shrink: true }} />
                        </Box>

                        <Stack alignItems="flex-end" sx={{ mt: 3 }}>
                            <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
                                {!isEdit ? 'Submit' : 'Save Changes'}
                            </LoadingButton>
                        </Stack>
                    </Card>
                </Grid>
            </Grid>

        </FormProvider>
    </>


}

export default AddressDetails