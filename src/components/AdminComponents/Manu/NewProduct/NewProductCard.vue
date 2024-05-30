<template>
   <div class="product">
      
      <!-- Product Card -->
      <a class="product__card" :class="{ 'in-cart': itemInCart }" @click="orderSelectionModal">
         <div class="product__card__info">
            <h4 class="info-title">{{ item.title }}</h4>

            <p class="info-price">{{ item.price }} E.G</p>
         </div>

         <button class="product__card__info-more" @click="toggleModalHandel">
            <IconAddCart />
         </button>
      </a>

      <!-- Details Order -->
      <BaseModal :show="showInfo" @close="toggleModalHandel" :width="400">
         <template #content>

            <div class="product__details">
               <figure>
                  <img src="" alt="" />
               </figure>

               <div class="product__modal__info-details">
                  <div class="text">
                     <h2>{{ item.title }}</h2>
                     <p>{{ item.price }} E.G</p>
                     <p>{{ item.ingredients }}</p>
                  </div>
               </div>
            </div>

         </template>
      </BaseModal>

      <!-- Choose Side Order -->
      <BaseModal :show="orderSelection" @close="orderSelectionModal" :width="400">
         <template #title-modal>
            <h2 class="title-modal">Choose Side Order</h2>
         </template>
         
         <template #content>

            <div class="product__side-order">
               <ul class="side-order-list">
                  <li class="side-order-item">
                     <input type="checkbox" id="rise">
                     <label for="rise">Rise</label>
                  </li>

                  <li class="side-order-item">
                     <input type="checkbox" id="mashed">
                     <label for="mashed">Mashed</label>
                  </li>

                  <li class="side-order-item">
                     <input type="checkbox" id="rise">
                     <label for="rise">Rise</label>
                  </li>
               </ul>

               <button @click="addItemToCart(item)" @close="orderSelectionModal">
                  Ok
               </button>

            </div>

         </template>
      </BaseModal>
   </div>
</template>

<script>
export default {
   name: "ProductCard",
   props: ["item"],
   data() {
      return {
         orderSelection: false,
         showInfo: false,
         itemInCart: false,
      };
   },
   methods: {
      toggleModalHandel() {
         this.showInfo = !this.showInfo;
      },
      orderSelectionModal() {
         this.orderSelection = !this.orderSelection;
      },
      addItemToCart(item) {
         this.$store.dispatch("admin/addItemToCart", item);
         this.itemInCart = !this.itemInCart;
         this.orderSelectionModal();
      },
      // addItemToCart() {
      //    const { name, price } = this.item;
      //    console.log(this.item);
      //    this.$store.commit('admin/addItemToCart', {
      //       name: name,
      //       price: price,
      //    })
      // }
   },
   created() {
      // console.log(this.item);
      // console.log(this.item.img);
      // console.log(this.item.descriptions);
   }
};
</script>

<style lang="scss" scoped>
.product {
   &__card {
      position: relative;

      border-radius: 6px;
      padding: 1.3rem;
      overflow: hidden;
      background-color: #362e2e;
      transition: background-color 0.3s;

      .in-cart {
         &::before {
            content: "";
            position: absolute;
            background: #0d6a6054;
            inset: 2px;
            border-radius: 6px;
         }
      }

      &:hover {
         background-color: #7c9128b7;
      }

      &:active {
         background-color: #bb2525;
      }

      &__info {
         >.info-title {}

         >.info-price {}
      }

      &__info-more {
         position: absolute;
         right: 4px;
         top: 4px;

         padding: 0.4rem;
         border-radius: 50px;
         transition: background-color 0.3s;

         display: flex;
         justify-content: center;
         align-content: center;

         &:hover {
            background-color: #495420b7;
         }
      }
   }

   &__details {

   }

   &__side-order {
      .side-order-list {
         padding: 0.8rem;

         .side-order-item {
            background-color: #261111;
            padding: 1rem;
   
            display: flex;
            gap: 0.5em;
   
            margin-bottom: .2rem;
   
   
            input {
   
            }
   
            label {
               color: red;
               font-size: 14px;
               font-weight: bold;
            }
         }
      }
   

   }
}
</style>
