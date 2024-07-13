interface ArticleSource {
  id: string;
  name: string;
}

export interface NewArticleDTO {
  source: ArticleSource;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}
