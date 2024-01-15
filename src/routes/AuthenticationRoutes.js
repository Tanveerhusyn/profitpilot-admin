import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';
import MinimalLayout from 'layout/MinimalLayout';
import FileUpload from 'views/pages/authentication/authentication3/Test';

// login option 3 routing
const AuthLogin3 = Loadable(lazy(() => import('views/pages/authentication/authentication3/Login3')));
const AuthRegister3 = Loadable(lazy(() => import('views/pages/authentication/authentication3/Register3')));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    {
      path: 'login', // Removed the leading slash
      element: <AuthLogin3 />
    },
    {
      path: 'register', // Removed the leading slash
      element: <AuthRegister3 />
    },
    {
      path: '/test',
      element: <FileUpload />
    }
  ]
};

export default AuthenticationRoutes;
