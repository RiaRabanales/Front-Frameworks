import { ref } from 'vue';
import { projectFirestore } from '../firebase/config';

const getPosts = () => {

    const posts = ref([]);
    const error = ref(null);

    const load = async () => {
        try {
            //Aquí tomo los datos de la bd; res es un objeto y me interesa la propiedad docs
            const res = await projectFirestore.collection('posts').get();
            //Map devuelve un nuevo array basado en res.docs, sobre el q se hace una función
            posts.value = res.docs.map((doc) => {
                // ...doc.data es spread syntax: me toma todos los datos
                //Ojo: en el doc no hay ID: la id es del doc
                return { ...doc.data(), id: doc.id }
            });

        } catch (err) {
            error.value = err.message; //así actualizo mi variables de error
            console.log(error.value);
        }
    };

    return { posts, error, load };
};

export default getPosts;