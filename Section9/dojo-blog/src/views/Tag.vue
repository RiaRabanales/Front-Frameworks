<template>
  <div class="tag">
    <div v-if="error">{{ error }}</div>
    <div v-if="filteredPosts.length" class="layout">
      <PostList :posts="filteredPosts" />
      <TagCloud :posts="posts" />
    </div>
    <div v-else>
      <Spinner />
      <h3 class="info">no posts found yet...</h3>
    </div>
  </div>
</template>

<script>
import PostList from "../components/PostList.vue";
import TagCloud from "../components/TagCloud.vue";
import Spinner from "../components/Spinner.vue";
import getPosts from "../composables/getPosts";
import { computed } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "Home",
  components: { PostList, Spinner, TagCloud },
  setup() {
    const { posts, error, load } = getPosts();
    load();

    const route = useRoute();
    const tag = route.params.tag;
    const filteredPosts = computed(() => {
      return posts.value.filter(post => post.tags.includes(tag));
    });

    return { filteredPosts, posts, error };
  },
};
</script>

<style scoped>
.tag {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
}
.info {
    text-align: center;
    color: #ccc;
}
</style>