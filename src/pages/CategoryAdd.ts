import AdminHeader from "../components/admin/HeaderAdmin";
import Sidebar from "../components/admin/SiderAdmin";
import AddCategory from "../components/admin/AddCategory";

const CreateCategory = {
    
    async render(){
        return /* html */ `
        ${AdminHeader.render()}
        <div class="flex mt-4 divide-x">
            <div class="w-[250px] flex-none">
                ${Sidebar.render()}
            </div>
            <div class="grow px-4">
                ${await AddCategory.render()}
            </div>
            
        `
    },
    afterRender(){
        if(AddCategory.afterRender){
                AddCategory.afterRender()
        }
    }
}
export default CreateCategory;