<template>
    <div class="slider-section">
        <div class="slider-section__carousel">
            <slide-item
                v-for="slide in slides"
                :key="slide.id"
                :slideImg="slide.src"
                :slideCaption="slide.caption"
                v-show="slide.id === currentSlide"
                :slideDir="slideDirection"
            />

            <div
                class="slider-section__carousel__pagination"
                data-cy="slidePicker"
            >
                <span
                    class="slider-section__carousel__pagination__picker"
                    v-for="slide in slides"
                    :key="slide.id"
                    @click="slidePick(slide.id)"
                    :class="{
                        'slider-section__carousel__pagination__picker--active':
                            slide.id === currentSlide,
                    }"
                ></span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount, ref } from 'vue'

import SlideItem from './SlideItem.vue'

const slides = [
    {
        id: 1,
        src: 'slide-1',
        caption: 'Accelerate Your Entire Mobile Team Workflow',
    },
    {
        id: 2,
        src: 'slide-2',
        caption: 'The most comprehensive bug reporting tool for mobile apps',
    },
    {
        id: 3,
        src: 'slide-3',
        caption: 'Secure crash reporting with real-time alerts',
    },
]

export default defineComponent({
    components: {
        SlideItem,
    },

    setup() {
        onBeforeUnmount(() => clearInterval(intervalHandle)) // clear interval on unmount for prevent memory leak

        let currentSlide = ref(1)
        const slidesLength = slides.length
        const slideSpeed = ref(4500)
        const slideDirection = ref('slide-left')
        let intervalHandle = setInterval(() => {
            nextSlide()
        }, slideSpeed.value)

        function nextSlide() {
            if (currentSlide.value === slidesLength) {
                currentSlide.value = 1
            } else {
                currentSlide.value++
            }
            slideDirection.value = 'slide-right'
            smoothSlide()
        }

        const slidePick = (index: number) => {
            index < currentSlide.value
                ? (slideDirection.value = 'slide-left')
                : (slideDirection.value = 'slide-right')
            currentSlide.value = index
            smoothSlide()
        }

        function smoothSlide() {
            clearInterval(intervalHandle)
            intervalHandle = setInterval(() => {
                nextSlide()
            }, slideSpeed.value)
        }

        return {
            slides,
            currentSlide,
            intervalHandle,
            slideSpeed,
            slideDirection,
            nextSlide,
            slidePick,
            smoothSlide,
        }
    },
})
</script>

<style lang="scss" scoped>
.slider-section {
    display: flex;
    background-color: $slider-bg-color;
    width: 100%;
    height: 100vh;
    margin: auto 0;
    &__carousel {
        position: relative;
        width: 100%;
        display: flex;
        overflow: hidden;

        &__pagination {
            position: absolute;
            bottom: 15%;
            width: 100%;
            display: flex;
            gap: 8px;
            justify-content: center;
            align-items: center;

            /*for handle 500% zoom*/
            @media (max-height: 480px) {
                bottom: 8%;
            }

            &__picker {
                width: 12px;
                height: 12px;
                border-radius: 50%;
                cursor: pointer;
                background-color: $slider-bg-color;
                border: 1px solid #fff;
                border-radius: 50%;

                &--active {
                    background-color: #fff;
                }
                /*for handle 500% zoom*/
                @media (max-height: 480px) {
                    width: 8px;
                    height: 8px;
                }
            }
        }
    }
}
</style>
