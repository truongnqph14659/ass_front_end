const NavbarHome = {
    render: () => {
        return /* html */ `
            <div class="grid grid-cols-[250px,auto] gap-8">
                <ul class="menu-navber">
                    <li><a href="#"><i class="fa-solid fa-mobile-button mr-[12px]"></i> Điện thoại <i class="fa-solid fa-chevron-right ml-[80px]"></i></a></li>
                    <li><a href="#"><i class="fa-solid fa-laptop mr-[5px]"></i> Laptop <i class="fa-solid fa-chevron-right ml-[102px]"></i></a></li>
                    <li><a href="#"><i class="fa-solid fa-tablet mr-[10px]"></i> Máy tính bảng <i class="fa-solid fa-chevron-right ml-[50px]"></i></a></li>
                    <li><a href="#"><i class="fa-solid fa-headphones mr-[10px]"></i> Âm thanh <i class="fa-solid fa-chevron-right ml-[80px]"></i></a></li>
                    <li><a href="#"><i class="fa-solid fa-house-user mr-[10px]"></i> Nhà thông minh <i class="fa-solid fa-chevron-right ml-[30px]"></i></a></li>
                </ul>
                <div>
                    <img src="../../public/images/banner.png" style="width=1048px; height=382px" alt="banner..." />
                </div>
            </div>
        `
    }
}
export default NavbarHome;