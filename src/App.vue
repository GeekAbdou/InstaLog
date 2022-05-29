<template id="app">
    <slider-side />
    <login-side />
</template>

<script lang="ts">
import SliderSide from './components/SliderComponents/SliderSide.vue'
import LoginSide from './components/LoginComponents/LoginSide.vue'

import { defineComponent } from 'vue'

export default defineComponent({
    components: {
        LoginSide,
        SliderSide,
    },
})
</script>

<style lang="scss">
#app {
    display: flex;
}
</style>
