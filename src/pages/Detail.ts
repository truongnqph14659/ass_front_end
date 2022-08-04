import DetailProduct from "../components/Detail";
import HeaderHome from "../components/HeaderHome"
import MenuHeader from "../components/MenuHeader";

const DetailPage = {
    render: async () => {
        return /*html*/ `
            ${HeaderHome.render()}
            ${MenuHeader.render()}
            ${DetailProduct.render()}
        `
    }
}

export default DetailPage;