<template>
  <h1>test5- put</h1>
  <input type="text" v-model="putItemContents" />
  <button @click="putItems('ws_05000', 'w2021')">putItems 품목수정</button>
</template>

<script lang="ts">
import axios from "axios";
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      putItemContents: "",
    };
  },
  methods: {
    putItems(user_code: string, table_prefix: string) {
      const putItemsData = {
        it_code: "03730",
        it_name: "키타진(유)",
        it_unit: "500ml",
        it_category: 1,
        it_gubun: 0,
        it_docksung: 0,
        it_company: 2,
        it_tax: 0,
        it_hanggup: 0,
        it_youtonggigan: "",
        it_youhosunbun: "",
        it_gaetong: "",
        it_chmgo: "",
        it_indanga: 4250,
        it_dodanga: 3968,
        it_sodanga: 5000,
        it_hydanga: 0,
        it_godanga: 0,
        it_gidanga: 1000,
        it_boxsu: 0,
        it_stock: 0,
        it_point: 0,
        it_barcode: 8809071410020,
        it_homepage: "",
        it_bigo: "",
        it_jegoyear: 30,
        it_field1: 1,
        it_field2: 0,
        it_field3: 0,
        it_field4: 0,
        it_effect: 0,
        it_forecolor: 0,
        it_backcolor: 16777215,
        it_noja: 0,
        it_memo: "",
        it_addno: "1-살균-3",
        it_addname: "키타진",
        it_danwi: "",
        it_category2: 0,
      };
      axios
        .put(
          `https://tapi.wssw.kr/items`,
          {
            items: [putItemsData],
          },
          {
            params: {
              user_code,
              table_prefix,
            },
          }
        )
        .then((res) => {
          console.log("putItems : ", res);
          this.putItemContents = "";
        });
    },
  },
});
</script>
