<template>
  <div class="hook">
    <transition
      appear
      @before-enter="beforeEnter"
      @enter="onEnter"
      @after-enter="afterEnter"
      :css="false"
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
import gsap from 'gsap';

export default {
  setup() {
    const showTitle = ref(true)

    const beforeEnter = (el) => {
      //console.log("before enter - set initial state");
      //tengo acceso a el: el elemento que lleva la transición asociada
      el.style.transform = 'translateY(-60px)';
      el.style.opacity = 0;
    };

    const onEnter = (el, done) => {
      //console.log("starting to enter - make transition");
      gsap.to(el, {
        duration: 1,
        y: 0,  //esto me hace un transform del beforeEnter a 0
        opacity: 1,
        ease: 'bounce.out',
        onComplete: done    //así no se me solapan transiciones
      });
    };

    const afterEnter = (el) => {
      console.log("after enter - transilitions done");
    }

    return { showTitle, beforeEnter, onEnter, afterEnter };
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
</style>