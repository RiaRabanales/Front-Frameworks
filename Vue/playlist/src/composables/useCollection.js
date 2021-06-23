import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const useCollection = (collection) => {

    const error = ref(null);
    const pending = ref(false);

    const addDoc = async (doc) => {
        //aquí intento añadir un documento nuevo a la colección
        error.value = null;
        pending.value = true;

        try {
            const res = await projectFirestore.collection(collection).add(doc);
            pending.value = false;
            //Al crear res paso a tener el objeto que creo en un documento
            return res;

        } catch(err) {
            console.log(err.message);
            error.value = 'The message could not be sent';
            pending.value = false;
        }
    }

    return { error, addDoc, pending };
};

export default useCollection;