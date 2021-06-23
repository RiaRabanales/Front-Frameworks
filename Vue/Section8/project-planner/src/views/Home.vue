<template>
  <div class="home">
    <div v-if="projects.length">
      <div v-for="project in filteredProjects" :key="project.id">
        <SingleProject :project="project" @delete="handleDelete" @complete="handleComplete" />
      </div>
    </div>
    <FilterNav @filterChange="currentFilter = $event" :currentFilter="currentFilter" />
    <!-- así cambio el currentFilter por lo que recibo del emit del filterNav, y lo paso por prop a FilterNav para poder adaptarlo -->
  </div>
</template>

<script>
import SingleProject from "../components/SingleProject.vue";
import FilterNav from "../components/FilterNav.vue";

export default {
  name: "Home",
  components: { SingleProject, FilterNav },
  data() {
    return {
      projects: [],
      currentFilter: 'all',
    };
  },
  mounted() {
    fetch("http://localhost:3000/projects")
      .then((res) => res.json())
      .then((data) => (this.projects = data)) //cuando fetcheo los datos los meto en mi variable proyectos
      .catch((err) => console.log(err.message));
  },
  methods: {
    handleDelete(id) {
      this.projects = this.projects.filter((project) => {
        return project.id !== id;
      });
    },
    handleComplete(id) {
      let proj = this.projects.find(project => {
        return project.id === id;
      })
      proj.complete = !proj.complete;
    }
  },
  computed: {
    filteredProjects() {
      if (this.currentFilter == 'completed') {
        //No quiero modificar la lista de proyectos, no guardo el filtro como tal. Sólo filtro los complete en true
        return this.projects.filter(project => project.complete)
      } else if (this.currentFilter == 'ongoing') {
        return this.projects.filter(project => !project.complete)
      } else {
        return this.projects;
      }
    }
  }
};
</script>
