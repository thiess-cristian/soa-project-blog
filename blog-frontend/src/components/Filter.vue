<template>
  <div class="filters">
    <div class="tag" v-for="tag in tags" :key="tag">
      <FilterOption :tag="tag" />
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
            console.log(response);
          }
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style>
</style>