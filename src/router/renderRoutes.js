import asyncComponent from '../utils/asyncComponent';

export const routes = {
    // 菜单
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
                    path: '/admin/education/course',
                    title: '课程',
                    component: asyncComponent(() => import("../pages/education/index"))
                }
            ]
        }
    ],
    // 非菜单
    other:[
        {
            path:"/admin/education/course/:id",
            component: asyncComponent(() => import("../pages/education/course"))
        }
    ]
}