<template>
  <label class="checkbox">
    <input type="checkbox" @change="check" />
    {{ tag }}
  </label>
</template>

<script>
export default {
  name: "FilterOption",
  props: { tag: String },
  methods: {
    check() {
      this.$emit("checkboxWasClicked");
    },
  },
};
</script>

<style>
</style>