import { ref } from 'vue';

const getPost = (id) => {
    const post = ref(null)

    const error = ref(null)

    const load = async () => {
        try {
          let response = await fetch('http://localhost:3000/posts/' + id);

          if(!response.ok){
            throw Error('That post does not exist')
          }

          const data = await response.json()
          post.value = data
        } catch (err) {
          error.value = err.message
        }
    }

    return { post, error, load }

}

export default getPost