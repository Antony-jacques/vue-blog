import { ref } from "vue";


const getPosts = () => {
    const posts = ref([])

    const error = ref(null)

    const load = async () => {
        try {
        let response = await fetch('http://localhost:3000/posts');

        if(!response.ok){
            throw Error('There is an error')
        }

        const data = await response.json()
        console.log(data, 'data')
        posts.value = data
        console.log('posts', posts)
        } catch (err) {
        error.value = err.message
        }
    }

    return { posts, error, load}
}

export default getPosts