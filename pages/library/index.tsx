import { GetStaticProps, NextPage } from "next";
import { reorderTVAndMovieLists } from "../../utils/helpers";
import { Movie } from "../../types/movie";
import { TVSeries } from "../../types/tv";
import { Navbar } from "../../components/Navbar";
import { ContentCard } from "../../components/ContentCard";
import axios from "axios";

const Library: NextPage<LibraryProps> = ({ library }) => {

    return (
        <div>
            <Navbar />
            <div className="flex flex-row flex-wrap justify-center">
                {library.map((content, index) => (
                    <ContentCard
                        key={index}
                        {...content}
                    />
                ))}
            </div>
        </div>
    )
    }

export const getStaticProps: GetStaticProps = async () => {
    const movieResponse = await axios.get('http://localhost:5000/movie/library');
    const tvResponse = await axios.get('http://localhost:5000/tv/library');

    const mergedResults = reorderTVAndMovieLists(movieResponse.data, tvResponse.data);
    
    return {
        props: {
            library: mergedResults,
        }
    }
}


interface LibraryProps {
    library: Array<Movie|TVSeries>;
}

export default Library