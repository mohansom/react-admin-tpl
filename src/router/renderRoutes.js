/*
 * @Author: liujianfeng
 * @Date: 2019-09-17 19:19:55
 * @LastEditors: 刘建峰
 * @LastEditTime: 2019-10-30 22:24:43
 */
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
        },
        {
            path: '/admin/permission',
            title: '权限',
            icon: 'lock',
            component: asyncComponent(() => import("../pages/permission/index"))
        },
        {
            path: '/admin/theme',
            title: '换肤',
            icon: 'skin',
            component: asyncComponent(() => import("../pages/theme/index"))
        },
    ],
    // 非菜单
    other:[
        
    ]
}