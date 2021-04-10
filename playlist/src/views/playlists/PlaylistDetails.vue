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
    </div>

    <!-- Lista de canciones -->
    <div class="songs">
      <p>song list placeholder</p>
    </div>
  </div>
</template>

<script>
import getDocument from "@/composables/getDocument";

export default {
  props: ["id"],

  setup(props) {
    // toma el objeto document pero le cambia el nombre a playlist
    const { error, document: playlist } = getDocument("playlists", props.id);

    return { error, playlist };
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
.playlistInfo {
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
.description {
  text-align: justify;
}
</style>