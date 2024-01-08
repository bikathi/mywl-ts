import { useStorage } from '@vueuse/core';

export const usePrincipal = defineStore('PrincipalStore', () => {
    const principal = useStorage("principal", {});

    const getDetails = computed(() => principal.value);

    async function setDetails(userDetails: Object): Promise<void> {
        principal.value = userDetails;
    }

    return {
        getDetails,
        setDetails
    }
})