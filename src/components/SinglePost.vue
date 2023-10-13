<template>
    <div>
        <h3>{{ post.title  }}</h3>
        <p>{{ snippet }}</p>
        <span v-for="tag in post.tags" :key="tag" >
            #{{ tag }}
        </span>
    </div>
</template>

<script>
import { computed, onMounted, onUnmounted, onUpdated } from 'vue'
export default {
    props: ['post'],

    setup(props) {
        console.log('post.body', props.post.body)
        const snippet = computed(() => {
            return props.post.body.substring(0, 20) + '...'
        })

        onMounted(()=> console.log('mounted'))
        onUnmounted(()=> console.log('unmounted'))
        onUpdated(() => console.log('updated'))

        return { snippet }
    }
}
</script>

<style>

</style>