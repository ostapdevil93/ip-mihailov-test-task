<script setup lang="ts">
  import { DressItem } from '@/entities/dress-item';

  defineProps<{item: DressItem}>();
</script>

<template>
  <div class="dress-item">
    {{ item.name }}
  </div>
</template>

<style scoped lang="scss">
  .dress-item {
    padding: 10px;
    border: 2px solid black;
    cursor: pointer;
    text-align: center;
  }
</style>