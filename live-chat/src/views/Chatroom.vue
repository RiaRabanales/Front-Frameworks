<template>
  <div class="container">
    <Navbar />
    <NewChatForm />
  </div>
</template>

<script>
import { watch } from 'vue';
import { useRouter } from 'vue-router';
import Navbar from "../components/Navbar.vue";
import getUser from '../composables/getUser';
import NewChatForm from '../components/NewChatForm.vue'

export default {
  components: { Navbar, NewChatForm },
  setup() {
    //Esto para controlar el usuario actual
    const { user } = getUser();
    const router = useRouter();

    watch(user, () => {
      if (!user.value) {
        //Si no tengo usuario, redirecciono
        router.push({ name: 'Welcome' });
      }
    });
  }
};
</script>

<style>
</style>