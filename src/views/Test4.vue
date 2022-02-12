<template>
  <h1>test 4 - item api 연습</h1>
  <button @click="getItemData('ws_05000')">get (method) 데이터 가져오기</button
  ><br />
  <!-- <button @click="getItems('ws_05000')">get (setup) 데이터 가져오기</button> -->
  <!-- <input type="text" v-model="memo" /> -->
</template>

<script lang="ts">
import axios from "axios";
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {};
  },
  methods: {
    getItemsData(user_code: string) {
      const getItemsParams = {
        user_code,
        table_prefix: "w2021",
        it_name: "가스가민",
        it_category: "1",
        pageNum: 1,
        limit: 3,
      };
      axios
        .get(`https://tapi.wssw.kr/items`, {
          params: {
            //   user_code,
            getItemsParams,
          },
        })
        .then((res) => {
          console.log("getItemData : ", res);
        });
    },
  },
  //   setup() {
  //     const getItems = (user_code: string) => {
  //       console.log("getItems 클릭");
  //       axios
  //         .get(`https://tapi.wssw.kr/items`, {
  //           params: { user_code },
  //         })
  //         .then((res) => {
  //           console.log("getItems : ", res);
  //         });
  //     };
  //     return { getItems };
  //   },
});
</script>
