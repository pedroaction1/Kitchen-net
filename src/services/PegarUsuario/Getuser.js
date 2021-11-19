import axios from 'axios'
import { data } from 'jquery'

export async function cu(username,password){
   const response = await axios({
        method: 'post',
        baseURL: 'https://5734-187-21-180-6.ngrok.io/validate',
        data:{
            login: username,
            password: password
        }
       
    })

    localStorage.setItem("token",response.data.token);
    localStorage.setItem("tipo",response.data.type);
    localStorage.setItem("valido",response.data.validated)
}