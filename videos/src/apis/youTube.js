import axios from 'axios';

const KEY='AIzaSyAmX3AagwfW1EkQSZU_wuq9ZDPMkokRPD4';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        key:KEY
    }
});
