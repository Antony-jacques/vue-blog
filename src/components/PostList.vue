<template>
  <div>
    <div  v-for="post in posts" :key="post.id" >
      <SinglePost :post="post" />
    </div>
  </div>
</template>

<script>
import SinglePost from './SinglePost.vue'
export default {
  props: ['posts'],
  components: { SinglePost },

  setup(props) {
    console.log('props', props.posts)
  }


}
</script>

<style>

</style>