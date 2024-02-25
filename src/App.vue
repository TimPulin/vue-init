<template>
  <DialogBase />
  <div class="container">
    <div class="grid-base">
      <SiteHeader />
      <PageTest />
      <SiteFooter />
    </div>
  </div>
</template>

<script setup>
import DialogBase from '@/components/DialogBase.vue';
import SiteHeader from '@/site/SiteHeader.vue';
import SiteFooter from '@/site/SiteFooter.vue';
import PageTest from '@/pages/PageTest.vue';
</script>
<style scoped>
.grid-base {
  min-height: 100%;
}
</style>
