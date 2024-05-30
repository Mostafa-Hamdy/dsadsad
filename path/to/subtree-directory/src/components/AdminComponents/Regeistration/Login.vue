<template>
   <div class="form-group">
      <form>
         <h1>Welcome Back!</h1>
         <div class="group">
            <input type="text" required v-model="email"/>
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>Name</label>
            <span class="error-feedback" v-if="v$.email.$error"> {{ v$.email.$errors[0].$message }} </span>
         </div>

         <div class="group">
            <input type="password" required v-model="pass"/>
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>Password</label>
            <span class="error-feedback" v-if="v$.pass.$error"> {{ v$.pass.$errors[0].$message }} </span>
         </div>

         <div class="group">
            <span class="error-feedback"> {{ clientNotFoundErr }} </span>
            <button type="button" @click.capture="loginNow"> Login </button>
         </div>



      </form>
   </div>
</template>

<script>
import useValidate from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';
import axios from 'axios';

export default {
   name: "LoginForm",
   data() {
      return {
         v$: useValidate(),
         email: "",
         pass: "",
         clientNotFoundErr: ''
      };
   },
   validations() {
      return {
         email: { required, email },
         pass: { required }
      }
   },
   methods: {
      async loginNow() {
         this.v$.$validate();
         if (!this.v$.$error) {
            let result = await axios.get(`http://127.0.0.1:3000/clients?email=${this.email}&pass=${this.pass}`)
            if (result.status == 200 && result.data.length > 0) {
               localStorage.setItem('client-info', JSON.stringify(result.data[0]))
               this.$store.dispatch('REDIRECT_TO', { name: 'Registration' })
            } else{
               this.clientNotFoundErr = 'client Not Found';
            }
         } else{
            console.log(' Validation is Faild ');
         }
      }
   },
};
</script>

<style scoped>
   .form-group { 
      display: grid;
      place-items: center;
      height: 100vh;
   }
   h1 {
      text-align: center;
   }
</style>


