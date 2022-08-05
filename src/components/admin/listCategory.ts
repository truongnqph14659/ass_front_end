import axios from "axios"
 const ListCategory = {
    async render(){
      
        const { data } = await axios.get('http://localhost:8080/api/Category'); 
        return /* html */ `
        <table class="table table-tripped">
        <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th colspan="2" class ="text-center">Action</th>
                </tr>
        </thead>
        <tbody>
            ${data.map((item, index) => /* html */ `
                <tr>
                    <td>${index + 1}</td>
                    <td>${item.name}</td>
                    <td>
                        <button class="btn btn-danger btn-remove" data-id=${item._id}>Remove</button> <br>
                        </td>
                        <td>
                        <a href="/categoryProduct/${item._id}/edit" class="btn btn-info btn-update">Update</a></td>
                </tr>
            `).join("")}
        </tbody>
    </table>
    `
},
afterRender(){
    const btns = document.querySelectorAll('.btn-remove')
    console.log(btns);
    btns.forEach((btn) => {
        const id = btn.dataset.id;
        console.log(id);
        

        btn.addEventListener('click', async() => {
            if(btn.classList.contains('btn-remove')){
                const confirm = window.confirm('Are you sure remove?')
                if(confirm){
                    axios.delete(`http://localhost:8080/api/category/${id}`)
                }
                location.href='/admin/category'
            }
        })
    })
}
}
 export default ListCategory;