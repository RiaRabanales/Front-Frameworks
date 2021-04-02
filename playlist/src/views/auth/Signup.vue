<template>
  <form @submit.prevent="handleSubmit">
    <h3>Sign up</h3>
    <input type="text" placeholder="Username" v-model="displayName" />
    <input type="email" placeholder="E-mail" v-model="email" />
    <input type="password" placeholder="Password" v-model="password" />
    <div v-if="error" class="error">{{ error }}</div>
    <button v-if="!pending">Sign up</button>
    <button v-else disabled>loading...</button>
  </form>
</template>

<script>
import useSignup from "@/composables/useSignup";
import { ref } from "vue";

export default {
  setup() {
    const { error, signup, pending } = useSignup();

    const email = ref("");
    const password = ref("");
    const displayName = ref("");

    const handleSubmit = async () => {
      const res = await signup(email.value, password.value, displayName.value);
      if (!error.value) {
        //Si no hay errores:
        console.log("usuario registrado");
      }
    };

    return { email, password, displayName, handleSubmit, error, pending };
  },
};
</script>

<style>
</style>