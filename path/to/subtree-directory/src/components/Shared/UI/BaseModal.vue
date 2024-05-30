<template>
   <teleport to="#app">
      <Transition name="fade">

         <div class="modal-container" v-if="show" @click.self="$emit('close')">
            <div class="modal-container__content" :style="{ 'max-width': width + 'px' }">

               <header class="modal-container__content__header">
                  <!-- <button @click="$emit('close')">
                     <CloseIcon />
                  </button> -->

                  <slot name="title-modal" />
               </header>



               <slot name="content" />
            </div>
         </div>

      </Transition>
   </teleport>
</template>

<script>
export default {
   name: "BaseModal",
   props: {
      show: {
         type: Boolean,
         default: false,
         required: false,
      },
      width: {
         type: Number,
         default: 500,
         required: false,
      }
      // title: {
      //    type: String,
      //    default: "",
      //    required: true,
      // },
   },
};
</script>

<style lang="scss" scoped>
.modal-container {
   position: fixed;
   inset: 0;
   // top: 0;
   // right: 0;
   // bottom: 0;
   // left: 0;
   z-index: 10;

   background-color: rgba(0, 0, 0, 0.5);
   backdrop-filter: blur(2px);

   padding: 10px;
   // padding: 60px 10px 0;  => in desktop

   &__content {
      position: relative;
      overflow-y: auto;

      min-width: 259px;
      max-width: 500px; //=> full فى الشاشات الكبيرة يجى 500 والصغير يجى

      background-color: var(--smoky-black);
      border-radius: 6px;
      margin-inline: auto;
   }

   // &__header {
   //    position: sticky;
   //    top: 0;
   //    z-index: 1;

   //    background-color: inherit;
   //    text-align: center;

   //    padding-top: 38px;
   //    padding-bottom: 20px;

   //    > h3 {
   //       color: var(--light-gray-70);
   //    }
   // }
   button {
      position: absolute;
      top: 12px;
      right: 10px;

      >svg {
         height: 20px;
      }
   }
}
</style>
