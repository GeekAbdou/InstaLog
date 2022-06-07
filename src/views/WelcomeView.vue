<template>
    <div class="welcome">
        <h1 data-cy="welMessage" class="welcome__message">
            Welcome, {{ email }}
        </h1>

        <button
            data-cy="logoutBtn"
            class="welcome__logout-btn"
            @click="logout"
            type="button"
        >
            Log out
        </button>
    </div>
</template>

<script>
import { useStore } from '@/store'
import router from '@/router'

export default {
    setup() {
        const store = useStore()
        const email = store.getters.userEmail

        function logout() {
            store.dispatch('logout')
            router.push('/login')
        }

        return {
            logout,
            email,
        }
    },
}
</script>
<style lang="scss" scoped>
.welcome {
    display: flex;
    width: fit-content;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    background-color: $login-bg-color;
    width: 100%;
    &__message {
        font-size: 1.5vw;
        font-weight: bold;

        @media (max-width: 992px) {
            font-size: 4vw;
        }
    }

    &__logout-btn {
        width: fit-content;
        margin: 0 auto;
        padding: 12px 24px;
        border: none;
        background-color: #000080;
        color: white;
        border-radius: 8px;
        cursor: pointer;
    }
}
</style>
