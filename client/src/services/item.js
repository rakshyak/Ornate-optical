import api from './apiConfig'

export const getItems = async () => {
  try {
    const resp = await api.get('/items')
    return resp.data.items
  } catch (error) {
    throw error
  }
}

export const getItemById = async id => {
  try {
    const resp = await api.get(`/items/${id}`)
    return resp.data.item
  } catch (error) {
    throw error
  }
}