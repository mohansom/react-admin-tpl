import asyncComponent from '../utils/asyncComponent';

export const routes = [
    {
        path: '/admin/dashboard',
        component: asyncComponent(() => import("../pages/dashboard/dashboard"))
    },
    {
        path: '/admin/education',
        component: asyncComponent(() => import("../pages/education/index")),
    },
]