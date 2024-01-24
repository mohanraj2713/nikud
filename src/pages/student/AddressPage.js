import * as Yup from 'yup';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import { LoadingButton } from '@mui/lab';
import { Box, Button, Card, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Select, Stack, Switch, TextField, Typography } from "@mui/material"
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

const StudentAddressPage = ({ data, isEdit }) => {
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();
    const [checked, setChecked] = useState(false)
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


    return <>
        <Page title="Student : Address">

            <HeaderBreadcrumbs
                heading="Address"
                links={[
                    { name: 'Student', href: "" },
                    { name: 'Address' },
                ]}
                action={
                    <>

                    </>
                }
            />

            <Box sx={{ my: 1 }} display={"flex"} justifyContent={"end"}>
                <Button sx={{ mx: 1 }} variant='outlined' color='primary' onClick={() => {}}>Submit</Button>
            </Box>

            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>

                <CardComponent title={"Address Details"} shadow={"none"} doSomething={<>
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


            </FormProvider>

        </Page >
    </>

}

export default StudentAddressPage

const AddressForm = () => {

    return <>
        <Grid container>
            <Grid item xs={6} md={3} lg={3} xl={3} sx={{ px: 1, py: 1 }}>
                <TextField
                    fullWidth
                    id="outlined-number"
                    label="Flat"
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
                    label="Block"
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
                    label="Appartment Name"
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
                    label="Street"
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
                    label="Location"
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
                    label="Landmark"
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
                    label="Country"
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
