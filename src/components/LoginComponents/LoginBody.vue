<template>
    <div class="login-body">
        <div class="login-body__login-with">
            <button class="login-body__login-with__btn google">
                <img
                    class="login-body__login-with__img"
                    src="../../assets/imgs/google-logo.svg"
                    alt="Google-img"
                />
                <span class="login-body__login-with__text">Google</span>
            </button>

            <button class="login-body__login-with__btn github">
                <img
                    class="login-body__login-with__img"
                    src="../../assets/imgs/git-logo.svg"
                    alt="GitHub-img"
                />
                <span class="login-body__login-with__text">GitHub</span>
            </button>

            <button class="login-body__login-with__btn microsoft">
                <img
                    class="login-body__login-with__img"
                    src="../../assets/imgs/microsoft-logo.svg"
                    alt="Mircosoft-img"
                />
                <span class="login-body__login-with__text">Microsoft</span>
            </button>
        </div>

        <div class="login-body__separator"></div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    components: {},
})
</script>

<style lang="scss" scoped>
.login-body {
    display: flex;
    flex-direction: column;
    margin: 16px 0;
    width: 64%;

    &__login-with {
        display: flex;
        flex-direction: column;
        margin-top: 16px;

        &__btn {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 40px;
            margin-bottom: 8px;
            padding: 4px 4px;
            position: relative;
            border-radius: 4px;
            cursor: pointer;
        }

        &__img {
            position: absolute;
            left: 0;
            width: 26px;
            margin: 0 8px;
        }

        &__text {
            font-family: 'Poppins', sans-serif;
            font-size: 14px;
            font-weight: 500;
        }
    }

    &__separator {
        width: 100%;
        font-size: 16px;
        font-weight: bold;
        border-bottom: 1px solid #d3d3d3;
        line-height: 0.1em;
        margin: 28px 0;

        &::before {
            content: 'OR';
            background: #f2f4f8;
            padding: 0 12px;
            color: #585858;
        }
    }
}

.google {
    color: #fff;
    background-color: #4285f4;
    border: none;
    &:hover {
        background-color: #1669f2;
    }
}
.github {
    background-color: #333;
    color: #fff;
    border: none;
    &:hover {
        background-color: #1b1a1a;
    }
}
.microsoft {
    color: #858585;
    border: 1px solid #8c8c8c;
    background-color: #fff;
    &:hover {
        background-color: #e0dbdb;
    }
}
</style>
