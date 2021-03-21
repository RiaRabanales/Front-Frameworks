import { ref } from 'vue';
import { projectAuth } from '../firebase/config'

const error = ref(null);
//no me hace falta meter estos dentro de useSignup
const signup = async (email, password, displayName) => {
    error.value = null; //reseteo el valor del error para limpiar errores de procesos anteriores

    try {
        const res = await projectAuth.createUserWithEmailAndPassword(email, password);
        //devuelve una propiedad de usuario
        if (!res) {
            throw new Error('Cound not complete the signup.')
        }
        //ahora le añado el nombre:
        await res.user.updateProfile({ displayName });
        error.value = null;

        return res;
    
    } catch(err) {
        console.log(err.message);
        error.value = err.message;
    }
};

const useSignup = () => {
    return {error, signup }
};

export default useSignup;