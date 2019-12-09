import api from './apiConfig'

export const signUp = async credentials => {
    try {
        const response = await api.post('/sign-up', credentials)
        localStorage.setItem('token', response.data.token)
        return response.data
    } catch (error) {
        throw error
    }
}

export const signInUser = async credentials => {
    try {
        const response = await api.post('/sign-in', credentials)
        localStorage.setItem('token', response.data.token)
        return response.data
    } catch (error) {
        throw error
    }
}

export const signOut = async user => {
    try {
        await localStorage.clear()
        return true
    } catch (error) {
        throw error
    }
}
