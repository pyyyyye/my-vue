<template>
  <HomeMain />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomeMain from "@/components/HomeMain.vue";

export default defineComponent({
  name: "Home",
  components: {
    HomeMain,
  },
});
</script>
