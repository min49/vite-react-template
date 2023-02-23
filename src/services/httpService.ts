import axios, {AxiosRequestConfig} from 'axios'

class HttpService {
  private apiUrl: string
  private token?: string

  constructor(apiUrl: string, token?: string) {
    this.apiUrl = apiUrl
    this.token = token
  }

  get<T>(endpoint: string): Promise<T> {
    return HttpService.request<T>(`${this.apiUrl}${endpoint}`, {
      token: this.token,
    })
  }

  static request<T>(
    endpoint: string,
    {
      data,
      token,
      headers: customHeaders,
      ...customConfig
    }: {data?: object; token?: string; headers?: object} = {},
  ) {
    const headers: HeadersInit = {}
    if (token) {
      headers.Authorization = `Bearer ${token}`
    }
    if (data) {
      headers['Content-Type'] = 'application/json'
    }

    const config: AxiosRequestConfig = {
      method: data ? 'POST' : 'GET',
      data,
      headers: {
        ...headers,
        ...customHeaders,
      },
      ...customConfig,
    }

    return axios<T>(endpoint, config).then(response => response.data)
  }
}

export {HttpService}
