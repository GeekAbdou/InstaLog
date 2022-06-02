<template>
    <div class="login-wrapper">
        <Login-Header />

        <Login-Body />

        <Login-Footer />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import LoginHeader from './LoginHeader.vue'
import LoginBody from './LoginBody.vue'
import LoginFooter from './LoginFooter.vue'

export default defineComponent({
    components: {
        LoginHeader,
        LoginBody,
        LoginFooter,
    },
})
</script>

<style lang="scss" scoped>
.login-wrapper {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-color: $login-bg-color;
    margin: auto 0;

    @media (max-height: 720px) {
        height: 100%;
    }

    @media (max-width: 960px) {
        height: 100%;
    }
}
</style>
