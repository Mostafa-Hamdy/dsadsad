<template>
   <section class="theme-toggle">
      <header>
         <h2 class="title-component">Theme Toggle</h2>
      </header>

      <button @click="darkToggle">
         <div class="toggle-btn">
            <div class="toggle-icon"  :class="{ active: darkMode}"></div>
         </div>
      </button>
   </section>
</template>

<script>
export default {
   data() {
      return { 
         darkMode: false
      }
   },
   methods: {
      darkToggle() {
         this.darkMode = !this.darkMode;
         document.body.classList.toggle('dark-theme')
      }

      // darkToggle() {
      //    this.darkMode = !this.darkMode;
      //    const keyTheme = localStorage.setItem('keytheme', 'dark-theme')
      //    if (keyTheme == null) {

      //    }

      //    document.body.classList.toggle('dark-theme')
      // }
   }
};
</script>

<style lang="scss" scoped>
.toggle-btn {
   width: 150px;
   height: 80px;
   background-color: #27173a;
   padding: 10px;
   border-radius: 50px;
   overflow: hidden;       /* toggle-icon ضفناها هنا عشان بيفضل ظاهر جزء من  */

   .toggle-icon {
      position: relative;
      width: 60px;
      height: 60px;
      background-color: #ffc207;
      border-radius: 50%;
      transition: all 0.6s ;

      &::before {
         content: "";
         width: 100%;
         height: 100%;
         background-color: #27173a;
         position: absolute;
         left: -30%;
         border-radius: 50%;
         transition: all 0.6s ;
         scale: 0;
      }

      // &.active {
      //    translate: calc(150px - 80px);
      // }
      // &.active::before {
      //    scale: 1;
      // }
   }
}
.toggle-btn .toggle-icon.active {
   translate: calc(150px - 80px);
}
.toggle-btn .toggle-icon.active::before {
   scale: 1;
}
</style>