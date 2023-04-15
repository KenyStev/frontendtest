<script lang="ts">
export default {
  props: {
    move: String
  }
}
</script>

<template>
  <div class="movement">{{ move }}</div>
</template>

<style scoped>
.movement {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0b0e0e;
  color: #70a4a4;
  border: 1px solid #70a4a4;
  width: 1.2rem;
  height: 1.2rem;
  font-size: xx-small;
  border-radius: 100%;
}
</style>
