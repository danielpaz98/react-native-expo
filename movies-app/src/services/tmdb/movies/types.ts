export interface MoviesDBResponse {
  dates: MovieDBDates;
  page: number;
  results: MoviesDBResult[];
  total_pages: number;
  total_results: number;
}

export interface MovieDBDates {
  maximum: Date;
  minimum: Date;
}

export interface MoviesDBResult {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: MovieDBOriginalLanguage;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: Date;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export enum MovieDBOriginalLanguage {
  Da = "da",
  En = "en",
  Fr = "fr",
  Ja = "ja",
}
