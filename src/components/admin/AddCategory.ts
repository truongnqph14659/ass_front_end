import axios from "axios";
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
        const formAdd = document.querySelector("#formAdd");
        
        formAdd.addEventListener("submit", async(e)=>{
            e.preventDefault();
            // const a = document.querySelector("#category-name")
            // console.log(a)
            const category ={
                name: document.querySelector("#category-name").value,
                
            }
            console.log(category)
            const data = await axios.post("http://localhost:8080/api/category",category)
        })
    }
 }
 export default AddCategory;