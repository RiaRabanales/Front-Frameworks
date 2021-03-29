<template>
  <form @submit.prevent="handleSubmit">
    <h3>Login</h3>
    <input type="email" placeholder="E-mail" v-model="email" />
    <input type="password" placeholder="Password" v-model="password" />
    <div v-if="error" class="error">{{ error }}</div>
    <button>Log in</button>
  </form>
</template>

<script>
//import useLogin from '../../composables/useLogin' es lo mismo que: @=source
import useLogin from "@/composables/useLogin";
import { ref } from 'vue';

export default {
  setup() {
      const { error, login } = useLogin();

      const email = ref('');
      const password = ref('');

      const handleSubmit = async () => {
          const res = await login(email.value, password.value);
      }

      return { email, password, handleSubmit, error };
  },
};
</script>

<style></style>