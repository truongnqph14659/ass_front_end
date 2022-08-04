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
            <table class="table table-bordered">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                ${data.map((item, index) => /* html */ `
                    <tr>
                        <td>${index + 1}</td>
                        <td>${item.name}</td>
                        <td><img src="${item.image}" alt="hiiii" /></td>
                        <td>${item.price}</td>
                        <td>
                            <button class="btn btn-danger btn-remove" data-id=${item.id}>Remove</button> <br>
                            <a href="/categoryProduct/${item.id}/edit" class="btn btn-danger btn-update">Update</a>
                        </td>
                    </tr>
                `).join("")}
            </tbody>
        </table>
            </div>
        </div>
        `
    }
}

export default AdminListProductPage;
