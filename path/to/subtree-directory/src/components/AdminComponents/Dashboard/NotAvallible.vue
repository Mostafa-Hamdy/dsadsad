<template>
   <section class="not-avallible">
      <header>
         <h2 class="title-component">Not Avallible</h2>

         <input type="text" placeholder="Add Order..." class="tag-input__text" @keydown="addTag" />
      </header>

      <div class="tags-list" >
         <div class="list-item"  v-for="(tag, index) in tags" :key="index">
            <p class="tag-text">{{ tag }}</p>
            
            <button @click="removeTag(index)"> 
               <CloseIcon/>
            </button>
         </div>
      </div>
      <p>{{error}}</p>
   </section>
</template>

<script>
export default {
   data() {
      return {
         tags: [],
         error: ''
      };
   },
   methods: {
      addTag(event) {
         if (event.code == 'Comma' || event.code == 'Enter') {
            event.preventDefault()
            let inputValue = event.target.value.trim()

            if (inputValue) {
               this.tags.push(inputValue)
               event.target.value = ''
            }
         }
      },
      removeTag(index) {
         this.tags.splice(index, 1)
      }
   }
};
</script>

<style lang="scss" scoped>
.not-avallible {
   display: flex;
   flex-direction: column;

   margin-bottom: 15px;

   header  {
      // margin: 4rem auto 1rem;
      h1 {
         // margin-bottom: 10px;
      }
   }

   .tags-list {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
      gap: 5px;
      
      // .one-card:not(:last-child) {
         // margin-right: 10px; => جميل او ليه كدا  Animation effecat مش عارف ليه دى عملت 
      // }
      .list-item {
         /*  width: calc(100% / 4 - 10px);  
            gap ال 10 دول بتوع ال    
            بيبوظوو المساحات child لل gap, margin عشان ال    
         */
         background-color: #6b3939;
         text-align: center;
         padding: 1.3rem;
         border-radius: 6px;
         position: relative;
         .one-card > button {
            opacity: 0.75;
            // position: absolute;
            // top: 7px;
            // right: 9px;

            &:hover {

            }
         }
         .tag-text {
            flex: 1 1 0;
         }
      }
   }
}




// .tag-input {
//    width: 100%;
//    height: 50px;
//    font-size: 0.9em;
// }

// .tag-input__tag {
//    height: 30px;
//    background-color: #eee;
//    float: left;
//    margin-right: 10px;
//    margin-top: 10px;
//    line-height: 30px;
//    padding: 0 5px;
//    border-radius: 5px;
// }

// .tag-input__tag > button {
//    opacity: 0.75;
// }

// .tag-input__text {
//    font-size: 0.9em;
//    line-height: 50px;
//    background: none;
// }
</style>
