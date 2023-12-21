// components
import SvgIconStyle from '../../../components/SvgIconStyle';

// ----------------------------------------------------------------------

const getIcon = (name) => <SvgIconStyle src={`/icons/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const ICONS = {
  user: getIcon('ic_user'),
  ecommerce: getIcon('ic_ecommerce'),
  analytics: getIcon('ic_analytics'),
  dashboard: getIcon('ic_dashboard'),
};

const sidebarConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    subheader: 'general',
    items: [
      { title: 'One', path: '/dashboard/one', icon: ICONS.dashboard },
      { title: 'Two', path: '/dashboard/two', icon: ICONS.dashboard },
      { title: 'Three', path: '/dashboard/three', icon: ICONS.dashboard },
    ],
  },

  // MANAGEMENT
  // ----------------------------------------------------------------------
  {
    subheader: 'management',
    items: [
      {
        title: 'user',
        path: '/dashboard/user',
        icon: ICONS.user,
        children: [
          {
            title: 'Four',
            path: '/dashboard/Four',
            children: [
              {
                title: 'Four-One',
                path: '/dashboard/Four',
                children: [
                  { title: 'Four-One-One', path: '/dashboard/Four' },
                  { title: 'Four-One-Two', path: '/dashboard/Four' },
                  { title: 'Four-One-Three', path: '/dashboard/Four' },
                ],
              },
              { title: 'Four-Two', path: '/dashboard/Four' },
              { title: 'Four-Three', path: '/dashboard/Four' },
            ],
          },
          { title: 'Five', path: '/dashboard/user/five' },
          { title: 'Six', path: '/dashboard/user/six' },
        ],
      },
    ],
  },
];

export default sidebarConfig;
