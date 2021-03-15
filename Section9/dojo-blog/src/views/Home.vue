<template>
  <div class="home">
    <h1>Home</h1>
    <p>My name is {{ name }}</p>
  </div>
</template>

<script>
export default {
  name: "Home",
  // setup es una función propia del composition API; se lanza antes de todos los hooks
  setup() {
    console.log("funcion setup");
    // las variables que declaro aquí no son reactivas (a diferencia de data()) así que no cambian en el template
    let name = "ria";

    return { name };
  },
};
</script>
