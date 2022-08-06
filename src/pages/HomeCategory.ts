import AccessoryHome from "../components/AccessoryHome";
import HeaderHome from "../components/HeaderHome";
import LinhKienhome from "../components/LinhKienhome";
import NavbarHome from "../components/NavbarHome";
import CategoryHome from "../components/CategoryHome";


const HomeCategory = {
    render: async (id:any) => {
        return /*html*/ `
            ${HeaderHome.render()}
            <div class="mt-4 container w-[80%]">
                <div class="">
                    ${await NavbarHome.render()}
                </div>
            </div>
            ${await CategoryHome.render(id)}
            ${AccessoryHome.render()}
            ${LinhKienhome.render()}
        `
    }
}

export default HomeCategory;
