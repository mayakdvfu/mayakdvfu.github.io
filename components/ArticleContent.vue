<template>
    <section class="article-content" v-html="article"></section>
</template>

<script>
export default {
    props: {
        article: String
    }
}
</script>