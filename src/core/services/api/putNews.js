import http from '../interceptor'
import toast from 'react-hot-toast'

export const UpdateNews = async(form)=>{
    try {
        const result = await http.put('/News/UpdateNews',form)
        return result
    } catch (error) {
        toast.error(error.response.data.ErrorMessage[0])
    }
}
