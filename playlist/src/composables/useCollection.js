import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const useCollection = (collection) => {

    const error = ref(null);
    const pending = ref(false);

    const addDocument = async (doc) => {
        //aquí intento añadir un documento nuevo a la colección
        error.value = null;
        pending.value = true;

        try {
            await projectFirestore.collection(collection).add(doc);
            pending.value = false;

        } catch(err) {
            console.log(err.message);
            error.value = 'The message could not be sent';
            pending.value = false;
        }
    }

    return { error, addDocument, pending };
};

export default useCollection;