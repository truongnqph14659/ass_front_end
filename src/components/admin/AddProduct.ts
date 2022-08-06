import axios from "axios";
import AdminHeader from "./HeaderAdmin";
import Sidebar from "./SiderAdmin";
 const AddProduct = {
    async render(){
        const {data} = await axios.get('http://localhost:8080/api/category')
        return /* html */ `
                ${AdminHeader.render()}
                <div class="flex mt-4 divide-x">
                    <div class="w-[250px] flex-none">
                        ${Sidebar.render()}
                    </div>
                    <div class="grow px-4">
                    <h1><b>Add Product</b></h1>
                    <div class="max-w-full mx-auto py-6 sm:px-6 lg:px-8">
                        <form id="formAdd">
                            <div class="mb-3">
                                <label for="" class="form-label">Product Name</label>
                                <input type="text" class="form-control" id="product-name">
                            </div>
                            <div class="mb-3">
                                <label for="" class="form-label">Image</label>
                                <input type="file" class="form-control" name="image" id="product-img">
                            </div>
                            <div class="mb-3">
                                <label for="" class="form-label">Category Name</label>
                                <select class="form-control" id="categoryName">
                                    ${data.map((categoryProduct) => /* html */ `
                                        <option value="${categoryProduct._id}">${categoryProduct.name}</option>
                                    `).join("")}
                                </select> <br>
                            </div>
                            <div class="mb-3">
                                <label for="" class="form-label">Price</label>
                                <input type="number" class="form-control" id="product-price">
                            </div>
                            <button class="btn btn-primary">Add</button>
                        </form>
                    </div>
                    </div>
                </div>
                
        
        `
    },
    afterRender(){
        const formAdd = document.querySelector("#formAdd");
        
        formAdd.addEventListener("submit", async(e)=>{
            e.preventDefault();
            const product ={
                name: document.querySelector("#product-name").value,
                price: document.querySelector("#product-price").value,
                image: document.querySelector("#product-img").value,
                category: document.querySelector("#categoryName").value
                
            }
            console.log(product)
            const data = await axios.post("http://localhost:8080/api/products",product)
            location.href = "/admin/productList"
        })
    }
 }
 export default AddProduct;