import HeaderHome from "../components/HeaderHome";
import Cart from "../components/Order";
const ShowCart = {
    render: async () => {
        return /*html*/ `
            ${HeaderHome.render()}
            ${Cart.render()}
        `
    }
}

export default ShowCart;
