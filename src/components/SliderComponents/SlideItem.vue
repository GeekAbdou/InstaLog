<template>
    <div class="slide-content">
        <img
            draggable="false"
            class="slide-content__img unselectable"
            :src="require(`@/assets/imgs/slides/${slideImg}.svg`)"
            alt="slide"
        />

        <div class="slide-content__title">{{ slideCaption }}</div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        slideImg: {
            type: String,
            default: '',
        },
        slideCaption: {
            type: String,
            default: '',
        },
    },

    setup() {
        return {}
    },
})
</script>

<style lang="scss" scoped>
.slide-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    max-height: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &__img {
        width: 60%;
        height: auto;
        max-width: 60vw;
    }

    &__title {
        margin: 52px;
        font-size: 1.25vw;
        color: #fff;
    }
}
</style>
