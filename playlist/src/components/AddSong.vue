<template>
<div class="add-song">
  <button v-if="!showForm" @click="showForm = !showForm">Add Songs</button>
  <form v-if="showForm" @submit.prevent="submitSong">
    <h4>Add a new song!</h4>
    <input type="text" v-model="title" placeholder="Song title" required>
    <input type="text" v-model="artist" placeholder="Artist" required>
    <button>Add</button>
  </form>
</div>
</template>

<script>
import { ref } from 'vue';
import useDocument from '@/composables/useDocument';

export default {
  props: ['playlist'],
  setup(props) {
    const title = ref('');
    const artist = ref('');

    const showForm = ref(false);
    const { updateDoc } = useDocument('playlists', props.playlist.id);

    const submitSong = async () => {
      const newSong = {
        title: title.value,
        artist: artist.value,
        //no me mato, lo hago con math; para evitar duplicado debiera usar una 3rd party library
        id: Math.floor(Math.random() * 1000000)
      }

      await updateDoc({
        //paso tanto las canciones que hay (las recibo por props) como la nueva:
        songs: [...props.playlist.songs, newSong]
      });

      title.value = '';
      artist.value = '';
    }

    return { title, artist, showForm, submitSong };
  }
};
</script>

<style scoped>
  .add-song {
    text-align: center;
    margin-top: 40px;
  }
  form {
    max-width: 100%;
    text-align: left;
  }
</style>