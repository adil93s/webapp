export default defineEventHandler(async (event) => {
    const id = event?.context?.params?.slug;

    if (id) {
        const config = useRuntimeConfig();
        const headers = getRequestHeaders(event);
        const token = headers.authorization?.split(" ")[1];

        return await $fetch(`${config.public.apiDomainUrl}/annonces/${id}`, {
            headers: {
                Authorization: `Basic ${token}`,
            },
        });
    }
});
