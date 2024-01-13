import { ofetch } from "ofetch";

export default defineNuxtPlugin((_nuxtApp) => {
    const authToken = useCookie('AUTH-TOKEN');
	const csrfToken = useCookie('CSRF-TOKEN');
    const { openToast } = useToast();
    const allowedNonCSRFMethods: readonly String[] = ["GET", "HEAD", "TRACE", "OPTIONS"];

    globalThis.$fetch = ofetch.create({
        async onRequest({ request, options }) {
            let headers = {};

            if(!allowedNonCSRFMethods.includes(options.method)) {
                headers['X-CSRF-TOKEN'] = csrfToken.value;
                options.credentials = "include";
            }

            if(!request.toString().includes("/auth")) {
                headers['Authorization'] = `Bearer ${authToken.value}`;
            }

            options.headers = {...options.headers, ...headers};
        },
        async onRequestError() {
            openToast('Something went wrong. Please try again.', 'danger');
        },
    });
});