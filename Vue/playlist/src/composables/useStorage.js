import { ref } from 'vue'
import { projectStorage } from '../firebase/config'
import getUser from './getUser'

const { user } = getUser();

const useStorage = () => {
    const error = ref(null);
    const url = ref(null);
    const filePath = ref(null); //ruta donde guardo el archivo en storage

    const uploadImage = async (file) => {
        filePath.value = `covers/${user.value.uid}/${file.name}`;

        const storageRef = projectStorage.ref(filePath.value);

        try {
            const res = await storageRef.put(file);
            url.value = await res.ref.getDownloadURL();
        } catch(err) {
            console.log(err.message);
            error.value = err.message
        }
    }

    const deleteImage = async (filePath) => {
        const storageRef = projectStorage.ref(filePath.value);

        try {
            storageRef.delete();
        } catch(err) {
            console.log(err.message);
            error.value = err.message
        }
    }

    return { url, filePath, uploadImage, deleteImage, error};
}

export default useStorage;