const Cart = {
    render(){
        /*show cart*/
        return /*html*/`
            <div class="container flex flex-col justify-center w-[50%]">
                <div>
                    <p>Giỏ Hàng</p>
                </div>
                <div class="m-2 grid grid-cols-3 gap-4 bg-slate-100 p-4 rounded-lg col-span-3 block">
                    <div>
                        <img src="https://picsum.photos/200/200" alt="">
                    </div>
                    <div class = "col-span-2 ">
                        <p class ="text-[19px] font-mono">Samsung Galaxy S22-Đen</p>
                        <div class = "flex">
                            <p class="pr-5 text-[17px] antialiased">16.090.000 ₫</p>
                            <p>18.090.000 ₫</P>
                        </div>
                        <input type="number">
                        <div>
                            Ưu đãi Galaxy gift lên đến 1.700.000đ (VieON VIP HBO GO, Zing MP3, Phúc Long, Galaxy Play)
                        </div>
                    </div>
                </div>
                <div class="m-2 grid grid-cols-3 gap-4 bg-slate-100 p-4 rounded-lg col-span-3">
                    <div>
                        <img src="https://picsum.photos/200/200" alt="">
                    </div>
                    <div class = "col-span-2 ">
                        <p class ="text-[19px] font-mono">Samsung Galaxy S22-Đen</p>
                        <div class = "flex">
                            <p class="pr-5 text-[17px] antialiased">16.090.000 ₫</p>
                            <p>18.090.000 ₫</P>
                        </div>
                        <input type="number">
                        <div>
                            Ưu đãi Galaxy gift lên đến 1.700.000đ (VieON VIP HBO GO, Zing MP3, Phúc Long, Galaxy Play)
                        </div>
                    </div>
                </div>
                <div class= "py-4 w-[100%] text-center flex justify-between">
                    <p>Tính Tổng Tiền :</p>
                    <p>20.000.000</p>
                </div>
                <button class = "rounded-lg w-[100%] h-[60px] bg-[#D70018] text-white">mua hàng</button>
                <button class = "rounded-lg border-1 border-rose-600  mt-3 w-[100%] h-[60px] text-red">Thêm Sản phẩm khác</button>
            </div>
        `
    }
}

export default Cart