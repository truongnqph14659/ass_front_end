import axios from "axios";

const PhoneHome = {
    render: async () => {
        const { data } =  await axios.get('http://localhost:8080/api/products')
        return /* html */ `
            <h1 class="mt-4 mx-[300px] text-xl">ĐIỆN THOẠI NỔI BẬT NHẤT</h1>
            <div class="grid grid-cols-6 gap-8 mx-[100px]">
                ${data.map((item, index) => /*html */ `
                    <div>
                        <img src="../../../public/images/iphone13.jpg" alt="iPhone 13 128GB | Chính hãng VN/A" />
                        <h2><a href="#">${item.name}</a></h2>
                        <p class="my-[10px] text-[red]"><b>${item.price}đ</b> <span class="text-sm text-[#999] pl-[8px]">24.990.000đ</span></p>
                        <p class="border rounded-lg bg-[#ccc] py-[3px] pl-[6px] mb-[6px]">Thu cũ lên đời - Trợ giá 1 triệu</p>
                        <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i> 16 đánh giá
                    </div>
                `).join('')}
            </div>
        `
    }
}
export default PhoneHome;