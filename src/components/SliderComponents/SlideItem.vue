<template>
    <transition :name="slideDir">
        <div class="slide-content">
            <img
                draggable="false"
                class="slide-content__img unselectable"
                :src="require(`@/assets/imgs/slides/${slideImg}.svg`)"
                alt="slide"
            />

            <div class="slide-content__title">{{ slideCaption }}</div>
        </div></transition
    >
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
        slideDir: {
            type: String,
            default: 'slide-left',
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

        @media (max-width: 768px) {
            width: 70%;
            max-width: 70vw;
        }

        @media (max-width: 480px) {
            width: 80%;
            max-width: 80vw;
        }
    }

    &__title {
        margin: 52px;
        font-size: 1.25vw;
        color: #fff;

        @media (max-width: 1200px) {
            font-size: 2vw;
        }

        @media (max-width: 992px) {
            font-size: 2.7vw;
        }

        @media (max-width: 768px) {
            font-size: 5vw;
        }
    }
}
.slide-left-enter-active {
    animation: slide-left-in 1s ease-in-out;
}

.slide-left-leave-active {
    animation: slide-left-out 1s ease-in-out;
}

@keyframes slide-left-in {
    from {
        transform: translateX(-100%);
    }

    to {
        transform: translateX(100);
    }
}

@keyframes slide-left-out {
    from {
        transform: translateX(0%);
    }

    to {
        transform: translateX(100%);
    }
}

.slide-right-enter-active {
    animation: slide-right-in 1s ease-in-out;
}

.slide-right-leave-active {
    animation: slide-right-out 1s ease-in-out;
}

@keyframes slide-right-out {
    from {
        transform: translateX(0%);
    }
    to {
        transform: translateX(-100%);
    }
}

@keyframes slide-right-in {
    from {
        transform: translateX(100%);
    }
    to {
        transform: translateX(0);
    }
}
</style>
