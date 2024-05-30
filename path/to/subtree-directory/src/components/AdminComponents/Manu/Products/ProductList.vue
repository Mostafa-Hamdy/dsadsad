<template>
   <section class="compone">
      <header>
         <h3 class="title-component">Products List</h3>
      </header>

      <div class="header-comp">
         <BaseInput
            label="Search..."
            type="search"
            v-model="searchValue"
         ></BaseInput>

         <TheCart />
      </div>

      <nav class="select-box">
         <a
            class="select-box__select"
            :class="{ active: toggleActive }"
            @click="toggleSelect"
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
               <a @click="updateActiveCategory">{{ category }}</a>
            </li>
         </ul>
      </nav>

      <ul class="products-list">
         <ProductCard v-for="item in filterOrder" :item="item" :key="item" />
      </ul>
   </section>
</template>

<script>
import TabManu from "./NavTabs.vue";
import ProductCard from "./ProductCard.vue";
import TheCart from "./../Cart/TheCart.vue";

export default {
   name: "ProductList",
   components: {
      TabManu,
      ProductCard,
      TheCart,
   },
   data() {
      return {
         selected: "Beef",
         searchValue: "",
         tabs: [
            "Beef",
            "Chicken",
            "Fish",
            "Bavrage",
            "soup",
            "Appetizer",
            "sadsa",
         ],
         toggleActive: false,
         categories: ["All", "Beef", "Chicken"],
         activeCategory: "All",
      };
   },
   computed: {
      ProductData() {
         return this.$store.state.admin.products;
      },
      filterOrder() {
         return this.ProductData.filter((el) =>
            el.title.match(this.searchValue.toLowerCase())
         );
      },
   },
   methods: {
      setSelected(tab) {
         this.selected = tab;
      },
      toggleSelect() {
         this.toggleActive = !this.toggleActive;
      },
      updateActiveCategory(e) {
         this.activeCategory = e.target.text;
         this.toggleSelect();
      },
   },
   created() {
      // console.log(this.ProductData);
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

.products-list {
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
</style>
