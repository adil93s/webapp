export default defineNuxtRouteMiddleware(async (to, from) => {
    if (process.server) {
        return;
    }

    if (process.client) {
        const { $store } = useNuxtApp();
        const localePath = useLocalePath();

        const user = $store.state?.user?.user;
        if (user == null) {
            return;
        }

        const token = $store.state?.user?.token;
        if (token == null) {
            return;
        }

        return await navigateTo({ path: localePath({ name: "index" }) });
    }
});
