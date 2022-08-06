import AdminHeader from "../components/admin/HeaderAdmin";
import Sidebar from "../components/admin/SiderAdmin";
import ListCategory from "../components/admin/listCategory";

const Category = {
    
    async render(){
        return /* html */ `
        ${AdminHeader.render()}
        <div class="flex mt-4 divide-x">
            <div class="w-[250px] flex-none">
                ${Sidebar.render()}
            </div>
            <div class="grow px-4">
                ${await ListCategory.render()}
            </div>
        `
    },
    afterRender(){
        if(ListCategory.afterRender){
                ListCategory.afterRender()
        }
    }
}
export default Category;