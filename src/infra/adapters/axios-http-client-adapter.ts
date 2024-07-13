import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { HttpClientAdapter } from "./interfaces/http-client-adapter";

export class AxiosHttpClientAdapter implements HttpClientAdapter {
  private baseUrl: string = "https://newsapi.org/v2/";
  private instance: AxiosInstance = axios.create({
    baseURL: this.baseUrl,
  });

  async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.instance.get<T>(url, config);
    return response.data;
  }

  async post<T>(
    url: string,
    data: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response: AxiosResponse<T> = await this.instance.post<T>(
      url,
      data,
      config
    );
    return response.data;
  }

  async put<T>(
    url: string,
    data: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response: AxiosResponse<T> = await this.instance.put<T>(
      url,
      data,
      config
    );
    return response.data;
  }

  async patch<T>(
    url: string,
    data: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response: AxiosResponse<T> = await this.instance.patch<T>(
      url,
      data,
      config
    );
    return response.data;
  }

  async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.instance.delete<T>(
      url,
      config
    );
    return response.data;
  }
}
