// import Swal from "sweetalert";
import swal from "sweetalert";
import ShowCart from "../pages/showCart";
import { rerender } from "../rerender/rerender";
import {
  addOrder,
  decreaseItemInCart,
  increaseItemInCart,
  remove,
} from "../utils/cart";
import { formatPrice } from "../utils/formatPrice";
import AddProduct from "./admin/AddProduct";

const Cart = {
  render() {
    const cart: any = localStorage.getItem("cart");
    const carts = JSON.parse(cart);
    let tong = 0;
    /*show cart*/
    return /*html*/ `
            <div class="container flex flex-col justify-center w-[50%]">
                <div>
                    <p>Giỏ Hàng</p>
                </div>
                ${carts
                  .map((item: any) => {
                    return /*html*/ `
                            <div class="m-2 grid grid-cols-3 gap-4 bg-slate-100 p-4 rounded-lg col-span-3 block relative">
                                <div>
                                    <img src="${
                                      item.image
                                    }" alt="" class="w-[200px] h-[200px]">
                                </div>
                                <div class = "col-span-2 ">
                                    <p class ="text-[19px] font-mono">${
                                      item.name
                                    }</p>
                                    <div class = "flex">
                                        <p class="pr-5 text-[17px] antialiased">${formatPrice(
                                          `${item.price}`
                                        )}₫</p>
                                        <p>18.090.000 ₫</P>
                                    </div>
                                    <button  data-id="${
                                      item._id
                                    }" class="btn decrease text-xl pr-2">-</button>
                                        <input type="text" class="w-[60px] text-center" value = "${
                                          item.quantity
                                        }">
                                    <button  data-id="${
                                      item._id
                                    }" class="btn increase text-xl pl-2">+</button>
                                    <p>${item._id}</p>
                                    <div>
                                        Ưu đãi Galaxy gift lên đến 1.700.000đ (VieON VIP HBO GO, Zing MP3, Phúc Long, Galaxy Play)
                                    </div>
                                </div>
                                <div class="btn remove absolute mr-[0%]" data-id="${
                                  item._id
                                }">
                                    <svg style="rigth: 0" class="h-5 w-5 text-red-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="18" y1="6" x2="6" y2="18" />  <line x1="6" y1="6" x2="18" y2="18" /></svg>
                                </div>
                            </div>
                            <div class = "hidden">
                                ${(tong +=
                                  Number(item.price) * Number(item.quantity))}
                            </div>
                        `;
                  })
                  .join("")}
                <div class= "py-4 w-[100%] text-center flex justify-between">
                    <p>Tính Tổng Tiền :</p>
                    <p>${formatPrice(`${tong}`)} VNĐ</p>
                </div>
                <button class = "btn sale rounded-lg w-[100%] h-[60px] bg-[#D70018] text-white">mua hàng</button>
                <button class = "rounded-lg border-1 border-rose-600  mt-3 w-[100%] h-[60px] text-red">Thêm Sản phẩm khác</button>
            </div>
        `;
  },
  afterRender() {
    const btns: any = document.querySelectorAll(".btn");
    console.log(btns);

    btns.forEach((btn: any) => {
      btn.addEventListener("click", () => {
        if (btn.classList.contains("increase")) {
          const id = btn.dataset.id;
          increaseItemInCart(id, () => {
            rerender("app", ShowCart);
          });
        } else if (btn.classList.contains("decrease")) {
          const id = btn.dataset.id;
          decreaseItemInCart(id, () => {
            rerender("app", ShowCart);
          });
        } else if (btn.classList.contains("remove")) {
          const id = btn.dataset.id;
          remove(id, () => {
            rerender("app", ShowCart);
          });
        } else if (btn.classList.contains("sale")) {
          const cart: any = localStorage.getItem("cart");
          const carts = JSON.parse(cart);
          let total = 0;
          carts.forEach((item: any) => {
            total += Number(item.price) * Number(item.quantity);
          });
          const a = Math.floor(Math.random() * 2000) + 1000;
          addOrder(a, total, () => {
            localStorage.setItem("cart", JSON.stringify([]));
            location.pathname = '/'
          });
        }
      });
    });
  },
};

export default Cart;
