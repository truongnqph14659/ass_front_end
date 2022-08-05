import axios from "axios";
 const updateCategory = {
    async render(){
        const {data} = await axios.patch("http://localhost:8080/api/Category");
        return /* html */ `
        <h1 class="title text-4xl text-center text-bold py-3"> Form Category ADD</h1>
        <form id="formAdd">
            <div class="px-2">
                <label >Name Category</label>
                <input type="text" id="category-name" class="form-control" placeholder="" value="${data.name}">
            </div>
            <br>
            <button class="btn btn-success pr-2">Submit</button>
        </form>
        
        `
    },
    afterRender(){
        const formAdd = document.querySelector("formAdd");
        formAdd.addEventListener("submit", async()=>{
            const category ={
                name: document.querySelector("#category-name").value,
            }
            axios.patch("http://localhost:3001/category",category)
        })
    }
 }
 export default updateCategory;