<template>
  <nav class="filter-nav">
    <button @click="updateFilter('all')" :class="{ active: currentFilter === 'all' }">all</button>
    <button @click="updateFilter('completed')" :class="{ active: currentFilter === 'completed' }">completed</button>
    <button @click="updateFilter('ongoing')"  :class="{ active: currentFilter === 'ongoing' }">ongoing</button>
  </nav>
</template>

<script>
export default {
  props: ["currentFilter"],
  methods: {
    updateFilter(filterBy) {
      this.$emit("filterChange", filterBy);
    },
  },
};
</script>

<style>
.filter-nav button {
  background: none;
  border: none;
  color: #bbb;
  outline: none;
  font-size: 12px;
  text-transform: uppercase;
  margin-right: 11px;
  letter-spacing: 1px;
  font-weight: bold;
  cursor: pointer;
}
.filter-nav button.active {
  color: #555;
}
</style>