<template>
    <div class="slider-section">
        <carousel-slider class="slider-section__carousel">
            <slide-item
                v-for="slide in slides"
                :key="slide.id"
                :slideImg="slide.src"
                :slideCaption="slide.caption"
                v-show="slide.id === 3"
            />

            <div
                class="slider-section__carousel__pagination"
                data-cy="slidePicker"
            >
                <span
                    class="slider-section__carousel__pagination__picker"
                    v-for="slide in slides"
                    :key="slide.id"
                    :class="{
                        'slider-section__carousel__pagination__picker--active':
                            slide.id === 3,
                    }"
                ></span>
            </div>
        </carousel-slider>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import SlideItem from './SlideItem.vue'
import CarouselSlider from './CarouselSlider.vue'

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
        CarouselSlider,
    },

    setup() {
        return {
            slides,
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
            }
        }
    }
}
</style>
