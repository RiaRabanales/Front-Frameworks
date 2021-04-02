<template>
  <Navbar />
  <div class="content">
    <router-view />
  </div>
</template>

<script lang="ts">
import Navbar from "./components/Navbar.vue";

export default {
  components: { Navbar },
};
</script>

<style>
.content {
  margin: 0 auto;
  max-width: 80vw;
  padding: 0 20px;
}
</style>
