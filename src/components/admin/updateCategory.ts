import { sendHeader, errorShow } from './../../api/user';
import axios from "axios";
 const updateCategory = {
    async render(_id:any){
        const {data} = await axios.get(`http://localhost:8080/api/category/${_id}`)
        return /* html */ `
        <h1 class="title text-4xl text-center text-bold py-3"> Form Category Update</h1>
        <form name='add_category'>
            <div class="px-2">
                <label >Name Category</label>
                <input type="text" id="category-name"  name="category" class="form-control" placeholder="" value="${data.category.name}">
            </div>
            <br>
            <button class="btn btn-success pr-2">Submit</button>
        </form>
        `
    },
    afterRender: async(_id:any)=>{
        $(function () {
            (<any>$("form[name='add_category']")).validate({
              rules: {
                category: {
                  required: true,
                  minlength: 5,
                }
              },
              messages: {
                category: {
                  required: "không được bỏ trống",
                  minlength: "trên 5 ký tự",
                },
              },
              submitHandler: async function (form:any,event:any) {
                event.preventDefault()
                const category ={
                    name: (<HTMLInputElement>document.querySelector("#category-name")).value,    
                }
                try {
                  const data = await axios.patch(`http://localhost:8080/api/category/${_id}`,category,sendHeader)
                  location.href = "/admin/category"
                } catch (error) {
                  errorShow(error)
                } 
            }     
            });
          })
    }
 }
 export default updateCategory;