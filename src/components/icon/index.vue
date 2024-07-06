<template>
  <i :class="classRef" ref="iconRef"> </i>
</template>

<script setup lang="ts">
import { computed, defineProps, onMounted, ref } from "vue";
import "@/assets/icon-font/iconfont.less";
import type { IIconProps } from "./index.types";
import { CIconFont } from "./index.const";
import { setCustomizeProperty } from "@/utils/domActions";

// props参数
const props = defineProps<Readonly<IIconProps>>();
// 类样式计算属性
const classRef = computed<string>(() => {
  return [CIconFont, `${CIconFont}-${props.type}`].join(" ");
});
// iconDom元素对象
const iconRef = ref<HTMLElement>();

onMounted(() => {
  const propertyParams = [{ name: "--color", val: props.color as string }];
  if (props.size) {
    propertyParams.push({ name: "--size", val: `${props.size}px` });
  }
  setCustomizeProperty(iconRef, propertyParams);
});
</script>

<style lang="less" scoped>
@import url("@/assets/icon-font/variables.less");

.@{font-family} {
  color: var(--color);
  font-size: var(--size);
}
</style>
