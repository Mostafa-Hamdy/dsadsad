<template>
   <section class="tack-order">
      <header>
         <h2 class="title-component">Tack Order</h2>
      </header>

      <ul class="tack-order__list">
         <li class="tack-order__item">
            <RouterLink class="tack-order__link" :to="{ name: 'Clients' }">
               <span class="icon"><ClientIcon /></span>
               
               <span class="text">Delivary</span>
            </RouterLink>
         </li>

         <li class="tack-order__item">
            <RouterLink class="list-item__link" :to="{ name: 'Manu' }">
               <span class="icon"><ClientIcon /></span>
               
               <span class="text">Resturant</span>
            </RouterLink>
         </li>
      </ul>
   </section>
</template>

<script>
export default {
   name: "TackOrder",
};
</script>

<style lang="scss">
.tack-order {

   .tack-order__list {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
      gap: 10px;
   }

   .tack-order-item {

      .tack-order__link {
         color: #2aa29c;
         // background: radial-gradient(#554040, transparent);
         border-bottom: 2px outset var(--vegas-gold);
         padding: 15px;
         border-radius: 5px;
         text-align: center;
         
         &:hover {
            background: hsl(190, 76%, 45%);
            color: #fff;
         }
         &:active {
            background: hsl(190, 76%, 20%);
            color: #fff;
         }
      }
   }
}
</style>
