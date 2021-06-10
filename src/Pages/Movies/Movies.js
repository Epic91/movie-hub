import axios from 'axios';
import { useEffect, useState } from 'react';
import SingleContent from '../../components/SingleContent/SingleContent';
import CustomPagination from '../../components/Pagination/CustomPagination';
import Genres from '../../components/Genres/Genres';
import useGenre from '../../hooks/useGenre'
import './Movies.css';

const Movies = () => {

    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
    const [numOfPages, setNumOfPages] = useState();
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [genres, setGenres] = useState([]);
    const genreforURL = useGenre(selectedGenres)

    const fetchMovies = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`)
        setContent(data.results);
        setNumOfPages(data.total_pages);
    }

    useEffect(() => {
        fetchMovies();
    }, [page, genreforURL])

    return (
        <div>
           <span className="pageTitle">Movies </span>
           <Genres 
            type='movie' 
            selectedGenres={selectedGenres} 
            setSelectedGenres={setSelectedGenres} 
            genres={genres} 
            setGenres={setGenres}
            setPage={setPage}
            />
           <div className="movies">
               {content && content.map((c) => (
                        <SingleContent  
                        key={c.id} 
                        id={c.id} 
                        type='movie'
                        title={c.title || c.name}
                        overview={c.overview} 
                        release={c.release_date || c.first_air_date}
                        poster={c.poster_path}
                        vote={c.vote_average}
                        />
                ))}
            </div>
            {numOfPages > 1 && (
                <CustomPagination setPage={setPage} numOfPages={numOfPages}/>
            )}
        </div>
    )
}

export default Movies
