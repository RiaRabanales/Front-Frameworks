<!-- Por convención: el nombre del componente con mayúscula -->
<template>
  <div class="backdrop" @click.self="closeModal">
    <!-- click.eventModifier en este caso hace q sólo vaya el click directo, no en hijos -->
    <div class="modal" :class="{ sale: theme === 'sale' }">
      <!-- aquí paso la clase por props.
      también podría querer pasar las cosas por template como SLOT:
      <modal @close="toggleModal">
        <h1>hola</h1>
      </modal>
      Esto en el componente hijo se me incluiría donde pusiera el tag slot
      El slot tb se puede pasar 'named', con <template v-slot:nombre>
      -->
      <slot>
        <h1>{{ header }}</h1>
        <p>{{ text }}</p>
      </slot>
      <div class="actions"> <!-- en el primer modal no aparece porque no lo tiene -->
        <slot name="links"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["header", "text", "theme"],
  methods: {
    closeModal() {
      // esto es un custom event: se define en el componente y escucha desde el padre component
      this.$emit("close");
    },
  },
};
</script>


<style>
.backdrop {
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}
.modal {
  width: 400px;
  padding: 20px;
  margin: 100px auto;
  background: white;
  border-radius: 10px;
}
.modal h1 {
  color: #03cfb4;
  border: none;
  padding: 0;
}
.modal p {
  font-style: normal;
}
.modal .actions {
  text-align: center;
  margin: 30px 0 10px 0;
  color: #333;
}
.modal .actions a {
  color: #333;
  padding: 8px;
  border: 1px solid #eee;
  border-radius: 4px;
  text-decoration: none;
  margin: 10px;
}
.modal.sale {
  background: crimson;
  color: white;
}
.modal.sale h1 {
  color: white;
}
.modal.sale .actions {
  color: white;
}
.modal.sale .actions a {
  color: white;
}
</style>