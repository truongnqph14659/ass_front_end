import AccessoryHome from "../components/AccessoryHome";
import HeaderHome from "../components/HeaderHome";
import LinhKienhome from "../components/LinhKienhome";
import NavbarHome from "../components/NavbarHome";
import PhoneHome from "../components/PhoneHome";


const HomePage = {
    render: async () => {
        return /*html*/ `
            ${HeaderHome.render()}
            <div class="mt-4 mx-[300px]">
                <div class="col-sm-6 col-lg-4">
                    ${NavbarHome.render()}
                </div>
            </div>
            ${PhoneHome.render()}
            ${AccessoryHome.render()}
            ${LinhKienhome.render()}
        `
    }
}

export default HomePage;
