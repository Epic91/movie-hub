import { Chip } from "@material-ui/core";
import axios from "axios"
import { useEffect } from 'react';

const Genres = ({
    selectedGenres,
    setSelectedGenres,
    genres,
    setGenres,
    type,
    setPage,
}) => {

    const fetchGenres = async () => {
       const { data } = await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
        setGenres(data.genres)
    };

    console.log(genres)

    useEffect(() => {
        fetchGenres();
        return () => {
            setGenres({});
        }
    }, [])


    return (
        <div
            style={{ padding: "6px 0" }}>
            {genres && genres.map((genre) => (
                <Chip 
                    key={genre.id}
                    label={genre.name}
                    style={{margin: 2}}   
                    clickable 
                    size='small'
                />
            ))}
        </div>
    )
}

export default Genres
