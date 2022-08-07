import { sendHeader, errorShow } from './../../api/user';
import axios from "axios"
 const ListCategory = {
    async render(){
      
        const { data } = await axios.get('http://localhost:8080/api/Category'); 
        return /* html */ `
        <a href="/admin/category/add" class="btn btn-warning my-3" >Add Category</a>
        <table class="table table-tripped">
        <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th colspan="2" class ="text-center">Action</th>
                </tr>
        </thead>
        <tbody>
            ${data.map((item:any, index:any) => /* html */ `
                <tr>
                    <td>${index + 1}</td>
                    <td>${item.name}</td>
                    <td>
                        <button class="btn btn-danger btn-remove" data-id=${item._id}>Remove</button> <br>
                        </td>
                        <td>
                        <a href="/admin/category/${item._id}" class="btn btn-info btn-update">Update</a></td>
                </tr>
            `).join("")}
        </tbody>
    </table>
    `
},
afterRender(){
    const btns = document.querySelectorAll('.btn-remove')
    btns.forEach((btn:any) => {
        const id = btn.dataset.id;
        btn.addEventListener('click', async() => {
            if(btn.classList.contains('btn-remove')){
                const confirm = window.confirm('Are you sure remove?')
                if(confirm){
                    try {
                        await axios.delete(`http://localhost:8080/api/category/${id}`,sendHeader)
                        location.href='/admin/category'
                    } catch (error) {
                        errorShow(error)
                    }
                }
       
            }
        })
    })
}
}
 export default ListCategory;