import { NewArticleDTO } from "./new-article-dto";

export interface TopHeadlinesNewsDTO {
  status: string;
  totalResults: number;
  articles: NewArticleDTO[];
}
