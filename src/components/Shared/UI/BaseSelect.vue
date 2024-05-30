<template>
   <select name="zone" id="zone">
      <option selected hidden disabled>Choose Zone</option>
      <option 
         v-for="option in options" 
         :key="option.id" 
         :value="option"
      >{{ option }}</option>
   </select>
</template>

<script>
export default {
   name: 'BaseSelect',
   data() {
      return { 
         options: ['one', 'two', 'three']
      }
   }
};
</script>

<style></style>
