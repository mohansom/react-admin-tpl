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
            path: '/admin/ui',
            title: 'UI Components',
            children:[
                {
                    path: '/admin/ui/button',
                    title: '按钮',
                    component: asyncComponent(() => import("../pages/ui/Button"))
                }
            ]
        }
    ],
    // 非菜单
    other:[
        
    ]
}