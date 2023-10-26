<template>
  tag : {{ tag }}
  <div class="tag">
    <div v-if="error"> {{ error }}</div>
    <div v-if="postsWithTag.length" >
      <PostList :posts="postsWithTag"/>
    </div>
    <div v-else><Spinner/></div>
  </div>
</template>

<script>
import { computed } from 'vue';
import getposts from '../composables/getPosts';
import { useRoute } from 'vue-router';
import PostList from '../components/PostList.vue';
import Spinner from '../components/Spinner.vue';

export default {
    components: { PostList, Spinner },
    setup(){
        const { posts, error, load } = getposts() 
        load()

        const currentRoute = useRoute();
        const tag = currentRoute.params.tag

        const postsWithTag = computed(() => {
           return posts.value.filter((p) => p.tags.includes(tag) )
        })

        return { tag, postsWithTag, error }
    }
}
</script>

<style>

</style>