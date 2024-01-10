import { ofetch } from "ofetch";

export default defineNuxtPlugin((_nuxtApp) => {
    const authToken = useCookie('AUTH-TOKEN');
	const csrfToken = useCookie('CSRF-TOKEN');
    const allowedNonCSRFMethods: readonly String[] = ["GET", "HEAD", "TRACE", "OPTIONS"];

    globalThis.$fetch = ofetch.create({
        async onRequest({ request, options }) {
            if(!allowedNonCSRFMethods.includes(options.method)) {
                options.headers = {
                    'X-CSRF-TOKEN': csrfToken.value,
                };
                options.credentials = "include";
            }

            if(!request.toString().endsWith("/signin")) {
                options.headers = {
                    Authorization: `Bearer ${authToken.value}`,
                };
            }
        },
    });
});