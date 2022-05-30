<template>
    <div class="field-wrapper">
        <div class="field-wrapper__label">
            <label class="field-wrapper__label__label-title">
                {{ labelTitle }}
            </label>

            <a class="field-wrapper__label__link" href="#Forget">
                {{ labelLink }}
            </a>
        </div>

        <div class="field-wrapper__input">
            <input
                :type="fieldType"
                :class="[
                    'field-wrapper__input__type-field',
                    isValidInput
                        ? ''
                        : 'field-wrapper__input__type-field--error',
                ]"
                :placeholder="placeHolder"
                @keyup="keyPressed"
                @blur="keyPressed"
                :name="inputName"
            />
        </div>

        <p v-if="!isValidInput" class="field-wrapper--error-message">
            {{ errorMessage }}
        </p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'form-text-field',

    props: {
        placeHolder: {
            type: String,
        },
        fieldType: {
            type: String,
        },
        labelTitle: {
            type: String,
        },
        labelLink: {
            type: String,
        },
        errorMessage: {
            type: String,
        },
        inputName: {
            type: String,
        },
        inputChanged: Function,
        isValidInput: Boolean,
    },

    methods: {
        keyPressed(e: Event) {
            this.$emit('inputChanged', e)
        },
    },
})
</script>

<style lang="scss" scoped>
.field-wrapper {
    &__label {
        display: flex;
        justify-content: space-between;

        &__label-title {
            display: flex;
            justify-self: start;
            font-weight: 600;
            color: #445065;
            font-size: 14px;
            margin-bottom: 8px;
            width: fit-content;
        }

        &__link {
            color: grey;
            font-size: 14px;
        }
    }

    &__input {
        display: flex;
        position: relative;
        align-items: center;
        margin-bottom: 16px;

        &__type-field {
            display: block;
            box-sizing: border-box;
            height: 40px;
            outline: 0;
            border: 1px solid #dcdee3;
            border-radius: 4px;
            color: #445065;
            font-size: 14px;
            padding-left: 14px;
            width: 100%;

            &::placeholder {
                color: #888888;
            }

            &:focus {
                border-color: #09f;
                box-shadow: inset 0 0 4px 0 #09f;
            }

            &--error {
                border: 1px solid red !important;
                &:focus {
                    box-shadow: none !important;
                }
            }
        }
    }

    &--error-message {
        display: flex;
        justify-content: flex-start;
        color: red;
        font-size: 12px;
        padding-left: 4px;
        margin-bottom: 12px;
    }
}
</style>
