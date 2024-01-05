import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Button, Container, Link, Typography } from '@mui/material';
// layouts
import LogoOnlyLayout from '../../layouts/LogoOnlyLayout';
// routes
import { PATH_AUTH } from '../../routes/paths';
// components
import Page from '../../components/Page';
// sections
import { ResetPasswordForm } from '../../sections/auth/reset-password';
// assets
import { SentIcon } from '../../assets';
import { VerifyCodeForm } from '../../sections/auth/verify-code';
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  minHeight: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function ResetPassword() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  return (
    <Page title="Reset Password" sx={{ height: 1 }}>
      <RootStyle>
        {/* <LogoOnlyLayout /> */}

        <Container>
          <Box sx={{ maxWidth: 480, mx: 'auto' }}>
            {!sent ? (
              <>
                <Typography variant="h3" paragraph>
                  Forgot your password?
                </Typography>
                <Typography sx={{ color: 'text.secondary', mb: 5 }}>
                  Please enter the email address associated with your account and We have emailed a 6-digit confirmation code.
                </Typography>

                <ResetPasswordForm onSent={() => setSent(true)} onGetEmail={(value) => setEmail(value)} />

                <Button fullWidth size="large" component={RouterLink} to={PATH_AUTH.login} sx={{ mt: 1 }}>
                  Back
                </Button>
              </>
            ) : (
              <Box sx={{ maxWidth: 480, mx: 'auto' }}>
                <Button
                  size="small"
                  // component={RouterLink}
                  // to={PATH_AUTH.resetPassword}
                  onClick={() => setSent(false)}
                  startIcon={<Iconify icon={'eva:arrow-ios-back-fill'} width={20} height={20} />}
                  sx={{ mb: 3 }}
                >
                  Back
                </Button>
    
                <Typography variant="h3" paragraph>
                  Please check your email!
                </Typography>
                <Typography sx={{ color: 'text.secondary' }}>
                  We have emailed a 6-digit confirmation code to acb@domain, please enter the code in below box to verify
                  your email.
                </Typography>
    
                <Box sx={{ mt: 5, mb: 3 }}>
                  <VerifyCodeForm />
                </Box>
    
                <Typography variant="body2" align="center">
                  Don’t have a code? &nbsp;
                  <Link variant="subtitle2" underline="none" onClick={() => {}}>
                    Resend code
                  </Link>
                </Typography>
              </Box>
            )}
          </Box>
        </Container>
      </RootStyle>
    </Page>
  );
}
