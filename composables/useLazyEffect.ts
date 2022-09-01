export default async (url, options = {}) => {
    const config = useRuntimeConfig()
    const api = config.public.apiBase;
    return await useLazyFetch(`${api}${url}`, options);
}