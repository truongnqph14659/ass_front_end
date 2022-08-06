import instance from "./config";
interface product {
    name?:string,
    image:string,
    price?:number,
    category:string
}
export const signup = (data:user)=>{
    return instance.post('/user/register',data)
}
export const signin = (data:user)=>{
    return instance.post('/user/signin',data)
}