import { createRouter, createWebHistory } from "vue-router";

import AdminRoutes from './Admin/index';
// import EndUserRoutes from './EndUser/index';


const baseRoutes = [
   {
      path: '/',
      name: 'home',
      // component: 
      children: [
         {
            path: 'admin',
            name: 'admin',
            // component: 
         },
         {
            path: 'user',
            name: 'user',
            // component: 
         }
      ]
   }
   // {
   //    path: "/",
   //    name: "Login",
   //    component: LoginView,
   //    beforeEnter: (to, from, next) =>  {
   //       let user = localStorage.getItem('user-info');
   //       if (user) {
   //          next(false)
   //       } else {
   //          next()
   //       }
   //    }
   // },
];

// ES6
const routes = [...baseRoutes, ...AdminRoutes]
// before ES6 || legacy code 
// const routes = [].concat(baseRoutes, AdminRoutes)


const router = createRouter({
   // history: createWebHistory(process.env.BASE_URL),
   history: createWebHistory(),
   routes,
});


export default router;
