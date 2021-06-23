import { ref } from 'vue'
import { projectFirestore } from '../firebase/config';

const getPost = (id) => {
    const post = ref(null);
    const error = ref(null);

    const loadPost = async () => {
        try {
            // finjo un delay
            await new Promise(resolve => {
                setTimeout(resolve, 1200);
            })

            let res = await projectFirestore.collection('posts').doc(id).get();
            if(!res.exists) {
                throw Error('non-existent post')
            }
            
            post.value = { ...res.data(), id: res.id};
            
        } catch (err) {
            error.value = err.message;
            console.log(error.value);
        }
    };

    return { post, error, loadPost };
};

export default getPost;