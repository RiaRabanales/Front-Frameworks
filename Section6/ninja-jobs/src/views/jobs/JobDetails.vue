<template>
  <h1>Job Details Page</h1>
  <!-- <p>The job id is {{ $route.params.id }}</p> lo mismo que: -->
  <p>The job id is {{ id }}</p>
</template>

<script>
export default {
  props: ["id"],
  /* No me hace falta porque tengo el prop:
    data() {
        return {
            id: this.$route.params.id
        }
    }
    */
};
</script>

<style>
</style>