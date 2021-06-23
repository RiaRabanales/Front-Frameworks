import { ref } from 'vue';

const useTags = (posts) => {

    const tags = ref([]);
    const tagSet = new Set();   //no tiene que ser reactivo. Uso set para evitar duplicados.

    posts.forEach(item => {
        item.tags.forEach(tag => tagSet.add(tag));
    });

    tags.value = [...tagSet];  //esto hace spread de los elementos del tagset y los mete individualmente en el array

    return { tags }
}

export default useTags;