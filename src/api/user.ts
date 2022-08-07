import swal from 'sweetalert';
import instance from "./config";
interface user {
    name?:string,
    phone?:number,
    email:string,
    password:string
}
export const signup = (data:user)=>{
    return instance.post('/user/register',data)
}
export const signin = (data:user)=>{
    return instance.post('/user/signin',data)
}
export const sendHeader = 
{ headers: {
        "content-type": "application/json",
        Authorization:`Bearer ${JSON.parse(localStorage.getItem('user') || "false").token}`
      }
}
export const errorShow = (error:any)=>{ swal({
    title:"Admin only!",
    dangerMode: true,
    })
}