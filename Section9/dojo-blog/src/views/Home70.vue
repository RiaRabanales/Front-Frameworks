<template>
  <div class="home">
    <h1>Home</h1>
    <br>
    <h3>Ref:</h3>
    <p>My name is {{ name }} and my age is {{ age }}.</p>
    <input type="text" v-model="name">
    <br>
    <button @click="handleclick">change!</button>
    <button @click="age++">age++</button>
    <hr>
    <h3>Reactive</h3>
    <p>{{ yo.name }} - {{ yo.age }}</p>
    <button @click="updateYo">update</button>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'

export default {
  name: "Home",
  // setup es una función propia del composition API; se lanza antes de todos los hooks
  setup() {
    // las variables que declaro aquí no son reactivas (a diferencia de data()) así que no cambian en el template
    // para reactivas uso ref
    //const p = ref(null)
    // lo declaro constante porq el objeto de referencia es const, pero el valor puede cambiar
    //accedo dentro de la función con: name.value

    const name = ref('ria');
    const age = ref(26);

    const handleclick = () => {
      name.value = 'patata';
      age.value = 35;
    }

    //otra opcion es emplear reactive:
    const yo = reactive({ name: 'ria', age: 3});

    const updateYo = () => {
      yo.age = 12;   //no le hace falta el .value
    }
    //reactive no funciona con primitivas, pero es mejor para objetos complejos

    return { name, age, handleclick, yo, updateYo };
  },
};
</script>
