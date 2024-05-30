<template>
   <header class="main-header">
      <figure class="main-header__logo-box">
         <img
            src="./../../../components/Shared/Icon/pinned-octocat.svg"
            alt="restaurant logo"
            width="55"
         />
      </figure>

      <h2 class="main-header__logo-title">
         MoBistro
      </h2>
   </header>
</template>

<script>
export default {
   name: "TheHeader"
}
</script>

<style lang="scss" scoped>
.main-header {
   // background: hsl(240, 1.49%, 17.21%);
   backdrop-filter: blur(10px);                 /* ? دى لازمتها ايه  */
   // box-shadow: var(--shadow-2);
   // border-radius: 5px;

   // border: 1px solid var(--jet);
   padding: 5px 10px;
   margin-bottom: 6px;

   display: flex;
   justify-content: space-between;
   align-items: center;

   border-bottom: 2px outset var(--vegas-gold);
   border-top: transparent;

   .main-header__logo-title {
      color: wheat;
      font-size: 20px;
   }

   

}

</style>
