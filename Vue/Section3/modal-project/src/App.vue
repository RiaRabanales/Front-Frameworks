<template>
  <h1>{{ title }}</h1>
  <br />
  <input type="text" ref="name" />
  <button @click="handleClick">click me for focus</button>
  <br /><br />
  <button @click="toggleModal">modal 1</button>
  <button @click="toggleModalTwo">modal 2</button>

  <div v-if="showModal">
    <Modal :header="header" :text="text" theme="sale" @close="toggleModal" />
  </div>
  <div v-if="showModalTwo">
    <Modal theme="notsale" @close="toggleModalTwo">
      <template v-slot:links>
        <a href="#">sign up now</a>
        <a href="#">more info</a>
      </template>
      <h1>Mi Giveaway!</h1>
      <p>Aquí haciendo pruebas</p>
    </Modal>
  </div>
</template>

<script>
// Aquí importo el componente Modal (de forma general) que uso arriba a través del objeto en la propiedad components.
// Lo llamaré con <Modal />
import Modal from "./components/Modal.vue";

export default {
  name: "App",
  components: { Modal },
  data() {
    return {
      title: "My First Vue App :)",
      header: "Sign up for the Giveaway",
      text: "esto es el texto del modal que paso desde app.vue",
      showModal: false,
      showModalTwo: false,
    };
  },
  methods: {
    handleClick() {
      // el ref funciona como handle con this.$refs.miRef
      console.log(this.$refs.name);
      this.$refs.name.classList.add("active");
      this.$refs.name.focus();
    },
    toggleModal() {
      this.showModal = !this.showModal;
    },
    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo;
    },
  },
};

  /* Nota: para teleport ver vid 30.
  permite tomar un componente y transportarlo fuera.
  ej. para pasar el modal al index:
  <teleport to=".modalsIndex" v-if.....
  */
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
button {
  margin: 0 2px;
}
</style>
