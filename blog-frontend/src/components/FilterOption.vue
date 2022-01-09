<template>
  <label class="checkbox">
    <input type="checkbox" />
    {{ tag }}
  </label>
</template>

<script>
export default {
  name: "FilterOption",
  props: { tag: String },
};
</script>

<style>
</style>