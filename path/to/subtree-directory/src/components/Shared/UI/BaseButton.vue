<template>
  <button :type="type" :class="['base-button', `base-button-${color}`]" :disabled="disabled">
      <slot v-if="!loading"></slot>
      <BaseLoader v-else/>
  </button>
</template>

<script>
export default {
   name: 'BaseButton',
   props: {
      type: {
         type: String,
         require: false,
         default: 'button',
      },
      color: {
         type: String,
         require: false,
         default: 'default',
         validator(value) {
            return ['default', 'success', 'error', 'info'].indexOf(value) !== -1
         },
      },
      disabled: {
         type: Boolean,
         require: false,
         default: false,
      },
      loading: {
         type: Boolean,
         require: false,
         default: false,
      },
   }
}
</script>

<style lang="scss">
   .base-button {
      width: -webkit-fill-available;      /* دى معناها ايه شكلها بتجيب العنصر فى النص */
      padding: 13px 20px;
      border-radius: 4px;

      background-color: #eee;
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
         opacity: 0.8;
      }
      &-success {
         color: var(--vegas-gold);
         background-color: var(--border-gradient-onyx);
      }
      &-error {
         color: #fff;
         background-color: rgb(182, 38, 38);
      }
      &-info {
         color: #fff;
         background-color: rgb(31, 74, 143);
      }
      &[disabled] {
         opacity: 0.5;
         cursor: not-allowed;
      }
   }
</style>