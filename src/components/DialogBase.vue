<template>
  <v-dialog
    :model-value="isOpen"
    @update:model-value="closeDialog"
    width="auto"
    min-width="300"
  >
    <v-card>
      <ButtonClose
        class="btn-close"
        @click="closeDialog"
      />
      <v-card-text> {{ dialog.text }}</v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { useDialogStore } from '@/store/dialog.js';
import ButtonClose from './button/ButtonClose.vue';

export default {
  data() {
    return {
      dialog: useDialogStore(),
      localIsOpen: false,
    };
  },
  computed: {
    isOpen: {
      get() {
        return this.dialog.isOpen;
      },
    },
  },
  methods: {
    closeDialog() {
      this.dialog.closeDialog();
    },
  },
  components: { ButtonClose, ButtonClose },
};
</script>

<style lang="scss" scoped>
.btn-close {
  margin-top: 5px;
  margin-right: 5px;
}
</style>
