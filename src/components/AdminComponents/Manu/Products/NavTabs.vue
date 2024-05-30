<template>
   <div class="tab-manu"> 
      <div v-for="tab in tabs" :key="tab" class="one-tab" :class="{ active: tab === selected }" @click="setTab(tab)">
         <button>
            <SettingsIcon/>
         </button>
         <h3>{{tab}}</h3>
      </div>
   </div>
   
   <!-- <div class="content"> -->
      <slot></slot>
   <!-- </div> -->
</template>

<script>
export default {
   emits: ['selected'],
   props: {
      tabs: {
         type: Array,
         require: true
      },
      selected: {
         type: String,
         require: true
      }
   },
   methods: {
      setTab(tab) {
         this.$emit('selected', tab)
      }
   }
}
</script>

<style lang="scss">
// .tab-manu {
//    display: grid;
//    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));

//    .one-tab {
//       box-shadow: 
//          0 2px 15px rgba(0, 0, 0, 0.6),
//          0 2px 15px rgba(0, 0, 0, 0.6) inset;
//          margin-right: 2px;
//          margin-bottom: 2px;
//    }
   
//    div {
//       position: relative;
//       padding: 20px;
//       // background-color: #ddd;
//       cursor: pointer;
//       text-align: center;
//       border-radius: 7px;

//       &:hover {
//          background-color: #a8a1a1;
//       }
      
//       &.active {
//          color: #903e3e;
//          background-color: #a8a1a1;
//       }
//       &.active::before {
//          content: "";
//          width: 62px;
//          height: 7px;
//          background-color: #903e3e;
//          position: absolute;
//          bottom: 0;
//          border-radius: 7px 7px 0 0;
//          translate: -18%;
//          transition: 6s;
//       }

//       h3 {
//          margin-top: 7px;
//       }
//    }
// }
</style>