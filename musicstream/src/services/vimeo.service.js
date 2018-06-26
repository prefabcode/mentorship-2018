import axios from 'axios';

const API_KEY = '81042db0e76343d6766a089e94f545eb';
const API_URL = 'https://api.vimeo.com/'

const service = {
    searchVimeo(query) {
        // const headers = { `Authorization: Bearer ${API_KEY}`};
        let searchUrl = API_URL + 'videos';
        const config = {
            headers: { 'Authorization': `Bearer ${API_KEY}` },
            params: {
                query,
            } 
        }

        return axios.get(searchUrl, config);
    }
};

export default service;