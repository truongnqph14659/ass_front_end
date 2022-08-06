import axios from "axios";
const NavbarHome = {

    render:async () => {    
        const { data } = await axios.get('http://localhost:8080/api/Category'); 
        
        return /* html */ `
            <div class="grid grid-cols-[250px,auto] gap-8">
                <ul class="menu-navber">
                ${data.map((item:any) => /* html */ `
                <li><a href="/category/${item._id}"><i class="fa-solid fa-mobile-button mr-[12px]"></i> ${item.name} </a></li>
        
            `).join("")}
                </ul>
                <div>
                    <img src="../../public/images/banner.png" style="width:100%; height=382px" alt="banner..." />
                </div>
            </div>
        `
    }
}
export default NavbarHome;