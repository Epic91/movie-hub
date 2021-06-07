import axios from "axios"

const Trending = () => {

    const fetchTrending = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`);
    }

    return (
        <div>
            <span className="pageTitle">Trending </span>
            
        </div>
    )
}

export default Trending
