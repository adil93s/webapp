export default defineNuxtRouteMiddleware(async (to, from) => {
    if (process.server) {
        return;
    }

    if (process.client) {
        const { $store } = useNuxtApp();
        const localePath = useLocalePath();

        const user = $store.state?.user?.user;
        if (user == null) {
            return await navigateTo({ path: localePath({ name: "auth-login" }) });
        }

        const token = $store.state?.user?.token;
        if (token == null) {
            return await navigateTo({ path: localePath({ name: "auth-login" }) });
        }
    }
});
