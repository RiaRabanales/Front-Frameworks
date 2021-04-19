<template>
  <div v-if="error" class="error">{{ error }}</div>
  <div v-if="playlist" class="playlistDetails">
    <!-- Info de cada playlist -->
    <div class="playlistInfo">
      <div class="cover">
        <img :src="playlist.coverUrl" :alt="playlist.title" />
      </div>
      <h2>{{ playlist.title }}</h2>
      <p class="username">Playlist by {{ playlist.userName }}</p>
      <p class="description">{{ playlist.description }}</p>
      <button v-if="ownership" @click="handleDelete">Delete Playlist</button>
    </div>

    <!-- Lista de canciones -->
    <div class="songs">
      <p>song list placeholder</p>
    </div>
  </div>
</template>

<script>
import useStorage from "@/composables/useStorage";
import useDocument from "@/composables/useDocument";
import getDocument from "@/composables/getDocument";
import getUser from "@/composables/getUser";
import { computed } from "vue";
import { useRouter } from "vue-router";

export default {
  props: ["id"],

  setup(props) {
    // toma el objeto document pero le cambia el nombre a playlist
    const { error, document: playlist } = getDocument("playlists", props.id);
    const { user } = getUser();
    const { deleteDoc } = useDocument("playlists", props.id);
    const { deleteImage } = useStorage();
    const router = useRouter();

    const ownership = computed(() => {
      //se tienen que cumplir las tres condiciones
      return (
        playlist.value && user.value && user.value.uid == playlist.value.userId
      );
    });

    const handleDelete = async () => {
      await deleteImage(playlist.value.filePath);
      await deleteDoc();
      router.push({ name: 'Home' })
    };

    return { error, playlist, ownership, handleDelete };
  },
};
</script>

<style>
.playlistDetails {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 80px;
}
.cover {
  overflow: hidden;
  border-radius: 20px;
  position: relative;
  padding: 160px;
}
.cover img {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  max-width: 200%;
  min-height: 100%;
  max-height: 200%;
}
.playlistInfo,
.description {
  text-align: center;
}
.playlistInfo h2 {
  text-transform: capitalize;
  font-size: 28px;
  margin-top: 20px;
}
.playlistInfo p {
  margin-bottom: 20px;
}
.username {
  color: #999;
}
</style>