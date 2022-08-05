import axios from "axios";

const DetailProduct = {
    render: async (id:any) => {
        const {data} = await axios.get(`http://localhost:8080/api/products/${id}`)
        console.log(data);
        return /* html */ `
            <div class="mt-4 mx-[10%]">
                <h1 class="text-xl">${data.name}</h1>
            </div>
            <div class="grid grid-cols-[450px,auto] gap-8 mt-6 mx-[15%]">
                <div>
                    <img src="../../public/images/iphone13.jpg" class="w-[400px]" alt="" />
                </div>
                <div class="p-4">
                    <p class="my-[10px] text-lg text-[red]"><b>${data.price}đ</b> <span class="text-sm text-[#999] pl-[8px]">24.990.000đ</span></p>
                    <p> Mô tả ngắn: Trước khi mua bất kỳ chiếc điện thoại nào, người dùng cũng sẽ quan tâm đến thiết kế sản phẩm trước. Với phiên bản A73, Samsung đã tạo nên một chiếc smartphone với vẻ ngoài mang đến cảm giác sang trọng và tinh tế.</p>
                    <button class="bg-[red] text-[white] px-[80px] py-[13px] rounded mt-[240px]">Mua ngay</button>
                    <a href="#" class="ml-3"><i class="fa-solid fa-cart-shopping border p-3 rounded mr-2"></i>Thêm Vào Giỏ Hàng</a>
                </div>
            </div>
        `
    }
}
export default DetailProduct