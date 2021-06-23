<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post" class="post">
    <h3>{{ post.title }}</h3>
    <p class="pre">{{ post.body }}</p>
  </div>
  <div v-else>
    <Spinner />
  </div>
</template>

<script>
import getPost from "../composables/getPost";
import Spinner from "../components/Spinner.vue";
import { useRoute } from "vue-router";

export default {
  props: ["id"],
  components: { Spinner },
  setup(props) {
    const route = useRoute(); //así obtengo info de la ruta
    console.log(route);

    //si no tuviera el prop, es lo mismo que: 
    const { post, error, loadPost } = getPost(props.id); //esto de {} se llama destructurar
    //const { post, error, loadPost } = getPost(route.params.id);
    loadPost();

    return { post, error };
  },
};
</script>

<style scoped>
.tags a {
  margin-right: 10px;
}
.post {
  max-width: 1200px;
  margin: 0 auto;
}
.post p {
  color: #444;
  line-height: 1.5em;
  margin-top: 40px;
}
.pre {
  white-space: pre-wrap;
}
</style>