export const dashboardRoutes = {
  label: 'Dashboard',
  labelDisable: true,
  children: [
    {
      name: 'Dashboard',
      active: true,
      icon: 'chart-pie',
      children: [
        {
          name: 'Default',
          to: '/',
          exact: true,
          active: true
        },
        {
          name: 'Analytics',
          to: '/dashboard/analytics',
          active: true
        },
        {
          name: 'CRM',
          to: '/dashboard/crm',
          active: true
        },
        {
          name: 'E Commerce',
          to: '/dashboard/e-commerce',
          active: true
        },
        {
          name: 'LMS',
          to: '/dashboard/lms',
          active: true,
          badge: {
            type: 'success',
            text: 'New'
          }
        },
        {
          name: 'Management',
          to: '/dashboard/project-management',
          active: true
        },
        {
          name: 'SaaS',
          to: '/dashboard/saas',
          active: true
        }
      ]
    }
  ]
};

export default [dashboardRoutes];
