import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { DressItem } from './dress-item';

export const useStore = defineStore('store', () => {
  const leftDressList = ref<DressItem[]>([
    {
      id: 1,
      name: "Shoes 1"
    },
    {
      id: 2,
      name: "Shoes 2"
    },
    {
      id: 3,
      name: "Shoes 3"
    },
    {
      id: 4,
      name: "Shoes 4"
    },
    {
      id: 5,
      name: "T-shirt 1"
    },
    {
      id: 6,
      name: "T-shirt 2"
    },
    {
      id: 7,
      name: "T-shirt 3"
    },
    {
      id: 8,
      name: "T-shirt 4"
    }
  ]);
  const rightDressList = ref<DressItem[]>([
    {
      id: 11,
      name: "Jacket 1"
    },
    {
      id: 12,
      name: "Jacket 2"
    },
    {
      id: 13,
      name: "Jacket 3"
    },
    {
      id: 14,
      name: "Jacket 4"
    },
    {
      id: 15,
      name: "Hoodie 1"
    },
    {
      id: 16,
      name: "Hoodie 2"
    },
    {
      id: 17,
      name: "Hoodie 3"
    },
    {
      id: 18,
      name: "Hoodie 4"
    }
  ]);
  const leftDressSelected = ref<DressItem[]>([]);
  const rightDressSelected = ref<DressItem>({
    id: null,
    name: 'SelectedItem'
  });

  const leftDressListLength = computed(() => leftDressList.value.length);
  const leftDressSelectedLength = computed(() => leftDressSelected.value.length);

  const fetchDressItem = (item: DressItem, type: 'single' | 'multiple') => {
    if (type === 'single') {
      rightDressSelected.value = item;
    } else if (leftDressSelectedLength.value < leftDressListLength.value) {
      leftDressSelected.value.push(item);
    }
  };

  return {
    leftDressList,
    rightDressList,
    leftDressSelected,
    rightDressSelected,
    leftDressListLength,
    leftDressSelectedLength,
    fetchDressItem
  };
});
