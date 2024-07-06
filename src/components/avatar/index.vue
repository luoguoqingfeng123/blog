<template>
  <img :src="url" class="app-avatar" ref="avatarRef" />
</template>

<script setup lang="ts">
import { defineProps, withDefaults, onMounted, ref } from "vue";
import type { IAvatarProps } from "./index.types";
import { setCustomizeProperty } from "@/utils/domActions";

// props参数
const props = withDefaults(defineProps<Readonly<IAvatarProps>>(), {
  size: 50,
});
// avatarDom元素对象
const avatarRef = ref<HTMLElement>();

onMounted(() => {
  setCustomizeProperty(avatarRef, { name: "--size", val: `${props.size}px` });
});
</script>

<style lang="less" scoped>
.app-avatar {
  object-fit: cover;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  display: block;
}
</style>
