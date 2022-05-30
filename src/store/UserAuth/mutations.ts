import { State } from '@/store/state'

export default {
    login(state: State, userEmail: string) {
        state.user = userEmail
        state.isAuthenticated = true
    },

    logout(state: State) {
        state.user = ''
        state.isAuthenticated = false
    },
}
