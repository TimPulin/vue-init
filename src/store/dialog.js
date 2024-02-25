import { defineStore } from 'pinia';
export const useDialogStore = defineStore('store', {
  state: () => ({
    isOpen: false,
    text: 'test',
  }),
  actions: {
    closeDialog() {
      this.isOpen = false;
    },
    openDialog() {
      this.isOpen = true;
    },
  },
});
