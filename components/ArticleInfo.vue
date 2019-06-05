<template>
  <section class="article-info">
    <h1 class="article-info__title">{{ title }}</h1>
    <div class="article-info__extra">
      <div class="article-info__author">
        {{ author }}
        <div class="article-info__social">
          <a :href="vk" target="_blank">VK</a>
          <a :href="github" target="_blank">GitHub</a>
        </div>
      </div>
      <span class="article-info__ctime">Дата публикации: {{ ctime }}</span>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: String,
    author: String,
    ctime: String,
    vk: String,
    github: String
  }
}
</script>

<style lang="sass" scoped>
@import '~assets/config';

.article-info
  color: #aaaaaa
  &__title
    @include font('Montserrat', 700)
    font-size: 3em
    color: #000000 !important
  &__extra
    font-size: 0.9em
  &__author
    display: flex
  &__social
    margin-left: 10px
    a
      transition: $transition-time
      &:hover
        color: #BB0022
</style>
