import asyncComponent from '../utils/asyncComponent';

export const routes = {
    // 菜单
    menu:[
        {
            path: '/admin/dashboard',
            title: '首页',
            icon: 'home',
            component: asyncComponent(() => import("../pages/dashboard/index"))
        },
        {
            path: '/admin/components',
            title: '组件',
            icon: 'appstore',
            children:[
                {
                    path: '/admin/components/icon',
                    title: '图标',
                    component: asyncComponent(() => import("../pages/components/icon"))
                }
            ]
        }
    ],
    // 非菜单
    other:[
        
    ]
}