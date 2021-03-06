import api from './apiConfig'

export const signUp = async(credentials) => {
    try {
        console.log('cred', credentials)
        const response = await api.post(`/login/1`, credentials)
        localStorage.setItem('token', response.data.token)
        return response.data
    } catch (error) {
        throw error
    }
}

export const signInUser = async(credentials) => {
    try {
        const response = await api.post(`/login/2`, credentials)
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