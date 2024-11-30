import http from '../interceptor'

export const postAddUser = async()=>{
    try {
      const result = await http.post('/User/CreateUser')

      return result
        console.log(result)
      
    } catch (error) {
        console.log(error)
    }
}