import axios from "axios";
import AdminHeader from "../components/admin/HeaderAdmin";
import Sidebar from "../components/admin/SiderAdmin";
const AdminListProductPage = {
    render: async () => {
        const {data} = await axios.get('http://localhost:8080/api/products')
        return /*html*/ `
        ${AdminHeader.render()}
        <div class="flex mt-4 divide-x">
            <div class="w-[250px] flex-none">
                ${Sidebar.render()}
            </div>
            <div class="grow px-4">
            <h1><b>List Product</b></h1>
            <a href="/admin/product/add" class="btn btn-primary my-3" >Add Product</a>
            <table class="table table-bordered mt-3">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th colspan="2" class ="text-center">Action</th>
                </tr>
            </thead>
            <tbody>
                ${data.map((item, index) => /* html */ `
                    <tr>
                        <td>${index + 1}</td>
                        <td>${item.name}</td>
                        <td><img src="${item.image}" width="150px" alt="hiiii" /></td>
                        <td>${item.price}</td>
                        <td>
                            <button class="btn btn-danger btn-remove" data-id=${item._id}>Remove</button> <br>
                        </td>
                        <td>
                            <a href="/admin/products/${item._id}" class="btn btn-info btn-update">Update</a>
                        </td>
                    </tr>
                `).join("")}
            </tbody>
        </table>
            </div>
        </div>
        `
    },
    afterRender(){
        const btns = document.querySelectorAll('.btn-remove')
        console.log(btns);
        btns.forEach((btn) => {
            const id = btn.dataset.id;
            console.log(id);
            
    
            btn.addEventListener('click', async() => {
                if(btn.classList.contains('btn-remove')){
                    const confirm = window.confirm('Are you sure remove?')
                    if(confirm){
                        axios.delete(`http://localhost:8080/api/products/${id}`)
                    }
                    location.href='/admin/productList'
                }
            })
        })
    }
}

export default AdminListProductPage;
