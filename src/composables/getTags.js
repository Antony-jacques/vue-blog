//import { getPosts } from './getPosts'
import { ref } from "vue";

const  getTags = (pôsts) => {

    const tags
    const posts = ref([])

    const error = ref(null)

    const loadTags = async () => {
        try {

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

    return {}
}

export default getTags