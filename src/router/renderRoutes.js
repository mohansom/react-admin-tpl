import asyncComponent from '../utils/asyncComponent';

export const routes = [
    {
        path: '/dashboard',
        component: asyncComponent(() => import("../pages/dashboard/dashboard"))
    },
    {
        path: '/login',
        component: asyncComponent(() => import("../pages/login/login"))
    },
    {
        path: '/education',
        component: asyncComponent(() => import("../pages/education/index")),
    },
]