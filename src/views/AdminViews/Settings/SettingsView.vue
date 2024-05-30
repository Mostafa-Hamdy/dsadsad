<template>
   <main id="settings-page">
      <h1>Settings View</h1>
      <h3>Dark Moda</h3>
      <h3>change language</h3>


      <ThemeToggle/>

   </main>
</template>

<script>
import ThemeToggle from '@/components/AdminComponents/Settings/ThemeToggle.vue'
export default {
   name: 'SettingsViews',
   components: { ThemeToggle }
}
</script>

<style scoped lang="scss">
select {
   width: 200px;
   background-color: rgb(32, 168, 112);
   padding: 6px 8px 6px 10px;
   // appearance: none;
   // position: relative;
   &::before {
      content: "";
      width: 100px;
      height: 100px;
      background: red;
      position: absolute;
   }


   // border: none;
   // outline: none;
   // @include background-image(linear-gradient(top, transparent, rgba(black, .06)));
   // @include box-shadow(0 1px 1px rgba(black, .08));
   // background: #f2f2f2;
   // background: #f2f2f2;
   /* "transparent" doesn't work with Opera */
//   background: rgba(black, 0) !important;
   option {
      background-color: #f2f2f2;
   }
}

</style>
