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
import Category from './pages/Category';
import CreateCategory from './pages/CategoryAdd';
import editCategory from './pages/CategoryUpdate';
import AddProduct from './components/admin/AddProduct';
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
  "/admin/product/add": () => print(AddProduct),
  '/signin':()=>print(Signin),
  '/signup':()=>print(Signup),
  '/Show':()=>print(ShowCart),
  '/order':()=>print(Order),
  '/admin/category':()=>print(Category),
  '/admin/category/add':()=>print(CreateCategory),
  '/admin/category/:id':(data:any)=>print(editCategory,data.data.id),

})
router.resolve()