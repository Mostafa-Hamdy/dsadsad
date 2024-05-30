<template>
   <section class="compone">
      <header>
         <h3 class="title-component">Products List</h3>
      </header>

      <div class="header-comp">
         <input type="search" v-model="searchValue"/>
      </div>

      <nav class="select-box">
         <a
            class="select-box__select"
            :class="{ active: selectIsOpen }"
            @click="toggleSelectIsOpen"
         >
            <span class="select-value">
               {{ activeCategory }}
            </span>

            <div class="select-icon">
               <IconArrowSelect />
            </div>
         </a>

         <ul class="select-box__list">
            <li
               v-for="category in categories"
               :key="category"
               class="select-item"
            >
               <a @click="filterCategory">{{ category }}</a>
            </li>
         </ul>
      </nav>

      <ul>
         <li class="wrapper-card">
            <template v-for="item in serchInput" :key="item.id">
               <ProductCard :item="item" />
            </template>
         </li>
      </ul>
   </section>
</template>

<script>
// import NewNavTabs from "./NewNavTabs.vue";
import ProductCard from "./NewProductCard.vue";
import ProductsData from "../../../../mock/ProductsData.json";

export default {
   name: "ProductList",
   components: {
      // NewNavTabs,
      ProductCard,
   },
   data() {
      return {
         // ProductsData,
         prodData: ProductsData.products,
         selected: "Beef",
         searchValue: "",
         catNameProp: "",
         selectIsOpen: false,
         activeCategory: "All",
         categories: ["All", "Beef", "Chicken"],
      };
   },
   computed: {
      getData() {
         return this.$store.state.admin.products;
      },
      serchInput() {
         return this.getData.filter((order) => {
            return order.title.match(this.searchValue.toLocaleLowerCase())
         });
      },
      // selectedFilter() {
      //    if (catNameProp !== 'All') {
      //       return this.prodData.filter((order) => {
      //          return order.category == catNameProp;
      //       })
      //    }
      // }
   },
   updated() {
      console.log(this.prodData);
   },
   methods: {
      filterCategory(e) {
         this.catNameProp = e.target.text;
      },
      toggleSelectIsOpen() {
         this.selectIsOpen = !this.selectIsOpen;
      },
   },
   created() {
      // console.log(this.ProductData);
      // console.log(this.ProductData.products);
   },
};
</script>

<style lang="scss" scoped>
.tab-content {
   display: grid;
   grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
   gap: 10px;
   padding: 15px;
}

.compone {
   position: relative;
   margin-bottom: 25px;
}

.wrapper-card {
   display: grid;
   grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
   gap: 5px;
}

.header-comp {
   display: grid;
   grid-template-columns: 1fr auto;
   gap: 5px;

   margin-bottom: 10px;
}
.select-box {
   position: relative;
   margin-bottom: 15px;

   &__select {
      display: flex;
      justify-content: space-between;
      align-items: center;

      color: var(--light-gray);
      background: var(--eerie-black-2);
      border: 1px solid var(--jet);
      border-radius: 14px;

      width: 100%;
      padding: 12px 16px;

      &.active > .select-icon {
         rotate: 180deg;
      }
      &.active + .select-box__list {
         opacity: 1;
         pointer-events: all;
      }
   }
   &__list {
      position: absolute;
      top: calc(100% + 6px);
      z-index: 2;

      display: grid;

      color: var(--light-gray);
      background: var(--eerie-black-2);
      border: 1px solid var(--jet);
      border-radius: 14px;

      opacity: 0;
      // visibility: hidden;
      pointer-events: none;
      transition: opacity 0.15s ease-in-out;

      width: 100%;
      padding: 12px 7px;

      > li a {
         width: 100%;
         text-align: left;
         padding: 8px 10px;
         border-radius: 5px;

         &:hover {
            background: hsl(240, 2%, 20%);
         }

         .select-icon svg {
            stroke: aliceblue;
            fill: transparent;
            height: 14px;
         }
      }
   }
}
</style>
