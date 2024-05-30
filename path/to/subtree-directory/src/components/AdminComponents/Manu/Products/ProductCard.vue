<template>
   <div class="product-container">
      
      <!-- Product Card -->
      <a
         class="product-card"
         :class="{ 'in-cart': itemInCart }"
         @click="orderSelectionModal"
      >
         <div class="product-card__info">
            <h4 class="product-card__title">{{ item.title }}</h4>

            <p class="product-card__price">{{ item.price }} E.G</p>
         </div>

         <button
            class="product-card__btn-info-more"
            @click.stop="toggleModalHandel"
         >
            <IconAddCart />
         </button>
      </a>

      <!-- Product Details Model -->
      <BaseModal :show="showInfo" @close="toggleModalHandel" :width="400">
         <template #content>
            <div class="product-details">
               <figure>
                  <img src="" alt="" />
               </figure>

               <div class="product__modal__info-details">
                  <div class="text">
                     <h2>{{ item.name }}</h2>
                     <p>{{ item.price }} E.G</p>
                     <p>{{ item.ingredients }}</p>
                  </div>

                  <figure>
                     <img
                        src="./../../../../assets/img/special-dish-banner.jpg"
                        alt="Mosrafa"
                     />
                     <img
                        src="./../../../../assets/img/special-dish-banner.jpg"
                        alt="Mosrafa"
                     />
                     <img
                        src="./../../../../assets/img/special-dish-banner.jpg"
                        alt="Mosrafa"
                     />
                  </figure>
               </div>
            </div>
         </template>
      </BaseModal>

      <!-- Choose Side Product Model -->
      <BaseModal
         :show="orderSelection"
         @close="orderSelectionModal"
         :width="400"
      >
         <template #title-modal>
            <h2 class="title-modal">Choose Side Order</h2>
         </template>

         <template #content>
            <div class="product-side-order">
               <ul class="product-side-order__list">
                  <li class="product-side-order__item">
                     <input type="checkbox" id="rise" />
                     <label for="rise">Rise</label>
                  </li>

                  <li class="product-side-order__item">
                     <input type="checkbox" id="mashed" />
                     <label for="mashed">Mashed</label>
                  </li>

                  <li class="product-side-order__item">
                     <input type="checkbox" id="rise" />
                     <label for="rise">Rise</label>
                  </li>
               </ul>

               <button
                  @click="addItemToCart(item)"
                  @close="orderSelectionModal"
               >
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
};
</script>

<style lang="scss" scoped>
.product-container {
   .product-card {
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

      .product-card__info {
         > .product-card__title {
         }

         > .product-card__price {
         }
      }

      .product-card__btn-info-more {
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

   .product-details {
   }

   .product-side-order {
      .product-side-order__list {
         padding: 0.8rem;

         .product-side-order__item {
            background-color: #261111;
            padding: 1rem;

            display: flex;
            gap: 0.5em;

            margin-bottom: 0.2rem;

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
