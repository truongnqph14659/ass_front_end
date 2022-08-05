import AdminHeader from "../components/admin/HeaderAdmin";
import Sidebar from "../components/admin/SiderAdmin";
import updateCategory from "../components/admin/updateCategory";

const editCategory = {
    
    async render(){
        return /* html */ `
        ${AdminHeader.render()}
        <div class="flex mt-4 divide-x">
            <div class="w-[250px] flex-none">
                ${Sidebar.render()}
            </div>
            <div class="grow px-4">
                ${await updateCategory.render()}
            </div>
        `
    }
}
export default editCategory;