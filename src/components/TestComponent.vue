<template>
  <div class="component">
    <ButtonBase
      text="Вызов диалогового окна"
      @click="callDialog"
    />
  </div>
</template>

<script setup>
import ButtonBase from '@/components/base/ButtonBase.vue';
import { useDialogStore } from '@/store/dialog';

const dialog = useDialogStore();
function callDialog() {
  dialog.$patch((state) => {
    state.isOpen = true;
    state.text = 'Тестовое сообщение';
  });
}
</script>

<style lang="scss" scoped>
.component {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
