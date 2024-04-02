import axios from 'axios';

const getAll = async () => {
    const response = await axios.get('https://dummyapi.online/api/movies')
    return response.data
}

export default { getAll }
