<template>
   <div class="field">
      <input
         v-bind="$attrs"
         class="field__input"
         required
         @input="$emit('update:modelValue', $event.target.value)"
      />
      <span class="field__highlight"></span>
      <span class="field__bar"></span>
      <label v-if="label" class="field__label">{{ label }}</label>
   </div>
</template>

<script>
export default {
   name: "BaseInput",
   props: {
      label: {
         type: String,
         default: "",
      },
      modelValue: {
         type: [String, Number],
         default: "",
      },
   },
};
</script>

<style lang="scss" scoped>

/* Wrapper Field ========================== */
.field {
   position: relative;
   width: 100%;
   color: var(--white-2);

   // for show extra placeholder 
   &::before {
      content: "Search With Data";
      position: absolute;
      left: 57px;
      bottom: 49px;

      background: rgb(24, 81, 131);

      opacity: 0;
      transition: opacity 0.3s;
   }
   &:focus::before {
      opacity: 1;
   }
}


.field__input {
   font-size: 18px;
   padding: 10px;
   display: block;
   width: 100%;
   border-radius: 5px;
   border: 1px solid var(--jet);
   background: var(--eerie-black-2);
   color: var(--orange-yellow-crayola);
}


/* HIGHLIGHTER ================================== */
.field__highlight {
   position: absolute;
   height: 60%;
   width: 100px;
   top: 25%;
   left: 0;
   pointer-events: none;
   opacity: 0.5;

   
   /* active state */
   input:focus ~ .field__highlight {
      animation: inputHighlighter 0.3s ease;
   }
   @keyframes inputHighlighter {
      from {
         background: var(--orange-yellow-crayola);
      }
   
      to {
         width: 0;
         background: transparent;
      }
   }
}



/* BOTTOM BARS ================================= */
.field__bar {
   position: relative;
   display: block;
   width: 100%;
   /* width: 300px; */

   &:before,
   &:after {
      content: "";
      position: absolute;
      bottom: 1px;

      background: var(--vegas-gold);

      width: 0;
      height: 2px;
      transition: 0.2s ease all;
   }
   &:before {
      left: 48%;
   }
   &:after {
      right: 48%;
   }



   /* active state */
   input:focus ~ .field__bar:before,
   input:focus ~ .field__bar:after {
      width: 50%;
   }
}



/* LABEL ======================================= */
.field__label {
   font-size: 14px;
   font-weight: normal;
   position: absolute;
   pointer-events: none;
   left: 5px;
   top: 13px;
   transition: 0.2s ease all;
   margin-left: 7px;
   color: var(--light-gray-70);


   /* active state */
   input:focus ~ .field__label,
   input:valid ~ .field__label {
      // color: var(--vegas-gold);
      color: hsl(45deg 54% 58% / 44%);
   
      // top: -20px;
      font-size: 14px;
      // margin-left: 0;
   
      top: -11px;
      margin-left: 10px;
      background: #1e1e1f;
      padding: 4px;
      border: 1px solid #383838;
      border-radius: 3px;
      // z-index: 4;
   }
}




</style>
