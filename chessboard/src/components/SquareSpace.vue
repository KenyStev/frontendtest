<script setup lang="ts">
import { useChessBoardStore } from '../stores/chessboard'
const { hasBeenClicked, onClick } = useChessBoardStore()
</script>

<script lang="ts">
export default {
  props: {
    pos: String
  }
}
</script>

<template>
  <div
    class="square-space"
    :class="{ active: hasBeenClicked(pos as string) }"
    @click="onClick(pos as string)"
  >
    <span class="square-number">{{ pos }}</span>
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.square-space {
  position: relative;
  padding: 0.5rem;
  width: 100%;
  height: 100%;
  border: 1px solid #1e2f2f;
  background-color: #405e5e;
  cursor: pointer;

  &.active {
    background-color: #a8d1d1;
  }
}
.square-number {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  width: 1rem;
  height: 1rem;
  font-size: xx-small;
  color: #0b0e0e;
  border-radius: 100%;
  background-color: #70a4a4;
}
</style>
