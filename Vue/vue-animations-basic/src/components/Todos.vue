<template>
  <div class="todos">
    <input
      type="text"
      v-model="newTodo"
      @keypress.enter="addTodo"
      placeholder="Add a new todo..."
    />
    <transition name="switch" mode="out-in"> <!--mode indica el orden de las transiciones-->
    <div v-if="todos.length">
      <!-- cambio ul a transition-group -->
      <transition-group tag="ul" name="list" appear>
        <li v-for="todo in todos" :key="todo.id" @click="deleteTodo(todo.id)">
          {{ todo.text }}
        </li>
      </transition-group>
    </div>
    <div v-else>Woohoo, nothing left todo!</div>
    </transition>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup(props, { emit }) {
    const todos = ref([
      { text: "make the bed", id: 1 },
      { text: "play video games", id: 2 },
    ]);
    const newTodo = ref("");

    const addTodo = () => {
      if (newTodo.value) {
        const id = Math.random();
        todos.value = [{ text: newTodo.value, id }, ...todos.value];
        newTodo.value = "";
      } else {
        emit("badValue");
      }
    };

    const deleteTodo = (id) => {
      todos.value = todos.value.filter((todo) => todo.id != id);
    };

    return { todos, addTodo, deleteTodo, newTodo };
  },
};
</script>

<style>
.todos {
  max-width: 400px;
  margin: 20px auto;
  position: relative;
}
input {
  width: 100%;
  padding: 12px;
  border: 1px solid #eee;
  border-radius: 10px;
  box-sizing: border-box;
  margin-bottom: 20px;
}
.todos ul {
  position: relative;
  padding: 0;
}
.todos li {
  list-style-type: none;
  display: block;
  margin-bottom: 10px;
  padding: 10px;
  background: white;
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: 100%;
  box-sizing: border-box;
}
.todos li:hover {
  cursor: pointer;
}

/* transiciones de lista */
.list-enter-from {
  opacity: 0;
  transform: scale(0.6); /* empieza 60% de su tamaño inicial */
}
.list-enter-to {
  opacity: 1;
  transform: scale(1);
}
.list-enter-active {
  transition: all 0.5s ease;
}
.list-leave-from {
  opacity: 1;
  transform: scale(0);
}
.list-leave-to {
  opacity: 0;
  transform: scale(0.6);
}
.list-leave-active {
  transition: all 0.5s ease;
  position: absolute; /* lo saco del flow del doc para aplicar move al borrar */
}
.list-move {
  transition: all 0.3 ease;
}

/* transiciones de switch */
.switch-enter-from,
.switch-leave-to {
  opacity: 0;
  transform: translateY(20px)
}
/* .switch-enter-to,
.switch-leave-from {
  opacity: 1;
  transform: translateY(0)
} */
.switch-enter-active {
  transition: all 0.5s ease;
}
.switch-leave-active {
  transition: all 0.3s ease;
}
</style>