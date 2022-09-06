export default async (key: string, url: string, options: any = {}, isAuth: boolean = false) => {
  const config = useRuntimeConfig()
  const api = config.public.apiBase;
  if (isAuth) {
    options.headers = { Authorization: useCookie('user') };
  }
  return await useAsyncData(key, () => $fetch(`${api}${url}`, options));
};