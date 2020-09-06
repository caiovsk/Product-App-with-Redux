import axios from 'axios'

const baseUrl = 'http://localhost:3001/products'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}
const createNew = async (title, category) => {
    const object = { title, category, available: Math.random() > 0.5 }
    const response = await axios.post(baseUrl, object)
    return response.data
}

export default { getAll, createNew }