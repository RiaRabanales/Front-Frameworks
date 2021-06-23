import { ref } from "vue";

const getPosts = () => {

    const posts = ref([]);
    const error = ref(null);

    const load = async () => {
        try {
            await new Promise(resolve => {
                setTimeout(resolve, 1600);
            })

            let data = await fetch("http://localhost:3000/posts");
            if (!data.ok) {
                throw Error("no data available");
            }
            // Si están correctos pasan de lo anterior:
            posts.value = await data.json();
        } catch (err) {
            error.value = err.message; //así actualizo mi variables de error
            console.log(error.value);
        }
    };

    return { posts, error, load };
};

export default getPosts;