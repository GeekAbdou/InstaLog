<template>
    <div class="field-wrapper">
        <div class="field-wrapper__label">
            <label class="field-wrapper__label__label-title">
                {{ labelTitle }}
            </label>

            <a
                class="field-wrapper__label__link"
                href="#Forget"
                v-if="inputName === 'password'"
            >
                {{ labelLink }}
            </a>
        </div>

        <div class="field-wrapper__input">
            <input
                :type="fieldType"
                class="field-wrapper__input__type-field"
                :class="{
                    'field-wrapper__input__type-field--error': !isValidInput,
                }"
                :placeholder="placeHolder"
                @keyup="keyPressed"
                @blur="keyPressed"
                :name="inputName"
                :data-cy="inputName"
            />
            <span
                v-if="inputName === 'password'"
                :class="togglePassword"
                role="button"
                @click="togglePasswordVisibility"
            ></span>
        </div>

        <p
            v-if="!isValidInput"
            class="field-wrapper--error-message"
            data-cy="errorMessage"
        >
            {{ errorMessage }}
        </p>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

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

    setup(props, { emit }) {
        const passwordField = ref(document.getElementsByName('password'))
        let togglePassword = ref('icon-eye-blocked')

        function keyPressed(e: Event) {
            // InputChange with Debouncing
            let timer: ReturnType<typeof setTimeout> = 300
            if (timer) clearTimeout(timer)
            timer = setTimeout(() => {
                emit('inputChanged', e)
            }, 300)
        }

        function togglePasswordVisibility() {
            const type =
                passwordField.value[0].getAttribute('type') === 'password'
                    ? 'text'
                    : 'password'
            passwordField.value[0].setAttribute('type', type)

            togglePassword.value === 'icon-eye-blocked'
                ? (togglePassword.value = 'icon-eye')
                : (togglePassword.value = 'icon-eye-blocked')
        }

        return {
            togglePasswordVisibility,
            togglePassword,
            keyPressed,
        }
    },
})
</script>

<style lang="scss" scoped>
.field-wrapper {
    &__label {
        display: flex;
        justify-content: space-between;

        &__label-title {
            font-weight: 600;
            color: #445065;
            font-size: 14px;
            padding-bottom: 8px;
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
        margin-top: -8px; /*Not reversing the flow => just for make it pixel perfect as it sent @ the document*/
    }
}

.icon-eye,
.icon-eye-blocked {
    display: inline-block;
    position: absolute;
    padding: 12px;
    cursor: pointer;
    right: 0;

    &::before {
        content: '\e9ce';
    }
}
.icon-eye-blocked:before {
    content: '\e9d1';
}
</style>
