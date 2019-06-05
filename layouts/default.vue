<template>
  <div>
    <site-header></site-header>
    <main>
      <nuxt />
    </main>
    <site-footer></site-footer>
  </div>
</template>

<script>
import SiteHeader from '~/components/SiteHeader.vue'
import SiteFooter from '~/components/SiteFooter.vue'

export default {
  name: 'Default',
  components: {
    SiteHeader,
    SiteFooter
  }
}
</script>

<style lang="sass" scoped>
@import '~assets/config';

main
  display: block
  width: 100vw
  min-height: 100vh
  padding: $bar-height + 30px 0

</style>

