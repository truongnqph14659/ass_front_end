const HeaderHome = {
    render: () => {
        return /* html */ `
            <div class="flex bg-[#d70018] justify-around items-center">
                <img class="w-[64px] p-2" src="../../public/images/logo.png" alt="" />
                <input class="h-[30px] w-[500px] pl-4 pr-20 rounded-md" type="text" placeholder="Tìm kiếm..."/>
                <ul class="menu-header">
                    <li><a href="#">Gọi mua hàng <br/>1800.2097</a></li>
                    <li>
                        <i class="fa-solid fa-location-dot"></i>
                        <a href="#">Cửa hàng <br/> của bạn</a>
                    </li>
                    <li>
                        <i class="fa-solid fa-truck-fast"></i>
                        <a href="#">Tra cứu <br/> đơn hàng</a>
                    </li>
                    <li>
                        <i class="fa-solid fa-cart-shopping"></i>
                        <a href="#">Giỏ hàng</a>
                    </li>
                    <li>
                        <a href="#">Đăng nhập</a><span>/</span><a href="#">Đăng ký</a>
                    </li>
                </ul>
            </div>
        `
    }
}
export default HeaderHome;  