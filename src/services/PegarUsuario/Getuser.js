import axios from 'axios'

export async function cu(username,password){
   const response = await axios({
        method: 'post',
        baseURL: 'https://5734-187-21-180-6.ngrok.io/validate',
        data:{
            login: username,
            password: password
        }
    })

    return response.data
}