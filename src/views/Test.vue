<template>
  <div class="Test">
    <h1>Test page</h1>
    <input type="text" v-model="itNameInput" />
    <button @click="getItem('ws_05000', itNameInput)">클릭</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import axios from "axios";

// interface itemType {
//   user_code: string;
//   table_prefix: string;
//   it_name: string;
// }

export default defineComponent({
  data() {
    return {
      itNameInput: "",
    };
  },
  // methods: {
  //   getItemMethods() {
  //     axios
  //       .get(`https://tapi.wssw.kr/items`, {
  //         params: {
  //           user_code: "ws_05000",
  //         },
  //       })
  //       .then((res) => {
  //         console.log(res);
  //         this.testData = 2;
  //       });
  //   },
  // },
  setup() {
    const testRef = ref(1);
    const itName = ref("");

    // onMounted(() => {
    //   getItem("ws_05000");
    // });

    const getItem = (user_code: string, it_name: string) => {
      const pramaObj = {
        user_code,
        it_name,
        pageNum: 1,
        limit: 5,
      };
      axios
        .get(`https://tapi.wssw.kr/items`, {
          params: pramaObj,
        })
        .then((res) => {
          console.log(res);
        });
    };

    return {
      testRef,
      itName,
      getItem,
    };
  },
});
</script>
