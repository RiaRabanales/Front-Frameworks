<template>
  <div v-if="!songs.length">There are no songs in this playlist!</div>
  <div class="song" v-for="song in songs" :key="song.id">
    <div class="details">
      <h3>{{ song.title }}</h3>
      <p>{{ song.artist }}</p>
    </div>
    <button v-if="ownership" @click="handleDelete(song.id)">delete</button>
  </div>
</template>

<script>
import useDocument from "@/composables/useDocument";

export default {
  props: ["songs", "ownership", "playlistId"],
  setup(props) {
    const { updateDoc } = useDocument("playlists", props.playlistId);

    const handleDelete = async (id) => {
      //Quito las canciones en que coincide el id
      const songs = props.songs.filter((song) => song.id != id);

      await updateDoc({ songs }); //esto equivale a songs: songs
    };

    return { handleDelete };
  },
};
</script>

<style scoped>
.song {
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px dashed var(--secondary);
  margin-bottom: 20px;
}
</style>