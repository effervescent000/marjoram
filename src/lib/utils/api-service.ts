const BASE_URL = 'http://127.0.0.1:8000';

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
  { params, token }: { params?: Record<string, string | number>; token?: string } = {}
) => {
  const fullUrl = makeUrlWithParams(url, params);
  try {
    const response = await fetch(fullUrl, {
      headers: token ? getAuthHeader(token) : undefined
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return { error: 'Error fetching' };
  }
};

export const GET = async (
  endpoint: string,
  { params, token }: { params?: Record<string, string | number>; token?: string }
) => {
  const url = BASE_URL + endpoint;
  const result = await makeGetRequest(url, { params, token });
  return result;
};

const makePostRequest = async (
  url: string,
  {
    params,
    token,
    body
  }: { params?: Record<string, string | number>; token?: string; body: Record<string, any>[] }
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
    console.log(error);
    return { error: 'Error fetching' };
  }
};

export const POST = async (
  endpoint: string,
  {
    params,
    token,
    body
  }: { params?: Record<string, string | number>; token?: string; body: Record<string, any>[] }
) => {
  const url = BASE_URL + endpoint;
  const result = await makePostRequest(url, { params, token, body });
  return result.data;
};

export const login = async (userData: { username?: string; password?: string }) => {
  const headers = new Headers({
    'Content-Type': 'application/x-www-form-urlencoded'
  });
  try {
    const response = await fetch(BASE_URL + '/auth/access-token', {
      method: 'POST',
      headers,
      body: Object.entries(userData)
        .map(([key, value]) => `${key}=${value}`)
        .join('&')
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return { error: 'Error logging in' };
  }
};
