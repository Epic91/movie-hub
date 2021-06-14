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

    const handleAdd = (genre) => {
        //add everything inside of selected genres, and add the genre that is being sent
        setSelectedGenres([...selectedGenres, genre]);
        //remove the genre that is being sent in
        setGenres(genres.filter((g) => g.id !== genre.id));
        setPage(1);
    }

    const handleRemove = (genre) => {
        setSelectedGenres(
            selectedGenres.filter((selected) => selected.id !== genre.id)
        );
        setGenres([...genres, genre]);
        setPage(1);
    }

    const fetchGenres = async () => {
       const { data } = await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
        setGenres(data.genres)
    };

    useEffect(() => {
        fetchGenres();
        return () => {
            setGenres({});
        }; // eslint-disable-next-line
    }, [])

    return (
        <div
            style={{ padding: "8px 0" }}>
                {selectedGenres.map((genre) => (
                <Chip 
                    key={genre.id}
                    label={genre.name}
                    style={{margin: 2}}   
                    clickable 
                    size='medium'
                    color="secondary"
                    onDelete={() => handleRemove(genre)}
                />
                ))}
            {genres.map((genre) => (
                <Chip 
                    key={genre.id}
                    label={genre.name}
                    style={{margin: 2}}   
                    clickable 
                    size='medium'
                    onClick={() => handleAdd(genre)}
                />
            ))}
        </div>
    )
}

export default Genres
