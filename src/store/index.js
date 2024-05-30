import { createStore } from "vuex";
import AdminStore from "./Admin/index";

export default createStore({
   modules: {
      admin: AdminStore
   },
});
