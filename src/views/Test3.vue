<template>
  <h1>test 3</h1>
  <input type="text" v-model="memo" />
  <button @click="postMomo()">전송</button><br />
  <button @click="postVenders('ws_05000', 'w2021')">memos-전송</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
export default defineComponent({
  data() {
    return {
      memo: "",
    };
  },
  methods: {
    postMomo() {
      const postData = {
        user_code: "ws_05000",
        table_prefix: "w2021",
        b_mo_id: "S",
        b_mo_code: "00001",
        b_mo_type: "w",
        b_mo_memo1: "메모내용",
      };
      axios
        .post(`https://tapi.wssw.kr/memos`, {
          postData,
        })
        .then((res) => {
          console.log(res);
        });
    },

    postVenders(user_code: string, table_prefix: string) {
      const postVenderData = {
        mb_code: "00032",
        mb_name: "hyejinTes",
        mb_area: "",
        mb_tel: "",
        mb_owner: "",
        mb_hp: "010-5555-1892",
        mb_etc_tel: "",
        mb_fax: "",
        mb_jumin: "123",
        mb_yeargum: 0,
        mb_post: "",
        mb_postjuso: "",
        mb_juso: "",
        mb_main_crop: "",
        mb_farm_size: "",
        mb_homepage: "",
        mb_email: "",
        mb_etc: "",
        mb_bunru: 0,
        mb_danga_gubun: 1,
        mb_tax: 0,
        mb_sms: -1,
        mb_farmck: 0,
        mb_idx: "0",
        mb_saupno: "",
        mb_uptae: "",
        mb_jongmok: "",
        mb_memo: "",
        mb_damdang: "",
        mb_damdangpon: "",
        mb_cotel: "",
        mb_bankno: "",
        mb_gaein: -1,
        mb_sunmon: -1,
        mb_birth: "",
        mb_danga_vat: 0,
        mb_grant: -1,
        mb_10: 0,
        mb_20: 0,
        mb_30: 0,
        mb_40: 0,
        mb_farmbigo: "",
        mb_effect: "0000",
        mb_forecolor: 0,
        mb_backcolor: 16777215,
        mb_imsijaro: "",
        mb_imsijarock: 0,
        mb_noja: 0,
        mb_danga_sel: 0,
        mb_farmCode: "",
        mb_agree: 0,
        mb_agree_date: "",
        mb_agree_sign: "",
      };
      axios
        .post(
          `https://tapi.wssw.kr/customers`,
          { customers: [postVenderData] },

          {
            params: {
              user_code,
              table_prefix,
            },
          }
        )
        .then((res) => {
          console.log("postVenderData", res);
        });
    },
  },
});
</script>
