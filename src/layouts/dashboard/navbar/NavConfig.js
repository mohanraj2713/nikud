// // routes
// import { PATH_DASHBOARD } from '../../../routes/paths';
// // components
// import Label from '../../../components/Label';
// import SvgIconStyle from '../../../components/SvgIconStyle';

// // ----------------------------------------------------------------------

// const getIcon = (name) => <SvgIconStyle src={`/icons/${name}.svg`} sx={{ width: 1, height: 1 }} />;

// const ICONS = {
//   blog: getIcon('ic_blog'),
//   cart: getIcon('ic_cart'),
//   chat: getIcon('ic_chat'),
//   mail: getIcon('ic_mail'),
//   user: getIcon('ic_user'),
//   kanban: getIcon('ic_kanban'),
//   banking: getIcon('ic_banking'),
//   booking: getIcon('ic_booking'),
//   invoice: getIcon('ic_invoice'),
//   calendar: getIcon('ic_calendar'),
//   ecommerce: getIcon('ic_ecommerce'),
//   analytics: getIcon('ic_analytics'),
//   dashboard: getIcon('ic_dashboard'),
// };

// const navConfig = [
//   // GENERAL
//   // ----------------------------------------------------------------------
//   {
//     subheader: 'general',
//     items: [
//       { title: 'app', path: PATH_DASHBOARD.general.app, icon: ICONS.dashboard },
//       { title: 'e-commerce', path: PATH_DASHBOARD.general.ecommerce, icon: ICONS.ecommerce },
//       { title: 'analytics', path: PATH_DASHBOARD.general.analytics, icon: ICONS.analytics },
//       { title: 'banking', path: PATH_DASHBOARD.general.banking, icon: ICONS.banking },
//       { title: 'booking', path: PATH_DASHBOARD.general.booking, icon: ICONS.booking },
//     ],
//   },

//   // MANAGEMENT
//   // ----------------------------------------------------------------------
//   {
//     subheader: 'management',
//     items: [
//       // USER
//       {
//         title: 'user',
//         path: PATH_DASHBOARD.user.root,
//         icon: ICONS.user,
//         children: [
//           { title: 'profile', path: PATH_DASHBOARD.user.profile },
//           { title: 'cards', path: PATH_DASHBOARD.user.cards },
//           { title: 'list', path: PATH_DASHBOARD.user.list },
//           { title: 'create', path: PATH_DASHBOARD.user.new },
//           { title: 'edit', path: PATH_DASHBOARD.user.demoEdit },
//           { title: 'account', path: PATH_DASHBOARD.user.account },
//         ],
//       },

//       // E-COMMERCE
//       {
//         title: 'e-commerce',
//         path: PATH_DASHBOARD.eCommerce.root,
//         icon: ICONS.cart,
//         children: [
//           { title: 'shop', path: PATH_DASHBOARD.eCommerce.shop },
//           { title: 'product', path: PATH_DASHBOARD.eCommerce.demoView },
//           { title: 'list', path: PATH_DASHBOARD.eCommerce.list },
//           { title: 'create', path: PATH_DASHBOARD.eCommerce.new },
//           { title: 'edit', path: PATH_DASHBOARD.eCommerce.demoEdit },
//           { title: 'checkout', path: PATH_DASHBOARD.eCommerce.checkout },
//         ],
//       },

//       // INVOICE
//       {
//         title: 'invoice',
//         path: PATH_DASHBOARD.invoice.root,
//         icon: ICONS.invoice,
//         children: [
//           { title: 'list', path: PATH_DASHBOARD.invoice.list },
//           { title: 'details', path: PATH_DASHBOARD.invoice.demoView },
//           { title: 'create', path: PATH_DASHBOARD.invoice.new },
//           { title: 'edit', path: PATH_DASHBOARD.invoice.demoEdit },
//         ],
//       },

//       // BLOG
//       {
//         title: 'blog',
//         path: PATH_DASHBOARD.blog.root,
//         icon: ICONS.blog,
//         children: [
//           { title: 'posts', path: PATH_DASHBOARD.blog.posts },
//           { title: 'post', path: PATH_DASHBOARD.blog.demoView },
//           { title: 'create', path: PATH_DASHBOARD.blog.new },
//         ],
//       },
//     ],
//   },

//   // APP
//   // ----------------------------------------------------------------------
//   {
//     subheader: 'app',
//     items: [
//       {
//         title: 'mail',
//         path: PATH_DASHBOARD.mail.root,
//         icon: ICONS.mail,
//         info: (
//           <Label variant="outlined" color="error">
//             +
//           </Label>
//         ),
//       },
//       { title: 'chat', path: PATH_DASHBOARD.chat.root, icon: ICONS.chat },
//       { title: 'calendar', path: PATH_DASHBOARD.calendar, icon: ICONS.calendar },
//       { title: 'kanban', path: PATH_DASHBOARD.kanban, icon: ICONS.kanban },
//     ],
//   },
// ];

// export default navConfig;


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
    ],
  },

  // MANAGEMENT
  // ----------------------------------------------------------------------
  {
    subheader: 'management',
    items: [
      // {
      //   title: 'user',
      //   path: '/dashboard/user',
      //   icon: ICONS.user,
      //   children: [
      //     {
      //       title: 'Four',
      //       path: '/dashboard/Four',
      //       children: [
      //         {
      //           title: 'Four-One',
      //           path: '/dashboard/Four',
      //           children: [
      //             { title: 'Four-One-One', path: '/dashboard/Four' },
      //             { title: 'Four-One-Two', path: '/dashboard/Four' },
      //             { title: 'Four-One-Three', path: '/dashboard/Four' },
      //           ],
      //         },
      //         { title: 'Four-Two', path: '/dashboard/Four' },
      //         { title: 'Four-Three', path: '/dashboard/Four' },
      //       ],
      //     },
      //     { title: 'Five', path: '/dashboard/user/five' },
      //     { title: 'Six', path: '/dashboard/user/six' },
      //   ],
      // },
      {
        title: 'home',
        path: '/home',
        icon: ICONS.user,
      },
      {
        title: 'fee',
        path: '/fee',
        icon: ICONS.user,
      },
      {
        title: 'student',
        path: '/student',
        icon: ICONS.user,
        children: [
          {
            title: 'Details', 
            path: '/student/details',
          },
          { title: 'Admission', path: '/student/admission' },
          { title: 'Address', path: '/student/address' },
          { title: 'Contact', path: '/student/contact' },
          { title: 'Schools Attended part one school', path: '/student/attendance' },
          { title: 'Family', path: '/student/family' },
          { title: 'Health', path: '/student/health' },
          { title: 'Documents', path: '/student/document' },
          { title: 'ID Info', path: '/student/id' },
        ],
      },
      {
        title: 'staff',
        path: '/staff',
        icon: ICONS.user,
      },
      {
        title: 'time table',
        path: '/time-table',
        icon: ICONS.user,
      },
      {
        title: 'attendance',
        path: '/attendance',
        icon: ICONS.user,
      },
      {
        title: 'exam',
        path: '/exam',
        icon: ICONS.user,
      },
      {
        title: 'help',
        path: '/help',
        icon: ICONS.user,
      },
      {
        title: 'admin',
        path: '/user/profile',
        icon: ICONS.user,
      },
      // {
      //   title: 'admission',
      //   path: '/student/admission',
      //   icon: ICONS.user,
      // }
    ],
  },
];

export default sidebarConfig;
