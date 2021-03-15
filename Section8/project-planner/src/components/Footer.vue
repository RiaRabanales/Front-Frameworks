<template>
  <footer>
      <p>Mounts? Mounts? <i>MOUNTS???</i></p>
      <p class="fakeLink" @click="openGithub">NinjaJobs // RiaR</p>
  </footer>
</template>

<script>
export default {
    methods: {
        openGithub() {
            //router sólo me vale para los links internos
            window.open('https://github.com/RiaRabanales/Vue/tree/master/Section8/project-planner');
        }
    }
}
</script>

<style>
footer {
    position: absolute;
    width: 100%;
    bottom: 0;
    right: 0;
    background: #00ce89;
    color: white;
    padding: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
footer:hover {
    background: #e90074;
}
footer p:first-of-type {
    margin-left: 25px;
}
footer p:last-of-type {
    margin-right: 12px;
}
.fakeLink {
    cursor: pointer;
}
</style>