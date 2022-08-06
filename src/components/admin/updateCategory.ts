import axios from "axios";
 const updateCategory = {
    async render(_id:any){
        const {data} = await axios.get(`http://localhost:8080/api/category/${_id}`)
        return /* html */ `
        <h1 class="title text-4xl text-center text-bold py-3"> Form Category Update</h1>
        <form id="formAdd">
            <div class="px-2">
                <label >Name Category</label>
                <input type="text" id="category-name" class="form-control" placeholder="" value="${data.category.name}">
            </div>
            <br>
            <button class="btn btn-success pr-2">Submit</button>
        </form>
        
        `
    },
    afterRender(_id:any){
        const formAdd = document.querySelector("#formAdd");
        
        formAdd.addEventListener("submit", async(e)=>{
            e.preventDefault();
            // const a = document.querySelector("#category-name")
            // console.log(a)
            const category ={
                name: document.querySelector("#category-name").value,
                
            }
            const data = await axios.patch(`http://localhost:8080/api/category/${_id}`,category)
            location.href='/admin/category'
        })
    }
 }

 export default updateCategory;