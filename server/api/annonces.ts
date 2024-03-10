export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    const headers = getRequestHeaders(event);
    const token = headers.authorization?.split(" ")[1];

    return await $fetch(`${config.public.apiDomainUrl}/annonces`, {
        headers: {
            Authorization: `Basic ${token}`,
        },
    });
});
