import { errorShow, sendHeader } from './../../api/user';
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
                        <form name="add_product">
                            <div class="mb-3">
                                <label for="" class="form-label">Product Name</label>
                                <input type="text" class="form-control" name="product_name" id="product-name">
                            </div>
                            <div class="mb-3">
                                <label for="" class="form-label">Image</label>
                                <input type="file" class="form-control" id="product-img">
                            </div>
                            <div class="mb-3">
                                <label for="" class="form-label">Category Name</label>
                                <select class="form-control" id="categoryName">
                                    ${data.map((categoryProduct:any) => /* html */ `
                                        <option value="${categoryProduct._id}">${categoryProduct.name}</option>
                                    `).join("")}
                                </select> <br>
                            </div>
                            <div class="mb-3">
                                <label for="" class="form-label">Price</label>
                                <input type="number" class="form-control" name="product_price" id="product-price">
                            </div>
                            <button class="btn btn-primary">Add</button>
                        </form>
                    </div>
                    </div>
                </div>
                
        
        `
    },
    async afterRender(){
        $(function () {
            (<any>$("form[name='add_product']")).validate({
              rules: {
                product_name: {
                  required: true,
                  minlength: 5,
                },
                  product_price: {
                    required: true,
                  }
              },
              messages: {
                product_name: {
                  required: "không được bỏ trống",
                  minlength: "trên 5 ký tự",
                },
                  product_price: {
                    required: "không được bỏ trống",
                  },
              },
              submitHandler: async function (form:any,event:any) {
                    event.preventDefault()
                    const imgUpload:any = document.querySelector("#product-img");
                    const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/dxvlhyxvc/image/upload";
                    const CLOUDINARY_PRESET = "z4139i5y ";
                
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
                        name: (<HTMLInputElement>document.querySelector("#product-name")).value,
                        price: (<HTMLInputElement>document.querySelector("#product-price")).value,
                        image: response.data.url,
                        category: (<HTMLInputElement>document.querySelector("#categoryName")).value
                        
                    }
                    try {
                        const data = await axios.post("http://localhost:8080/api/products",product,sendHeader)
                        location.href = "/admin/productList" 
                    } catch (error) {
                        errorShow(error)
                    }
                   
                }     
            });
          })
        
    }
 }
 export default AddProduct;