import { signin } from '../api/user';
import HeaderHome from '../components/HeaderHome';
import swal from 'sweetalert';
const Signin = {
    async render(){
       return/*html*/`
       ${HeaderHome.render()}
        <div class="bg-gray-100 h-[100vh] flex justify-center items-center">
            <form name='form_input'>
                <div class="w-[800px] bg-white flex">
                    <div class="w-[500px] flex-none p-[45px]">
                        <div class="">
                            <label class="block text-lg font-medium text-gray-700">Email</label>
                            <input id="email" name="email" class="block border w-full rounded-sm border-gray-200 mt-2 p-1 outline-none" type="text" >
                        </div>
                        <div class="">
                            <label class="block text-md font-medium text-gray-700">Mật khẩu</label>
                            <input id="password" name="password" class="block border w-full rounded-sm border-gray-200 mt-2 p-1 outline-none" type="password" >
                        </div>
                        <button id="btn-submit" type="submit" class="block mt-2 py-4 text-center bg-red-600 text-white w-full">Đăng kí</button>
                    </div>
                    <div class="grow p-[55px] bg-gray-50 flex justify-center items-center">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIm10DvnXo_1-SM_w_pbX8I_6PmnFO3AYTu3Sp5AOq6fxhYhYmFVDjUxgfVXhjn1HmxiU&usqp=CAU" alt="">
                    </div>
                </div>
            </form>
        </div>
       `
    },
    afterRender: async () => {
        $(function () {
            (<any>$("form[name='form_input']")).validate({
                errorClass: 'error',
                errorElement: 'span',
                rules: {
                  email:{
                    required: true,
                    email:true
                  },
                  password: {
                    required: true,
                    minlength:5
                  }
                },
                messages:{
                  password:{
                    required:"không được bỏ trống",
                    minlength:"trên 5 số",
                  },
                  email:{
                    required:"không được bỏ trống",
                    email:"email không đúng định dạng"
                  }
                },
                submitHandler: async function (form:any,event:any) {
                    event.preventDefault()
                    const email = (<HTMLInputElement>document.querySelector("#email")).value
                    const password = (<HTMLInputElement>document.querySelector("#password")).value
                    const dataInput = {
                        email:email,
                        password:password
                    }
                    try {
                      // sign in
                        const resault = await signin(dataInput)
                        console.log(resault);
                        if(resault){
                            localStorage.setItem('user', JSON.stringify(resault.data))
                            let user = JSON.parse(localStorage.getItem('user') || "false")
                              setTimeout(() => {
                                    if (user.role == 1) {
                                      window.location.href = "/admin";
                                    } else {
                                      window.location.href = "/";
                                    }
                              }, 1000)
                        }  
                    } catch (error:any) {
                        swal({
                            title: error,
                            dangerMode: false,
                        })
                    }
                }
            })
          })
    }
    
}
export default Signin