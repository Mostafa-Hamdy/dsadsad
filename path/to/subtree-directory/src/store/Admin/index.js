import ProductsData from './../../mock/ProductsData.json';
import VuexPersistence from 'vuex-persist';

const vuexLocal = new VuexPersistence({
   storage: window.localStorage
})

export default {
   namespaced: true,

   state: {
      // navShow: false,
      // sideBar: false,
      // categories: null,

      products: [
         {
            "id": "1",
            "title": "Caprisioza",
            "price": 75,
            "img": "img",
            "ingredients": "Beet Tonado stuffd",
            "category": "beef"
         },
         {
            "id": "2",
            "title": "Ceraspe Sapice",
            "price": 300,
            "img": "img",
            "ingredients": "ingredients",
            "category": "beef"
         },
         {
            "id": "3",
            "product": "Chicken",
            "title": "Ceraspe Sapice",
            "price": 300,
            "img": "img",
            "ingredients": "ingredients",
            "category": "chicken"
         },
         {
            "id": "4",
            "product": "Appetizer",
            "title": "Ceraspe Sapice",
            "price": 300,
            "img": "img",
            "ingredients": "ingredients",
            "category": "chicken"
         }
      ],
      sideOrder: [
         "Rice",
         "Mashed potato",
         "Grilled vegetables",
         "Wedges",
         "sautéed vegetables"
      ],
      cart: [

         {
            fullName: 'Full Name One',
            phone: '0124445',
            phone2: '0124445',
            address: '0124445',
            landMark: '0124445',
            floor: '0124445',
            home: '0124445',
            zone: '0124445'
         },
      ],

      clientsData: [
         {
            fullName: 'lorem10 lorem10 lorem10 lorem10 lorem10 ',
            phone: '0124445',
            phone2: '0124445',
            address: '0124445',
            landMark: '0124445',
            floor: '0124445',
            home: '0124445',
            zone: '0124445'
         },
         {
            fullName: 'Ahmed Mohammed Ali',
            phone: '0126657845',
            phone2: '56987742',
            address: '0124445',
            landMark: '0124445',
            floor: '10',
            home: '20',
            zone: 'Aswan'
         },
         {
            fullName: 'Motaseem Atef Saeed',
            phone: '01149419763',
            phone2: '01026002325',
            address: '0124445',
            landMark: '0124445',
            floor: '0124445',
            home: '0124445',
            zone: '0124445'
         },
         {
            fullName: 'Full Name Three',
            phone: '0124445',
            phone2: '0124445',
            address: '0124445',
            landMark: '0124445',
            flower: '0124445',
            home: '0124445',
            zone: '0124445'
         },
         {
            fullName: 'Full Name Three',
            phone: '0124445',
            phone2: '0124445',
            address: '0124445',
            landMark: '0124445',
            flower: '0124445',
            home: '0124445',
            zone: '0124445'
         },
         {
            fullName: 'Full Name Three',
            phone: '0124445',
            phone2: '0124445',
            address: '0124445',
            landMark: '0124445',
            flower: '0124445',
            home: '0124445',
            zone: '0124445'
         },
         {
            fullName: 'Full Name Three',
            phone: '0124445',
            phone2: '0124445',
            address: '0124445',
            landMark: '0124445',
            flower: '0124445',
            home: '0124445',
            zone: '0124445'
         },
         {
            fullName: 'Full Name Three',
            phone: '0124445',
            phone2: '0124445',
            address: '0124445',
            landMark: '0124445',
            flower: '0124445',
            home: '0124445',
            zone: '0124445'
         },
         {
            fullName: 'Full Name Three',
            phone: '0124445',
            phone2: '0124445',
            address: '0124445',
            landMark: '0124445',
            flower: '0124445',
            home: '0124445',
            zone: '0124445'
         },
         {
            fullName: 'Full Name Three',
            phone: '0124445',
            phone2: '0124445',
            address: '0124445',
            landMark: '0124445',
            flower: '0124445',
            home: '0124445',
            zone: '0124445'
         },
         {
            fullName: 'Full Name Three',
            phone: '0124445',
            phone2: '0124445',
            address: '0124445',
            landMark: '0124445',
            flower: '0124445',
            home: '0124445',
            zone: '0124445'
         },
         {
            fullName: 'Full Name Three',
            phone: '0124445',
            phone2: '0124445',
            address: '0124445',
            landMark: '0124445',
            flower: '0124445',
            home: '0124445',
            zone: '0124445'
         },
         {
            fullName: 'Full Name Three',
            phone: '0124445',
            phone2: '0124445',
            address: '0124445',
            landMark: '0124445',
            flower: '0124445',
            home: '0124445',
            zone: '0124445'
         },
      ],

      
      currentOrder: [],
   },
   getters: {
      products: state => state.products,
      cart: state => state.cart
   },
   mutations: {
      // Front-End functionallty UI
      toggleAdminNavShow(state, show) {
         state.navShow = show
      },
      toggleAdminSideBar(state, show) {
         state.sideBar = show
      },
      updatecategories(state, payload) {
         state.categories = payload;
      },


      // Situation Products functionallty
      GET_PRODUCTS(state) {
         state.products = ProductsData;
      },
      ADD_ITEM_TO_CART(state, item) {
         const productInCart = state.cart.find((product) => product.id === item.id);
         if (!productInCart) {
            state.cart.push({ ...item, qty: 1 });
         } else {
            productInCart.qty++;
         }
         // state.cart = {...payload, qty: 1}
      },
      REMOVE_ITEM_FROM_CART(state, id) {
         state.cart = state.cart.filter(item => item.id !== id )
      },
      IN_Crement_Qty(state, id) {
         const productInCart = state.cart.find(product => product.id === id)
         productInCart.qty++;
      },
      DE_Crement_Qty(state, id) {
         const productInCart = state.cart.find(product => product.id === id)
         if (productInCart.qty > 1) {
            productInCart.qty--;
         } else {
            state.cart.splice(state.cart.indexOf(productInCart, 1))
         }

      },
      EMPTY_CART(state) {
         state.cart = []
      },
      SELECT_ORDER_FROM_CART(state, order) {
         // state.currentOrder.push(order)
         // console.log(state.currentOrder);
         localStorage.setItem('order-info', JSON.stringify(order))
      },


      // Situation clients functionallty
      ADD_NEW_CLIENT(state, client) {
         state.clientsData.push(client)
         console.log(client);
         localStorage.setItem('client-info', JSON.stringify(client))
      },
      EDIT_CLIENT() {

      },


      
      // Situation Order tacker
      SELECT_CLIENT_TO_ORDER(state, client) {
         // state.currentOrder = []
         // state.currentOrder.push(client)
         localStorage.setItem('client-info', JSON.stringify(client))
      },
      SELECT_TOTAL_OREDER() {

      }

   },
   actions: {

      // Situation Products  functionallty
      getProduacts({commit}) {
         commit('GET_PRODUCTS')
      },
      addItemToCart({commit}, payload) {
         commit('ADD_ITEM_TO_CART', payload)
      },
      RemoveItemFromCart({ commit }, id) {
         commit('REMOVE_ITEM_FROM_CART', id)
      },
      incrementQty({commit}, id) {
         commit('IN_Crement_Qty', id)
      },
      decrementQty({commit}, id) {
         commit('DE_Crement_Qty', id)
      },
      emptyCart({commit}) {
         commit('EMPTY_CART')
      },
      selectOrderFromCart({commit}, order) {
         commit('SELECT_ORDER_FROM_CART', order)
      },



      // Situation clients functionallty
      selectClientToOrder({commit}, client) {
         commit('SELECT_CLIENT_TO_ORDER', client)
      }

   },
   Plugin: [vuexLocal.plugin]
}
// console.log(vuexLocal);
// state.currentOrder.pop()
// state.currentOrder = []

/* 
   - او الجهاز اتقفل مثلا متتمسحش بعد كد Reload بحيث لو اتعمل LocalStorge اولاً ضفنا بيانات العميل فى ال 
   - 

   currentOrder انما لو هتجيبها من 
*/