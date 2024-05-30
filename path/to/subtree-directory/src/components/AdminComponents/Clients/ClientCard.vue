<template>
   <div class="client-card" :class="{ active: showMoreInfo }">
      <ul class="client-card__details">
         <div class="details__info">
            <li class="info__item">
               <div class="client-info__icon-box">
                  <i>I</i>
               </div>

               <div class="client-info__contact-info">
                  <p class="client-info___title">name</p>

                  <p class="client-info__data">
                     {{ client.fullName }}
                  </p>
               </div>
            </li>

            <li class="info__item">
               <div class="client-info__icon-box">
                  <i>I</i>
               </div>

               <div class="client-info__contact-info">
                  <p class="client-info___title">phone</p>

                  <p class="client-info__data">
                     {{ client.phone }}
                  </p>
               </div>
            </li>
         </div>

         <div class="details__info-more">
            <li class="info__item">
               <div class="client-info__icon-box">
                  <i>I</i>
               </div>

               <div class="client-info__contact-info">
                  <p class="client-info___title">phone2</p>

                  <p class="client-info__data">
                     {{ client.phone2 }}
                  </p>
               </div>
            </li>

            <li class="info__item">
               <div class="client-info__icon-box">
                  <i>I</i>
               </div>

               <div class="client-info__contact-info">
                  <p class="client-info___title">address</p>

                  <p class="client-info__data">
                     {{ client.address }}
                  </p>
               </div>
            </li>

            <li class="info__item">
               <div class="client-info__icon-box">
                  <i>I</i>
               </div>

               <div class="client-info__contact-info">
                  <p class="client-info___title">zone</p>

                  <p class="client-info__data">
                     {{ client.zone }}
                  </p>
               </div>
            </li>
         </div>
      </ul>

      <div class="client-card__actions-wrapper">
         <button class="actions__btn-more" @click="moreInfoToggle()">
            <i>S</i>

            <span>Show Info</span>
         </button>

         <button
            class="actions__btn-selected"
            @click="seletedClientToOrder"
         >
            <i>S</i>
         </button>
      </div>
   </div>
</template>

<script>
export default {
   name: "ClientCard",
   props: ["client"],
   data() {
      return {
         showMoreInfo: false,
      };
   },
   methods: {
      seletedClientToOrder() {
         const { fullName, phone, address, zone } = this.client;
         this.$store.dispatch("admin/selectclientToOrder", {
            fullName: fullName,
            phone: phone,
            address: address,
            zone: zone,
         });
         this.$router.push({ name: "Manu" });
      },
      moreInfoToggle() {
         this.showMoreInfo = !this.showMoreInfo;
      },
   },
   created() {
      // console.log(this.client);
   }
};
</script>

<style lang="scss" scoped>
// Style in Reuse file
</style>
