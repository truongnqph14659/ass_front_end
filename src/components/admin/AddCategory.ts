import { sendHeader, errorShow } from './../../api/user';
import axios from "axios";
import swal from "sweetalert";
 const AddCategory = {
    async render(){
        return /* html */ `
        <h1 class="title text-4xl text-center text-bold py-3"> Form Category ADD</h1>
        <form id="formAdd">
            <div class="px-2">
                <label >Name Category</label>
                <input type="text" id="category-name" class="form-control" placeholder="">
            </div>
            <br>
            <button class="btn btn-success pr-2">Submit</button>
        </form>
        `
    },
    afterRender(){
        const formAdd:any = document.querySelector("#formAdd");
        formAdd.addEventListener("submit", async(e:any)=>{
            e.preventDefault();
            const category ={
                name: (<HTMLInputElement>document.querySelector("#category-name")).value,
            }
            try {
                const data = await axios.post("http://localhost:8080/api/category",category,sendHeader)
                location.href='/admin/category'
            } catch (error:any) {
                errorShow(error)
            }
        })
    }
 }
 export default AddCategory;