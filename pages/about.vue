<template>
  <section>
    <div v-html="Hello"></div>
  </section>
</template>

<script>

export default {
  name: 'about_page',
  components: {},
  computed: {
    Hello() {
      return Hello
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~assets/config';
</style>
