import './style.css'
import Navigo from 'navigo'
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

})
router.resolve()