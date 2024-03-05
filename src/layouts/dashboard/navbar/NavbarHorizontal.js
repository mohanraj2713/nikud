import { memo, useEffect, useState } from 'react';
// @mui
import { styled } from '@mui/material/styles';
import { Container, AppBar } from '@mui/material';
// config
import { HEADER } from '../../../config';
// components
import { NavSectionHorizontal } from '../../../components/nav-section';
//
import navConfig from './NavConfig';

// ----------------------------------------------------------------------

const RootStyle = styled(AppBar)(({ theme }) => ({
  transition: theme.transitions.create('top', {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  width: '100%',
  position: 'fixed',
  zIndex: theme.zIndex.appBar,
  padding: theme.spacing(1, 0),
  boxShadow: theme.customShadows.z8,
  top: HEADER.DASHBOARD_DESKTOP_OFFSET_HEIGHT,
  backgroundColor: theme.palette.background.default,
}));

// ----------------------------------------------------------------------

function NavbarHorizontal() {
  const [routes, setRoutes] = useState([])
  useEffect(() => {
    const rName = []
    const rou = []
    const permission = localStorage.getItem("permission") ? JSON.parse(localStorage.getItem("permission")) : ""
    permission.forEach((r, index) => {
      if (!r.MethodName && !rName.includes(r.MenuHeadingID)) {
        rou.push({
          title: r.MenuHeading,
          path: r.PageLink
        })
        rName.push(r.MenuHeadingID)
      } else if (rName.includes(r.MenuHeadingID) && r.MethodName) {
        const idx = rName.findIndex(item => item === r.MenuHeadingID)
        if (!rou[idx].children) {
          rou[idx].children = []
        }
        rou[idx].children.push(
          {
            title: r.MethodName.replace(/(?<!\s)([A-Z])/g, ' $1'),
            path: r.PageLink,
          },
        )

      }
      else {
        const idx = rName.findIndex(item => item === r.MenuHeadingID)
        if (!rou[idx].children) {
          rou[idx].children = []
        }
        rou[idx].children.push(
          {
            title: rou[idx].title,
            path: r.PageLink,
          },
        )
      }
    })

    const newRoute = [
      {
        subheader: 'management',
        items: rou
      }
    ]

    setRoutes(newRoute)
  }, [])

  return (
    <RootStyle>
      <Container maxWidth={false}>
        <NavSectionHorizontal navConfig={routes} />
      </Container>
    </RootStyle>
  );
}

export default memo(NavbarHorizontal);
