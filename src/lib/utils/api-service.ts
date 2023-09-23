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

const getAuthHeader = (token: string) =>
  new Headers({
    Authorization: `Bearer ${token}`
  });

const makeGetRequest = async (
  url: string,
  { params, token }: { params?: Record<string, string | number>; token?: string }
) => {
  const fullUrl = makeUrlWithParams(url, params);
  try {
    const response = await fetch(fullUrl, {
      headers: token ? getAuthHeader(token) : undefined
    });
    const result = await response.json();
    return result;
  } catch (error) {
    return { error: 'Error fetching' };
  }
};

export const GET = async (
  endpoint: string,
  { params, token }: { params?: Record<string, string | number>; token?: string }
) => {
  const url = BASE_URL + endpoint;
  const result = await makeGetRequest(url, { params, token });
  return result.data;
};

const makePostRequest = async (
  url: string,
  {
    params,
    token,
    body
  }: { params?: Record<string, string | number>; token?: string; body: object[] }
) => {
  const fullUrl = makeUrlWithParams(url, params);
  try {
    const response = await fetch(fullUrl, {
      method: 'POST',
      headers: token ? getAuthHeader(token) : undefined,
      body: JSON.stringify(body)
    });
    const result = await response.json();
    return result;
  } catch (error) {
    return { error: 'Error fetching' };
  }
};

export const POST = async (
  endpoint: string,
  {
    params,
    token,
    body
  }: { params?: Record<string, string | number>; token?: string; body: object[] }
) => {
  const url = BASE_URL + endpoint;
  const result = await makePostRequest(url, { params, token, body });
  return result.data;
};
