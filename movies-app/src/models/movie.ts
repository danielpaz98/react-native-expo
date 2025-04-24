export interface Movie {
  id: number;
  title: string;
  description: string;
  releaseDate: Date;
  poster: string;
  backdrop: string;
  rating: number;
}

export interface MovieDetails extends Movie {
  genres: string[];
  duration: number;
  budget: number;
  languages: string[];
  originalTitle: string;
  productionCompanies: string[];
}

export interface MovieCast {
  id: number;
  name: string;
  character: string;
  avatar: string;
}
