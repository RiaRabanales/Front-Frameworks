<template>
  <div class="project">
    <div class="actions">
      <h3 @click="showDetails = !showDetails">{{ project.title }}</h3>
      <!-- Para los iconos uso material icons: 
      https://material.io/resources/icons/?style=baseline
      https://github.com/google/material-design-icons 
      -->
      <div class="icons">
        <span class="material-icons">edit</span>
        <span @click="deleteProject" class="material-icons">delete</span>
        <span class="material-icons">done</span>
      </div>
    </div>
    <div class="details" v-if="showDetails">
      <p>{{ project.details }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["project"],
  data() {
    return {
      showDetails: false,
      uri: "http://localhost:3000/projects/" + this.project.id,
    };
  },
  methods: {
    deleteProject() {
      fetch(this.uri, { method: "DELETE" })
        .then(() => this.$emit("delete", this.project.id)) //emito evento para actualizar lista
        .catch((err) => console.log(err.message));
    },
  },
};
</script>

<style>
.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.project {
  margin: 20px auto;
  background: white;
  padding: 10px 20px;
  border-radius: 4px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.06);
  border-left: 4px solid #e90074;
}
.project h3 {
  cursor: pointer;
}
.material-icons {
  font-size: 24px;
  margin-left: 10px;
  color: #bbb;
  cursor: pointer;
}
.material-icons:hover {
  color: rgb(122, 122, 122);
}
</style>