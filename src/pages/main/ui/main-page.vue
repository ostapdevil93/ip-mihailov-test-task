<script setup lang="ts">
  import { storeToRefs } from 'pinia';
  import { useStore } from '@/entities/dress-item';
  import { DressList } from '@/features/dress-list';
  import { DressElement } from '@/shared/components/dress-element';

  const store = useStore();
  const {
    leftDressList,
    rightDressList,
    leftDressSelected,
    rightDressSelected,
    leftDressListLength,
    leftDressSelectedLength,
  } = storeToRefs(store);
</script>

<template>
  <div class="main-page">
    <div class="main-page__top">
      <div class="multiple-selected">
        <div class="multiple-selected__list">
          <DressElement
              v-for="item in leftDressSelected"
              :key="item.id"
              :item="item"
          />
        </div>
        <div class="multiple-selected__count">
          selected: {{ leftDressSelectedLength }} / {{ leftDressListLength }}
        </div>
      </div>
      <div class="single-selected">
        {{ rightDressSelected.name }}
      </div>
    </div>
    <div class="main-page__bottom">
      <DressList
          :items="leftDressList"
          type="multiple"
      />
      <DressList
          :items="rightDressList"
          type="single"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
  .main-page {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    &__top {
      display: flex;
      justify-content: space-between;

      .multiple-selected {
        max-width: 500px;
        width: 100%;
        padding: 20px;
        border: 2px solid black;

        &__list {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
        }

        &__count {
          margin-top: 20px;
        }
      }

      .single-selected {
        max-width: 300px;
        max-height: 300px;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-size: 26px;
        text-transform: uppercase;
        border: 2px solid black;
      }
    }

    &__bottom {
      display: flex;
      gap: 20px;
    }
  }
</style>