<template>
    <img :src="url" class="app-avatar" ref="avatarRef">
</template>

<script setup lang="ts">
import { defineProps, withDefaults, onMounted, ref } from 'vue'
import type { IAvatarProps } from './index.types';
import { setCustomizeProperty } from '@/utils/domActions';

const props = withDefaults(defineProps<Readonly<IAvatarProps>>(), {
    size: 50
})
const avatarRef = ref<HTMLElement>()

onMounted(() => {
    setCustomizeProperty(avatarRef, "--size", `${props.size}px`)
})

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
