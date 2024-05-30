<template>
   <div class="table-card">
      <div class="table-card__table">
         <div class="table-card__table__chairs">
            <span class="table-chair"></span>
            <span class="table-chair"></span>
            <span class="table-chair"></span>
            <span class="table-chair"></span>
         </div>

         <div class="table-card__table__center-pies">
            <p class="table-number">A</p>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   name: "TableCard",
};
</script>

<style lang="scss" scoped>
.table-card {
   width: 90px;
   height: 90px;
   background-color: #2a2a2a;
   border-radius: 10px;

   display: grid;
   place-content: center;

   &__table {
      position: relative;
      width: 70px;
      height: 70px;
      background-color: #717171;
      border-radius: inherit;

      display: grid;
      place-content: center;
      > .table-number {
      }

      &__chairs {
         > .table-chair {
            position: absolute;
            width: 30px;
            height: 10px;
            background-color: white;
            border-radius: 50px;

            &:nth-child(1) {
               rotate: 90deg;
               right: -17px;
               top: 40%;
               // translate-Y: 0 -50px;
            }
            &:nth-child(2) {
               top: -8px;
               right: 27%;
            }
            &:nth-child(3) {
               top: 40%;
               left: -17px;
               rotate: 90deg;
            }
            &:nth-child(4) {
               right: 27%;
               bottom: -8px;
            }
         }
      }
      &__center-pies {
         width: 50px;
         height: 50px;
         background-color: #279d58;
         border-radius: 50px;

         display: grid;
         place-content: center;
      }
   }
}
</style>
