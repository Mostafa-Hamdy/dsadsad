<template>
   <div class="the-cart">
      <button type="button" class="the-cart__btn-toggle-cart icon-box" @click="toggleNav" data-count="cartItem.length">
         <!-- <CartIcon/> -->
         <i>S</i>
         <!-- <span v-if="cartItem.length">{{cartItem.length}}</span> -->
      </button>
      
      <nav class="nav-cart">
         <div class="cart-content">
            <ul v-for="item in cartItem" :key="item">
               <div>
                  <li>{{item.name}} Cabritchosa</li>
      
                  <button @click="RemoveItemFromCart(item.id)">
                     <TerchIcon/>
                  </button>
               </div>

               <div>
                  <li> 
                     <button @click="decrementQty(item.id)">-</button>
                        x {{item.qty}}
                     <button @click="incrementQty(item.id)">+</button>
                  </li>
                  
                  <li>{{item.price}}</li>
               </div>
            </ul>
   
            <p v-if="!cartItem.length"> No Product in cart! </p>
         </div>
   
         <div class="separator"></div>
   
         <ul class="cart-footer">
            <li class="cart-price">
               
            </li>
            <li> Discount: <span></span>  {{totalPrice}} </li>
            <li> SubTotal: <span></span>  {{totalPrice}} </li>
            <li> Tax 1.5%: <span></span> {{taxes}} </li>
            <li> Delivery: <span></span> {{delivery}} </li>
            <li> Total Price: <span></span> {{totalPrice}} </li>
            <li><button @click="placeOrder(cartItem)">Send</button></li>
         </ul>
      </nav>
   </div>
</template>

<script>
export default {
   props: ['item'],
   data() {
      return { 
         cartAdd: {
            id: '',
            price: '',
            amount: '',
            id: '',
         },
         badge: '0',
         quantity: '1',
         delivery: '0',
         taxes: '.5',
         totalPrice: '0'
      }
   },
   computed: {
      showNav() {
         return this.$store.state.admin.navShow;
      },
      cartItem() {
         return this.$store.state.admin.cart;
      },
      totalPrice() {
         return this.cartItem.reduce((a, b) => a + b.qty * b.price, 0 )
      }
   },
   methods: {
      toggleNav() {
         this.$store.commit('admin/toggleAdminNavShow', !this.showNav)
      },
      placeOrder(cartItem) {
         this.$store.dispatch('admin/selectOrderFromCart', cartItem)
         this.$store.dispatch('admin/emptyCart')
         this.$router.push({ name: 'ContinueOrder'})
      },
      RemoveItemFromCart(id) {
         this.$store.dispatch('admin/RemoveItemFromCart', id)
      },
      incrementQty(id) {
         this.$store.dispatch('admin/incrementQty', id)
      },
      decrementQty(id) {
         this.$store.dispatch('admin/decrementQty', id)
      },
   }
}
</script>

<style lang="scss" scoped>

.the-cart {
   .the-cart__btn-toggle-cart {
      width: 45px;
      height: 45px;

      .icon-box {
         width: 45px;
         height: 45px;
      }
      // padding: 1rem;
      // position: relative;

      // background: antiquewhite;
      // border-radius: 50px;
      // border-bottom-left-radius: 10px;
      // border-bottom-right-radius: 10px;

      // width: 50px;

      // &::before {
      //    content: attr(data-count);
      //    position: absolute;
      //    top: 43px;
      //    right: 15px;
      //    color: #e55454;
      //    display: flex;
      //    justify-content: center;
      //    align-items: center;
      //    border-radius: 50%;
      // }

      // &::after {
      //    content: "";

      //    position: absolute;
      //    bottom: 0;
      //    left: -75px;
      //    z-index: -1;
      //    display: block;

      //    background: #faebd7;
      //    width: 200px;
      //    height: 9px;
      //    border-top-left-radius: 10px;
      //    border-top-right-radius: 10px;
      // }
   }

   .nav-cart {
      position: fixed;
      color: #fff;
      background: linear-gradient(
         to bottom right, 
         hsl(240, 1%, 25%) 3%, 
         hsl(0, 0%, 19%) 97%
   );
      width: 400px;
      height: 100vh;
      right: -400px; 
      bottom: 0; 
      z-index: 3;
      border-top-left-radius: 2rem;
      border-bottom-left-radius: 2rem;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      transition: all 0.6s;

      &:after {
      content: "";
      position: absolute;
      inset: 0 0 0 2px;
      background: linear-gradient(
            to bottom right, 
            hsla(240, 1%, 18%, 0.251) 0%, 
            hsla(240, 2%, 11%, 0) 100%
         ), hsl(240, 2%, 13%);;
      border-radius: inherit;
      z-index: -1;

      }

      .cart-opend & {
         right: 0;
         transition: all 0.6s;
      }
      // ul {
      //    display: flex;
      //    li {
      //       flex: 1 1 0;
      //       padding: 7px 20px;
      //       text-align: center;
      //       font-size: 14px;
      //    }
      // }

      .cart-footer {
         flex-direction: column;

         li {
            display: flex;
            justify-content: space-between;
            &:nth-child(even) {
               background-color: var(--dark);
            }
            &:last-child {
               justify-content: space-around;
            }
            span {
               flex: 1 1 0;
            }

         }
      }
      .cart-content {
         display: grid;
         place-content: center;
         
         overflow-y: auto;

         li > button {
            background: red;
            border-radius: 50px;
            text-align: center;
            height: 20px;
            width: 16px;
         }
         button {
            background: red;
            height: 46px;
         }

      }
   }
}

</style>
