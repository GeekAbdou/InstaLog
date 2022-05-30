<template>
    <div class="welcome">Test</div>
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
<style lang="scss" scoped></style>
