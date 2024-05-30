<template>
   <article id="manu-view" :class="{ 'cart-opend': toggleNav }">
      <header class="client-data">
         <SelectedClient v-for="client in clientData" :client="client" :key="client"/>
      </header>

      <div>
         <div class="allproducts">
            <ProductList/>
         </div>

         <div class="cart">
            <!-- <TheCart/> -->
         </div>
      </div>
      
      <div>
         <div class="allproducts">
            <NewProductList/>
         </div>

         <div class="cart">
            <!-- <TheCart/> -->
         </div>
      </div>
   </article>
</template>

<script>
// import TheCart from './../../../components/AdminComponents/Manu/CartCompo/TheCart.vue';

import ProductList from '../../../components/AdminComponents/Manu/Products/ProductList.vue';
import NewProductList from '../../../components/AdminComponents/Manu/NewProduct/NewProductList.vue';

import SelectedClient from './../../../components/AdminComponents/Manu/SelectedClient.vue';

export default {
   name: 'ManuView',
   components: {
      ProductList,
      NewProductList,
      // TheCart,
      SelectedClient
   },
   computed: {
      clientData() {
         const clientData = localStorage.getItem('client-info')
         const margeData = JSON.parse(clientData)
         return [margeData]
      },
      toggleNav() {
         return this.$store.state.admin.navShow;
      },
   }
};
</script>

<style lang="scss" scoped></style>
