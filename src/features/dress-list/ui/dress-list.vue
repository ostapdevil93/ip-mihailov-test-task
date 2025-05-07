<script setup lang="ts">
  import { DressItem, useStore } from '@/entities/dress-item';
  import { DressElement } from '@/shared/components/dress-element';

  defineProps<{items: DressItem[], type: 'single' | 'multiple'}>();

  const store = useStore();
  const { fetchDressItem } = store;
</script>

<template>
  <div class="dress-list">
    <DressElement
        v-for="item in items"
        :key="item.id"
        :item="item"
        @click="fetchDressItem(item, type)"
    />
  </div>
</template>

<style scoped lang="scss">
  .dress-list {
    flex: 1 1 50%;
    padding: 20px;
    border: 2px solid black;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
  }
</style>