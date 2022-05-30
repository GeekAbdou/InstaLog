<template>
    <div class="login-wrapper">
        <form class="login-wrapper__login-form">
            <Form-Text-Field
                placeHolder="you@company.com"
                fieldType="email"
                labelTitle="Work Email"
                labelLink=""
                errorMessage="Enter a valid email address."
                inputName="email"
                :isValidInput="emailValid"
            />

            <Form-Text-Field
                placeHolder="8+ Characters"
                fieldType="password"
                labelTitle="Password"
                labelLink=" Forgot Password?"
                errorMessage="Password must be 6 characters or more."
                inputName="password"
                :isValidInput="passwordValid"
            />

            <button class="login-wrapper__login-form__login-btn">Log in</button>
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
import { defineComponent } from 'vue'

import FormTextField from '@/components/global/FormTextField.vue'
export default defineComponent({
    components: {
        FormTextField,
    },
    data() {
        return {
            emailValid: true,
            passwordValid: false,
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
