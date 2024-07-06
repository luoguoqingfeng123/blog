<template>
  <div class="page-container">
    <div :class="{ disabled: currentPage === 1 }" @click="toStart" title="首页">
      |&Ll;
    </div>
    <div @click="previous" :class="{ disabled: currentPage === 1 }" title="上一页">
      &Ll;
    </div>
    <template v-for="(item, index) in showNumer" :key="item">
      <div
        :class="{ active: currentPage === minPageRef + index }"
        @click="handleClick(minPageRef + index)"
        v-if="minPageRef + index <= maxPageRef"
      >
        {{ minPageRef + index }}
      </div>
    </template>
    <div :class="{ disabled: currentPage === totalPageRef }" @click="next" title="下一页">
      &Gg;
    </div>
    <div :class="{ disabled: currentPage === totalPageRef }" @click="toEnd" title="尾页">
      &Gg;|
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, withDefaults, computed, defineEmits } from "vue";
import type { IPageProps } from "./index.types";

// props参数
const props = withDefaults(defineProps<IPageProps>(), {
  pageSize: 10,
  showNumer: 5,
});
// 事件
const emit = defineEmits<{
  "page-change": [index: number];
}>();
// 显示总条数的一半
const halfShowNumber = computed<number>(() => {
  return Math.floor(props.showNumer / 2);
});
// 计算总页数
const totalPageRef = computed<number>(() => {
  return Math.ceil(props.total / props.pageSize);
});
// 最大页码
const maxPageRef = computed<number>(() => {
  const max = minPageRef.value + props.showNumer - 1;
  return max > totalPageRef.value ? totalPageRef.value : max;
});
// 最小页码
const minPageRef = computed<number>(() => {
  let min = props.currentPage - halfShowNumber.value;
  if (min + props.showNumer - 1 > totalPageRef.value) {
    min = totalPageRef.value - props.showNumer + 1;
  }
  return min < 1 ? 1 : min;
});

/**
 * 点击页码的事件处理函数
 * @param index 点击的页码数
 */
function handleClick(index: number) {
  emit("page-change", index);
}
/**
 * 上一页的事件处理函数
 */
function previous() {
  if (props.currentPage === 1) return;
  emit("page-change", props.currentPage - 1);
}
/**
 * 到首页的事件处理函数
 */
function toStart() {
  if (props.currentPage === 1) return;
  emit("page-change", 1);
}
/**
 * 下一页的事件处理函数
 */
function next() {
  if (props.currentPage === totalPageRef.value) return;
  emit("page-change", props.currentPage + 1);
}
/**
 * 到尾页的事件处理函数
 */
function toEnd() {
  if (props.currentPage === totalPageRef.value) return;
  emit("page-change", totalPageRef.value);
}
</script>

<style lang="less" scoped>
.page-container {
  display: flex;
  div {
    cursor: pointer;
    border: 1px solid #ccc;
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    margin-right: 12px;
    color: black;
    &:hover {
      color: #fff;
      background-color: aqua;
    }
  }
  .active {
    color: #fff;
    background-color: blue;
  }
}
.disabled {
  background: #ccc !important;
  color: black !important;
}
</style>
