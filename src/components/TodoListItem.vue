<template>
    <li>
        <span class="item" :class="todoItemClass" @click="toggleItem">{{ todoItem.title }}</span>
        <!-- <button @click="$emit('delete')">삭제</button> -->
        <!-- 위처럼 emit을 보내도 되지만, 이렇게 되면 상위 파일에서도 수정해야 하는 부분이 생기니까 가급적 안에서 만들 것. -->
        <button @click="removeItem">삭제</button>
    </li>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import {Todo} from '@/App.vue'
export default defineComponent({
   props:{
       todoItem : Object as PropType<Todo> || undefined,
       index : Number
       //!app.vue에서 만든 interface Todo를 불러올 떄 ctrl + space하면 된다는데 안됨.
   }, 
   computed:{
       todoItemClass() : string | null{ // computed를 쓸 땐 속성에 대한 타입과 반환타입을 꼭 적어줘야 함. 
           return this.todoItem.done ? 'complete' : null
       }
   },
   methods:{
       toggleItem(){
           this.$emit("toggle", this.todoItem, this.index);
       },
       removeItem(){
           this.$emit("remove", this.index);
       },
   }
})
</script>


<style scoped>
.item{
    cursor: pointer;
}
.complete{
    text-decoration: line-through;
}
</style>