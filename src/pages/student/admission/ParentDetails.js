

import * as Yup from 'yup';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import { LoadingButton } from '@mui/lab';
import { Box, Button, Card, Divider, FormControl, Grid, InputLabel, MenuItem, Select, Stack, TextField, Typography } from "@mui/material"
import { RHFUploadAvatar, FormProvider, RHFTextField, RHFSelect } from "../../../components/hook-form"

const ParentDetails = ({ isEdit, data }) => {
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();
    const NewUserSchema = Yup.object().shape({
        First_Name: Yup.string().required('Name is required'),
        Mobile_Number: Yup.string().required('Mobile Number is required'),      
        Email_Id: Yup.string().required('Email is required'),
        Qualification: Yup.string().required('Qualification is required'),
        Profession: Yup.string().required('Profession is required'),
        Designation: Yup.string().required('Designation is required'),
        Organization: Yup.string().required('Organization is required'),
        Work_Phone_Number: Yup.string().required('Work_Phone_Number is required'),
        Monthly_Income: Yup.string().required('Blood Organization is required'),
      
    });

    const defaultValues = useMemo(
        () => ({
            First_Name: data?.First_Name || '',
            Mobile_Number: data?.Mobile_Number || '.',
            Email_Id: data?.Email_Id || '',
            Qualification: data?.Qualification || '',
            Profession: data?.Profession || '',
            Designation: data?.Designation || '',
            Organization: data?.Organization || '',
            Work_Phone_Number: data?.Work_Phone_Number || '',
            Monthly_Income: data?.Monthly_Income || ''
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
                            Parent Details
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
                            <RHFTextField name="Mobile_Number" label="Mobile Number" InputLabelProps={{ shrink: true }} />
                            <RHFTextField name="Email_Id" label="Email Id" InputLabelProps={{ shrink: true }} />
                            <RHFSelect
                                name="Qualification"
                                label="Qualification"
                                InputLabelProps={{ shrink: true }}
                                SelectProps={{ native: false, sx: { textTransform: 'capitalize' } }}
                                // sx={{ maxWidth: { md: 160 } }}
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
                            </RHFSelect>
                            <RHFTextField name="Profession" label="Profession" InputLabelProps={{ shrink: true }} />
                            <RHFTextField name="Designation" label="Designation" InputLabelProps={{ shrink: true }} />
                            <RHFTextField name="Organization" label="Organization" InputLabelProps={{ shrink: true }} />
                            <RHFTextField name="Work_Phone_Number" label="Work_Phone_Number" InputLabelProps={{ shrink: true }} />
                            <RHFTextField name="Monthly_Income" label="Monthly_Income" InputLabelProps={{ shrink: true }} />
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

export default ParentDetails