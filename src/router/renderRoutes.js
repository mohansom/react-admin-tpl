import asyncComponent from '../utils/asyncComponent';

export const routes = {
    // 菜单
    menu:[
        {
            path: '/admin/dashboard',
            title: 'Option 1',
            component: asyncComponent(() => import("../pages/dashboard/index"))
        },
        {
            path: '/admin/menu',
            title: 'Navigation One',
            children:[
                {
                    path: '/admin/menu/option',
                    title: 'Option 2',
                    component: asyncComponent(() => import("../pages/menu/index"))
                }
            ]
        }
    ],
    // 非菜单
    other:[
        {
            path:"/admin/menu/option/:id",
            component: asyncComponent(() => import("../pages/menu/option"))
        }
    ]
}