import axios from "axios";

axios.defaults.baseURL = 'https://pixabay.com/api/';

getGalleryImage = searchName => axios.get({
    params:{
    key: '32553073-8f4539423fe76466918d85978',
    q: searchName
}})