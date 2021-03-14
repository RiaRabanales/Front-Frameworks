<template>
  <div v-if="job"> <!--null es un false evaluate: sólo lo debe mostrar cuando tenga valor -->
    <h1>{{ job.title }} Page</h1>
    <!-- <p>The job id is {{ $route.params.id }}</p> lo mismo que: 
    The job id is {{ id }} -->
    <p>{{ job.details }} (id: {{ job.id }})</p>
  </div>
  <div v-else>
    <p>Loading job details...</p>
  </div>
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
  data() {
    return {
      job: null,
    };
  },
  mounted() {
    fetch("http://localhost:3000/jobs/" + this.id)
      .then((res) => res.json())
      .then((data) => (this.job = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style>
</style>