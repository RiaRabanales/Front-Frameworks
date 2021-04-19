<template>
  <div class="hook">
    <transition
      appear
      name="fade"
      @before-enter="beforeEnter"
      @enter="onEnter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="onLeave"
      @leave-enter="afterLeave"
    >
      <h1 v-if="showTitle">Hooks</h1>
    </transition>
    <div>
      <p>El título funciona con animaciones por hooks de JavaScript.</p>
      <button @click="showTitle = !showTitle">toggle title</button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const showTitle = ref(true)

    const beforeEnter = () => {
      console.log("before enter");
    };

    const onEnter = (el) => {
      //tengo acceso a el: el elemento que lleva la transición asociada
      console.log("on enter", el);
    };

    const afterEnter = (el) => {
      el.style.color = 'green'
      console.log("after enter (when it finishes fading in)", el);
    };

    const beforeLeave = (el) => {
      console.log("before leave", el);
      el.style.color = 'pink'
    };

    const onLeave = (el) => {
      console.log("on leave", el);
    };

    const afterLeave = (el) => {
      console.log("after leave", el);
    };

    return { showTitle, beforeEnter, onEnter, afterEnter, beforeLeave, onLeave, afterLeave };
  },
};
</script>

<style>
.hook {
  max-width: 600px;
  margin: 20px auto;
}

.hook button {
  margin: 0 auto;
  margin-top: 10px;
  padding: 10px;
  background: white;
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: 40%;
  box-sizing: border-box;
}

/* Transiciones */
.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: all 3s ease;
}

.fade-leave-to {
  opacity: 0;
}
.fade-leave-active {
  transition: all 3s ease;
}
</style>