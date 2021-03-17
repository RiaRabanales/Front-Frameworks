<template>
  <div class="home">
    <h1>Home</h1>
    <input type="text" v-model="search">
    <p class="muted">search term - {{ search }}</p>
    <hr>
    <div v-for="name in filteredNames" :key="name">
      {{ name }}
    </div>
    
  </div>
</template>

<script>
import { computed, ref } from 'vue'

export default {
  name: "Home",
 
  setup() {
    const search = ref('');
    const names = ref(['fairë', 'unfairë', 'pandako', 'arte', 'pulpako', 'ryette', 'mianmian', 'retako', 'nelyo'])

    const filteredNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value)
      );
    })
    
    return { search, filteredNames };
  },
};
</script>

<style>
.muted {
  color: rgb(177, 177, 177);
  font-size: 0.8rem;
}
hr {
  margin-top: 2rem;
  margin-bottom: 2rem;
}
</style>
