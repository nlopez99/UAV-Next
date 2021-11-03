import { Movie } from '../types/movie';
import { TVSeries } from '../types/tv';

export const reorderTVAndMovieLists = (rawTVList: TVSeries[], rawMovieList: Movie[]) => {
  const tvList = rawTVList.map((tv) => {
    tv.contentType = 'tv';
    return tv;
  });

  const movieList = rawMovieList.map((movie) => {
    movie.contentType = 'movie';
    return movie;
  });

  const contentList = [];

  if (tvList.length < movieList.length) {
    for (let i = 0; i < movieList.length; i++) {
      if (tvList[i] === undefined) {
        contentList.push(movieList[i]);
      } else {
        contentList.push(movieList[i]);
        contentList.push(tvList[i]);
      }
    }
  } else if (tvList.length > movieList.length) {
    for (let i = 0; i < tvList.length; i++) {
      if (movieList[i] === undefined) {
        contentList.push(tvList[i]);
      } else {
        contentList.push(movieList[i]);
        contentList.push(tvList[i]);
      }
    }
  } else {
    for (let i = 0; i < tvList.length; i++) {
      contentList.push(movieList[i]);
      contentList.push(tvList[i]);
    }
  }

  return contentList;
};

export const extractImageURL = (content: Movie | TVSeries): string => {
  let imageURL: string;

  if (content.remotePoster) {
    imageURL = content.remotePoster;
  } else if (!content.remotePoster && content.images.length) {
    imageURL = content.images[0].remoteUrl as string;
  } else {
    imageURL =
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/4a6a2e6a-2a50-4f84-b6e1-3e1cfeba79f8/d7sc1hw-f7b1ee6c-bbd9-48d3-8841-4c52c6e486cb.png';
  }
  return imageURL;
};
