<template>
   <section class="chart-cards">
      <header>
         <h2 class="title-component">Chart Card</h2>
      </header>

      <ul class="chart-cards__list">
         <!-- <li class="info__item">
            <div class="client-info__icon-box">
               <i>I</i>
            </div>

            <div class="client-info__contact-info">
               <p class="client-info___title">name</p>

               <p class="client-info__data">
                  ejwqoje
               </p>
            </div>
         </li> -->

         <li class="chart-cards__item">
            <ClientIcon/>

            <p>Clients 0</p>
         </li>

         <li class="chart-cards__item">
            <ClientIcon/>

            <p>Members 0</p>
         </li>

         <li class="chart-cards__item">
            <ClientIcon/>

            <p>Order Track 0</p>
         </li>
      </ul>
   </section>
</template>

<script>
export default {
   name: "ChartCards",
};
</script>

<style lang="scss" scoped>
.info__item {
   background-color: #1d3c4a;
}
.icon-box {
   background: transparent;
}
.chart-cards__list {
   display: grid;
   grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
   gap: 10px;

   .chart-cards__item {
      // background-color: #1d3c4a;
      border-bottom: 2px outset var(--vegas-gold);
      text-align: center;
      padding: 1rem;
      border-radius: 5px;
   }
}
</style>
