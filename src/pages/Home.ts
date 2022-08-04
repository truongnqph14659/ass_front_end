import AccessoryHome from "../components/AccessoryHome";
import HeaderHome from "../components/HeaderHome";
import LinhKienhome from "../components/LinhKienhome";
import NavbarHome from "../components/NavbarHome";
import PhoneHome from "../components/PhoneHome";


const HomePage = {
    render: async () => {
        return /*html*/ `
            ${HeaderHome.render()}
            <div class="mt-4 container w-[80%]">
                <div class="">
                    ${NavbarHome.render()}
                </div>
            </div>
            ${await PhoneHome.render()}
            ${AccessoryHome.render()}
            ${LinhKienhome.render()}
        `
    }
}

export default HomePage;
