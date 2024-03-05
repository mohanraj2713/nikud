import * as Yup from 'yup';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import { LoadingButton } from '@mui/lab';
import { Box, Button, Card, FormControl, Grid, InputLabel, MenuItem, Select, Stack, TextField, Typography } from "@mui/material"
import { RHFUploadAvatar, FormProvider, RHFTextField, RHFSelect } from "../../../components/hook-form"

const StudentDetails = ({ isEdit, data }) => {
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();
    const NewUserSchema = Yup.object().shape({
        APP_ID: Yup.string().required('Name is required'),
        AY: Yup.string().required('AY is required'),
        APP_NO: Yup.string().required('Middle Name is required'),
        Short_Name: Yup.string().required('Short Name is required'),
        Class: Yup.string().required('Class is required'),
        Group: Yup.string().required('Group is required'),
        L2: Yup.string().required('L2 is required'),
        L3: Yup.string().required('Blood group is required'),
        First_Name: Yup.string().required('First_Name Number is required'),
        Last_Name: Yup.string().required('Last_Name number is required'),
        Age: Yup.string().required('Age is required'),
        Date_of_Birth: Yup.string().required('Sub caste is required'),

    });

    const defaultValues = useMemo(
        () => ({
            APP_ID: data?.APP_ID || '',
            AY: data?.AY || '',
            APP_NO: data?.APP_NO || '.',
            Class: data?.Class || '',
            Group: data?.Group || '',
            L2: data?.L2 || '',
            L3: data?.L3 || '',
            First_Name: data?.First_Name || '',
            Last_Name: data?.Last_Name || '',
            Age: data?.Age || '',
            Date_of_Birth: data?.Date_of_Birth || ''
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

    return <>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>

            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                <Grid item xs={12} md={12} lg={12} xl={12} >
                    <Card style={{ boxShadow: "none" }} sx={{ p: 3 }}>
                        <Typography variant="h6" sx={{ mb: 3 }}>
                            Basic Admission Details
                        </Typography>
                        <Box
                            sx={{
                                display: 'grid',
                                columnGap: 2,
                                rowGap: 3,
                                gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)', lg: 'repeat(5, 1fr)', xl: 'repeat(5, 1fr)' },
                            }}
                        >

                            <RHFTextField name="APP_ID" label="App Id" InputLabelProps={{ shrink: true }} />
                            <RHFTextField name="APP_NO" label="App No" InputLabelProps={{ shrink: true }} />
                            <RHFTextField name="AY" label="AY" InputLabelProps={{ shrink: true }} type={"date"} />
                            <RHFTextField name="Class" type="date" label="Class" InputLabelProps={{ shrink: true }} />
                            <RHFTextField name="Group" type="date" label="Group" InputLabelProps={{ shrink: true }} />
                            <RHFTextField name="L2" type="date" label="L2" InputLabelProps={{ shrink: true }} />
                            <RHFTextField name="L3" type="date" label="L3" InputLabelProps={{ shrink: true }} />
                        </Box>
                    </Card>
                    <Card style={{ boxShadow: "none" }} sx={{ p: 3 }}>
                        <Typography variant="h6" sx={{ mb: 3 }}>
                            Student Details
                        </Typography>
                        <Box
                            sx={{
                                display: 'grid',
                                columnGap: 2,
                                rowGap: 3,
                                gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)', lg: 'repeat(5, 1fr)', xl: 'repeat(5, 1fr)' },
                            }}
                        >

                            <RHFTextField name="First_Name" label="First Name" InputLabelProps={{ shrink: true }} />
                            <RHFTextField name="Last_Name" label="Last Name" InputLabelProps={{ shrink: true }} />
                            <RHFTextField name="Age" label="Age" InputLabelProps={{ shrink: true }} type={"number"} />
                            <RHFTextField name="Date_of_Birth" type="date" label="Date of Birth" InputLabelProps={{ shrink: true }} />
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

export default StudentDetails