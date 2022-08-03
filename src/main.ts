import './style.css'
import Navigo from 'navigo';
import HomePage from './pages/Home'
import AdminPage from './pages/Admin';
const router = new Navigo('/', {linksSelector: "a"})
type ComponentBase = {
  render: (id:number) => Promise<string> | string,
  afterRender?: (id:number) => void
}

const print =async (component: ComponentBase, id?:any) => {
  document.getElementById('app')!.innerHTML =await component.render(id)
  if(component.afterRender) {
    component.afterRender(id)
  }
}

router.on({
  "/": () => print(HomePage),
  '/admin':()=>print(AdminPage),

})
router.resolve()