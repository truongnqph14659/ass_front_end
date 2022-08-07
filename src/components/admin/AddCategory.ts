import axios from "axios";
 const AddCategory = {
    async render(){
        return /* html */ `
        <h1 class="title text-4xl text-center text-bold py-3"> Form Category ADD</h1>
        <form name='add_category'>
            <div class="px-2">
                <label >Name Category</label>
                <input type="text" id="category-name" name="category" class="form-control" placeholder="">
            </div>
            <br>
            <button class="btn btn-success pr-2" >Submit</button>
        </form>
        `
    },
    afterRender:async() => {
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
                    name: document.querySelector("#category-name").value,    
                }
                   const data = await axios.post("http://localhost:8080/api/category",category)
            location.href = "/admin/category"     
            }     
            });
          })
    }
 }

 export default AddCategory;