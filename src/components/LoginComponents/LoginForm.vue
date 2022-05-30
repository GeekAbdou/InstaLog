<template>
    <div class="login-wrapper">
        <form class="login-wrapper__login-form" @submit.prevent="login">
            <transition name="fade">
                <div
                    v-if="loginFailed"
                    class="login-wrapper__login-form__alert"
                    data-cy="logAlert"
                >
                    Your email and/or password are incorrect!
                </div>
            </transition>

            <Form-Text-Field
                placeHolder="you@company.com"
                fieldType="email"
                labelTitle="Work Email"
                labelLink=""
                errorMessage="Enter a valid email address."
                @inputChanged="emailChanged"
                :isValidInput="emailValid"
                inputName="email"
            />

            <Form-Text-Field
                placeHolder="8+ Characters"
                fieldType="password"
                labelTitle="Password"
                labelLink=" Forgot Password?"
                errorMessage="Password must be 8 characters or more."
                @inputChanged="passwordChanged"
                :isValidInput="passwordValid"
                inputName="password"
            />

            <button
                class="login-wrapper__login-form__login-btn"
                :class="{
                    'login-wrapper__login-form__login-btn--disabled':
                        LoginDisabled,
                }"
                :disabled="LoginDisabled"
                data-cy="logBtn"
            >
                Log in
            </button>
        </form>

        <div class="login-wrapper__sign-up">
            <p class="login-wrapper__sign-up__signup-link">
                Don't have an account?
                <a class="signup-link--link-hover" href="/login#">Sign up</a>
            </p>

            <a class="signup-link--link-hover" href="/login#">Login via SSO</a>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useStore } from '@/store'
import router from '@/router'

import FormTextField from '@/components/global/FormTextField.vue'
export default defineComponent({
    components: {
        FormTextField,
    },

    setup() {
        const store = useStore()
        const emailInput = ref('')
        const passwordInput = ref('')
        const emailValid = ref(true)
        const passwordValid = ref(true)
        const loginFailed = ref(false)
        const LoginDisabled = ref(true)
        const emailName = ref('')

        function emailChanged(e: Event) {
            emailInput.value = (e.target as HTMLInputElement).value
            emailValid.value = validateEmail(emailInput.value)
            emailName.value = emailInput.value.substring(
                0,
                emailInput.value.indexOf('@')
            )
        }

        function passwordChanged(e: Event) {
            passwordInput.value = (e.target as HTMLInputElement).value
            passwordValid.value = validatePassword(passwordInput.value)
            LoginDisabled.value = !(emailValid.value && passwordValid.value)
        }

        function validateEmail(email: string) {
            const emailRegExp = RegExp(
                // eslint-disable-next-line
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )
            return emailRegExp.test(String(email))
        }

        function validatePassword(password: string) {
            // eslint-disable-next-line
            let passwordRegExp = RegExp(
                /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
            )

            if (
                !password.includes(emailName.value) &&
                password.length >= 8 &&
                !passwordRegExp.test(String(password))
            ) {
                return true
            }
            return false
        }

        const login = async () => {
            store.dispatch('login', {
                email: emailInput.value,
                password: passwordInput.value,
            })
            const isAuthenticated = store.getters.isAuth
            isAuthenticated
                ? router.push('/welcome')
                : (loginFailed.value = true)
        }

        return {
            emailInput,
            emailName,
            passwordInput,
            emailValid,
            passwordValid,
            loginFailed,
            LoginDisabled,
            store,
            emailChanged,
            passwordChanged,
            validateEmail,
            validatePassword,
            login,
        }
    },
})
</script>

<style lang="scss" scoped>
.login-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    &__login-form {
        &__login-btn {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 40px;
            margin-bottom: 8px;
            padding: 4px 4px;
            position: relative;
            border-radius: 4px;
            cursor: pointer;
            border: none;
            background-color: #0089e5;
            color: #fff;

            &:hover {
                background-color: #0099ff;
            }

            &--disabled {
                background-color: #ccc;
                color: #fff;
                cursor: not-allowed;

                &:hover {
                    background-color: #ccc;
                }
            }
        }

        &__alert {
            margin: 0 0 1rem 0;
            border: 1px solid rgba(0, 0, 0, 0.25);
            background-color: #fad5ce;
            border-radius: 4px;
            color: #445065;
            display: flex;
            padding: 12px 12px;
            font-size: 14px;
        }
    }

    &__sign-up {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.875rem;

        @media (max-width: 480px) {
            font-size: 14px;
        }

        &__signup-link {
            margin: 0.5rem 0;
            font-size: 14px;

            @media (max-width: 480px) {
                font-size: 16px;
            }
        }
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.65s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
