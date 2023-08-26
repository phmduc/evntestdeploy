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
  requestConfig.headers = { ...headers, Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaXNlcnZlci5xdXlkYXV0dW5vaWJvZXZuLmNvbSIsImlhdCI6MTY5MjYzNDAwOSwibmJmIjoxNjkyNjM0MDA5LCJleHAiOjE2OTMyMzg4MDksImRhdGEiOnsidXNlciI6eyJpZCI6MSwiZGV2aWNlIjoiIiwicGFzcyI6ImIwMDVjZTNkZWJmZDkyYTZiNzRjZTg4MTEwMmEyNWE1In19fQ.g_kTORxiit0BD5ZV8f-3ZIMOgCm3YlnfwhNzm1eHnJI` };

  return requestConfig;
});

export { DataService };
