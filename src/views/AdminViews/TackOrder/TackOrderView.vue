<template>
   <RouterLink class="card" :to="{ name: 'Clients' }">
      <span class="icon"><ClientIcon /></span>
      <span class="text">Delivary</span>
   </RouterLink>
   <RouterLink class="card" :to="{ name: 'Manu' }">
      <span class="icon"><ClientIcon /></span>
      <span class="text">Resturant</span>
   </RouterLink>
</template>

<script>
export default {
   name: "TackOrderView",
};
</script>

<style lang="scss" scoped></style>
