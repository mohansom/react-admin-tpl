/*
 * @Author: liujianfeng
 * @Date: 2019-09-17 19:19:55
 * @LastEditors: liujianfeng
 * @LastEditTime: 2019-09-17 20:43:10
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