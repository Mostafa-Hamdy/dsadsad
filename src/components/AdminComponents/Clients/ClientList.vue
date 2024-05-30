<template>
   <section class="client-list">
      <h2 class="title-component">Clients List</h2>

      <header class="client-list__header">
         <BaseInput type="search" label="Search" v-model="searchValue" />

         <AddClient />
      </header>

      <div class="client-list__list">
         <!-- Loading -->
         <h1 v-if="filterClient.length == 0 && searchValue == ''">
            Please Wait...
         </h1>

         <!-- List is Empty -->
         <h1 v-if="filterClient.length == 0 && searchValue !== ''">
            Client In Not Found
         </h1>

         <ClientCard
            v-for="client in filterClient"
            :client="client"
            :key="client.name"
         ></ClientCard>
      </div>
   </section>
</template>

<script>
import AddClient from "./AddClient.vue";
import ClientCard from "./ClientCard.vue";

export default {
   components: {
      AddClient,
      ClientCard,
   },
   data() {
      return {
         searchValue: "",
      };
   },
   computed: {
      getClients() {
         return this.$store.state.admin.clientsData;
      },
      filterClient() {
         return this.getClients.filter(
            (el) =>
               el.fullName.match(this.searchValue.toLowerCase()) ||
               el.phone.match(this.searchValue) ||
               el.phone2.match(this.searchValue)
         );
      },
   },
   created() {
      // console.log(this.filterClient);
      // console.log(this.getClients);
   },
};
</script>

<style lang="scss" scoped>
.client-list {
   overflow: hidden;

   &__header {
      position: sticky;
      top: 19px;
      z-index: 2;

      display: flex;
      gap: 6px;

      // margin-bottom: 30px;
      // padding: 0 14px 10px;

      box-shadow: var(--shadow-2);
   }

   &__list {
      overflow-y: auto;
      height: 354px;
      margin-top: 15px;
      padding-right: 40px;
   }
}
</style>
