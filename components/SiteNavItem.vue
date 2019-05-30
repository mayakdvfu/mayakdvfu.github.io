<template>
    <li class="nav-item">
        <nuxt-link :to="path">{{ title }}</nuxt-link>
    </li>
</template>

<script>
export default {
    name: 'SiteNavItem',
    props: {
        path: String,
        title: String
    }
}
</script>

<style lang="sass" scoped>
@import '~assets/config';

.nav-item
    @include font('Roboto Mono', 300)
    text-transform: uppercase
    font-size: 24px
    line-height: 28px    
    margin-right: $mr-32
    a
        color: $black
        transition: $transition-time
        &:hover
            color: $accent
    
</style>
