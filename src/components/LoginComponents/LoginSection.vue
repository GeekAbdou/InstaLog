<template>
    <div class="login-wrapper"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    components: {},
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
}
</style>
