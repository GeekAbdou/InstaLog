import { Commit } from 'vuex' // commit interface for typescript
import router from '@/router'

import { UserType } from '@/store/UserAuth/types'
import { registeredUsers } from '@/store/UserAuth/users'

export default {
    login({ commit }: { commit: Commit }, user: UserType) {
        const userIndex = registeredUsers.findIndex(
            (usersData) =>
                usersData.email === user.email &&
                usersData.password === user.password
        )

        if (userIndex !== -1) {
            commit('login', user.email)
            localStorage.setItem('email', user.email)
        }
    },

    logout({ commit }: { commit: Commit }) {
        localStorage.removeItem('email')
        commit('logout')
        router.push('/welcome')
    },

    autoLogin({ commit }: { commit: Commit }) {
        const userEmail = localStorage.getItem('email')
        if (userEmail) {
            commit('login', userEmail)
            console.log(userEmail)
        }
    },
}
