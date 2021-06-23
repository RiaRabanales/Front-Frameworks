import { ref } from 'vue'

const getPost = (id) => {
    const post = ref(null);
    const error = ref(null);

    const loadPost = async () => {
        try {
            // finjo un delay
            await new Promise(resolve => {
                setTimeout(resolve, 2000);
            })

            let data = await fetch("http://localhost:3000/posts/" + id);
            if (!data.ok) {
                throw Error("no data available");
            }
            post.value = await data.json();
        } catch (err) {
            error.value = err.message;
            console.log(error.value);
        }
    };

    return { post, error, loadPost };
};

export default getPost;