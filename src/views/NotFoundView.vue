<template>
    <div class="not-found">
        <Error404NotFound />

        <h1 class="not-found__title">404-Page Not Found!</h1>

        <p class="not-found__message">
            Sorry, that page doesn't exist. What would you like to do?
        </p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Error404NotFound from '@/components/global/Error404NotFound.vue'

export default defineComponent({
    components: {
        Error404NotFound,
    },
})
</script>

<style lang="scss">
.not-found {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fff;
    width: fit-content;
    height: 100vh;
    width: 100%;

    &__img {
        margin-top: 5rem;
        width: 450px;
        @media (max-width: 992px) {
            width: 100%;
            height: auto;
            max-width: 60vw;
        }
    }

    &__title {
        font-size: 2vw;
        font-weight: bold;
        color: #000080;
        @media (max-width: 992px) {
            font-size: 3vw;
        }
        @media (max-width: 768px) {
            font-size: 5vw;
        }
    }

    &__message {
        color: #7f93bc;
        font-size: 1.25vw;
        @media (max-width: 992px) {
            font-size: 1.5vw;
        }
        @media (max-width: 768px) {
            font-size: 5vw;
        }
    }
}
</style>
