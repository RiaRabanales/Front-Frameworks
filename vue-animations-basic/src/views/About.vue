<template>
  <div class="about">
    <h1>About</h1>
    <transition name="fade">
      <div v-if="showAbout">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aperiam
          officia possimus delectus inventore quod quisquam culpa voluptas
          iusto, quae maiores quo dolorum, corporis laboriosam a dolore
          consequatur assumenda nam!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aperiam
          officia possimus delectus inventore quod quisquam culpa voluptas
          iusto, quae maiores quo dolorum, corporis laboriosam a dolore
          consequatur assumenda nam!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aperiam
          officia possimus delectus inventore quod quisquam culpa voluptas
          iusto, quae maiores quo dolorum, corporis laboriosam a dolore
          consequatur assumenda nam!
        </p>
      </div>
    </transition>

    <button @click="showAbout = !showAbout">toggle info</button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const showAbout = ref(false);

    return { showAbout };
  },
};
</script>

<style>
.about {
  max-width: 600px;
  margin: 20px auto;
}

.about button {
  margin: 0 auto;
  margin-top: 10px;
  padding: 10px;
  background: white;
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: 40%;
  box-sizing: border-box;
}

.fade-enter-from {
  opacity: 0;
}
.fade-enter-to { 
  /* opacity 1 es el default, así que esto es redundante; lo podría comentar */
  opacity: 1;
}
.fade-enter-active { 
  transition: all 2s ease;
}
.fade-leave-from {
  opacity: 1;
}
.fade-leave-to {
  opacity: 0;
}
.fade-leave-active {
  transition: all 1s ease;
}
</style>