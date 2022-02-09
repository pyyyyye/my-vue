<template>
  <div>
    <label for="todo-input">오늘 할 일 1: </label>
    <input 
      id="todo-input" 
      type="text" 
      @keydown="handleInput($event)"
    />
    <!-- @keydown(vue3) = @input(vue2) -->
    <!-- handleInput($event)(vue3) = handleInput (vue2) -->
    <!-- vue3와 vue2의 차이가 너무 많다 -->
    <button @click="addTodo" type="button">추가</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props:{
    item:{
      type:String, 
      required:true // 필수로 내려준다.
    }
  },
  computed:{
    inputData(){
      return this.item
    }
  },
  methods: {
    handleInput(event:InputEvent){
      // console.log('여기',data);
      // this.$emit("input", event.target.value); 
      // 위 방법처럼 하면 target이 null일 때 error! 
      // this.$emit("input", event.target!.value);  = target이 항상 있다고 정리해줌.
      // if(!event.target){ 위 event.target! 보다 더 안전한 방법.
      //   return; // event.target이 없으면 return 하도록.
      // }
      const eventTarget = event.target as HTMLInputElement;
      console.log('이벤트',eventTarget)
      this.$emit("input", {data:eventTarget});
      // 위에 event.target에 대해 정의해준 구문들과 같은 내용임. 
    },
    addTodo(){
      this.$emit("add")
      console.log("추가")
    },
  },
})
</script>


<style scoped></style>