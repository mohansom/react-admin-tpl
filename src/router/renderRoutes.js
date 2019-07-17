import asyncComponent from '../utils/asyncComponent';

export const routes = [
    {
        path: '/admin/dashboard',
        exact:true,
        title: '首页',
        component: asyncComponent(() => import("../pages/dashboard/index"))
    },
    {
        path: '/admin/education',
        exact:true,
        title: '教育平台',
        component: asyncComponent(() => import("../pages/education/index"))
    },
]