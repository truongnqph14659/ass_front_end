import axios from "axios";
import AddProduct from "../components/admin/AddProduct";
import AdminHeader from "../components/admin/HeaderAdmin";
import Sidebar from "../components/admin/SiderAdmin";
const AdminCreateProductPage = {
    render: async () => {
        return /*html*/ `
        ${AdminHeader.render()}
        <div class="flex mt-4 divide-x">
            <div class="w-[250px] flex-none">
                ${Sidebar.render()}
            </div>
            <div class="grow px-4">
                ${await AddProduct.render()}
            </div>
        </div>
        `
    },
    afterRender: () => {
        
    }
}

export default AdminCreateProductPage;
