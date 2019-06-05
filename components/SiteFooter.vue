<template>
  <footer class="footer">
    <div class="footer__inner">
      <div class="footer__inner__left">
        <logo></logo>
        <div class="social-links">
          <a href="https://vk.com/mayakdvfu" target="_blank">vk</a>
          <a href="https://instagram.com/mayakdvfu" target="_blank">instagram</a>
        </div>
      </div>
      <div class="footer__inner__right">
        <div class="location">2VFV+RG Russkiy, Primorsky Krai</div>
      </div>
    </div>
  </footer>
</template>

<script>
import Logo from '~/components/FooterLogo.vue'

export default {
  name: 'site-footer',
  components: {
    Logo
  }
}
</script>

<style lang="sass" scoped>
@import '~assets/config';

.footer
  @include font('Roboto Mono', 300)
  background: #ffffff
  height: $bar-height
  width: 100vw
  display: flex
  align-items: center
  padding: 0
  position: fixed
  bottom: 0px
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25)
  &__inner
    width: 100vw
    display: flex
    justify-content: space-between
    padding: 0 32px
    &__left
      display: flex
      align-items: center
    .logo
      margin-right: 30px
    a
      text-transform: uppercase
      font-size: 24px
      line-height: 28px    
      margin-right: 24px
      color: $black
      transition: $transition-time
      &:hover
          color: $accent

</style>