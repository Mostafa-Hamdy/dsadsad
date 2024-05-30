<template>
   <section class="order-tracker">
      <header>
         <h2 class="title-component">Order Traking</h2>
      </header>
      
      <div class="order-tracker__container">

         <table class="order-tracker__table">
            <thead>
               <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Status Order</th>
                  <th>Name Delivary</th>
               </tr>
            </thead>

            <tbody>
               <tr>
                  <th>1</th>
                  <td>Osama</td>
                  <td>in kitchen</td>
                  <td>Hossam</td>
               </tr>

               <tr>
                  <th>2</th>
                  <td>Osama</td>
                  <td>in kitchen</td>
                  <td>Hossam</td>
               </tr>

               <tr>
                  <th>3</th>
                  <td>Osama</td>
                  <td>in kitchen</td>
                  <td>Hossam</td>
               </tr>
            </tbody>
         </table>
      </div>
   </section>

</template>

<script>
export default {
   name: 'OrderTracker'
};
</script>

<style lang="scss" scoped>
.order-tracker__container {
   // max-width: 405px;
   
   overflow: auto;

   .order-tracker__table {
      width: 100%;
      min-width: 400px;
      // overflow-x: hidden;
   
      tbody {
         overflow-x: auto;
      }
      // border-collapse: collapse;
      color: var(--vegas-gold);
   
      th,
      td {
         border: 1px solid var(--jet);
         padding: 8px;
         border-radius: 5px;
      }
   
      th {
         color: var(--light-gray-70);
         position: relative;
         z-index: 1;
   
         background: var(--border-gradient-onyx);
         box-shadow: var(--shadow-1);
   
         font-size: 16px;
   
         &::before {
            content: "";
            position: absolute;
            z-index: -1;
   
            inset: 1px;
   
            background: var(--eerie-black-1);
         }
      }
      td {
         color: var(--white-2);
      }
   
      th,
      td:hover {
         background: var(--border-gradient-onyx);
      }
   
      tr:nth-child(even) {
         // color: var(--smoky-black);
         background: var(--eerie-black-1);
      }
      tr > :first-child {
         width: 5px;
      }
   }
}
</style>
