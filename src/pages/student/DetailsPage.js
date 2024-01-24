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
import { RHFUploadAvatar, FormProvider } from "../../components/hook-form"
import { PATH_DASHBOARD } from '../../routes/paths';
import { fData } from '../../utils/formatNumber';
import ModalDialogue from '../../components/dialogue/ModalComponent';


const SM = "sm"
const LG = "lg"
const MD = "md"
const XL = "xl"
const XS = "xs"

const StudentDocumentPage = ({ isEdit, data }) => {
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();
    const [isOpen, setIsOpen] = useState(false)
    const [fullWidth, setFullWidth] = useState(true)
    const NewUserSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string().required('Email is required').email(),
        phoneNumber: Yup.string().required('Phone number is required'),
        address: Yup.string().required('Address is required'),
        country: Yup.string().required('country is required'),
        company: Yup.string().required('Company is required'),
        state: Yup.string().required('State is required'),
        city: Yup.string().required('City is required'),
        role: Yup.string().required('Role Number is required'),
        avatarUrl: Yup.mixed().test('required', 'Avatar is required', (value) => value !== ''),
    });

    const defaultValues = useMemo(
        () => ({
            name: data?.name || '',
            email: data?.email || '',
            phoneNumber: data?.phoneNumber || '',
            address: data?.address || '',
            country: data?.country || '',
            state: data?.state || '',
            city: data?.city || '',
            zipCode: data?.zipCode || '',
            avatarUrl: data?.avatarUrl || '',
            isVerified: data?.isVerified || true,
            status: data?.status,
            company: data?.company || '',
            role: data?.role || '',
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

    const onSubmit = async () => {
        try {
            await new Promise((resolve) => setTimeout(resolve, 500));
            reset();
            enqueueSnackbar(!isEdit ? 'Create success!' : 'Update success!');
            navigate(PATH_DASHBOARD.user.list);
        } catch (error) {
            console.error(error);
        }
    };

    const handleDrop = useCallback(
        (acceptedFiles) => {
            const file = acceptedFiles[0];

            if (file) {
                setValue(
                    'avatarUrl',
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

            <Box sx={{ my: 1 }} display={"flex"} justifyContent={"end"}>
                <Button sx={{ mx: 1 }} variant='outlined' color='secondary' onClick={() => setIsOpen(true)}>Change Name & DOB</Button>
            </Box>

            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>

                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xl={3} lg={3} md={3} sm={12} xs={12}>

                        <Box sx={{ mb: 5 }}>
                            <RHFUploadAvatar
                                name="avatarUrl"
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
                        <Grid container>
                            <Grid item xs={6} sm={6} md={3} lg={3} xl={3} sx={{ px: 1, py: 2 }}>
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
                            <Grid item xs={6} sm={6} md={3} lg={3} xl={3} sx={{ px: 1, py: 2 }}>
                                <TextField
                                    fullWidth
                                    id="outlined-number"
                                    label="Middle Name"
                                    type="text"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={6} sm={6} md={3} lg={3} xl={3} sx={{ px: 1, py: 2 }}>
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
                            <Grid item xs={6} sm={6} md={3} lg={3} xl={3} sx={{ px: 1, py: 2 }}>
                                <TextField
                                    fullWidth
                                    id="outlined-number"
                                    label="Short Name"
                                    type="text"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={6} sm={6} md={3} lg={3} xl={3} sx={{ px: 1, py: 2 }}>
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
                            <Grid item xs={6} sm={6} md={3} lg={3} xl={3} sx={{ px: 1, py: 2 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={""}
                                        label="Gender"
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
                            <Grid item xs={6} sm={6} md={3} lg={3} xl={3} sx={{ px: 1, py: 2 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Nationality</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={""}
                                        label="Nationality"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        onChange={() => { }}
                                    >
                                        <MenuItem value={"INDIA"}>INDIA</MenuItem>
                                        <MenuItem value={"AUSTRALIA"}>AUSTRALIA</MenuItem>
                                        <MenuItem value={"ENGLAND"}>ENGLAND</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6} sm={6} md={3} lg={3} xl={3} sx={{ px: 1, py: 2 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Blood Group</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={""}
                                        label="Blood Group"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        onChange={() => { }}
                                    >
                                        <MenuItem value={"A+"}>A+</MenuItem>
                                        <MenuItem value={"B+"}>B+</MenuItem>
                                        <MenuItem value={"AB-"}>AB-</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6} sm={6} md={3} lg={3} xl={3} sx={{ px: 1, py: 2 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Religion</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={""}
                                        label="Religion"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        onChange={() => { }}
                                    >
                                        <MenuItem value={"Hindu"}>Hindu</MenuItem>
                                        <MenuItem value={"Muslim"}>Muslim</MenuItem>
                                        <MenuItem value={"Christian"}>Christian</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6} sm={6} md={3} lg={3} xl={3} sx={{ px: 1, py: 2 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Category</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={""}
                                        label="Category"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        onChange={() => { }}
                                    >
                                        <MenuItem value={"MBC"}>MBC</MenuItem>
                                        <MenuItem value={"BC"}>BC</MenuItem>
                                        <MenuItem value={"SC"}>SC</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6} sm={6} md={3} lg={3} xl={3} sx={{ px: 1, py: 2 }}>
                                <TextField
                                    fullWidth
                                    id="outlined-number"
                                    label="Caste"
                                    type="text"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={6} sm={6} md={3} lg={3} xl={3} sx={{ px: 1, py: 2 }}>
                                <TextField
                                    fullWidth
                                    id="outlined-number"
                                    label="Sub Caste"
                                    type="number"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={6} sm={6} md={3} lg={3} xl={3} sx={{ px: 1, py: 2 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Quota</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={""}
                                        label="Quota"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        onChange={() => { }}
                                    >
                                        <MenuItem value={"Defence"}>Defence</MenuItem>
                                       
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6} sm={6} md={3} lg={3} xl={3} sx={{ px: 1, py: 2 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Concession Type</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={""}
                                        label="Concession Type"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        onChange={() => { }}
                                    >
                                        <MenuItem value={"AD HOC Concession"}>AD HOC Concession</MenuItem>
                                      
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6} sm={6} md={3} lg={3} xl={3} sx={{ px: 1, py: 2 }}>
                                <TextField
                                    fullWidth
                                    id="outlined-number"
                                    label="Aadhaar Card No"
                                    type="text"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={6} sm={6} md={3} lg={3} xl={3} sx={{ px: 1, py: 2 }}>
                                <TextField
                                    fullWidth
                                    id="outlined-number"
                                    label="EMIS No"
                                    type="text"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                        </Grid>
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

                <Stack display={"flex"} justifyContent={"center"} alignItems={"center"} sx={{ mt: 3 }} width={"100%"}>
                    <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
                        Submit
                    </LoadingButton>
                </Stack>

            </FormProvider>

        </Page >


    </>

}

export default StudentDocumentPage