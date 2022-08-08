import axios from "axios";

let cart: any = [];
if (localStorage.getItem("cart")) {
  const carts: any = localStorage.getItem("cart");
  cart = JSON.parse(carts);
}

export const addToCart = (newProduct: any, next: any) => {
  const existProduct = cart.find(
    (product: any) => product._id === newProduct._id
  );
  if (!existProduct) {
    cart.push(newProduct);
    console.log("chưa có thêm số lượng");
  } else {
    existProduct.quantity++;
    console.log("đã có tăng số lượng");
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  console.log(cart);
  // next();
};
export const increaseItemInCart = (id: any, next: any) => {
  const carts: any = localStorage.getItem("cart");
  cart = JSON.parse(carts);
  cart.find((item: any) => item._id == id).quantity++;
  localStorage.setItem("cart", JSON.stringify(cart));
  next();
};
export const decreaseItemInCart = (id: any, next: any) => {
  const cartss: any = localStorage.getItem("cart");
  cart = JSON.parse(cartss);
  let carts: any = cart.find((item: any) => item._id == id);
  if (carts) {
    carts.quantity--;
    if (carts.quantity == 0) {
      const confirm = window.confirm("do you want delete?");
      if (confirm) {
        cart.filter((item: any) => item._id !== id);
      }
    }
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  next();
};
export const remove = (id: any, next: any) => {
  const confirm = window.confirm("do you want delete?");
  if (confirm) {
    // console.log(cart.filter((item:any)=>item._id !== id));
    const carts = cart.filter((item: any) => item._id !== id);
    localStorage.setItem("cart", JSON.stringify(carts));
    next();
  }
};

export const addOrder = async (order: any, total: any,next:any) => {
  console.log(order);
  const data = {
    name: `${order}`,
    total: total,
  };
  const dataOrder = await axios.post(`http://localhost:8080/api/Order`,data);
//   console.log(dataOrder.data._id);
  const id_order = dataOrder.data._id
  const cartss: any = localStorage.getItem("cart");
  cart = JSON.parse(cartss);
  console.log(cart);
  
  cart.forEach(async(item:any) => {
        const product = {
            quantity:item.quantity,
            product_id:item._id,
            order_id:id_order,
            price:item.price
        }
        const dataOrder = await axios.post(`http://localhost:8080/api/Orderdetail`,product);
  });

  if (dataOrder) {
    next()
  }
  
};
