import { ref } from "vue";

const getPosts = () => {
    const posts = ref([])

    const error = ref(null)

    const load = async () => {
        try {
          // simulate delay
          await new Promise(resolve => {
            setTimeout(resolve, 2000)
          })
          let response = await fetch('http://localhost:3000/posts');

          if(!response.ok){
            throw Error('There is an error')
          }

          const data = await response.json()
          posts.value = data
        } catch (err) {
          error.value = err.message
        }
    }

    return { posts, error, load}
}

export default getPosts