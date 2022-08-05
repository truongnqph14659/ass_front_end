import DetailProduct from "../components/Detail";
import HeaderHome from "../components/HeaderHome"
import MenuHeader from "../components/MenuHeader";

const DetailPage = {
    render: async (id:any) => {
        return /*html*/ `
            ${HeaderHome.render()}
            ${MenuHeader.render()}
            ${ await DetailProduct.render(id)}
        `
    },
    afterRender(id:any){
        if (DetailProduct.afterRender) {
            DetailProduct.afterRender(id)
        }
      }
}

export default DetailPage;