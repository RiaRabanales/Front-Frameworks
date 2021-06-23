<template>
  <form @submit.prevent="handleSubmit">
    <h3>Login</h3>
    <input type="email" placeholder="E-mail" v-model="email" />
    <input type="password" placeholder="Password" v-model="password" />
    <div v-if="error" class="error">{{ error }}</div>
    <button v-if="!pending">Log in</button>
    <button v-else disabled>loading...</button>
  </form>
</template>

<script>
//import useLogin from '../../composables/useLogin' es lo mismo que: @=source
import useLogin from "@/composables/useLogin";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const { error, login, pending } = useLogin();
    const router = useRouter();

    const email = ref("");
    const password = ref("");

    const handleSubmit = async () => {
      const res = await login(email.value, password.value);
      if (!error.value) {
        router.push({ name: "UserPlaylists" });
      }
    };

    return { email, password, handleSubmit, error, pending };
  },
};
</script>

<style></style>