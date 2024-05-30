<template>

   <nav class="navbar" :class="{ open: sideBarActive }">

      <ul class="navbar__list">
         <RouterLink :to="{ name: 'TackOrder' }" class="navbar__item">
            <span class="item-icon"><HomeIcon /></span>

            <span class="item-title">Dash</span>
         </RouterLink>

         <RouterLink :to="{ name: 'Dashboard' }" class="navbar__item">
            <span class="item-icon"><HomeIcon /></span>

            <span class="item-title">Dash</span>
         </RouterLink>

         <RouterLink :to="{ name: 'Clients' }" class="navbar__item">
            <span class="item-icon"><ClientIcon /></span>

            <span class="item-title">Clients</span>
         </RouterLink>

         <RouterLink :to="{ name: 'Manu' }" class="navbar__item">
            <span class="item-icon"><ManuIcon /></span>

            <span class="item-title">Manu</span>
         </RouterLink>

         <RouterLink :to="{ name: 'OrderTrack' }" class="navbar__item">
            <span class="item-icon"><ManuIcon /></span>

            <span class="item-title">track</span>
         </RouterLink>

         <RouterLink :to="{ name: 'Settings' }" class="navbar__item">
            <span class="item-icon"><SettingsIcon /></span>

            <span class="item-title">Settings</span>
         </RouterLink>

         <RouterLink :to="{ name: 'Admin' }" class="navbar__item">
            <span class="item-icon"><LogoutIcon /></span>

            <span class="item-title">Logout</span>
         </RouterLink>
      </ul>
      
   </nav>

</template>

<script>
export default {
   name: "TheNavbar"
};
</script>

<style lang="scss" scoped>
.navbar {

   position: fixed;
   left: 0;
   bottom: 0;
   z-index: 5;
   overflow: hidden;

   width: 100%;
   background: hsla(240, 1%, 17%, 0.75);
   backdrop-filter: blur(10px);
   border-radius: 12px 12px 0px 0px;

   display: flex;
   justify-content: center;

      
   &__list {

      display: flex;
      // justify-content: center;
      align-items: center;


      overflow-x: auto;
      width: 100%;
      
      .navbar__item {

         display: flex;
         flex-direction: column;
         align-items: center;

         margin: 5px 24px;     /*
            flex دى كويسة مع ال
            padding, margin كل العناصر واحد ولو فى زيادة محتوى بياخدوو على حساب ال width بنعمل دى عشان نثبت

            فى مساحة كبيرة click بيعمل ال padding عشان ال margin عملتها

         */
         
         > .item-icon {}

         > .item-title {
            font-size: 12px;
            opacity: 1;
            transition: opacity .5s;
         }

         &.router-link-exact-active  {
            position: relative;
            > .item-icon {}
            
            > .item-title {
               color: var(--vegas-gold);
            }

            &::before {
               content: "";
               position: absolute;
               top: -4px;

               width: 20px;
               height: 3px;
               background: var(--vegas-gold);
               border-radius: 50px;
            }
            &::after {
               content: "";
               width: 20px;
               height: 20px;
               background: #ffff001f;
               position: absolute;
            }
         }
      }
   }
}





// .sidebar {
//    &__btn-toggle {}
//    &__navigation {
//       display: none;
//       position: fixed;
//       top: calc(100% + 6px);
//       left: 0;

//       height: 88vh;

//       text-align: center;

//       background: linear-gradient(
//          to bottom right,
//          hsl(240, 1%, 25%) 3%,
//          hsl(0, 0%, 19%) 97%
//       );
//       border-radius: 5px;
//       box-shadow: 0 16px 30px hsla(0, 0%, 0%, 0.25);


//       &::after {
//          content: "";
//          position: absolute;
//          inset: 0 1px 0 0;
//          z-index: -1;

//          background: linear-gradient(
//             to bottom right,
//             hsla(240, 1%, 18%, 0.251) 0%,
//             hsla(240, 2%, 11%, 0) 100%
//          ),hsl(240, 2%, 13%);
//          border-radius: inherit;
//       }

//       &.open {
//          display: block;
//       }
      
//       &__logo-box {
//          margin-top: 15px;
//          margin-bottom: 45px;
//       }

//       &__lists {

//          display: flex;
//          flex-direction: column;
//          justify-content: space-between;
//          align-items: center;
         
//          height: 77%;



//          &__list{

//             display: flex;
//             flex-direction: column;
//             justify-content: center;
//             align-items: center;
//             gap: 16px;

//             &__link {
//                display: flex;
//                flex-direction: column;
//                align-items: center;

//                .link-title {
//                   opacity: 0;
//                }
//                &.router-link-exact-active {
//                   .link-icon, .link-title {
//                      opacity: 1;
//                      color: red;
//                      transition: opacity .3s ease-in-out;
//                   }
//                }
//             }

//          }

//          .space-list {
//             flex-grow: 1;
//          }
//       }
//    }

// }


// #region => 
// .icon-box {
//    padding: 20px;
// }
// .sidebar {
//    position: fixed;
//    top: calc(100% + 6px);
//    left: 0;

//    height: 88vh;

//    // display: flex;
//    // flex-direction: column;
//    // justify-content: center;
//    // align-items: center;

//    background: linear-gradient(
//       to bottom right,
//       hsl(240, 1%, 25%) 3%,
//       hsl(0, 0%, 19%) 97%
//    );
//    border-radius: 5px;
//    box-shadow: 0 16px 30px hsla(0, 0%, 0%, 0.25);
//    z-index: 1;

//    width: var(--sidebar-width);
//    // padding: var(--padding);

//    &::after {
//       content: "";
//       position: absolute;
//       inset: 0 1px 0 0;
//       z-index: -1;

//       background: linear-gradient(
//          to bottom right,
//          hsla(240, 1%, 18%, 0.251) 0%,
//          hsla(240, 2%, 11%, 0) 100%
//       ),hsl(240, 2%, 13%);
//       border-radius: inherit;
//    }

//    &.open {
//       display: block;
//    }

//    &__links {

//       &:hover {
//       }
//    }

//    &__list {

//    }

//    &__link {
//       display: flex;
//       flex-direction: column;
//       align-items: center;
//    }
// }

// .sidebar {
//    position: fixed;
//    left: 0;
//    bottom: 0;
//    z-index: 5;

//    width: 100%;
//    background: hsla(240, 1%, 17%, 0.75);
//    backdrop-filter: blur(10px);
//    border-radius: 12px 12px 0px 0px;

//    display: flex;
//    justify-content: center;
// }
// .sidebar__logo-box {
//    display: none;
//    border-radius: 10px;
// }
// .sidebar__links {

//    display: flex;
//    justify-content: flex-start;
//    // align-items: center;

//    overflow-x: auto;
//    scroll-snap-type: x mandatory;
//    // scroll-behavior: smooth;   /* ? حاسس دى مش شغالة  */
//    // overscroll-behavior-inline: contain;  /* ? ودى كمان  */

//    &:hover {
//       // overflow-x: auto;
//    }

// }
// .sidebar__list {

//    display: flex;
//    justify-content: center;
//    align-items: center;

//    min-width: 100%;
//    scroll-snap-align: center;
// }
// .sidebar__link {
//    display: flex;
//    flex-direction: column;
//    align-items: center;

//    margin: 16px 24px;     /*
//       flex دى كويسة مع ال
//       padding, margin كل العناصر واحد ولو فى زيادة محتوى بياخدوو على حساب ال width بنعمل دى عشان نثبت

//       فى مساحة كبيرة click بيعمل ال padding عشان ال margin عملتها

//    */

//    .link-icon {

//    }
//    .link-title {
//       color: var(--vegas-gold);
//       font-size: 12px;
//       opacity: 1;
//       transition: opacity .5s;
//    }
//    &.router-link-exact-active > .item-title {
//       opacity: 1;
//    }
//    // &:focus .text {
//    //    opacity: 1;
//    // }
// }

// .sidebar {
//    position: sticky;
//    display: flex;
//    flex-direction: column;
//    align-items: center;

//    position: relative;
//    background: linear-gradient(
//     to bottom right,
//     hsl(240, 1%, 25%) 3%,
//     hsl(0, 0%, 19%) 97%
//   );
//    padding: 20px;
//    border-radius: 14px;
//    box-shadow: 0 16px 30px hsla(0, 0%, 0%, 0.25);;
//    z-index: 1;

//    width: var(--sidebar-width);
//    height: 100vh;
//    padding: var(--padding);
//    color: var(--dark);

//    border-radius: 20px;

//    &::after {
//     content: "";
//     position: absolute;
//     inset: 0 1px 0 0;
//     background: linear-gradient(
//          to bottom right,
//          hsla(240, 1%, 18%, 0.251) 0%,
//          hsla(240, 2%, 11%, 0) 100%
//       ), hsl(240, 2%, 13%);;
//     border-radius: inherit;
//     z-index: -1;

//    }

//    .logo-box {
//       width: 60px;
//       margin-bottom: 70px;
//       img {
//          width: 100%;
//       }
//    }

//    &__links {
//       display: flex;
//       flex-direction: column;
//       justify-content: space-between;
//       flex: 1 1 0;

//       &__list {
//          display: flex;
//          flex-direction: column;

//          a {
//             display: flex;
//             flex-direction: column;
//             align-items: center;
//             padding: 0.5rem;

//             .icon {
//                margin-bottom: 3px;
//             }
//             .text {
//                font-size: .75rem;
//                white-space: nowrap;
//                opacity: 0;
//             }

//             &:hover {
//                .icon, .text {
//                   color: var(--primary);
//                }
//             }

//             &.router-link-exact-active {
//                .icon, .text {
//                   color: var(--primary);
//                }
//             }
//          }

//       }

//       &:hover .links a .text {
//          opacity: 1;
//          transition: opacity .30s ease-in-out;      /* بس hover فى داخلة ال  */
//       }
//    }

// }
// #endregion

</style>
