import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

/**
 * 自定义的路由元信息（注意配置了meta的路由才会显示到侧边栏）:
 * meta: {
 *   title: 'title',                  显示在侧边栏、面包屑中的名字
 *   icon: 'svg-name',                该页面在侧边栏中显示的图标
 *   hidden: 'true',                  此级路由是否出现在左侧菜单栏和面包屑中，默认为false
 *       可访问该页面的权限数组，默认为空，所有用户可访问
 * }
 */

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [

    // {
    //     path: '/',
    //     name: 'root',
    //     redirect: '/index',
    //     meta: {
    //         hidden: true,
    //     }
    //     //component: Home
    // },

    // {
    //     path: '/index',
    //     name: 'index',
    //     component: resolve => require(['./views/Index.vue'], resolve),
    // },










    {
      path: '/moblie/login',
      name: 'moblie/login',
      component: resolve =>
        require(['@/views/moblie/login'], resolve),
    },


    {
      path: '/senglogin',
      name: 'senglogin',
      component: resolve => require(['@/views/Senglogin.vue'], resolve),
    },



    {
      path: '/cplogin',
      name: 'cplogin',
      component: resolve => require(['@/views/commonPeople/Login.vue'], resolve),
    }, {
      path: '/cp/main',
      name: 'cpmain',
      component: resolve => require(['@/views/commonPeople/Main.vue'], resolve),
    }, {
      path: '/tmbind',
      name: 'tmbind',
      component: resolve => require(['@/views/templeManager/BindWechat.vue'], resolve),
    }, {
      path: '/tmlogin',
      name: 'tmbind',
      component: resolve => require(['@/views/templeManager/TMLogin.vue'], resolve),
    },












    {
      path: '/homex',
      name: 'homex',
      component: resolve => require(['@/views/homex'], resolve),
      children: [{
          path: '/homex',
          redirect: '/homex/index'
        },
        {
          path: '/homex/mine',
          name: 'mine',
          component: resolve => require(['@/views/moblie/substitute'], resolve),
        },
        {
          path: '/homex/fomenziliao',
          name: 'fomenziliao',
          component: resolve => require(['@/views/moblie/fomenziliao'], resolve),
        },
        {
          path: '/homex/index',
          name: 'substitute',
          component: resolve => require(['@/views/moblie/index'], resolve),
        },
        {
          path: '/homex/course',
          name: 'course',
          component: resolve => require(['@/views/moblie/ad'], resolve),
        }
      ]
    },



    {
      path: '/senghome',
      name: 'senghome',
      component: resolve => require(['@/views/senghome'], resolve),
      children: [{
          path: '/senghome',
          redirect: '/senghome/index'
        },
        {
          path: '/senghome/mine',
          name: 'mi',
          component: resolve => require(['@/views/moblie/sengsub'], resolve),
        },
        {
          path: '/senghome/fomenziliao',
          name: 'fo',
          component: resolve => require(['@/views/moblie/fomenziliao'], resolve),
        },
        {
          path: '/senghome/index',
          name: 'su',
          component: resolve => require(['@/views/moblie/index'], resolve),
        },
        {
          path: '/senghome/course',
          name: 'co',
          component: resolve => require(['@/views/moblie/ad'], resolve),
        }
      ]
    },




    {
      path: '/mingzhong',
      name: 'mingzhong',
      component: resolve => require(['@/views/mingzhong'], resolve),
      children: [{
          path: '/mingzhong',
          redirect: '/mingzhong/index'
        },
        {
          path: '/mingzhong/mine',
          name: 'mix',
          component: resolve => require(['@/views/moblie/mzcenter'], resolve),
        },
        {
          path: '/mingzhong/fomenziliao',
          name: 'fox',
          component: resolve => require(['@/views/moblie/fomenziliao'], resolve),
        },
        {
          path: '/mingzhong/index',
          name: 'sux',
          component: resolve => require(['@/views/moblie/index'], resolve),
        },
        {
          path: '/mingzhong/course',
          name: 'cox',
          component: resolve => require(['@/views/moblie/ad'], resolve),
        }
      ]
    },


    {
      path: '/mingzhong/nei',
      name: 'nei',
      component: resolve => require(['@/views/mingzhong/nei.vue'], resolve),
    },

    {
      path: '/senghome/contant',
      name: 'contant',
      component: resolve => require(['@/views/senghome/center.vue'], resolve),
    },


    {
      path: '/homex/contant',
      name: 'homex/contant',
      component: resolve => require(['@/views/simiao/m_center.vue'], resolve),
    },








    {
      path: '/moblie/simiaolie',
      name: 'moblie/simiaolie',
      component: resolve => require(['@/views/moblie/simiaolie'], resolve),
    },



    {
      path: '/moblie/dingwei',
      name: 'moblie/dingwei',
      component: resolve => require(['@/views/moblie/dingwei'], resolve),
    },

    {
      path: '/moblie/fashi',
      name: 'moblie/fashi',
      component: resolve => require(['@/views/moblie/fashi'], resolve),
    },

    {
      path: '/moblie/fomenziliao',
      name: 'moblie/fomenziliao',
      component: resolve => require(['@/views/moblie/fomenziliao'], resolve),
    },

    {
      path: '/moblie/fomenyaowen',
      name: 'moblie/fomenyaowen',
      component: resolve => require(['@/views/moblie/fomenyaowen'], resolve),
    },

    {
      path: '/moblie/fomenshangju',
      name: 'moblie/fomenshangju',
      component: resolve => require(['@/views/moblie/fomenshangju'], resolve),
    },


    {
      path: '/moblie/bangding',
      name: 'moblie/bangding',
      component: resolve => require(['@/views/moblie/bangding'], resolve),
    },



    {
      path: '/xinzen/saomiao',
      name: 'xinzen/saomiao',
      component: resolve => require(['@/views/xinzen/saomiao'], resolve),

    },
    {
      path: '/xinzen/queren',
      name: 'xinzen/queren',
      component: resolve => require(['@/views/xinzen/queren'], resolve),
    }



  ]
})
