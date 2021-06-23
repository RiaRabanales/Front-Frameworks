<template>
  <div class="postlist">
    <div v-for="post in posts" :key="post.id">
      <SinglePost :post="post" />
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from "vue";
import SinglePost from "./SinglePost.vue";

export default {
  props: ["posts"],
  components: { SinglePost },
  setup(props) {
    //al pasar los props como argumento los puedo pasar a setup
    onMounted(() => console.log("component mounted: con ON"));
    onUnmounted(() => console.log("component unmounted"));
    onUpdated(() => console.log("component updated"));
  },
};
</script>

<style>
</style>