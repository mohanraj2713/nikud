import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
// form
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { LoadingButton } from '@mui/lab';
import { Box, Card, Grid, Stack, Switch, Typography, FormControlLabel, Button } from '@mui/material';
// utils
import { fData } from '../../utils/formatNumber';

// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// _mock
import { countries } from '../../_mock';
// components
import Label from '../../components/Label';
import { FormProvider, RHFSelect, RHFSwitch, RHFTextField, RHFUploadAvatar } from '../../components/hook-form';
import ModalDialogue from '../../components/dialogue/ModalComponent';
import CustomCaptchaForm from '../../components/captcha/CustomCaptchaForm';

// ----------------------------------------------------------------------

// UserNewEditForm.propTypes = {
//   isEdit: PropTypes.bool,
//   currentUser: PropTypes.object,
// };

const SM = "sm"
const LG = "lg"
const MD = "md"
const XL = "xl"
const XS = "xs"

const ProfileForm = ({ isEdit, currentUser }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false)
  const [fullWidth, setFullWidth] = useState(true)
  const { enqueueSnackbar } = useSnackbar();

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
      name: currentUser?.name || '',
      email: currentUser?.email || '',
      phoneNumber: currentUser?.phoneNumber || '',
      address: currentUser?.address || '',
      country: currentUser?.country || '',
      state: currentUser?.state || '',
      city: currentUser?.city || '',
      zipCode: currentUser?.zipCode || '',
      avatarUrl: currentUser?.avatarUrl || '',
      isVerified: currentUser?.isVerified || true,
      status: currentUser?.status,
      company: currentUser?.company || '',
      role: currentUser?.role || '',
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentUser]
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
    if (isEdit && currentUser) {
      reset(defaultValues);
    }
    if (!isEdit) {
      reset(defaultValues);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEdit, currentUser]);

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

  return (<>
    <Box sx={{ my: 1 }} display={"flex"} justifyContent={"end"}>
      <Button sx={{ mx: 1 }} variant='outlined' color='error' onClick={() => setIsOpen(true)}>Forgot Password</Button>
      <Button sx={{ mx: 1 }} variant='outlined' color='error' onClick={() => setIsOpen(true)}>Change Password</Button>
      <Button sx={{ mx: 1 }} variant='outlined' color='error' onClick={() => setIsOpen(true)}>Reset Password</Button>
    </Box>
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3} justifyContent={"center"} display={"flex"}>
        <Grid item xs={12} md={5}>
          <Card sx={{ py: 10, px: 3 }}>
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

            {/* <RHFTextField name="name" label="Full Name" />
            <RHFTextField name="email" label="Email Address" />
            <RHFTextField name="phoneNumber" label="Phone Number" /> */}
            <Box
              sx={{
                display: 'grid',
                columnGap: 2,
                rowGap: 3,
                gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' },
              }}
            >
              <RHFTextField name="name" label="Full Name" />
              <RHFTextField name="email" label="Email Address" />
              <RHFTextField name="phoneNumber" label="Phone Number" />
            </Box>
            <Stack alignItems="flex-center" sx={{ mt: 3 }}>
              <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
                Submit
              </LoadingButton>
            </Stack>
          </Card>
        </Grid>


      </Grid>
    </FormProvider>

    <ModalDialogue isOpen={isOpen}
      fullWidth={fullWidth}
      maxWidth={SM}
      modalClose={() => setIsOpen(false)}
      dialogTitle={"Password Change"}
      dialogContent={"The password have been changed or forgot"}
      modalSubmit={() => setIsOpen(false)}
    >

      <CustomCaptchaForm />

    </ModalDialogue>

  </>
  );
}


export default ProfileForm