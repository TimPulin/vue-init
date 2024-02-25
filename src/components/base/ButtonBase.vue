<template>
  <button class="button-base">
    <slot></slot>
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: String,
    default: '',
  },
};
</script>
<style lang="scss" scoped>
.button-base {
  @include btn-reset;

  position: relative;
  padding: 10px 20px;

  box-shadow: 0 0 3px 3px $color-grey_max_light;
  border-radius: $border-radius-basic;
  background-color: #fff;
  text-align: center;
  vertical-align: middle;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: $color-primary;
    color: #fff;
  }

  &:active {
    background-color: $color-primary_shade;
    color: #fff;
  }
}
</style>
