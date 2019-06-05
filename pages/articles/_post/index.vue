<template>
  <section class="article container" :key="$route.params.post">
    <span @click="$router.back()">Назад</span>
    <article-info
      :title="title"
      :author="author"
      :ctime="ctime"
      :vk="vk"
      :github="github"
    />
    <article-content :article="content" />
  </section>
</template>


<script>
import ArticleInfo from '~/components/ArticleInfo.vue'
import ArticleContent from '~/components/ArticleContent.vue'

const fm = require('front-matter')
var md = require('markdown-it')({
  html: true,
  linkify: true,
  typographer: true
})

export default {
  name: 'article_page',
  components: {
    ArticleInfo,
    ArticleContent
  },
  async asyncData({ params }) {
    let fileContent = await import(`~articles/${params.post}.md`)
    let res = fm(fileContent.default)
    let attributes = res.attributes
    let body = res.body
    return {
      title: attributes.title,
      author: attributes.author,
      ctime: attributes.ctime,
      vk: attributes.vk,
      github: attributes.github,
      content: md.render(body)
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~assets/config';

.article
  @include font('Montserrat', 500)  

</style>
