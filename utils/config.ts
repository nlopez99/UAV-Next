export const appConfig = {
  app: {
    port: process.env.PORT
  },
  radarr: {
    apiKey: process.env.RADARR_API_KEY,
    rootFolderPath: process.env.MOVIE_ROOT_FOLDER_PATH,
    hostURL: process.env.RADARR_HOST
  },
  sonarr: {
    apiKey: process.env.SONARR_API_KEY,
    rootFolderPath: process.env.TV_ROOT_FOLDER_PATH,
    hostURL: process.env.SONARR_HOST
  },
  s3: {
    bucket: process.env.S3_BUCKET,
    accessKeyId: process.env.S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY
  }
};
