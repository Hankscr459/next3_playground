export default async (key, url, options = {}) => {
    const config = useRuntimeConfig()
    const api = config.public.apiBase;
    return await useAsyncData(key, () => $fetch(`${api}${url}`));
}