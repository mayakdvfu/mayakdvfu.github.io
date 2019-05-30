<template>
    <nav class="nav">
        <ul class="nav-list">
            <slot></slot>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'SiteNav'
}
</script>

<style lang="sass" scoped>
@import '~assets/config';

.nav
    display: block

.nav-list
    display: flex
</style>
