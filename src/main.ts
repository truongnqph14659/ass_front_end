import './style.css'
import Navigo from 'navigo';
import HomePage from './pages/Home'
import AdminPage from './pages/Admin';
import DetailPage from './pages/Detail';
import AdminListProductPage from './pages/AdminListProduct';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import ShowCart from './pages/showCart';
import Order from './pages/Order';
const router = new Navigo('/', {linksSelector: "a"})
type ComponentBase = {
  render: (id:number) => Promise<string> | string,
  afterRender?: (id:number) => void
}

const print =async (component: ComponentBase, id?:any) => {
  document.getElementById('app')!.innerHTML = await component.render(id)
  if(component.afterRender) {
    component.afterRender(id)
  }
}
// router.on("/admin", ()=>print(AdminPage), {
//   before(done, params) {
//       if (JSON.parse(localStorage.getItem('user') || "false") ) {
//           const role = JSON.parse(localStorage.getItem('user')|| "false").role;
//           if (role == 1) {
//               done();
//           } else {
//               document.location.href = "/"
//           }
//       } else {
//           document.location.href = "/"
//       }
//   }
// })
router.on({
  "/": async () => print(await HomePage),
  "/detail/:id": (data:any) => print(DetailPage,data.data.id),
  '/admin':()=> print(AdminPage),
  "/admin/productList": () => print(AdminListProductPage),
  '/signin':()=>print(Signin),
  '/signup':()=>print(Signup),
  '/Show':()=>print(ShowCart),
  '/order':()=>print(Order),

})
router.resolve()