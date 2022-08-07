import HeaderHome from "../components/HeaderHome";
import Cart from "../components/Order";
const ShowCart = {
    render: async () => {
        return /*html*/ `
            ${HeaderHome.render()}
            ${Cart.render()}
        `
    },
    afterRender(id:any){
        if (Cart.afterRender) {
            Cart.afterRender()
        }
      }
}

export default ShowCart;
