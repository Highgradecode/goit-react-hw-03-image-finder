import axios from "axios";

const API_KEY = '32553073-8f4539423fe76466918d85978' 

axios.defaults.baseURL = 'https://pixabay.com/api/';

getGalleryImage = searchName => axios.get({
    params:{
    key: API_KEY,
    q: searchName
}})