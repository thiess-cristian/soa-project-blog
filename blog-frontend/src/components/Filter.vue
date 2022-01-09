<template>
  <div class="filters box">
    <div class="title">Tags:</div>
    <div class="is-flex is-flex-direction-column">
      <div v-for="tag in tags" :key="tag">
        <FilterOption :tag="tag" @checkboxWasClicked="addFilter(tag)" />
      </div>
    </div>
  </div>
</template>

<script>
import FilterOption from "./FilterOption.vue";
import axios from "axios";

export default {
  name: "Filter",
  components: { FilterOption },
  data() {
    return {
      tags: [],
      selectedTags: [],
    };
  },
  mounted() {
    this.getAllTags();
    console.log("filter mounted");
  },
  methods: {
    async getAllTags() {
      await axios
        .get("/filter")
        .then((response) => {
          this.tags = [];
          for (let i = 0; i < response.data.length; i++) {
            this.tags.push(response.data[i]);
          }
          this.tags = [...new Set(this.tags)];
        })
        .catch((error) => console.log(error));
    },

    addFilter(tag) {
      if (this.selectedTags.includes(tag)) {
        const index = this.selectedTags.indexOf(tag);
        if (index > -1) {
          this.selectedTags.splice(index, 1);
        }
      } else {
        this.selectedTags.push(tag);
      }
      this.$emit("checkedFilters", this.selectedTags);
    },
  },
};
</script>

<style>
</style>