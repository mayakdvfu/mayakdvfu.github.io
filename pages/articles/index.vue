<template>
  <div class="container">
    <ul>
      <li v-for="(article, index) in articles" v-bind:key="index">
        <nuxt-link :to="article.link">{{article.name}}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'articles_page',
  data() {
    return {
      articles: []
    }
  },
  mounted() {
    this.importAll(require.context('~articles/', true, /\.md$/))
  },
  methods: {
    importAll(r) {
      r.keys().forEach(key => {
        this.articles.push({
          link: 'articles/' + key.replace(/([.]\/)/gm, '').replace(/[.]md/gm, ''),
          name: key.replace(/([.]\/)/gm, '').replace(/[.]md/gm, '').replace(/[_]/gm, ' ')
        })
      })
    }
  }
}
</script>
