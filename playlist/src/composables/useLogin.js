import { ref } from 'vue';
import { projectAuth } from '../firebase/config'

const error = ref(null);
const pending = ref(false);

const login = async (email, password) => {
    error.value = null;
    pending.value = true; //porque empiezo a hacer un request

    try {
        const res = projectAuth.signInWithEmailAndPassword(email, password);
        if (!res) {
            throw new Error('No se ha podido completar el login.')
        }
        error.value = null;

        pending.value = false; //porque se ha completado la request
        return res;
    
    } catch(err) {
        console.log(err.message);
        error.value = err.message;
        pending.value = false;
    }
};

const useLogin = () => {
    return { error, login, pending }
};

export default useLogin;