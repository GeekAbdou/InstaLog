import { createStore, useStore as baseUseStore, Store } from 'vuex'
import { InjectionKey } from 'vue'
import { State } from './state'

import AuthUser from './UserAuth'

export const store = createStore<State>({
    modules: {
        AuthUser,
    },
})

export const key: InjectionKey<Store<State>> = Symbol()
export function useStore() {
    return baseUseStore(key)
}
