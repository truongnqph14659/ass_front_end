import axios from "axios";
 const UpdateProduct = {
    async render(_id:any){
        const {data} = await axios.get('http://localhost:8080/api/category')
        const {data: product} = await axios.get(`http://localhost:8080/api/products/${_id}`)
        return /* html */ `
                    <div class="grow px-4">
                    <h1><b>Update Product</b></h1>
                    <div class="max-w-full mx-auto py-6 sm:px-6 lg:px-8">
                        <form id="formAdd">
                            <div class="mb-3">
                                <label for="" class="form-label">Product Name</label>
                                <input type="text" class="form-control" id="product-name" value="${product.name}">
                            </div>
                            <div class="mb-3">
                                <label for="" class="form-label">Image</label>
                                <input type="file" class="form-control" name="image" id="product-img" value="${product.image}">
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
        
        formAdd.addEventListener("submit", async(e)=>{
            e.preventDefault();
            const product ={
                name: document.querySelector("#product-name").value,
                price: document.querySelector("#product-price").value,
                image: document.querySelector("#product-img").value,
                category: document.querySelector("#categoryName").value
                
            }
            console.log(product)
            const data = await axios.patch(`http://localhost:8080/api/products/${_id}`,product)
            location.href = "/admin/productList"
        })
    }
 }
 export default UpdateProduct;