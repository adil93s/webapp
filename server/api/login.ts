import { AuthLoginForm } from "~/models/forms/AuthLoginForm";
import { Buffer } from "buffer";

export default defineEventHandler(async (event) => {
    const body: AuthLoginForm = await readBody(event);
    const config = useRuntimeConfig();

    const credentials = Buffer.from(`${body.username}:${body.password}`).toString("base64");

    return await $fetch(`${config.public.apiAuthUrl}/auth/login`, {
        method: "POST",
        headers: {
            Authorization: `Basic ${credentials}`,
            "Content-Type": "application/json",
        },
    });
});
