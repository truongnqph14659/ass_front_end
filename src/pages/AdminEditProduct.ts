import AdminHeader from "../components/admin/HeaderAdmin";
import Sidebar from "../components/admin/SiderAdmin";
import UpdateProduct from "../components/admin/UpdateProduct";
const AdminCreateProductPage = {
    render: async (id:any) => {
        return /*html*/ `
        ${AdminHeader.render()}
        <div class="flex mt-4 divide-x">
            <div class="w-[250px] flex-none">
                ${Sidebar.render()}
            </div>
            <div class="grow px-4">
                ${await UpdateProduct.render(id)}
            </div>
        </div>
        `
    },
    afterRender: (_id:any) => {
        if(UpdateProduct.afterRender){
            UpdateProduct.afterRender(_id)
    }
    }
}

export default AdminCreateProductPage;
