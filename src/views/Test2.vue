<template>
  <h1>품목리스트 api 불러오기 연습</h1>
  <!-- <button @click="getItemList('00001')">품목 부르기 버튼</button> -->
  <button @click="getItemListPlz('00001', 'ws_05000')">품목 부르기 버튼</button>
</template>

<script lang="ts">
import axios from "axios";
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      isItemList: "",
    };
  },
  //   methods: {
  //     getItemList(itemKey: string) {
  //       axios
  //         .get(`https://tapi.wssw.kr/items/${itemKey}`, {
  //           params: {
  //             itemKey,
  //           },
  //         })
  //         .then((res) => {
  //           console.log(res);
  //           //   this.isItemList =  ""
  //         });
  //     },ㅠ
  //   },
  setup() {
    const getItemListPlz = (itemKey: string, user_code: string) => {
      console.log("쿨릭");
      axios
        .get(`https://tapi.wssw.kr/items/${itemKey}`, {
          params: { itemKey, user_code },
        })
        .then((res) => {
          console.log(res);
        });
    };
    return { getItemListPlz };
  },
});
</script>
