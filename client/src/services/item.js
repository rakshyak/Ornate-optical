import api from './apiConfig'

export const getItems = async() => {
    try {
        const resp = await api.get('/items')
        return resp.data.items
    } catch (error) {
        throw error
    }
}

export const getItemsMen = async() => {
    try {
        const resp = await api.get('/glasses-men')
        return resp.data.items
    } catch (error) {
        throw error
    }
}
export const getItemsWomen = async() => {
    try {
        const resp = await api.get('/glasses-women')
        return resp.data.items
    } catch (error) {
        console.log('it failes in auth/item')
        throw error
    }
}
export const getCartItems = async id => {
    try {
        const resp = await api.get(`/users/${id}/cart`)
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

export const setReview = async(id, review) => {
    try {
        const resp = await api.post(`/items/${id}`, review)
        return resp
    } catch (error) {
        throw error
    }
}