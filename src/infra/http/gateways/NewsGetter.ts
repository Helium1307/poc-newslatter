import { HttpClientAdapter } from "@infra/adapters/interfaces/http-client-adapter";
import { TopHeadlinesNewsDTO } from "../dtos/top-headlines-news-dto";

export default class NewsGetterGateway {
  private httpClient: HttpClientAdapter;

  constructor(httpClient: HttpClientAdapter) {
    this.httpClient = httpClient;
  }

  public async getNews(country: string, category: string) {
    const news = await this.httpClient.get<TopHeadlinesNewsDTO[]>(
      "/top-headlines",
      {
        params: {
          apiKey: process.env.NEWSAPI_KEY,
          country: country,
          category: category,
        },
      }
    );

    return news;
  }
}
