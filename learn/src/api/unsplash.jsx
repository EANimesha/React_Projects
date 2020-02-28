import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization:'Client-ID 7d9f5e7c85268b8768e6f3724f27778426d0d0b03c81c0daaf0c3ae5c1991ceb'
      }
});