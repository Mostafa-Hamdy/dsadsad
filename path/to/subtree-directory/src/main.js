import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import store from "./store";

import GlobalComponents from "./components/Shared/GlobalComponents.js";


import './assets/styles/style.scss';
// import "bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "normalize.css";




const app = createApp(App)
      app.use(router).use(store)
      app.mount("#app");


GlobalComponents.forEach(component => {
   app.component(component.name, component)
});

