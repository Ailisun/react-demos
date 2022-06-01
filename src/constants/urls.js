const baseURL = process.env.REACT_APP_API

const urls={
    movie:'/discover/movie',
    genres:'/genre/movie/list'
}
const imageLink = `https://image.tmdb.org/t/p/w500`
 const api_key = "?api_key=cd21f7fb0e97ea8aa8e67a8a9d5a0007"

export default baseURL
export {
    urls,
    imageLink,
    api_key
}