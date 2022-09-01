export default async (url, options = {}) => {
  const config = useRuntimeConfig()
  const api = config.public.apiBase;
  return await useFetch(`${api}${url}`, options);
}