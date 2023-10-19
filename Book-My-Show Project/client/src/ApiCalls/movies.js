import { axiosInstance } from "."

export const GetAllMovies = async () => {
    try{
        const response = await axiosInstance.get("/api/movies/get-all-movies");
        return response.data;
    } catch(err) {
        return err.message;
    }
}

export const AddMovie = async (payload) => {
    try {
        const response = await axiosInstance.post('/api/movies/add-movie', payload)
        return response.data;
    } catch(err) {
        return err.message;
    }
}

export const DeleteMovie = async(movieId) => {
    try {
        const response = await axiosInstance.post('/api/movies/delete-movie', movieId)
        return response.data;
    } catch(err) {
        return err.message;
    }
}

export const UpdateMovie = async(payload) => {
    try {
        const response = await axiosInstance.post('/api/movies/update-movie', payload)
        return response.data;
    } catch(err) {
        return err.message;
    }
}