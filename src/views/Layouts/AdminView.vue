<template>
   <div class="admin-view">
      <TheHeader/>

      <section class="content">
         <header>
            <h2 class="pages-title"> Naming Page </h2>
         </header>

         <Transition name="fade">
            <RouterView/>
         </Transition>
      </section>
   </div>
</template>

<script>
import TheHeader from "./../../components/AdminComponents/Layout/TheHeader.vue";

export default {
   components: { TheHeader }
};
</script>

<style lang="scss" scoped>

.content {
   // background: var(--eerie-black-2);
   // border-radius: 5px;

   // border: 1px solid var(--jet);

   margin-bottom: 96px;
   // background: hsl(240deg 1.49% 17.21%);
   // padding: 10px;
}

.pages-title {
   color: wheat;
   margin-top: 15px;
   margin-bottom: 28px;

   opacity: 0.1;
}



// .content {
//    animation: fff 0.5s ease backwards;
// }
// @keyframes fff {
//    0% { opacity: 0; }
//    100% { opacity: 1; }
// }


// .admin-view {
//    max-width: 1200px;
//    margin-inline: auto;
//    display: flex;
//    justify-content: center;
//    align-items: stretch;
//    gap: 25px;
// }
// .content {
//    overflow: hidden;
//    border-radius: 5px;
// }
// main {
//    overflow: auto;
// }
// .sidebar {
//    position: sticky;
//    top: 60px;
//    max-height: max-content;
//    height: 100%;
//    z-index: 1;
// }
</style>
