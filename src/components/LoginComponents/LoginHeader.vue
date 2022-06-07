<template>
    <section class="login-header">
        <div class="login-header__logo">
            <img
                class="login-header__logo__img"
                src="@/assets/imgs/instabug-logo.svg"
                alt="Instabug Logo"
            />
        </div>

        <p class="login-header__login__title">Log in to Instabug</p>
    </section>
</template>

<script lang="ts">
export default {}
</script>

<style lang="scss" scoped>
.login-header {
    display: flex;
    flex-direction: column;

    &__logo__img {
        width: 100px;
        height: 100px;
        margin-bottom: 18px;
    }

    &__login__title {
        font-size: 24px;
        margin: 0;
    }
}
</style>
