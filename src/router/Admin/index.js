import AdminViews from '@/views/Layouts/AdminView.vue';
import DashboardView from '@/views/AdminViews/Dashboard/DashboardView.vue';
import TackOrderView from '@/views/AdminViews/TackOrder/TackOrderView.vue';
import ClientsView from '@/views/AdminViews/Clients/ClientsView.vue';
import ManuView from '@/views/AdminViews/Manu/ManuView.vue';
import OrderTrackView from '@/views/AdminViews/OrderTrack/OrderTrackView.vue';
import SettingsView from '@/views/AdminViews/Settings/SettingsView.vue';
import LoginView from '@/views/AdminViews/Regeistration/LoginView.vue';


export default [
   {
      path: "/admin",
      name: "Admin",
      component: AdminViews,
      children: [
         {
            path: 'tackorder',
            name: 'TackOrder',
            component: TackOrderView,
         },
         {
            path: 'dashboard',
            name: 'Dashboard',
            component: DashboardView,
         },
         {
            path: 'clients',
            name: 'Clients',
            component: ClientsView,
         },
         {
            path: 'manu',
            name: 'Manu',
            component: ManuView,
         },
         {
            path: 'order-track',
            name: 'OrderTrack',
            component: OrderTrackView,
         },
         {
            path: 'settings',
            name: 'Settings',
            component: SettingsView,
         }
      ]
   },
   {
      path: '/login',
      name: 'Login',
      component: LoginView
   }
]