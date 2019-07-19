import asyncComponent from '../utils/asyncComponent';

export const routes = {
    menu:[
        {
            path: '/admin/dashboard',
            title: '首页',
            component: asyncComponent(() => import("../pages/dashboard/index"))
        },
        {
            path: '/admin/education',
            title: '教育平台',
            children:[
                {
                    path: '/admin/education/videos',
                    title: '视频',
                    component: asyncComponent(() => import("../pages/education/index"))
                }
            ]
        }
    ],
    other:[

    ]
}