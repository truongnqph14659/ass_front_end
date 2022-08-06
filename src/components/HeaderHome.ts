const HeaderHome = {
    render: () => {
        let userAcc
        if (JSON.parse(localStorage.getItem('user') || "false") && JSON.parse(localStorage.getItem('user')|| "false").role == 0 ){
            const name = JSON.parse(localStorage.getItem('user')|| "false").name;
            userAcc = `
            <span>${name}</span>
            <i class="fa-solid fa-wheelchair cursor-pointer"></i>
          ` 
        }else{
            userAcc=`
             <a href="/signin">Đăng nhập</a><span>/</span><a href="/signup">Đăng ký</a>
            `
        }

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
                        <a href="Show">Giỏ hàng</a>
                    </li>
                    <li>
                        ${userAcc}
                    </li>
                </ul>
            </div>
        `
    }
}
export default HeaderHome;  