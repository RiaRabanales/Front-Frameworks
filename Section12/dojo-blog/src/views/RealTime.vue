<template>
  <h1>Real-time data</h1>
  <div v-for="post in posts" :key="post.id">
      <div>{{ post.title }}</div>
  </div>
</template>

<script>
import { ref } from "vue";
import { projectFirestore } from "../firebase/config";

export default {
  setup() {
    const posts = ref([]);

    projectFirestore
      .collection("posts")
      .orderBy("createdAt", "desc")
      //en vez de get() para el real time; devuelve todos los docs en la coleccion en realtime
      .onSnapshot((snap) => {
        let docs = snap.docs.map((doc) => {
          return { ...doc.data(), if: doc.id };
        });
        posts.value = docs;
      });

    return { posts };
  },
};
</script>

<style>
</style>