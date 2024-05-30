<template>
   <header class="main-header prand-header">
      <figure class="main-header__logo-box">
         <img
            src="./../../../components/Shared/Icon/pinned-octocat.svg"
            alt="restaurant logo"
            width="55"
         />
      </figure>

      <h2 class="spachial-title">
         MoBistro
      </h2>
   </header>

   <!-- <header class="main-header">
      <SideBar/>

      <div class="main-header__page-title">
         Client Page
      </div>

      <div class="spachial-title">
         Client Page
      </div>
   </header> -->
</template>

<script >
// import SideBar from "./SideBar.vue";
export default {
   name: "TheHeader",
   // components: { SideBar }
}
</script>

<style lang="scss" scoped>
.main-header {
   position: sticky;
   top: 10px;
   z-index: 5;

   background-color: hsla(240, 1%, 17%, 0.75);
   backdrop-filter: blur(10px);                 /* ? دى لازمتها ايه  */
   box-shadow: var(--shadow-2);
   border-radius: 5px;

   border: 1px solid var(--jet);
   padding: 5px 10px;
   margin-bottom: 6px;

   display: flex;
   justify-content: space-between;
   align-items: center;
}
.prand-header {
   position: static;

   background-color: var(--eerie-black-2);
}

.spachial-title {
   color: wheat;
   font-size: 20px;
}
</style>
