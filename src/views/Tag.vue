<template>
  <div class="tag">
    <div v-if="error"> {{ error }}</div>
    <div v-if="posts.length" class="layout" >
      <PostList :posts="postsWithTag"/>
      <TagCloud :posts="posts"/>
    </div>
    <div v-else><Spinner/></div>
  </div>
</template>

<script>
import { computed } from 'vue';
import getposts from '../composables/getPosts';
import { useRoute } from 'vue-router';
import PostList from '../components/PostList.vue';
import TagCloud from '../components/TagCloud.vue';
import Spinner from '../components/Spinner.vue';

export default {
    components: { PostList, Spinner, TagCloud },
    setup(){
        const { posts, error, load } = getposts() 
        load()

        const currentRoute = useRoute();
        const tag = currentRoute.params.tag

        const postsWithTag = computed(() => {
           return posts.value.filter((p) => p.tags.includes(tag) )
        })

        return { tag, postsWithTag, error, posts }
    }
}
</script>

<style>
  .tag {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
  }
</style>