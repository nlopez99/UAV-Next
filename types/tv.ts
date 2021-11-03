export interface TVSeries {
  title: string;
  alternateTitles?: string[];
  sortTitle: string;
  seasonCount: number;
  totalEpisodeCount?: number;
  episodeCount?: number;
  episodeFileCount?: number;
  sizeOnDisk?: number;
  status?: string;
  overview: string;
  previousAiring?: string;
  network: string;
  airTime: string;
  images: Image[];
  seasons: Season[];
  year: number;
  path: string;
  profileId: number;
  seasonFolder: boolean;
  monitored: boolean;
  useSceneNumbering: boolean;
  runtime: number;
  remotePoster?: string;
  tvdbId: number;
  tvRageId: number;
  tvMazeId: number;
  firstAired: string;
  lastInfoSync: string;
  seriesType: string;
  cleanTitle: string;
  imdbId: string;
  titleSlug: string;
  certification: string;
  genres: string[];
  tags: any[];
  added: string;
  ratings: Ratings;
  statistics?: Statistics;
  qualityProfileId?: number;
  languageProfileId?: number;
  id?: number;
  contentType?: 'tv' | 'movie';
}

interface Ratings {
  votes: number;
  value: number;
}

interface Season {
  seasonNumber: number;
  monitored: boolean;
  statistics: Statistics;
}

interface Statistics {
  episodeFileCount: number;
  episodeCount: number;
  totalEpisodeCount: number;
  sizeOnDisk: number;
  percentOfEpisodes: number;
  previousAiring?: string;
}

interface Image {
  coverType: string;
  url: string;
  remoteUrl?: string;
}

export interface TVDownloadDTO {
  movieId: number;
  languages: Language[];
  quality: Quality;
  customFormats: any[];
  size: number;
  title: string;
  sizeleft: number;
  timeleft: string;
  estimatedCompletionTime: string;
  status: string;
  trackedDownloadStatus: string;
  trackedDownloadState: string;
  statusMessages: any[];
  downloadId: string;
  protocol: string;
  downloadClient: string;
  indexer: string;
  outputPath: string;
  id: number;
}

interface Quality {
  quality: ItemQuality;
  revision: Revision;
}

interface Revision {
  version: number;
  real: number;
  isRepack: boolean;
}

interface ItemQuality {
  id: number;
  name: string;
  source: string;
  resolution: number;
  modifier: string;
}

interface Language {
  id: number;
  name: string;
}
