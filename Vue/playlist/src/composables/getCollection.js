import { ref, watchEffect } from 'vue'
import { projectFirestore } from '../firebase/config'

const getCollection = (collection, query) => {

    const documents = ref(null);
    const error = ref(null);

    let collectionRef = projectFirestore.collection(collection)
        .orderBy('createdAt');
        //.where() para la query, pero sólo lo uso si lo paso

    if (query) {
        collectionRef = collectionRef.where(...query);
    }

    //onSnapshot es como creo un real time listener en mi BBDD
    const subscription = collectionRef.onSnapshot((snap) => {
        let results = [];
        snap.docs.forEach(doc => {
            //me genero un objeto con todos los datos de cada documento
            doc.data().createdAt && results.push({ ...doc.data(), id: doc.id });
            // el código de la derecha sólo se ejecuta al hacerlo el de la izquierda
            // esto lo hago para evitar q me coja lo del caché; va al server, lo crea, y vuelve al navegador
        });

        //aquí actualizo los valores
        documents.value = results;
        error.value = null;
    }, err => {
        //esta segunda callback se llama si hay un error
        //sustituye a un try catch
        console.log(err.message);
        documents.value = null;
        error.value = 'Data could not be fetched.'
    });

    //se activa cuando el componente en que está montado hace unmount; así cierro listeners
    watchEffect((onInvalidate) => {
        onInvalidate(() => subscription());
    });

    return { documents, error };
};

export default getCollection;