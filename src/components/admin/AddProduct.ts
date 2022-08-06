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
        const imgUpload:any = document.querySelector("#product-img");
        const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/dxvlhyxvc/image/upload";
        const CLOUDINARY_PRESET = "z4139i5y ";
        formAdd.addEventListener("submit", async(e)=>{
            e.preventDefault();
            const file = imgUpload.files[0];
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", CLOUDINARY_PRESET);
            const response = await axios.post(CLOUDINARY_API, formData, {
                headers: {
                    "content-type": "application/form-data",
                },
            });            
            const product ={
                name: document.querySelector("#product-name").value,
                price: document.querySelector("#product-price").value,
                image: response.data.url,
                category: document.querySelector("#categoryName").value
                
            }
            console.log(product)
            const data = await axios.post("http://localhost:8080/api/products",product)
            location.href = "/admin/productList"
        })
    }
 }
 export default AddProduct;