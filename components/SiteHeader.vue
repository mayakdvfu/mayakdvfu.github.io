<template>
    <section class="header">
        <div class="header__inner">
            <logo class="logo"></logo>
            <site-nav>
                <site-nav-item title='Статьи' path='/articles'></site-nav-item>
                <site-nav-item title='Проекты' path='/projects'></site-nav-item>
                <site-nav-item title='О нас' path='/about'></site-nav-item>
            </site-nav>
        </div>
    </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import SiteNav from '~/components/SiteNav.vue'
import SiteNavItem from '~/components/SiteNavItem.vue'

export default {
    name: 'site-header',
    components: {
        Logo,
        SiteNav,
        SiteNavItem
    }
}
</script>

<style lang="sass" scoped>
@import '~assets/config';

.header
    height: $bar-height
    width: 100vw
    display: flex
    align-items: center
    position: fixed
    top: 0
    left: 0
    background: #ffffff
    z-index: 1000
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25)
    &__inner
        padding: 0 32px
        display: flex
        .logo
            margin-right: 75px
</style>
