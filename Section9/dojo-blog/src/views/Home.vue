<template>
  <div class="home">
    <h1>Home</h1>
    <PostList v-if="showPosts" :posts="posts" />
    <button @click="showPosts = !showPosts">toggle posts</button>
    <button @click="posts.pop()">delete last post</button>
  </div>
</template>

<script>
import PostList from '../components/PostList.vue'
import { ref } from "vue";

export default {
  name: "Home",
  components: { PostList },
  setup() {
    const posts = ref([
      { title: "patata", body: "Lorem ipsum buah que buenas estan asi fritas con bien de aceite y un montón de sal es q es tremendo tiooo pero tambien estan ricas las lays al unto de sal y las pringles y todo eso buah", id: 1 },
      { title: "patata pero frita", body: "Lorem ipsum frito", id: 2 },
    ]);

    const showPosts = ref(true)

    return { posts, showPosts };
  },
};
</script>

<style>
</style>