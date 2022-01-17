const axios = require('axios');
// const dotenv = require('dotenv');
// import axios from 'axios';
// import dotenv from 'dotenv';

// dotenv.config({ path: '../../.env' });
// dotenv.config();

const apiUrl = `http://www.omdbapi.com`;
const apiKey = process.env.REACT_APP_OMDB_API_KEY;

const getMoviesbySearchTerm = async term => {
    const searchResults = await axios.get(`${apiUrl}/?apikey=${apiKey}&t=${term}`);
    console.log(searchResults.data);
    return searchResults.data;
}
const getMoviedetailsById = async movieId => {
    const detailsResults = await axios.get(`${apiUrl}/?apikey=${apiKey}&i=${movieId}`);
    console.log(detailsResults.data);
    return detailsResults.data;
}

module.exports = {
    getMoviesbySearchTerm: getMoviesbySearchTerm,
    getMoviedetailsById: getMoviedetailsById,
};




 