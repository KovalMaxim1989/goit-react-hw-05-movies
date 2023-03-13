import axios from "axios";

// 2a5e5db78690243144c00390b9d2b2b6
const agent = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: '2a5e5db78690243144c00390b9d2b2b6'
    }
})

export async function getMoviesByQuery(query) { 
    const movies = await agent
        .get('search/movie', {
            params: {
                query
            },
        })
    return movies.data.results;
}

export async function getTrendMovies(query) { 
    const movies = await agent.get('trending/all/day')
      
    return movies.data.results;
}
