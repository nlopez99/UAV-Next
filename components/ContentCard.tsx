import { Movie } from "../types/movie";
import { TVSeries } from "../types/tv";
import { extractImageURL } from "../utils/helpers";
import Image from 'next/image'


export const ContentCard = (content: ContentProps) => {
  const imageURL = extractImageURL(content);

  return (
    <div className="container flex-grow-0 p-8 mb-8 w-72 max-h-contentCard mx-4 bg-white rounded-2xl">
      <Image alt={content.title} src={imageURL} className="flex rounded-md w-full h-80" height={400} width={275}/>
      <div className="p-4">
        <h1 className="font-sans font-semibold text-center text-lg">{content.title}</h1>
      </div>
    </div>
  );
};


type ContentProps = Movie | TVSeries 