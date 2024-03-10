import { createStore } from 'vuex';
import createPersistedState from "vuex-persistedstate";
import user, { UserState } from "./store/user";

export interface State {
    user?: UserState,
}

const store = createStore<State>({
    plugins: [
        createPersistedState()
    ],
    modules: {
        user: user,
    },
    actions: {
        reset({ commit }) {
            commit("user/reset");
        }
    }
})

export default defineNuxtPlugin((nuxtApp) => {
    return {
        provide: {
            store
        }
    }
});
