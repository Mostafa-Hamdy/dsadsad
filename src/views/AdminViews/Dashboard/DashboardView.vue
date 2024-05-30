<template>
   <article id="dashboard-page">
      <TackOrder/>

      <ChartCards/>
      
      <NotAvallible/>

      <OrderTracker/>

      <TheNavbar/>
   </article>
</template>

<script>
import TackOrder    from './../../../components/AdminComponents/Dashboard/TackOrder.vue';
import ChartCards   from './../../../components/AdminComponents/Dashboard/ChartCards.vue';
import NotAvallible from './../../../components/AdminComponents/Dashboard/NotAvallible.vue';
import OrderTracker from './../../../components/AdminComponents/Dashboard/OrderTracker.vue'; 
import TheNavbar    from './../../../components/AdminComponents/Layout/TheNavbar.vue';

export default {
   name: "DashboardView",
   components: { 
      TackOrder,
      ChartCards, 
      NotAvallible, 
      TheNavbar, 
      OrderTracker
   }
};
</script>

<style lang="scss" scoped></style>
