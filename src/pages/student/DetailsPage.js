import * as Yup from 'yup';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import { LoadingButton } from '@mui/lab';
import { Box, Button, Card, FormControl, Grid, InputLabel, MenuItem, Select, Stack, TextField, Typography } from "@mui/material"
import HeaderBreadcrumbs from "../../components/HeaderBreadcrumbs"
import Page from "../../components/Page"
import CardComponent from "../../components/card/CardComponent"
import { RHFUploadAvatar, FormProvider, RHFTextField, RHFSelect } from "../../components/hook-form"
import { PATH_DASHBOARD } from '../../routes/paths';
import { fData } from '../../utils/formatNumber';
import ModalDialogue from '../../components/dialogue/ModalComponent';


const SM = "sm"
const LG = "lg"
const MD = "md"
const XL = "xl"
const XS = "xs"

const StudentDetailsPage = ({ isEdit, data }) => {
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();
    const [isOpen, setIsOpen] = useState(false)
    const [fullWidth, setFullWidth] = useState(true)
    const NewUserSchema = Yup.object().shape({
        First_Name: Yup.string().required('Name is required'),
        Last_Name: Yup.string().required('Last Name is required'),
        Middle_Name: Yup.string().required('Middle Name is required'),
        Short_Name: Yup.string().required('Short Name is required'),
        Date_Of_Birth: Yup.string().required('Date of birth is required'),
        Gender: Yup.string().required('Gender is required'),
        Nationality: Yup.string().required('Nationality is required'),
        Blood_Group: Yup.string().required('Blood group is required'),
        Religion: Yup.string().required('Religion Number is required'),
        Category: Yup.string().required('Category number is required'),
        Caste: Yup.string().required('Caste is required'),
        Sub_Caste: Yup.string().required('Sub caste is required'),
        Quote: Yup.string().required('Quote is required'),
        Concession_Type: Yup.string().required('Concession type is required'),
        Aadhaar_Card_No: Yup.string().required('Aadhaar card number is required'),
        EMIS_NO: Yup.string().required('EMIs No Number is required'),
        Avatar_Url: Yup.mixed().test('required', 'Avatar is required', (value) => value !== ''),
    });

    const defaultValues = useMemo(
        () => ({
            First_Name: data?.First_Name || 'Mohanraj',
            Last_Name: data?.Last_Name || 'Selvaraj',
            Middle_Name: data?.Middle_Name || '.',
            Short_Name: data?.Short_Name || 'Mohanraj Selvaraj',
            Date_Of_Birth: data?.Date_Of_Birth || '1997-07-27',
            Gender: data?.Gender || 'MALE',
            Nationality: data?.Nationality || 'INDIA',
            Blood_Group: data?.Blood_Group || 'B+',
            Religion: data?.Religion || 'Hindu',
            Category: data?.Category || 'MBC',
            Caste: data?.Caste || 'Vanniyar',
            Sub_Caste: data?.Sub_Caste || 'Padaiyatchi',
            Quote: data?.Quote || 'Defence',
            Concession_Type: data?.Concession_Type || 'AD HOC Concession',
            Aadhaar_Card_No: data?.Aadhaar_Card_No || '918240099745',
            EMIS_NO: data?.EMIS_NO || '123455',
            Avatar_Url: data?.avatarUrl || '',

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

    const handleDrop = useCallback(
        (acceptedFiles) => {
            const file = acceptedFiles[0];

            if (file) {
                setValue(
                    'Avatar_Url',
                    Object.assign(file, {
                        preview: URL.createObjectURL(file),
                    })
                );
            }
        },
        [setValue]
    );

    return <>
        <Page title="Student : Details">

            <HeaderBreadcrumbs
                heading="Student Details"
                links={[
                    { name: 'Student', href: "" },
                    { name: 'Details' },
                ]}
                action={
                    <>

                    </>
                }
            />

            {/* <Box sx={{ my: 1 }} display={"flex"} justifyContent={"end"}>
                <Button sx={{ mx: 1 }} variant='outlined' color='secondary' onClick={() => setIsOpen(true)}>Change Name & DOB</Button>
            </Box> */}

            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>

                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xl={3} lg={3} md={3} sm={12} xs={12} display={"flex"} justifyContent={"center"} alignItems={"center"}>

                        <Box>
                            <RHFUploadAvatar
                                name="Avatar_Url"
                                accept="image/*"
                                maxSize={3145728}
                                onDrop={handleDrop}
                                helperText={
                                    <Typography
                                        variant="caption"
                                        sx={{
                                            mt: 2,
                                            mx: 'auto',
                                            display: 'block',
                                            textAlign: 'center',
                                            color: 'text.secondary',
                                        }}
                                    >
                                        Allowed *.jpeg, *.jpg, *.png, *.gif
                                        <br /> max size of {fData(3145728)}
                                    </Typography>
                                }
                            />
                        </Box>


                    </Grid>
                    <Grid item xs={12} md={9} lg={9} xl={9} >
                        <Card style={{boxShadow:"none"}} sx={{ p: 3 }}>
                            <Box
                                sx={{
                                    display: 'grid',
                                    columnGap: 2,
                                    rowGap: 3,
                                    gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(3, 1fr)', xl: 'repeat(4, 1fr)' },
                                }}
                            >
                                <RHFTextField name="First_Name" label="First Name" InputLabelProps={{ shrink: true }} />
                                <RHFTextField name="Middle_Name" label="Middle Name" InputLabelProps={{ shrink: true }} />
                                <RHFTextField name="Last_Name" label="Last Name" InputLabelProps={{ shrink: true }} />
                                <RHFTextField name="Short_Name" label="Short Name" InputLabelProps={{ shrink: true }} />
                                <RHFTextField name="Date_Of_Birth" type="date" label="Date of Birth" InputLabelProps={{ shrink: true }} />
                                <RHFSelect name="Gender" label="Gender" placeholder="Country" InputLabelProps={{
                                    shrink: true,
                                }}>
                                    <option value="" />
                                    <option value={"MALE"}>MALE</option>
                                    <option value={"FEMALE"}>FEMALE</option>
                                    <option value={"OTHERS"}>OTHERS</option>
                                </RHFSelect>
                                <RHFSelect name="Nationality" label="Nationality" placeholder="Nationality" InputLabelProps={{
                                    shrink: true,
                                }}>
                                    <option value="" />
                                    <option value={"INDIA"}>INDIA</option>
                                    <option value={"AUSTRALIA"}>AUSTRALIA</option>
                                    <option value={"ENGLAND"}>ENGLAND</option>
                                </RHFSelect>
                                <RHFSelect name="Blood_Group" label="Blood Group" placeholder="Blood Group" InputLabelProps={{
                                    shrink: true,
                                }}>
                                    <option value="" />
                                    <option value={"A+"}>A+</option>
                                    <option value={"B+"}>B+</option>
                                    <option value={"AB-"}>AB-</option>
                                </RHFSelect>
                                <RHFSelect name="Religion" label="Religion" placeholder="Religion" InputLabelProps={{
                                    shrink: true,
                                }}>
                                    <option value="" />
                                    <option value={"Hindu"}>Hindu</option>
                                    <option value={"Muslim"}>Muslim</option>
                                    <option value={"Christian"}>Christian</option>
                                </RHFSelect>
                                <RHFSelect name="Category" label="Category" placeholder="Category" InputLabelProps={{
                                    shrink: true,
                                }}>
                                    <option value="" />
                                    <option value={"MBC"}>MBC</option>
                                    <option value={"BC"}>BC</option>
                                    <option value={"SC"}>SC</option>
                                </RHFSelect>
                                <RHFTextField name="Caste" label="Caste" InputLabelProps={{shrink:true}} />
                                <RHFTextField name="Sub_Caste" label="Sub Caste" InputLabelProps={{shrink:true}} />
                                <RHFSelect name="Quote" label="Quote" placeholder="Quote" InputLabelProps={{
                                    shrink: true,
                                }}>
                                    <option value="" />
                                    <option value={"Defence"}>Defence</option>
                                </RHFSelect>
                                <RHFSelect name="Concession_Type" label="Concession Type" placeholder="Concession Type" InputLabelProps={{
                                    shrink: true,
                                }}>
                                    <option value="" />
                                    <option value={"AD HOC Concession"}>AD HOC Concession</option>
                                </RHFSelect>
                                <RHFTextField name="Aadhaar_Card_No" label="Aadhaar Card No" InputLabelProps={{shrink:true}} />
                                <RHFTextField name="EMIS_NO" label="EMIS NO" InputLabelProps={{shrink:true}} />
                            </Box>

                            <Stack alignItems="flex-end" sx={{ mt: 3 }}>
                                <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
                                    {!isEdit ? 'Submit' : 'Save Changes'}
                                </LoadingButton>
                            </Stack>
                        </Card>
                    </Grid>
                </Grid>

                <ModalDialogue isOpen={isOpen}
                    fullWidth={fullWidth}
                    maxWidth={SM}
                    modalClose={() => setIsOpen(false)}
                    dialogTitle={"Name & DOB Change"}
                    dialogContent={"The name and date of birth changes"}
                    modalSubmit={() => setIsOpen(false)}
                >

                    <Grid container>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ px: 1, py: 2 }}>
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
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ px: 1, py: 2 }}>
                            <TextField
                                fullWidth
                                id="outlined-number"
                                label="Date of Birth"
                                type="date"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>

                    </Grid>

                </ModalDialogue>

              

            </FormProvider>

        </Page >


    </>

}

export default StudentDetailsPage