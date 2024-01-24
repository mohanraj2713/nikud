import { Suspense, lazy } from 'react';
import { Navigate, useLocation, useRoutes } from 'react-router-dom';
// layouts
import LogoOnlyLayout from '../layouts/LogoOnlyLayout';
import DashboardLayout from '../layouts/dashboard';
// guards
import AuthGuard from '../guards/AuthGuard';
import GuestGuard from '../guards/GuestGuard';
// import RoleBasedGuard from '../guards/RoleBasedGuard';
// config
import { PATH_AFTER_LOGIN } from '../config';
// components
import LoadingScreen from '../components/LoadingScreen';


// ----------------------------------------------------------------------

const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();

  return (
    <Suspense fallback={<LoadingScreen isDashboard={pathname.includes('/dashboard')} />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: 'auth',
      children: [
        {
          path: 'login',
          element: (
            <GuestGuard>
              <Login />
            </GuestGuard>
          ),
        },
        {
          path: 'register',
          element: (
            <GuestGuard>
              <Register />
            </GuestGuard>
          ),
        },
        { path: 'login-unprotected', element: <Login /> },
        { path: 'register-unprotected', element: <Register /> },
        { path: 'reset-password', element: <ResetPassword /> },
        { path: 'verify', element: <VerifyCode /> },
      ],
    },

    // Dashboard Routes
    {
      path: 'dashboard',
      element: (
        <AuthGuard>
          <DashboardLayout />
        </AuthGuard>
      ),
      children: [
        { element: <Navigate to={PATH_AFTER_LOGIN} replace />, index: true },
        { path: 'app', element: <GeneralApp /> },
        { path: 'one', element: <DemoPage /> },
        { path: 'two', element: <GeneralApp /> },
      ],
    },
    {
      path: 'user',
      element: (
        <AuthGuard>
          <DashboardLayout />
        </AuthGuard>
      ),
      children: [
        { element: <Navigate to={PATH_AFTER_LOGIN} replace />, index: true },
        { path: 'profile', element: <Profile /> },
      ],
    },
    {
      path: 'student',
      element: (
        <AuthGuard>
          <DashboardLayout />
        </AuthGuard>
      ),
      children: [
        { element: <Navigate to={PATH_AFTER_LOGIN} replace />, index: true },
        { path: 'admission', element: <StudentAdmission /> },
        { path: 'address', element: <StudentAddress /> },
        { path: 'attendance', element: <StudentAttendance /> },
        { path: 'contact', element: <StudentContact /> },
        { path: 'details', element: <StudentDetails /> },
        { path: 'document', element: <StudentDocument /> },
        { path: 'family', element: <StudentFamily /> },
        { path: 'health', element: <StudentHealth /> },
        { path: 'id', element: <StudentID /> },
      ],
    },
    // Main Routes
    {
      path: '*',
      element: <LogoOnlyLayout />,
      children: [
        { path: 'coming-soon', element: <ComingSoon /> },
        { path: 'maintenance', element: <Maintenance /> },
        { path: '500', element: <Page500 /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" replace /> },
      ],
    },
    { path: '/', element: <Navigate to="/auth/login" replace /> },
  ]);
}

// AUTHENTICATION
const Login = Loadable(lazy(() => import('../pages/auth/Login')));
const Register = Loadable(lazy(() => import('../pages/auth/Register')));
const ResetPassword = Loadable(lazy(() => import('../pages/auth/ResetPassword')));
const VerifyCode = Loadable(lazy(() => import('../pages/auth/VerifyCode')));

// DASHBOARD

// GENERAL
const GeneralApp = Loadable(lazy(() => import('../pages/dashboard/GeneralApp')));
const DemoPage = Loadable(lazy(() => import('../pages/dashboard/DemoPage')));

// MAIN
const ComingSoon = Loadable(lazy(() => import('../pages/ComingSoon')));
const Maintenance = Loadable(lazy(() => import('../pages/Maintenance')));
const Page500 = Loadable(lazy(() => import('../pages/Page500')));
const NotFound = Loadable(lazy(() => import('../pages/Page404')));


// USER
const Profile = Loadable(lazy(() => import('../pages/user/ProfilePage')))

// STUDENT

const StudentAdmission = Loadable(lazy(() => import('../pages/student/AdmissionPage')))
const StudentDetails = Loadable(lazy(() => import('../pages/student/DetailsPage')))
const StudentAddress = Loadable(lazy(() => import('../pages/student/AddressPage')))
const StudentAttendance = Loadable(lazy(() => import('../pages/student/AttendancePage')))
const StudentContact = Loadable(lazy(() => import('../pages/student/ContactPage')))
const StudentDocument = Loadable(lazy(() => import('../pages/student/DocumentPage')))
const StudentFamily = Loadable(lazy(() => import('../pages/student/FamilyPage')))
const StudentHealth = Loadable(lazy(() => import('../pages/student/HealthPage')))
const StudentID = Loadable(lazy(() => import('../pages/student/IDPage')))

