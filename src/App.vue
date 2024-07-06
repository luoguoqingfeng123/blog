<template>
  <div class="app">
    <Page
      :total="totalRef"
      :current-page="currentPageRef"
      @page-change="pageChange"
      :show-numer="8"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Page from "@/components/page/index.vue";
const currentPageRef = ref<number>(1);
const totalRef = ref<number>(200);

function pageChange(index: number) {
  currentPageRef.value = index;
}
</script>

<style scoped lang="less">
.app {
  display: flex;
  justify-content: center;
  padding-top: 50px;
}
</style>
