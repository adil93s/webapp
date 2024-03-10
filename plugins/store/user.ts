import { User } from "~/models/entities/User";

export interface UserState {
    user: User | null;
    token: string | null;
}

const getDefaultState = (): UserState => {
    return {
        user: null,
        token: null,
    };
};

const state: UserState = getDefaultState();

const getters = {
    user: () => state.user,
    token: () => state.token,
    isLoggedIn: () => {
        const user = state?.user;
        if (user == null) return false;

        const token = state?.token;
        if (token == null) return false;

        return true;
    },
};

const mutations = {
    setUser(state: UserState, { user, token }: UserState) {
        state.user = user;

        if (token) {
            state.token = token;
        }
    },
    reset(state: UserState) {
        Object.assign(state, getDefaultState());
    },
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
};
