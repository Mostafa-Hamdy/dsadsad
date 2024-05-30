<template>
   <div class="addclient-container">
      <button class="addclient__btn-addnew icon-box" @click="toggleModalHandel">
         <!-- <IconAddClient/> -->

         <i>S</i>
      </button>

      <!-- form add new client model -->
      <BaseModal :show="showModal" @close="toggleModalHandel" :width="400">
         <template #title-modal>
            <h3 class="addclient__modal-title">eqweqw</h3>
         </template>

         <template #content>
            <form class="addclient__forms" @submit.prevent="submit" >
               <BaseInput 
                  label="Full Name"
                  v-model="clientData.fullName"
                  require
               />

               <BaseInput 
                  label="Phone" 
                  v-model="clientData.phone"
               />

               <BaseInput 
                  label="Phone2" 
                  v-model="clientData.phone2"
               />

               <div class="addclient__address-info">
                  <BaseInput 
                     label="Home"
                     v-model="clientData.home" 
                  />

                  <BaseInput 
                     label="Address" 
                     v-model="clientData.address"
                  />

                  <BaseInput 
                     label="Floor"
                     v-model="clientData.floor" 
                  />

                  <BaseInput 
                     label="Zone"
                     v-model="clientData.zone" 
                  />

               </div>

               <BaseInput 
                  label="Land Mark" 
                  v-model="clientData.landMark" 
               />

               <button class="addclient__btn-submit">
                  <EditIcon/>

                  <span class="text">submit</span>
               </button>
            </form>
         </template>
      </BaseModal>
   </div>
</template>

<script>
const initForm = () => ({
   fullName: null,
   phone: null,
   phone2: null,
   address: null,
   floor: null,
   home: null,
   zone: null,
   landMark: null
})
export default {
   name: "AddClient",
   data() {
      return {
         showModal: false,
         clientData: initForm(),
      };
   },
   methods: {
      toggleModalHandel() {
         this.showModal = !this.showModal;
         if (this.showModal) {
            document.body.style.overflow = 'hidden';
         } else {
            document.body.style.overflow = 'auto';
         }
      },
      submit() {
         this.$store.commit('admin/ADD_NEW_client', this.clientData)
         console.log(this.clientData);
         this.reset();
         this.toggleModalHandel()
         this.$router.push({name: 'Manu'})
      },
      reset() {
         this.clientData = initForm();
      }
   },
};
</script>

<style lang="scss" scoped>
.addclient-container {

   .addclient__btn-addnew {
      width: 45px;      /* INFO:   
         عشان ممكن ابعاد الايكون متكونش زى بعض لو مطاولة هتطلع البوكس مطاول padding مش بال width, height اتحكمنا هنا بال  
      */
      height: 45px;
   }

   .addclient__modal-title {
      text-align: center;
      padding-top: 15px;
   }

   .addclient__forms {
      display: flex;
      flex-direction: column;
      gap: 25px;
      padding: 20px;
      overflow: auto;
      height: 384px;
   
      .addclient__address-info {
         display: grid;
         grid-template-columns: repeat(4, 1fr);
         row-gap: 25px;
         column-gap: 10px;
         
         :nth-child(even) {
            grid-column: 2 / 5;
         }
      }

      .addclient__btn-submit {
         position: relative;
         z-index: 1;
   
         width: 100%;
         padding-top: 5px;
         padding-bottom: 5px;
         
         display: flex;
         justify-content: center;
         align-items: center;
         gap: 10px;
   
         color: var(--vegas-gold);
         background: var(--border-gradient-onyx);
         box-shadow: var(--shadow-3);
         border-radius: 5px;
   
         font-size: var(--fs-6);
         text-transform: capitalize;
   
         transition: var(--transition-1);
   
         &::before {
            content: "";
            position: absolute;
            z-index: -1;
   
            inset: 1px;
   
            background: var(--bg-gradient-jet);
            border-radius: inherit;
   
            transition: var(--transition-1);
         }
   
      }

   }
}
</style>