<template>

   <section class="client-info">
      <h3 class="title-component">
         Current Client
      </h3>

      <div class="client-card" :class="{ active: showMoreInfo }">
         <ul class="client-card__details">
            <div class="details__info">
               <li class="info__item">
                  <div class="client-info__icon-box">
                     <i>S</i>
                  </div>

                  <div class="client-info__contact-info">
                     <p class="client-info___title">Name</p>

                     <!-- <p class="client-info__data">{{client.fullName}}</p> -->
                  </div>
               </li>
            </div>


            <div class="details__info-more">
            
               <li class="info__item">
                  <div class="client-info__icon-box">
                     <i>I</i>
                  </div>
   
                  <div class="client-info__contact-info">
                     <p class="client-info___title">Phone</p>
   
                     <!-- <p class="client-info__data">{{client.phone}}</p> -->
                  </div>
               </li>
   
               <li class="info__item">
                  <div class="client-info__icon-box">
                     <i>I</i>
                  </div>
   
                  <div class="client-info__contact-info">
                     <p class="client-info___title">Phone2</p>
   
                     <!-- <p class="client-info__data">{{client.phone2}}</p> -->
                  </div>
               </li>
   
               <li class="info__item">
                  <div class="client-info__icon-box">
                     <i>I</i>
                  </div>
   
                  <div class="client-info__contact-info">
                     <p class="client-info___title">Address</p>
   
                     <!-- <address class="client-info__data">{{client.address}}</address> -->
                  </div>
               </li>
            </div>
         </ul>

         <div class="client-card__actions-wrapper">
            <button class="actions__btn-more" @click="moreInfoToggle()">
               <i>S</i>

               <span>Show Info</span>
            </button>
         </div>
      </div>
   </section>

</template>

<script>
export default {
   name: 'SelectedClient',
   props: ['client'],
   data() {
      return {
         showMoreInfo: false
      }
   },
   methods: {
      moreInfoToggle() {
         this.showMoreInfo = !this.showMoreInfo
      }
   },
   
}
</script>

<style lang="scss" scoped>
// Style in Reuse file 
</style>