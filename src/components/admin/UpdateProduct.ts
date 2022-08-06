import axios from "axios";
 const UpdateProduct = {
    async render(_id:any){
        const {data} = await axios.get('http://localhost:8080/api/category')
        const {data: product} = await axios.get(`http://localhost:8080/api/products/${_id}`)
        return /* html */ `
                    <div class="grow px-4">
                    <h1><b>Update Product</b></h1>
                    <div class="max-w-full mx-auto py-6 sm:px-6 lg:px-8">
                        <form id="formAdd" data-img="${product.image}">
                            <div class="mb-3">
                                <label for="" class="form-label">Product Name</label>
                                <input type="text" class="form-control" id="product-name" value="${product.name}">
                            </div>
                            <div class="mb-3">
                                <label for="" class="form-label">Image</label>
                                <input type="file" class="form-control" name="image" id="product-img">
                            </div>
                            <div class="mb-3">
                                <label for="" class="form-label">Category Name</label>
                                <select class="form-control" id="categoryName">
                                    ${data.map((categoryProduct) => /* html */ `
                                        <option ${categoryProduct._id == product.category ? 'selected' : ''} value="${categoryProduct._id}">${categoryProduct.name}</option>
                                    `).join("")}
                                </select> <br>
                            </div>
                            <div class="mb-3">
                                <label for="" class="form-label">Price</label>
                                <input type="number" class="form-control" id="product-price" value="${product.price}">
                            </div>
                            <button class="btn btn-primary">Update</button>
                        </form>
                    </div>
                    </div>
                
        
        `
    },
    afterRender(_id:any){
        const formAdd = document.querySelector("#formAdd");
        const imgUpload:any = document.querySelector("#product-img");
        const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/dxvlhyxvc/image/upload";
        const CLOUDINARY_PRESET = "z4139i5y ";
        formAdd.addEventListener("submit", async(e)=>{
            e.preventDefault();
            let img = formAdd.dataset.img
            const file = imgUpload.files[0];
            if(file) {
                const formData = new FormData();
                formData.append("file", file);
                formData.append("upload_preset", CLOUDINARY_PRESET);
                const response = await axios.post(CLOUDINARY_API, formData, {
                    headers: {
                        "content-type": "application/form-data",
                    },
                });
                img = response.data.url;
            }
            const product ={
                name: document.querySelector("#product-name").value,
                price: document.querySelector("#product-price").value,
                image: img,
                category: document.querySelector("#categoryName").value
                
            }
            console.log(product)
            const data = await axios.patch(`http://localhost:8080/api/products/${_id}`,product);
            location.href = "/admin/productList";
        })
    }
 }
 export default UpdateProduct;