<template>
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
            <IconArrowSelect/>
         </div>
      </a>

      <ul class="select-box__list">
         <li v-for="category in categories" :key="category" class="select-item">
            <a @click="filterOrder(category)">{{ category }}</a>
         </li>
      </ul>
   </nav>
</template>

<script>
export default {
   name: "NewNavTabs",
   props: ["filterOrder"],
   data() {
      return {
         selectIsOpen: false,
         activeCategory: "All",
         categories: ["All", "Beef", "Chicken"],
      }
   },
   methods: {
      toggleSelectIsOpen() {
         this.selectIsOpen = !this.selectIsOpen;
      },
      updateActiveCategory(e) {
         this.activeCategory = e.target.text;
         this.toggleSelectIsOpen();
      },
   }
};
</script>

<style lang="scss" scoped>
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
