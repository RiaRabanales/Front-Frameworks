<template>
  <form @submit.prevent="handleSubmit">
    <h4>Create New Playlist</h4>
    <input type="text" placeholder="Title" v-model="title" required />
    <textarea
      placeholder="Description"
      v-model="description"
      required
    ></textarea>
    <!-- Para subir la imagen -->
    <label>Cover image</label>
    <input type="file" @change="handleFile" />

    <div class="error">{{ fileError }}</div>
    <button v-if="!isPending">Create</button>
    <button v-else disabled>saving...</button>
  </form>
</template>

<script>
import { ref } from "vue";
import useStorage from "@/composables/useStorage";
import useCollection from "@/composables/useCollection";
import getUser from "@/composables/getUser";
import { timestamp } from "@/firebase/config";

export default {
  setup() {
    const { filePath, url, uploadImage } = useStorage();
    const { error, addDoc } = useCollection("playlists");
    const { user } = getUser();

    const title = ref("");
    const description = ref("");
    const file = ref(null);
    const fileError = ref(null);
    //Tipos de imagen que permito subir:
    const types = ["image/png", "image/jpeg", "image/gif"];

    const isPending = ref(false);

    const handleFile = (e) => {
      const selected = e.target.files[0];
      //si esto tiene un valor quiero actualizar el valor de file
      if (selected && types.includes(selected.type)) {
        file.value = selected;
        fileError.value = null;
      } else {
        file.value = null;
        if (!types.includes(selected.type)) {
          fileError.value = "Not an image file (formats allowed: png, jpg, gif";
        }
      }
    };

    const handleSubmit = async () => {
      if (file.value) {
        isPending.value = true; //variable para el 'loading'
        await uploadImage(file.value);
        //ver 149: creo la colección para la playlist
        await addDoc({
          title: title.value,
          description: description.value,
          userId: user.value.uid, //id el usuario
          userName: user.value.displayName,
          coverUrl: url.value,
          filePath: filePath.value,
          songs: [],
          createdAt: timestamp(),
        });
        isPending.value = false;
        if (!error.value) {
          console.log("Playlist ok");
        }
      }
    };

    return { title, description, file, fileError, handleFile, handleSubmit, isPending };
  },
};
</script>

<style scoped>
form {
  background: white;
}
input[type="file"] {
  border: 0;
  padding: 0;
}
label {
  font-size: 12px;
  display: block;
  margin-top: 30px;
}
button {
  margin-top: 20px;
}
</style>