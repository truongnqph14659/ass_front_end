import AdminHeader from "../components/admin/HeaderAdmin";
import Sidebar from "../components/admin/SiderAdmin";
const AdminPage = {
    render: async () => {
        return /*html*/ `
        ${AdminHeader.render()}
        <div class="flex mt-4 divide-x">
            <div class="w-[250px] flex-none">
                ${Sidebar.render()}
            </div>
            <div class="grow px-4">
            // phần dành cho show bảng data
            </div>
        </div>
        `
    }
}

export default AdminPage;
