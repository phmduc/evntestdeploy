import axios from 'axios';

const API_ENDPOINT = `${process.env.REACT_APP_API_ENDPOINT}`;

const client = axios.create({
  baseURL: API_ENDPOINT,
});

class DataService {
  static get(path = '') {
    return client({
      method: 'GET',
      url: path,
    });
  }

  static post(path = '', data = {},) {
    return client({
      method: 'POST',
      url: path,
      data,
    });
  }

  static patch(path = '', data = {}, params = {}) {
    return client({
      method: 'PATCH',
      url: path,
      params: params,
      data: JSON.stringify(data),
    });
  }

  static put(path = '', params = {}, data = {}) {
    return client({
      method: 'PUT',
      url: path,
      params: params,
      data: JSON.stringify(data),
    });
  }
}

/**
 * axios interceptors runs before and after a request, letting the developer modify req,req more
 * For more details on axios interceptor see https://github.com/axios/axios#interceptors
 */
client.interceptors.request.use((config) => {
  // do something before executing the request
  // For example tag along the bearer access token to request header or set a cookie
  const requestConfig = config;
  const { headers } = config;
  requestConfig.headers = { ...headers, Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2RiZXZuLndlYm1hdS5uZXQiLCJpYXQiOjE2OTIyNjg1NjEsIm5iZiI6MTY5MjI2ODU2MSwiZXhwIjoxNjkyODczMzYxLCJkYXRhIjp7InVzZXIiOnsiaWQiOjEsImRldmljZSI6IiIsInBhc3MiOiJiMDA1Y2UzZGViZmQ5MmE2Yjc0Y2U4ODExMDJhMjVhNSJ9fX0.Q05knic_M_MKItp6jUTM_JcbK2drPl_-8WN_8TprCC0` };

  return requestConfig;
});

export { DataService };
