<!-- npx json-server --watch data/db.json -->
<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList v-if="showPosts" :posts="posts" />
      <button @click="showPosts = !showPosts">toggle posts</button>
    </div>
    <div v-else>loading...</div>
  </div>
</template>

<script>
import PostList from "../components/PostList.vue";
import { ref } from "vue";

export default {
  name: "Home",
  components: { PostList },
  setup() {
    //genero el array para popular luego en load
    const posts = ref([]);
    const error = ref(null);

    const load = async () => {
      try {
        let data = await fetch("http://localhost:3000/posts");
        if (!data.ok) {
          throw Error("no data available");
        }
        // Si están correctos pasan de lo anterior:
        posts.value = await data.json();
      } catch (err) {
        error.value = err.message; //así actualizo mi variables de error
        console.log(error.value);
      }
    };
    load();

    const showPosts = ref(true);

    return { posts, showPosts, error };
  },
};
</script>

<style>
</style>