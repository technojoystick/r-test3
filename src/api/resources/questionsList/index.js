import Api from '../../api';

function getListRequest() {
    return Api.get('/api.php?amount=10').then(response => response.data);
}

export default getListRequest;
