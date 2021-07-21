import Vue from "vue";
import VueRouter from "vue-router";

import Login from "../views/Login";
import Main from "../views/Main"

import List from "../views/user/List";
import Profile from "../views/user/Profile";
import NotFound from "../views/NotFound";

Vue.use(VueRouter);

export default new VueRouter({
  mode:'history',
  routes: [
    {
      path: "/login",
      component: Login
    },
    {
      path: "/main/:username",
      component: Main,
      props:true,
      //嵌套路由
      children: [
        {
          //v-bind绑定的 :id 这边来接受
          path: "/user/profile/:id",
          name:'Profile',
          component: Profile,
          props:true
        },
        {
          path: "/user/list",
          component: List
        },
        {
          path:"/goHome",
          redirect:"/login"
        }
      ]
    },
    {
      path:"*",
      component:NotFound
    }
  ]
});

