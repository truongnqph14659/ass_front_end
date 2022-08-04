import AdminHeader from "../components/admin/HeaderAdmin"
import ListOrder from "../components/admin/orderList"
import Sidebar from "../components/admin/SiderAdmin"

const Order = {
   async render(){
        return/*html*/`
        ${AdminHeader.render()}
        <div class="flex mt-4 divide-x">
            <div class="w-[250px] flex-none">
                ${Sidebar.render()}
            </div>
            <div class="grow px-4">
                ${await ListOrder.render()}
            </div>
        </div>
        `
    }
}

export default Order