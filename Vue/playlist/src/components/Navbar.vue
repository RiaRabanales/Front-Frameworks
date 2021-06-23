<template>
  <div class="navbar">
    <nav>
      <h1>
        <img src="@/assets/notes.png" alt="Playlist Logo" />
        <router-link :to="{ name: 'Home' }">HOME</router-link>
      </h1>
      <div class="links">
        <div v-if="user">
          <router-link :to="{ name: 'CreatePlaylist' }">New playlist</router-link>
          <router-link :to="{ name: 'UserPlaylists' }">My playlists</router-link>
          <span>Hi there, {{ user.displayName }}!</span>
          <button @click="handleLogout">Logout</button>
        </div>
        <div v-else>
          <router-link class="btn" :to="{ name: 'Login' }">Log in</router-link>
          <router-link class="btn" :to="{ name: 'Signup' }">Sign up</router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import useLogout from "@/composables/useLogout";
import getUser from "@/composables/getUser";
import { useRouter } from "vue-router";

export default {
  setup() {
    const { user } = getUser(); //para mostrar unas cosas u otras según si está logeado o no
    const { logout } = useLogout();
    const router = useRouter();

    const handleLogout = async () => {
      await logout();
      console.log("user logegd out");
      router.push({ name: "Login" });
    };

    return { handleLogout, user };
  },
};
</script>

<style scoped>
.navbar {
  padding: 16px 10px;
  margin-bottom: 60px;
  background: white;
}
nav {
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}
nav img {
  max-height: 60px;
}
nav h1 {
  margin-left: 20px;
}
nav .links {
  margin-left: auto;
}
nav .links a,
button {
  margin-left: 16px;
  font-size: 14px;
}
span {
  font-size: 14px;
  display: inline-block;
  margin-left: 16px;
  padding-left: 16px;
  border-left: 1px solid #ddd;
}
</style>