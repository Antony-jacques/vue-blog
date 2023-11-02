<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post" class="post">
    <h3>{{ post.title }}</h3>
    <p class="pre">{{ post.body }}</p>
    <button @click="handleclick" class="delete">delete post</button>
  </div>
  <div v-else ><Spinner/></div>
</template>

<script>
import getPost from "../composables/getPost";
import Spinner from '../components/Spinner.vue';

import { useRoute, useRouter } from 'vue-router'
import { projectFirestore } from "@/firebase/config";

export default {
  props: ["id"],
  components: { Spinner },
  setup(props) {
    const route = useRoute() // get the route of the page that we are on
    const router = useRouter()

    const { post, error, load } = getPost(route.params.id);
    load();

    const handleclick = async () =>{
      await projectFirestore.collection('posts')
        .doc(props.id)
        .delete();

        router.push({name: 'Home'})


    }

    return { post, error, handleclick };
  },
};
</script>

<style>
.post {
  max-width: 1200px;
  margin: 0 auto;
}

.post p {
    color: #444;
    line-height: 1.5em;
    margin-top: 2.5rem;
}

.pre {
    white-space: pre-wrap;
}

button.delete {
  margin: 10px auto;
}
</style>