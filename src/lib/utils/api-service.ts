const BASE_URL = 'http://localhost:8000';

const makeUrlWithParams = (url: string, params?: Record<string, string | number>) => {
  if (!params) return url;
  return (
    url +
    '?' +
    Object.entries(params)
      .map(([key, value]) => `${key}=${value}`)
      .join('&')
  );
};

const makeGetRequest = async (
  url: string,
  { params, token }: { params?: Record<string, string | number>; token?: string }
) => {
  const headers = new Headers({
    Authorization: `Bearer ${token}`
  });
  try {
    const response = await fetch(url, {
      headers: token ? headers : undefined
    });
    const result = await response.json();
  } catch (error) {
    return { error: 'Error fetching' };
  }
};
