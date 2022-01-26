<template>
  <div>
    <header>
      <h1>Vue Todo List with Typescript</h1>
    </header>
    <main>
    <!-- v-model로 todoText를 묶어도 됨. -->
      <TodoInput 
        :item="todoText" 
        @input="updateTodoText($event.data)" 
        @add="addTodoItem"
      />
    <!-- updateTodoText($event)(vue3) = updateTodoText (vue2) -->
    </main>
    <div>
      <ul>
        <TodoListItem v-for="(todoItem, index) in todoItems" :key="index" :index="index" :todoItem="todoItem" @toggle="toggleTodoItemComplete" @remove="removeTodoItem"></TodoListItem>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TodoInput from './components/TodoInput.vue'
import TodoListItem from './components/TodoListItem.vue';

const STORAGE_KEY = "vue-todo-ts-ver1" // STORAGE_KEY를 이용해서 저장된 값을 불러올 것.
const storage = {
  save(todoItems: any[]){
    const parsed = JSON.stringify(todoItems)
    // 배열을 받아서 문자열로 바꾸고,
    localStorage.setItem(STORAGE_KEY, parsed)
    // 받은 문자열을 setItem에 담아줌. 저장된 위치 = STORAGE_KEY
  },
  fetch(){ // localstorage에 있는 아이템 꺼내기
    const todoItems = localStorage.getItem(STORAGE_KEY) || "[]";
    // todoItems의 불러온 값이 null 이라면 "[]"" 빈배열. 
    // JSON.parse의 첫 번쨰 타입은 string이어야함 = 그냥 []빈배열로만 하면 string인줄 모름. = "[]"
    const result = JSON.parse(todoItems); // JSON.parse형태로 todoItems를 받음. 
    return result;
  },
}

export interface Todo { // 객체를 위한 타입을 지정하는 영역
  title: string;
  done: any;
}

export default defineComponent({
  components:{ TodoInput, TodoListItem },
  data(){
    return {
      todoText:"" ,// props 내려보낼 부분 
      todoItems: [] as Todo[], // 위에 지정해준 Todo로 타입 지정
    }
  },
  methods:{
    updateTodoText(value:string){ 
      console.log('여기1',value)
      // 하위에서 emit받을 때 value의 타입이 htmlInputElement로 정해놨기 때문에 string으로 받음
      this.todoText+=value; 
      //input에서 emit받은 값을 todoText로 들어감
    },
    addTodoItem(){
      const value = this.todoText;
      const todo : Todo = {
        title:value,
        done: false
      }
      this.todoItems.push(todo);
      storage.save(this.todoItems) //동일한 key 값가지고 value만 바꿔줌.
      // localStorage.setItem(value, value);
      // (key, value) = value 값은 string으로 받아야 꺼내 보기 편함.
      this.initTodoText();
    },
    initTodoText(){
      this.todoText=""
      //addTodoItem 실행 시 함께 실행되며, input의 값을 빈 값으로 바꿈.
    },
    fetchTodoItems(){
      this.todoItems = storage.fetch();
    },
    removeTodoItem(index:number){
      console.log("remove", index)
      this.todoItems.splice(index, 1) //index에서 하나를 지우겠다.
      storage.save(this.todoItems)
    },
    toggleTodoItemComplete(todoItem:Todo, index:number){ //emit받은 todoItem도 가져옴.
      this.todoItems.splice(index, 1, {
        ...todoItem, //타이틀은 그대로 두고 
        done: !todoItem.done //done만 바꿈.
        // title: todoItem.title,  
        //속성이 이렇게 소수일 떈 하나하나 써도 되지만. 많을 땐 코드가 너무 길어지니까 위처럼 함. 
      });
      storage.save(this.todoItems) //toggleTodoItemComplete실행 했을 때 storage의 배열 다시 업데이트.
    }
  },
  created(){ // vue의 생명주기 created (=화면에 불러오기 전 뿌려줌.)
    this.fetchTodoItems();
  }
})
</script>


<style scoped></style>