// @mui
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';
// hooks
import useSettings from '../../hooks/useSettings';
// components
import Page from '../../components/Page';
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';
import ProfileForm from './ProfileForm';

export default function ProfilePage() {
  const { themeStretch } = useSettings();

  return (
    <Page title="User : Profile">

      <HeaderBreadcrumbs
        heading="User"
        links={[
          { name: 'User', href: "" },
          { name: 'Profile' },
        ]}
        action={
          <>

          </>
        }
      />
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <ProfileForm/>
      </Container>
    </Page>
  );
}
