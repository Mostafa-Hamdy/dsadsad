<template>
   <article class="client-view">
      <ClientList/>
   </article>
</template>

<script>
import ClientList from './../../../components/AdminComponents/Clients/ClientList.vue';

export default {
   name: "ClientsView",
   components: {
      ClientList
   }
};
</script>

<style lang="scss" scoped>
.client-view__header {
   position: sticky;
   top: 19px;
   z-index: 2;

   display: flex;
   gap: 6px;

   // margin-bottom: 30px;
   padding: 30px 14px 10px;
}

.client-view__clients-cards {
   overflow-y: auto;
   height: 354px;
   padding: 14px;
}


</style>