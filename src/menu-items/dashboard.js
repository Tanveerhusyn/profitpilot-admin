// assets
import { IconDashboard, IconBrandChrome, IconListDetails, IconAppWindow } from '@tabler/icons';

// constant
const icons = { IconDashboard, IconBrandChrome, IconListDetails, IconAppWindow };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
  id: 'dashboard',
  title: 'Dashboard',
  type: 'group',
  children: [
    {
      id: 'default',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard/default',
      icon: icons.IconDashboard,
      breadcrumbs: false
    },
    {
      id: 'transactions',
      title: 'Transactions',
      type: 'item',
      url: '/transactions',
      icon: icons.IconBrandChrome,
      breadcrumbs: false
    },
    {
      id: 'invoices',
      title: 'Invoices',
      type: 'item',
      url: '/invoices',
      icon: icons.IconListDetails,
      breadcrumbs: false
    },
    {
      id: 'applications',
      title: 'Applications',
      type: 'item',
      url: '/applications',
      icon: icons.IconAppWindow,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
