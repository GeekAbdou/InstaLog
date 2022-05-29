<template id="app">
    <slider-section />
    <login-section />
</template>

<script lang="ts">
import SliderSection from './components/SliderComponents/SliderSection.vue'
import LoginSection from './components/LoginComponents/LoginSection.vue'

import { defineComponent } from 'vue'

export default defineComponent({
    components: {
        SliderSection,
        LoginSection,
    },
})
</script>

<style lang="scss">
#app {
    display: flex;
    font-family: $primary-font;
    background-color: $login-bg-color;

    @media (max-width: 960px) {
        flex-direction: column;
    }
}
</style>
