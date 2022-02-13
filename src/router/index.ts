import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Test from "../views/Test.vue";
import Test2 from "../views/Test2.vue";
import Test3 from "../views/Test3.vue";
import Test4 from "../views/Test4.vue";
import Test5 from "../views/Test5_put.vue";
import Homework_TodoList from "../views/Homework_TodoList.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/test",
    name: "Test",
    component: Test,
  },
  {
    path: "/test2",
    name: "Test2",
    component: Test2,
  },
  {
    path: "/test3",
    name: "Test3",
    component: Test3,
  },
  {
    path: "/test4",
    name: "Test4",
    component: Test4,
  },
  {
    path: "/test5",
    name: "Test5",
    component: Test5,
  },
  {
    path: "/Homework_TodoList",
    name: "Homework_TodoList",
    component: Homework_TodoList,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
