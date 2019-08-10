import axios from 'axios';
import API_ENTRY from '../config/config';

class Api {
    constructor(config) {
        this.axios = axios.create(config);
    }

    get(resource) {
        return this.axios.get(resource);
    }

    // post(
    //     resource,
    //     data,
    // ) {
    //     return this.axios.post(resource, data);
    // }
}

const ApiInstants = new Api({
    baseURL: API_ENTRY,
});

export default ApiInstants;
