export interface TMovie {
    "#TITLE": string;
    "#YEAR"?: number;
    "#IMDB_ID": string;
    "#RANK"?: number;
    "#ACTORS"?: string;
    "#AKA"?: string;
    "#IMDB_URL"?: string;
    "#IMDB_IV"?: string;
    "#IMG_POSTER"?: string;
    "photo_width"?: number;
    "photo_height"?: number;
}
interface TMovieDetail {
    '@context': string;
    '@type': string;
    url: string;
    name: string;
    image: string;
    description: string;
    review: {
      '@type': string;
      itemReviewed: {
        '@type': string;
        url: string;
      };
      author: {
        '@type': string;
        name: string;
      };
      dateCreated: string;
      inLanguage: string;
      name: string;
      reviewBody: string;
      reviewRating: {
        '@type': string;
        worstRating: number;
        bestRating: number;
        ratingValue: number;
      };
    };
    aggregateRating: {
      '@type': string;
      ratingCount: number;
      bestRating: number;
      worstRating: number;
      ratingValue: number;
    };
    contentRating: string;
    genre: string[];
    datePublished: string;
    keywords: string;
    actor: {
      '@type': string;
      url: string;
      name: string;
    }[];
    creator: {
      '@type': string;
      url: string;
      name: string;
    }[];
    trailer: {
      '@type': string;
      name: string;
      embedUrl: string;
      thumbnail: {
        '@type': string;
        contentUrl: string;
      };
      thumbnailUrl: string;
      url: string;
      description: string;
      duration: string;
      uploadDate: string;
    };
  }
  