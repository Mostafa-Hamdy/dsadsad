<template>
   <div :class="[`size-${size}`, 'loading']"></div>
</template>

<script>
export default {
   name: "BaseLoader",
   // props: {
   //    size: {
   //       type: String,
   //       require: false,
   //       default: "default",
   //       validator(value) {
   //          return ["default", "small", "medium", "larg"].indexOf(value) !== -1;
   //       },
   //    },
   // },
};
</script>

<style lang="scss" scoped>
.loading {
   display: inline-block;
   width: 22px;
   height: 22px;
   border: 3px solid rgba(47, 97, 163, 0.657);
   border-radius: 50%;
   border-top-color: #fff;
   animation: spin 1s ease-in-out infinite;
   -webkit-animation: spin 1s ease-in-out infinite;
   margin-top: 4px;
   // &.size-small {
   //    width: 20px;
   //    height: 20px;
   // }
   // &.size-medium {
   //    width: 20px;
   //    height: 20px;
   // }
   // &.size-large {
   //    width: 50px;
   //    height: 50px;
   // }
}

@keyframes spin {
   to {
      -webkit-transform: rotate(360deg);
   }
}
@-webkit-keyframes spin {
   to {
      -webkit-transform: rotate(360deg);
   }
}
</style>
